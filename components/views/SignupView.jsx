"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { AppState } from "../../types";

const SignupView = ({ setView }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // ✅ Save full name to Firebase user profile
      await updateProfile(userCredential.user, {
        displayName: name,
      });

      console.log("Account created successfully");
      setView(AppState.LOGIN); // redirect to login
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full animate-in slide-in-from-right duration-500">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white mb-1">Create Account</h2>
        <p className="text-gray-400 text-sm">
          Join FinWise today to start tracking.
        </p>
      </div>

      <form
        className="space-y-4 max-h-[60vh] overflow-y-auto pr-2"
        onSubmit={handleSignup}
      >
        <div>
          <label className="block text-gray-400 text-xs mb-1 font-medium">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-xs mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-xs mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-400 text-xs mb-1 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-[#e8f5f1] text-[#062221] border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#00D094] outline-none"
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <button
          disabled={loading}
          className="w-full py-4 mt-2 bg-[#00D094] text-[#062221] font-bold rounded-full hover:bg-[#00b07d] transition-all shadow-lg disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-500 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => setView(AppState.LOGIN)}
            className="text-[#00D094] hover:underline"
          >
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
