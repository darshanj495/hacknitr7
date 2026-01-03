
import React from 'react';
import { Branding } from '../../constants';
import { AppState } from '../../types';

const LaunchView = ({ setView }) => {
  return (
    <div className="flex flex-col items-center gap-10 w-full animate-in fade-in duration-700">
      <div className="lg:hidden mb-2">
        <Branding />
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-3xl font-bold text-white">Welcome back</h3>
        <p className="text-gray-500 font-medium">Select an option to get started</p>
      </div>

      <div className="w-full space-y-4">
        <button
          onClick={() => setView(AppState.LOGIN)}
          className="w-full py-5 bg-[#00D094] text-[#062221] font-bold rounded-2xl hover:bg-[#00b07d] transition-all transform active:scale-[0.98] shadow-[0_10px_30px_rgba(0,208,148,0.2)]"
        >
          Log In
        </button>
        <button
          onClick={() => setView(AppState.SIGNUP)}
          className="w-full py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all transform active:scale-[0.98] backdrop-blur-sm"
        >
          Create Account
        </button>
        <button
          onClick={() => setView(AppState.FORGOT_PASSWORD)}
          className="w-full py-2 text-gray-500 hover:text-white text-sm font-medium transition-colors text-center"
        >
          Having trouble signing in?
        </button>
      </div>

      <div className="w-full pt-10 mt-6 border-t border-white/5 flex flex-col items-center gap-5">
        <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-white/10"></div>
            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Assistant</span>
            <div className="w-8 h-px bg-white/10"></div>
        </div>
        <button
          onClick={() => setView(AppState.AI_CHAT)}
          className="group flex items-center gap-3 px-8 py-3 bg-linear-to-r from-blue-600/10 to-emerald-600/10 border border-white/5 rounded-full text-sm font-semibold text-gray-300 hover:text-white hover:border-[#00D094]/30 transition-all"
        >
          <span className="w-2 h-2 rounded-full bg-[#00D094] animate-pulse"></span>
          Talk to FinAI Assistant
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LaunchView;
