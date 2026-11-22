import type {
  ApplicationTrackerItem,
  CitizenProfile,
  EligibilityEvaluation,
  FamilyMember,
  IncomeRange,
  SchemeRecord,
} from '../types/scheme';

const INCOME_RANK: Record<Exclude<IncomeRange, ''>, number> = {
  'below-1l': 1,
  '1l-2.5l': 2,
  '2.5l-5l': 3,
  'above-5l': 4,
};

const RULE_INCOME_RANK: Record<'below-1l' | '1l-2.5l' | '2.5l-5l' | 'any', number> = {
  'below-1l': 1,
  '1l-2.5l': 2,
  '2.5l-5l': 3,
  any: 5,
};

export function evaluateSchemeForProfile(
  scheme: SchemeRecord,
  profile: CitizenProfile
): EligibilityEvaluation {
  if (scheme.verificationStatus === 'Verification Required') {
    const baseReasons: string[] = [
      'Current program guidelines require official portal verification before applying.',
    ];
    if (
      profile.isCompleted &&
      scheme.matchRules.requiresUnemployedOrYouth &&
      (profile.employmentStatus === 'Unemployed / Seeking Work' ||
        profile.wantsSkillOrApprenticeship ||
        profile.ageRange === '18–25')
    ) {
      baseReasons.unshift('Matches your youth/employment profile — verify active circular.');
    }
    return {
      status: 'verification-required',
      label: 'Verification Required',
      reasons: baseReasons,
      score: 45,
    };
  }

  if (!profile.isCompleted) {
    return {
      status: 'not-evaluated',
      label: 'Missing Profile Info',
      reasons: ['Fill the optional Household Profile Wizard to check personalized eligibility.'],
      score: 0,
    };
  }

  const rules = scheme.matchRules;
  const reasons: string[] = [];
  let matchedCriteria = 0;
  let totalSpecificCriteria = 0;

  // Income check
  const userIncomeRank = profile.incomeRange ? INCOME_RANK[profile.incomeRange] : 2;
  const maxAllowed = rules.maxIncomeBracket ? RULE_INCOME_RANK[rules.maxIncomeBracket] : 5;
  const incomeFits = userIncomeRank <= maxAllowed;

  if (rules.requiresStudent) {
    totalSpecificCriteria += 1;
    if (profile.isStudent || profile.employmentStatus === 'Student') {
      matchedCriteria += 1;
      reasons.push('Student in household');
    }
  }

  if (rules.requiresFarmer) {
    totalSpecificCriteria += 1;
    if (
      profile.hasFarmerInFamily ||
      profile.employmentStatus === 'Farmer / Agricultural Worker'
    ) {
      matchedCriteria += 1;
      reasons.push(
        profile.farmerLandType
          ? `Farmer in family (${profile.farmerLandType})`
          : 'Farmer / agricultural worker in household'
      );
    }
  }

  if (rules.requiresWomanInHousehold) {
    totalSpecificCriteria += 1;
    if (profile.hasWomenInHousehold || profile.employmentStatus === 'Homemaker') {
      matchedCriteria += 1;
      reasons.push('Eligible women/girls in household');
    }
  }

  if (rules.requiresSeniorCitizen) {
    totalSpecificCriteria += 1;
    if (
      profile.hasSeniorCitizen ||
      profile.hasSenior70Plus ||
      profile.ageRange === '60–69' ||
      profile.ageRange === '70+' ||
      profile.employmentStatus === 'Retired / Senior'
    ) {
      matchedCriteria += 1;
      reasons.push('Senior citizen (60+) in household');
    }
  }

  if (rules.requiresWidow) {
    totalSpecificCriteria += 1;
    if (profile.hasWidowInFamily) {
      matchedCriteria += 1;
      reasons.push('Widow support indicator selected');
    }
  }

  if (rules.requiresDisability) {
    totalSpecificCriteria += 1;
    if (profile.hasDisabilityInFamily) {
      matchedCriteria += 1;
      reasons.push('Person with disability in household');
    }
  }

  if (rules.requiresUnemployedOrYouth) {
    totalSpecificCriteria += 1;
    if (
      profile.employmentStatus === 'Unemployed / Seeking Work' ||
      profile.wantsSkillOrApprenticeship ||
      profile.ageRange === '18–25'
    ) {
      matchedCriteria += 1;
      reasons.push('Youth / skill development or job-seeker match');
    }
  }

  if (rules.requiresWorkerOrUnorganised) {
    totalSpecificCriteria += 1;
    if (
      profile.employmentStatus === 'Unorganised / Daily-Wage Worker' ||
      profile.employmentStatus === 'Construction Worker'
    ) {
      matchedCriteria += 1;
      reasons.push(`Worker sector match (${profile.employmentStatus})`);
    }
  }

  if (rules.requiresBusinessInterest) {
    totalSpecificCriteria += 1;
    if (
      profile.wantsBusinessLoan ||
      profile.employmentStatus === 'Self-Employed / Small Business'
    ) {
      matchedCriteria += 1;
      reasons.push('Self-employment or micro-enterprise interest');
    }
  }

  // Housing & Food specific household need signals
  if (scheme.categoryId === 'housing') {
    totalSpecificCriteria += 1;
    if (profile.needsHousingSupport) {
      matchedCriteria += 1;
      reasons.push('Household housing support need indicated');
    }
  }

  if (scheme.categoryId === 'food' && profile.needsRationOrFoodSupport) {
    reasons.push('Food & Digital Ration Card support selected');
  }

  // Universal household schemes (Healthcare, Food & Ration)
  if (rules.universalHousehold) {
    if (scheme.id === 'ayushman-bharat-pmjay' && profile.hasSenior70Plus) {
      reasons.unshift('Senior citizen aged 70+ qualifies universally regardless of income');
      return {
        status: 'likely-eligible',
        label: 'Likely Eligible',
        reasons,
        score: 96,
      };
    }

    if (incomeFits) {
      reasons.unshift('West Bengal resident household benefit');
      return {
        status: 'likely-eligible',
        label: 'Likely Eligible',
        reasons,
        score: 88,
      };
    }

    return {
      status: 'potential-match',
      label: 'Needs Verification',
      reasons: ['Available to eligible West Bengal households — confirm card category rules.'],
      score: 62,
    };
  }

  // Special check for Kanyashree (requires both student + girl/woman cue)
  if (scheme.id === 'kanyashree') {
    const hasGirlCue =
      profile.isStudent &&
      profile.hasWomenInHousehold &&
      (profile.womenAgeBracket === '13–19 (Unmarried Girl)' ||
        profile.womenAgeBracket === 'Multiple Age Groups' ||
        profile.ageRange === 'Under 18' ||
        profile.ageRange === '18–25');
    if (hasGirlCue) {
      return {
        status: 'likely-eligible',
        label: 'Likely Eligible',
        reasons: ['Student + unmarried girl/young woman in West Bengal household'],
        score: 92,
      };
    }
  }

  if (totalSpecificCriteria > 0 && matchedCriteria === totalSpecificCriteria) {
    if (incomeFits) {
      if (rules.ruralPreferred && profile.residenceType === 'Rural') {
        reasons.push('Rural household priority match');
      }
      if (scheme.id === 'svmcm' && profile.studentMerit60Plus) {
        reasons.push('Meets 60%+ academic merit indicator');
      }
      if (scheme.verificationStatus === 'Transitioning / Verify Guidelines') {
        reasons.push('Verify latest transition circular on official portal');
      }
      return {
        status: 'likely-eligible',
        label: 'Likely Eligible',
        reasons,
        score: Math.min(98, 82 + reasons.length * 4),
      };
    }

    return {
      status: 'potential-match',
      label: 'Needs Verification',
      reasons: [...reasons, 'Confirm household income ceiling on official portal'],
      score: 64,
    };
  }

  if (matchedCriteria > 0) {
    return {
      status: 'potential-match',
      label: 'Needs Verification',
      reasons,
      score: 58,
    };
  }

  return {
    status: 'does-not-match',
    label: 'Does Not Match',
    reasons: ['Does not match currently selected household indicators.'],
    score: 15,
  };
}

