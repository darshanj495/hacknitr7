
import React from 'react';
import { AppState } from '../../types';

const LoginView = ({ setView }) => {
  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">Welcome</h2>
        <p className="text-gray-400">Please enter your details to continue.</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-gray-400 text-sm mb-2 font-medium">Username Or Email</label>
          <input
            type="text"
            placeholder="example@example.com"
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        <div className="space-y-3">
          <button className="w-full py-4 bg-[#00D094] text-[#062221] font-bold rounded-full hover:bg-[#00b07d] transition-all transform active:scale-95 shadow-lg">
            Log In
          </button>
          <button
            type="button"
            onClick={() => setView(AppState.SIGNUP)}
            className="w-full py-4 bg-[#e8f5f1] text-[#062221] font-bold rounded-full hover:bg-white transition-all transform active:scale-95 shadow-md"
          >
            Sign Up
          </button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Don't have an account?{' '}
          <button onClick={() => setView(AppState.SIGNUP)} className="text-[#00D094] hover:underline">
            Sign Up
          </button>
        </p>
        <button
          onClick={() => setView(AppState.LAUNCH)}
          className="mt-6 text-gray-400 hover:text-white transition-colors"
        >
          ← Back to menu
        </button>
      </div>
    </div>
  );
};

export default LoginView;
