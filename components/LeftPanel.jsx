"use client"
import React, { useState, useEffect } from 'react';


const LeftPanel = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between h-full py-16 text-center w-full max-w-lg z-10">
      <div className="space-y-6 px-6">
        <div className="inline-block px-4 py-1.5 bg-[#00D094]/15 border border-[#00D094]/30 rounded-full mb-2">
          <span className="text-[#00D094] text-[11px] font-bold tracking-[0.2em] uppercase">Enterprise Grade Security</span>
        </div>
        
        <div className="h-28 overflow-hidden relative">
            <h2 className={`text-5xl font-extrabold text-white leading-tight transition-all duration-700 absolute inset-0 ${slide === 0 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
              Seamless<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00D094] to-[#00f2fe]">Digital Payments</span>
            </h2>
            <h2 className={`text-5xl font-extrabold text-white leading-tight transition-all duration-700 absolute inset-0 ${slide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              Automated<br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00D094] to-[#00f2fe]">Wealth Tracking</span>
            </h2>
        </div>
        
        <p className="text-gray-400 text-lg max-w-sm mx-auto font-medium">
          Experience the future of finance with real-time analytics and AI-driven insights.
        </p>
      </div>

      <div className="relative w-full aspect-square max-w-112.5 flex items-center justify-center">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] transition-all duration-1000 ${slide === 0 ? 'bg-blue-500/10' : 'bg-emerald-500/10'}`}></div>
        
        <div className="relative z-10 float-animation px-10">
          {slide === 0 ? (
            <div className="flex flex-col items-center animate-in zoom-in fade-in duration-700">
               <img 
                 src="https://img.freepik.com/free-vector/hand-holding-smartphone-with-secure-payment-interface-online-banking-concept_107791-17188.jpg" 
                 className="w-80 h-80 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" 
                 alt="Digital Wallet" 
               />
               <div className="mt-14 flex gap-4">
                 <div className="h-1.5 w-12 rounded-full bg-[#00D094] transition-all duration-300"></div>
                 <div className="h-1.5 w-4 rounded-full bg-white/10 transition-all duration-300"></div>
               </div>
            </div>
          ) : (
            <div className="flex flex-col items-center animate-in zoom-in fade-in duration-700">
               <img 
                 src="https://img.freepik.com/free-psd/3d-hand-holding-coins_23-2148938189.jpg" 
                 className="w-80 h-80 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" 
                 alt="Wealth Growth" 
               />
               <div className="mt-14 flex gap-4">
                 <div className="h-1.5 w-4 rounded-full bg-white/10 transition-all duration-300"></div>
                 <div className="h-1.5 w-12 rounded-full bg-[#00D094] transition-all duration-300"></div>
               </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 w-full flex justify-center opacity-80 scale-90">
      
      </div>
    </div>
  );
};

export default LeftPanel;
