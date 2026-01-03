"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { AppState } from "../../types";

const LoginView = ({ setView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // ✅ login success
      // redirect or change view here
      console.log("Logged in successfully");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">Welcome</h2>
        <p className="text-gray-400">Please enter your details to continue.</p>
      </div>

      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <label className="block text-gray-400 text-sm mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-2xl p-4 focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <div className="space-y-3">
          <button
            disabled={loading}
            className="w-full py-4 bg-[#00D094] text-[#062221] font-bold rounded-full hover:bg-[#00b07d] transition-all transform active:scale-95 shadow-lg disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Log In"}
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
          Don't have an account?{" "}
          <button
            onClick={() => setView(AppState.SIGNUP)}
            className="text-[#00D094] hover:underline"
          >
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
