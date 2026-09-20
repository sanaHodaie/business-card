import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const Toast = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-none">
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white text-slate-800 shadow-xl shadow-slate-900/10 text-xs font-vazir font-bold">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>{message}</span>
        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
      </div>
    </div>
  );
};
