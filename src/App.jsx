import React, { useState, useCallback } from 'react';
import { BackgroundGlassScene } from './components/BackgroundGlassScene.jsx';
import { MouseTrailCanvas } from './components/MouseTrailCanvas.jsx';
import { BusinessCardContainer } from './components/BusinessCardContainer.jsx';
import { Toast } from './components/Toast.jsx';

export default function App() {
  const [toastMessage, setToastMessage] = useState(null);

  const showNotification = useCallback((message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2800);
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 overflow-hidden" dir="rtl">
      {/* Interactive Gentle Glowing Mouse Trail */}
      <MouseTrailCanvas />

      {/* Luminous Frosted Glass Background Scene */}
      <BackgroundGlassScene />

      {/* Central Interactive 3D Business Card */}
      <section aria-label="کارت ویزیت هوشمند" className="w-full flex-1 flex flex-col items-center justify-center z-10 my-auto py-4">
        <BusinessCardContainer onNotify={showNotification} />
      </section>

      {/* Minimal Footer */}
      <footer className="w-full max-w-xl z-10 text-center py-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-white/80 shadow-xs text-[11px] text-slate-700 font-vazir">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold">کارت ویزیت دیجیتال هوشمند • ثنا هدائی</span>
          <span className="text-slate-400">|</span>
          <span className="font-latin text-slate-600 font-medium">Cloud Architecture & DevOps</span>
        </div>
      </footer>

      {/* Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </main>
  );
}
