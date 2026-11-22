import { Database, Globe, Lock, RefreshCw, RotateCcw, Sparkles, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useSchemes } from '../context/SchemeContext';

export function SettingsView() {
  const {
    language,
    setLanguage,
    profile,
    loadSyntheticDemoProfile,
    clearProfile,
    resetAllLocalData,
    savedSchemeIds,
    applications,
    customFamilyMembers,
    dbStatus,
    refreshDbStatus,
  } = useSchemes();

  const [checkingDb, setCheckingDb] = useState(false);

  const handleCheckConnection = async () => {
    setCheckingDb(true);
    await refreshDbStatus();
    setCheckingDb(false);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-wide text-white uppercase">
          WORKSPACE SETTINGS
        </h1>
        <p className="text-xs text-[#A3A3A3] mt-1">
          Manage display language, Supabase cloud database sync, synthetic demo presets, and local
          workspace data.
        </p>
      </div>

      {/* Supabase Cloud Database Sync */}
      <section className="bg-[#1D1D1D] border border-[#303030] rounded-2xl p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[#B6FF50]" aria-hidden="true" />
            <h2 className="font-display text-base font-bold tracking-wider text-white uppercase">
              Supabase Cloud Storage
            </h2>
          </div>

          <button
            type="button"
            onClick={handleCheckConnection}
            disabled={checkingDb}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#252525] border border-[#353535] hover:border-[#B6FF50]/60 text-xs font-medium text-white disabled:opacity-50 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${checkingDb ? 'animate-spin' : ''}`} aria-hidden="true" />
            <span>{checkingDb ? 'Checking...' : 'Check Sync'}</span>
          </button>
        </div>

        <div className="bg-[#252525] border border-[#353535] rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <span
              className={`w-2 h-2 rounded-full ${
                dbStatus.tablesReady ? 'bg-[#B6FF50]' : 'bg-[#FF9D2E]'
              }`}
            />
            <span className={dbStatus.tablesReady ? 'text-[#B6FF50]' : 'text-[#FF9D2E]'}>
              {dbStatus.tablesReady
                ? 'Connected & Syncing to Supabase'
                : dbStatus.configured
                ? 'Configured — Awaiting SQL Table Setup'
                : 'Local Fallback Mode (Configure Secrets to Sync)'}
            </span>
          </div>
          <p className="text-xs text-[#A3A3A3] leading-relaxed">{dbStatus.message}</p>
        </div>

        <p className="text-[11px] text-[#A3A3A3] leading-relaxed">
          All non-sensitive form entries (Household Profile Wizard, custom family members, saved
          schemes, application stages, and document checklist items) sync automatically through
          validated server routes when <span className="font-mono text-white">SUPABASE_URL</span>{' '}
          and <span className="font-mono text-white">SUPABASE_PUBLISHABLE_KEY</span> are set in
          Secrets and <span className="font-mono text-white">supabase/schema.sql</span> has been
          run in your Supabase SQL Editor.
        </p>
      </section>

      {/* Language Preference */}
      <section className="bg-[#1D1D1D] border border-[#303030] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#B6FF50]" aria-hidden="true" />
          <h2 className="font-display text-base font-bold tracking-wider text-white uppercase">
            Interface Language
          </h2>
        </div>
        <p className="text-xs text-[#A3A3A3]">
          Switch primary navigation and scheme card title emphasis between English and Bengali
          (বাংলা).
        </p>
        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
              language === 'en'
                ? 'bg-[#B6FF50] text-[#050505] border-[#B6FF50]'
                : 'bg-[#252525] text-[#D4D4D4] border-[#353535] hover:text-white'
            }`}
          >
            English (EN) + Bengali Subtitles
          </button>
          <button
            type="button"
            onClick={() => setLanguage('bn')}
            className={`px-4 py-2 rounded-full text-xs font-semibold font-bengali border transition-colors ${
              language === 'bn'
                ? 'bg-[#B6FF50] text-[#050505] border-[#B6FF50]'
                : 'bg-[#252525] text-[#D4D4D4] border-[#353535] hover:text-white'
            }`}
          >
            বাংলা শিরোনাম (Bengali Primary)
          </button>
        </div>
      </section>

      {/* Demo & Profile Management */}
      <section className="bg-[#1D1D1D] border border-[#303030] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF9D2E]" aria-hidden="true" />
          <h2 className="font-display text-base font-bold tracking-wider text-white uppercase">
            Profile &amp; Demo Controls
          </h2>
        </div>

        <p className="text-xs text-[#A3A3A3]">
          Current status:{' '}
          <span className="text-white font-medium">
            {profile.isCompleted
              ? profile.isSyntheticDemo
                ? 'Synthetic Demo Household Active'
                : `Personal Profile (${profile.district || 'West Bengal'})`
              : 'No Profile Completed'}
          </span>
        </p>

        <div className="flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={loadSyntheticDemoProfile}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#252525] border border-[#FF9D2E]/50 text-xs font-medium text-[#FF9D2E] hover:bg-[#2F2F2F] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Load Synthetic Demo Profile</span>
          </button>

          <button
            type="button"
            onClick={clearProfile}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#252525] border border-[#353535] text-xs font-medium text-white hover:border-[#4A4A4A] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clear Household Profile</span>
          </button>
        </div>
      </section>

      {/* Local Storage Transparency & Reset */}
      <section className="bg-[#1D1D1D] border border-[#303030] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Lock className="w-4 h-4 text-[#B6FF50]" aria-hidden="true" />
          <h2 className="font-display text-base font-bold tracking-wider text-white uppercase">
            Local Storage &amp; Privacy
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-[#252525] border border-[#353535] rounded-xl p-3">
            <p className="font-mono text-xl font-bold text-white tabular-nums">
              {savedSchemeIds.length}
            </p>
            <p className="text-[11px] text-[#A3A3A3]">Saved Schemes</p>
          </div>
          <div className="bg-[#252525] border border-[#353535] rounded-xl p-3">
            <p className="font-mono text-xl font-bold text-white tabular-nums">
              {applications.length}
            </p>
            <p className="text-[11px] text-[#A3A3A3]">Tracked Apps</p>
          </div>
          <div className="bg-[#252525] border border-[#353535] rounded-xl p-3">
            <p className="font-mono text-xl font-bold text-white tabular-nums">
              {customFamilyMembers.length}
            </p>
            <p className="text-[11px] text-[#A3A3A3]">Custom Members</p>
          </div>
        </div>

        <p className="text-xs text-[#A3A3A3] leading-relaxed">
          SchemeSaathi never stores Aadhaar numbers, bank account details, OTPs, or scanned IDs.
          Local browser storage keeps your workspace instant even when offline.
        </p>

        <button
          type="button"
          onClick={resetAllLocalData}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#252525] border border-[#E06C75]/45 text-xs font-medium text-[#E06C75] hover:bg-[#2F2022] transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Reset All Local Workspace Data</span>
        </button>
      </section>
    </div>
  );
}
