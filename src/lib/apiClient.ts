import type {
  ApplicationTrackerItem,
  CitizenProfile,
  FamilyMember,
} from '../types/scheme';

export interface SyncStatusResponse {
  configured: boolean;
  connected: boolean;
  tablesReady: boolean;
  message: string;
}

export interface RemoteWorkspacePayload {
  profile: CitizenProfile | null;
  savedSchemeIds: string[];
  applications: ApplicationTrackerItem[];
  checkedDocuments: Record<string, boolean>;
  customFamilyMembers: FamilyMember[];
}

const SESSION_KEY = 'schemesaathi_client_session_v1';

export function getOrCreateClientSessionId(): string {
  try {
    const existing = window.localStorage.getItem(SESSION_KEY);
    if (existing && existing.length >= 16) {
      return existing;
    }
    const generated =
      typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
        ? `ss_${crypto.randomUUID()}`
        : `ss_${Date.now()}_${Math.random().toString(36).slice(2, 14)}`;
    window.localStorage.setItem(SESSION_KEY, generated);
    return generated;
  } catch {
    return `ss_fallback_${Date.now()}_session`;
  }
}

async function safeJsonFetch<T>(url: string, init?: RequestInit): Promise<T | null> {
  try {
    const res = await globalThis.fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function fetchSupabaseHealth(): Promise<SyncStatusResponse> {
  const result = await safeJsonFetch<SyncStatusResponse>('/api/db/health');
  return (
    result ?? {
      configured: false,
      connected: false,
      tablesReady: false,
      message: 'Backend sync service unavailable; using local browser storage.',
    }
  );
}

export async function fetchRemoteWorkspace(
  sessionId: string
): Promise<RemoteWorkspacePayload | null> {
  return safeJsonFetch<RemoteWorkspacePayload>(
    `/api/db/workspace?sessionId=${encodeURIComponent(sessionId)}`
  );
}

export async function syncProfileToSupabase(
  sessionId: string,
  profile: CitizenProfile,
  matchedSchemeIds: string[]
): Promise<{ synced: boolean; error?: string }> {
  const res = await safeJsonFetch<{ synced: boolean; error?: string }>('/api/db/profile', {
    method: 'POST',
    body: JSON.stringify({ sessionId, profile, matchedSchemeIds }),
  });
  return res ?? { synced: false, error: 'Network unavailable' };
}

export async function syncBookmarkToSupabase(
  sessionId: string,
  payload: {
    schemeId: string;
    isSaved: boolean;
    applicationStage?: string | null;
    note?: string;
  }
): Promise<{ synced: boolean }> {
  const res = await safeJsonFetch<{ synced: boolean }>('/api/db/bookmark', {
    method: 'POST',
    body: JSON.stringify({ sessionId, ...payload }),
  });
  return res ?? { synced: false };
}

export async function syncDocumentToSupabase(
  sessionId: string,
  documentName: string,
  isPrepared: boolean
): Promise<{ synced: boolean }> {
  const res = await safeJsonFetch<{ synced: boolean }>('/api/db/document', {
    method: 'POST',
    body: JSON.stringify({ sessionId, documentName, isPrepared }),
  });
  return res ?? { synced: false };
}

export async function syncFamilyMemberToSupabase(
  sessionId: string,
  member: FamilyMember
): Promise<{ synced: boolean }> {
  const res = await safeJsonFetch<{ synced: boolean }>('/api/db/family-member', {
    method: 'POST',
    body: JSON.stringify({ sessionId, member }),
  });
  return res ?? { synced: false };
}

export async function deleteFamilyMemberFromSupabase(
  sessionId: string,
  localMemberId: string
): Promise<{ synced: boolean }> {
  const res = await safeJsonFetch<{ synced: boolean }>(
    `/api/db/family-member?sessionId=${encodeURIComponent(sessionId)}&localMemberId=${encodeURIComponent(localMemberId)}`,
    { method: 'DELETE' }
  );
  return res ?? { synced: false };
}