export function getSchemesForFamilyMember(
  schemes: SchemeRecord[],
  member: FamilyMember,
  incomeRange: IncomeRange = '1l-2.5l',
  residenceType: 'Rural' | 'Urban' = 'Rural'
): Array<{ scheme: SchemeRecord; matchReason: string }> {
  const userIncomeRank = incomeRange ? INCOME_RANK[incomeRange] : 2;
  const results: Array<{ scheme: SchemeRecord; matchReason: string; weight: number }> = [];

  for (const scheme of schemes) {
    const overlap = scheme.matchRules.familyRoles.filter((role) =>
      member.roles.includes(role)
    );
    if (overlap.length === 0) continue;

    // Prevent showing rural-only housing to urban household head
    if (scheme.id === 'banglar-bari' && residenceType === 'Urban') continue;
    // Prevent showing Kanyashree to male student if girl-student role is not present
    if (scheme.id === 'kanyashree' && !member.roles.includes('girl-student')) continue;
    // Prevent showing non-construction worker schemes exclusively unless worker
    if (
      scheme.id === 'wb-construction-workers' &&
      !member.roles.includes('construction-worker')
    ) {
      continue;
    }

    const maxAllowed = scheme.matchRules.maxIncomeBracket
      ? RULE_INCOME_RANK[scheme.matchRules.maxIncomeBracket]
      : 5;
    if (
      userIncomeRank > maxAllowed &&
      !(scheme.id === 'ayushman-bharat-pmjay' && member.roles.includes('senior-70-plus'))
    ) {
      continue;
    }

    let reason = 'Matches household member role';
    if (member.roles.includes('senior-70-plus') && scheme.id === 'ayushman-bharat-pmjay') {
      reason = 'Universal ₹5L health cover for senior citizens aged 70+';
    } else if (overlap.includes('girl-student') && scheme.categoryId === 'education') {
      reason = 'Matched for girl student education & scholarship support';
    } else if (overlap.includes('student') && scheme.categoryId === 'education') {
      reason = 'Matched for student academic scholarship';
    } else if (overlap.includes('farmer') && scheme.categoryId === 'farmers') {
      reason = 'Matched for cultivating farmer / agricultural support';
    } else if (overlap.includes('widow') && scheme.categoryId === 'widow') {
      reason = 'Matched for dedicated widow financial pension';
    } else if (overlap.includes('senior-citizen') && scheme.categoryId === 'pension') {
      reason = 'Matched for senior citizen (60+) monthly pension';
    } else if (overlap.includes('disability') && scheme.categoryId === 'disability') {
      reason = 'Matched for benchmark disability pension & assistive support';
    } else if (overlap.includes('woman') && scheme.categoryId === 'women') {
      reason = 'Matched for women’s direct financial assistance';
    } else if (
      (overlap.includes('worker') || overlap.includes('construction-worker')) &&
      scheme.categoryId === 'workers'
    ) {
      reason = 'Matched for unorganised / construction worker social security';
    } else if (overlap.includes('youth-jobseeker') && scheme.categoryId === 'employment') {
      reason = 'Matched for youth skill training & employment support';
    } else if (overlap.includes('entrepreneur') && scheme.categoryId === 'business') {
      reason = 'Matched for self-employment & collateral-free business credit';
    } else if (scheme.categoryId === 'healthcare') {
      reason = 'Household-wide cashless hospitalisation protection';
    } else if (scheme.categoryId === 'housing') {
      reason = 'Eligible household pucca housing grant check';
    } else if (scheme.categoryId === 'food') {
      reason = 'Household food grain & Digital Ration Card entitlement';
    }

    // Prioritize primary role-aligned categories higher than universal ones
    const isPrimaryRoleMatch = !scheme.matchRules.universalHousehold || member.roles.includes('senior-70-plus');
    const weight = isPrimaryRoleMatch ? 10 + overlap.length : 5;

    results.push({ scheme, matchReason: reason, weight });
  }

  return results
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 6)
    .map(({ scheme, matchReason }) => ({ scheme, matchReason }));
}

