import React from 'react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  Copy, 
  Check, 
  Cloud, 
  Boxes, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  ExternalLink,
  Sparkles,
  RotateCw
} from 'lucide-react';
import { SANA_HODAIE_DATA } from '../data.js';

export const BusinessCardFront = ({
  onFlip,
  copiedField,
  onCopy,
}) => {
  const data = SANA_HODAIE_DATA;

  const getSpecialtyIcon = (name) => {
    switch (name) {
      case 'Cloud':
        return <Cloud className="w-3.5 h-3.5 text-sky-400" />;
      case 'Boxes':
        return <Boxes className="w-3.5 h-3.5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-3.5 h-3.5 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-sky-300" />;
    }
  };

  return (
    <div
      id="business-card-front"
      className="relative w-full h-full min-h-[520px] sm:min-h-[540px] rounded-[32px] p-6 sm:p-9 flex flex-col justify-between overflow-hidden glass-card-crystal select-text"
    >
      {/* Delicate geometric background mesh lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#6366f1" strokeWidth="0.85" strokeDasharray="3 3">
          <line x1="15%" y1="20%" x2="45%" y2="10%" />
          <line x1="45%" y1="10%" x2="75%" y2="30%" />
          <line x1="75%" y1="30%" x2="90%" y2="60%" />
          <line x1="90%" y1="60%" x2="60%" y2="85%" />
          <line x1="60%" y1="85%" x2="25%" y2="80%" />
          <line x1="25%" y1="80%" x2="15%" y2="20%" />
          <line x1="15%" y1="20%" x2="60%" y2="85%" />
          <line x1="45%" y1="10%" x2="25%" y2="80%" />
        </g>
        <circle cx="45%" cy="10%" r="2.5" fill="#f59e0b" />
        <circle cx="75%" cy="30%" r="2.5" fill="#0ea5e9" />
        <circle cx="25%" cy="80%" r="2.5" fill="#10b981" />
      </svg>

      {/* Cheerful luminous corner glows */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-amber-300/30 via-rose-300/20 to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-sky-400/30 via-teal-300/20 to-transparent pointer-events-none rounded-full blur-3xl" />

      {/* Top Bar: Profile Title Header & Curved Pill Emblem tab */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-900/10">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-vazir drop-shadow-sm">
              {data.nameFa}
            </h1>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-800 font-latin tracking-wide">
              {data.nameEn}
            </span>
          </div>
          
          {/* Job Title field explicitly under name */}
          <div className="flex items-center gap-1.5 mt-1.5 text-sky-700 font-semibold text-sm sm:text-base">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{data.jobTitleFa}</span>
          </div>
        </div>

        {/* Distinctive Curved Pill Tab with Organization / Cloud badge */}
        <div className="flex items-center gap-2 self-end sm:self-auto px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md">
          <div className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
          <span className="text-xs text-slate-700 font-latin font-semibold tracking-wide">
            Cloud Solutions & DevOps
          </span>
        </div>
      </div>

      {/* Middle Section: Cloud Specialties Chips */}
      <div className="relative z-10 my-4">
        <div className="text-[11px] uppercase tracking-wider text-slate-600 mb-2 font-latin font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          حوزه‌های تخصصی و رایانش ابری (Cloud Domains)
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {data.specialties.slice(0, 4).map((spec) => (
            <div
              key={spec.id}
              className="group relative flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/60 hover:bg-white/90 border border-white/80 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-100 group-hover:scale-110 transition-transform shadow-xs">
                {getSpecialtyIcon(spec.iconName)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-slate-800 truncate font-vazir group-hover:text-indigo-950">
                  {spec.titleFa}
                </p>
                <p className="text-[10px] text-slate-500 truncate font-latin font-medium">
                  {spec.titleEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section: Contact Information List */}
      <div className="relative z-10 flex flex-col gap-2.5 pt-3 border-t border-slate-900/10">
        {/* Instagram Row */}
        <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/50 hover:bg-white/80 border border-white/80 shadow-xs transition-all">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-tr from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20 shrink-0">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 font-medium">اینستاگرام</p>
              <a
                href={data.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs sm:text-sm font-bold text-slate-800 hover:text-pink-600 transition-colors font-latin tracking-wide truncate flex items-center gap-1 group"
                dir="ltr"
              >
                <span>@{data.instagram}</span>
                <ExternalLink className="w-3.5 h-3.5 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <button
            onClick={() => onCopy(data.instagram, 'اینستاگرام')}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-white/80 transition-colors cursor-pointer"
            title="کپی آیدی اینستاگرام"
            type="button"
          >
            {copiedField === 'اینستاگرام' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Email Row */}
        <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/50 hover:bg-white/80 border border-white/80 shadow-xs transition-all">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-tr from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20 shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-slate-500 font-medium">پست الکترونیک (ایمیل)</p>
              <a
                href={`mailto:${data.email}`}
                className="text-xs sm:text-sm font-bold text-slate-800 hover:text-sky-600 transition-colors font-latin tracking-wide truncate block"
                dir="ltr"
              >
                {data.email}
              </a>
            </div>
          </div>

          <button
            onClick={() => onCopy(data.email, 'ایمیل')}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-white/80 transition-colors cursor-pointer"
            title="کپی آدرس ایمیل"
            type="button"
          >
            {copiedField === 'ایمیل' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Phone Row (Direct Contact at bottom) */}
        <div className="flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-white/60 border border-emerald-400/40 hover:border-emerald-500/60 shadow-sm transition-all">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20 shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-emerald-800 font-bold">شماره تماس مستقیم</p>
              <a
                href={`tel:${data.phone}`}
                className="text-sm sm:text-base font-black text-slate-900 hover:text-emerald-700 transition-colors font-latin tracking-wider block"
                dir="ltr"
              >
                {data.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={`tel:${data.phone}`}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs transition-all shadow-md shadow-emerald-600/20 font-vazir"
            >
              تماس مستقیم
            </a>
            <button
              onClick={() => onCopy(data.phone, 'شماره تماس')}
              className="p-2 rounded-xl text-emerald-800 hover:text-slate-900 hover:bg-emerald-500/20 transition-colors cursor-pointer"
              title="کپی شماره تماس"
              type="button"
            >
              {copiedField === 'شماره تماس' ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Flip Card Hint Button at bottom edge */}
      <div className="relative z-10 pt-3 flex items-center justify-between text-slate-500 text-xs">
        <span className="text-[11px] text-slate-500 font-latin font-medium">
          Digital Business Card • Sana Hodaie
        </span>

        <button
          onClick={onFlip}
          type="button"
          className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 hover:bg-white border border-slate-200 text-slate-700 hover:text-indigo-700 transition-all text-xs cursor-pointer shadow-xs"
        >
          <RotateCw className="w-3.5 h-3.5 text-indigo-500 group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-semibold">چرخش به پشت کارت</span>
        </button>
      </div>
    </div>
  );
};
