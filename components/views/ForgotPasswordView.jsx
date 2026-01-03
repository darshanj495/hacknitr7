
import React from 'react';
import { AppState } from '../../types';

const ForgotPasswordView = ({ setView }) => {
  return (
    <div className="w-full animate-in slide-in-from-bottom duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Forgot Password</h2>
        <div className="p-4 bg-[#00D094]/10 rounded-2xl border border-[#00D094]/20 mb-6">
          <p className="text-[#00D094] text-sm font-medium">Reset Password?</p>
          <p className="text-gray-400 text-xs mt-1 leading-relaxed">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-gray-400 text-sm mb-2 font-medium">Enter Email Address</label>
          <input
            type="email"
            placeholder="example@example.com"
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        <button className="w-full py-4 bg-[#00D094] text-[#062221] font-bold rounded-full hover:bg-[#00b07d] transition-all shadow-lg">
          Next Step
        </button>
      </form>

      <div className="mt-12 text-center">
         <button
            onClick={() => setView(AppState.LAUNCH)}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Back to menu
          </button>
      </div>
    </div>
  );
};

export default ForgotPasswordView;