export function aggregateRequiredDocuments(
  schemes: SchemeRecord[],
  targetSchemeIds: string[]
): Array<{ documentName: string; requiredBySchemes: string[] }> {
  const map = new Map<string, Set<string>>();

  const selectedSchemes = schemes.filter((s) => targetSchemeIds.includes(s.id));
  for (const scheme of selectedSchemes) {
    for (const doc of scheme.requiredDocuments) {
      const normalized = doc.trim();
      if (!map.has(normalized)) {
        map.set(normalized, new Set());
      }
      map.get(normalized)!.add(scheme.name);
    }
  }

  return Array.from(map.entries())
    .map(([documentName, schemeSet]) => ({
      documentName,
      requiredBySchemes: Array.from(schemeSet),
    }))
    .sort((a, b) => b.requiredBySchemes.length - a.requiredBySchemes.length);
}

export function getRecommendedNextSteps(params: {
  profile: CitizenProfile;
  savedCount: number;
  applications: ApplicationTrackerItem[];
  preparedDocsCount: number;
  totalDocsCount: number;
}): Array<{ id: string; title: string; detail: string; actionLabel: string; targetView: 'profile' | 'explorer' | 'family' | 'dashboard' }> {
  const steps: Array<{
    id: string;
    title: string;
    detail: string;
    actionLabel: string;
    targetView: 'profile' | 'explorer' | 'family' | 'dashboard';
  }> = [];

  if (!params.profile.isCompleted) {
    steps.push({
      id: 'step-profile',
      title: 'Complete your optional Household Profile',
      detail:
        'Answer 4 quick non-sensitive steps (no Aadhaar or bank details required) to unlock personalized benefit matches across all 12 categories.',
      actionLabel: 'Start Profile Wizard',
      targetView: 'profile',
    });
  }

  if (params.savedCount === 0) {
    steps.push({
      id: 'step-save',
      title: 'Bookmark schemes across categories',
      detail:
        'Save relevant healthcare, pension, women, farmer, housing, or education schemes to build your household document checklist automatically.',
      actionLabel: 'Open Scheme Explorer',
      targetView: 'explorer',
    });
  }

  if (params.totalDocsCount > 0 && params.preparedDocsCount < params.totalDocsCount) {
    steps.push({
      id: 'step-docs',
      title: `Prepare remaining supporting documents (${params.preparedDocsCount}/${params.totalDocsCount} ready)`,
      detail:
        'Keep domicile, income, digital ration card, and bank DBT seeding ready before visiting official .gov.in portals or Duare Sarkar camps.',
      actionLabel: 'Review Document Checklist',
      targetView: 'dashboard',
    });
  }

  if (params.applications.length === 0 && params.savedCount > 0) {
    steps.push({
      id: 'step-track',
      title: 'Move a saved scheme into Applications in Progress',
      detail:
        'Track your preparation stage and follow official portal steps for your top household benefit.',
      actionLabel: 'Review Saved Schemes',
      targetView: 'dashboard',
    });
  }

  steps.push({
    id: 'step-family',
    title: 'Check benefits for parents, grandparents, and women in your home',
    detail:
      'Many families miss pensions, health cards, or farmer assistance while focusing only on scholarships. Map every household member in Family Benefits.',
    actionLabel: 'Open Family Benefits',
    targetView: 'family',
  });

  return steps.slice(0, 4);
}
