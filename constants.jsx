
import React from 'react';

export const Logo = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 50L25 35L35 45L55 25" stroke="#00D094" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="15" y="45" width="4" height="10" fill="#00D094" />
    <rect x="25" y="38" width="4" height="17" fill="#00D094" />
    <rect x="35" y="48" width="4" height="7" fill="#00D094" />
    <rect x="45" y="30" width="4" height="25" fill="#00D094" />
    <path d="M55 25L55 35M55 25L45 25" stroke="#00D094" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Branding = () => (
  <div className="flex flex-col items-center gap-2">
    <Logo />
    <h1 className="text-4xl font-bold tracking-tight text-[#00D094]">FinWise</h1>
    <p className="text-gray-400 text-sm text-center max-w-70">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
    </p>
  </div>
);
