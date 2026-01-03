
import React from 'react';
import { AppState } from '../../types';

const SignupView = ({ setView }) => {
  return (
    <div className="w-full animate-in slide-in-from-right duration-500">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-1">Create Account</h2>
        <p className="text-gray-400 text-sm">Join FinWise today to start tracking.</p>
      </div>

      <form className="space-y-4 max-h-[60vh] overflow-y-auto pr-2" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-gray-400 text-xs mb-1 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-xs mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        <button className="w-full py-4 mt-2 bg-[#00D094] text-[#062221] font-bold rounded-full hover:bg-[#00b07d] transition-all shadow-lg">
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          Already have an account?{' '}
          <button onClick={() => setView(AppState.LOGIN)} className="text-[#00D094] hover:underline">
            Log In
          </button>
        </p>
        <button
          onClick={() => setView(AppState.LAUNCH)}
          className="mt-4 text-gray-400 hover:text-white transition-colors text-sm"
        >
          ← Back
        </button>
      </div>
    </div>
  );
};

export default SignupView;
