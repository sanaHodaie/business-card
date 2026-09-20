import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { 
  RotateCcw, 
  Download, 
  Share2, 
  Terminal, 
  Sparkles,
  QrCode as QrCodeIcon,
  Check,
  Copy
} from 'lucide-react';
import { SANA_HODAIE_DATA } from '../data.js';
import { downloadVCardFile, generateVCardString } from '../utils/vcard.js';

export const BusinessCardBack = ({
  onFlip,
  onCopy,
  copiedField,
}) => {
  const data = SANA_HODAIE_DATA;
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    // Generate vCard QR Code for instant phone camera scanning
    const vcardStr = generateVCardString();
    QRCode.toDataURL(vcardStr, {
      width: 240,
      margin: 1.5,
      color: {
        dark: '#070b14',
        light: '#f8fafc',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('QR code generation error:', err));
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${data.nameFa} - ${data.jobTitleFa}`,
          text: `کارت ویزیت دیجیتال ثنا هدائی، معمار ارشد رایانش ابری. تلفن: ${data.phone} - ایمیل: ${data.email}`,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      onCopy(window.location.href, 'لینک کارت ویزیت');
    }
  };

  return (
    <div
      id="business-card-back"
      className="relative w-full h-full min-h-[520px] sm:min-h-[540px] max-h-[85vh] sm:max-h-none rounded-[32px] p-5 sm:p-9 flex flex-col justify-between overflow-hidden glass-card-crystal select-text"
    >
      {/* Background network accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-sky-400/25 via-indigo-300/15 to-transparent pointer-events-none rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-amber-400/25 via-pink-300/15 to-transparent pointer-events-none rounded-full blur-3xl" />

      {/* Top Header of the Back: Title, Tagline & Flip Button (Fixed at top) */}
      <div className="relative z-10 flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-900/10 shrink-0">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 font-vazir">
            جزئیات مهارت‌ها و مشخصات فنی
          </h2>
          <p className="text-[11px] sm:text-xs text-sky-700 font-latin font-semibold">
            Cloud Solutions Architecture & DevOps Engineering
          </p>
        </div>

        <button
          onClick={onFlip}
          type="button"
          className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-indigo-700 transition-all cursor-pointer shadow-xs group shrink-0"
          title="بازگشت به روی کارت"
        >
          <RotateCcw className="w-3.5 h-3.5 text-sky-600 group-hover:-rotate-90 transition-transform duration-300" />
          <span>روی کارت</span>
        </button>
      </div>

      {/* Middle Content: Smooth Scrollable without visible scrollbar on Mobile */}
      <div className="relative z-10 my-2.5 sm:my-3.5 space-y-3.5 sm:space-y-4 flex-1 overflow-y-auto no-scrollbar scroll-smooth pr-0.5 sm:pr-0 overscroll-contain no-flip">
        {/* Short Executive Summary */}
        <div className="p-3 sm:p-3.5 rounded-2xl bg-white/70 border border-white/90 shadow-xs">
          <div className="flex items-center gap-1.5 mb-1 text-xs font-bold text-amber-800 font-vazir">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>خلاصه سوابق حرفه‌ای:</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-vazir font-medium">
            {data.aboutFa}
          </p>
        </div>

        {/* Cloud Performance Metrics from Real-world Architecture */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          {data.stats.map((st, idx) => (
            <div
              key={idx}
              className="p-2 sm:p-2.5 rounded-2xl bg-white/65 border border-white/90 text-center flex flex-col justify-center shadow-xs"
            >
              <div className="text-sm sm:text-xl font-black text-indigo-900 font-vazir tracking-tight">
                {st.value}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-600 font-vazir font-semibold mt-0.5 leading-tight">
                {st.labelFa}
              </div>
            </div>
          ))}
        </div>

        {/* QR Code and Tech Stack Dual Column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          {/* Tech Stack Chips */}
          <div className="p-3 rounded-2xl bg-white/65 border border-white/90 shadow-xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2 font-latin">
              <Terminal className="w-3.5 h-3.5 text-indigo-600" />
              <span>Core Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Kubernetes',
                'Docker',
                'Terraform',
                'AWS / GCP',
                'CI/CD Pipelines',
                'Prometheus',
                'Linux Kernel',
                'DevSecOps',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold rounded-lg bg-white/80 hover:bg-white text-slate-700 border border-slate-200/80 font-latin shadow-2xs transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Scannable QR Code */}

        </div>
      </div>

      {/* Bottom Action Buttons: Download vCard, Share, and Direct Contact (Fixed at bottom) */}
      <div className="relative z-10 pt-3 border-t border-slate-900/10 flex flex-wrap items-center justify-between gap-2 shrink-0">
        <button
          onClick={downloadVCardFile}
          type="button"
          className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs transition-all shadow-md shadow-orange-500/25 active:scale-95 cursor-pointer font-vazir"
        >
          <Download className="w-4 h-4" />
          <span>دانلود مخاطب (vCard)</span>
        </button>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handleShare}
            type="button"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white/80 hover:bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-indigo-700 shadow-xs transition-colors cursor-pointer font-vazir"
          >
            <Share2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>اشتراک‌گذاری</span>
          </button>

          <button
            onClick={() => onCopy(window.location.href, 'آدرس کارت')}
            type="button"
            className="p-2 rounded-2xl bg-white/80 hover:bg-white border border-slate-200 text-slate-500 hover:text-slate-800 shadow-xs transition-colors cursor-pointer"
            title="کپی لینک کارت"
          >
            {copiedField === 'آدرس کارت' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* QR Code Modal for large view */}
      {showQrModal && (
        <div 
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowQrModal(false)}
        >
          <div 
            className="p-6 rounded-3xl bg-white/95 border border-white max-w-sm w-full text-center space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-black text-slate-900 font-vazir">اسکن کارت دیجیتال</h3>
            <p className="text-xs text-slate-600 font-vazir font-medium">
              با اسکن این بارکد با دوربین گوشی هوشمند، مخاطب ثنا هدائی فوراً به دفترچه تلفن شما اضافه می‌شود.
            </p>
            {qrDataUrl && (
              <div className="p-3 bg-white rounded-2xl inline-block shadow-md mx-auto border border-slate-100">
                <img src={qrDataUrl} alt="Large QR" className="w-48 h-48" />
              </div>
            )}
            <div>
              <button
                onClick={() => setShowQrModal(false)}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                بستن پنجره
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
