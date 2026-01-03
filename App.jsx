import Image from 'next/image';
import React, { useState } from 'react';
import { AppState } from './types';
import LeftPanel from '@/components/LeftPanel';
import LaunchView from '@/components/views/LaunchView';
import LoginView from '@/components/views/LoginView';
import SignupView from '@/components/views/SignupView.jsx';
import ForgotPasswordView from '@/components/views/ForgotPasswordView';
import AIChatView from '@/components/views/AIChatView';

const App = () => {
  const [currentView, setCurrentView] = useState(AppState.LAUNCH);

  const renderRightContent = () => {
    switch (currentView) {
      case AppState.LAUNCH:
        return <LaunchView setView={setCurrentView} />;
      case AppState.LOGIN:
        return <LoginView setView={setCurrentView} />;
      case AppState.SIGNUP:
        return <SignupView setView={setCurrentView} />;
      case AppState.FORGOT_PASSWORD:
        return <ForgotPasswordView setView={setCurrentView} />;
      case AppState.AI_CHAT:
        return <AIChatView setView={setCurrentView} />;
      default:
        return <LaunchView setView={setCurrentView} />;
    }
  };

  return (
    <main className="flex flex-col lg:flex-row h-screen w-full bg-[#0b0b0b] overflow-hidden">
      <section className="hidden lg:flex w-[55%] h-full plexus-bg border-r border-white/5 relative items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-tr from-[#062221]/80 via-transparent to-transparent"></div>
        <LeftPanel/>
      </section>

      <section className="flex-1 h-full bg-[#0b0b0b] flex flex-col items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md bg-[#062221]/30 lg:bg-transparent rounded-[2.5rem] p-10 lg:p-0 border border-white/5 lg:border-none shadow-2xl lg:shadow-none backdrop-blur-md lg:backdrop-blur-none transition-all duration-500">
          {renderRightContent()}
        </div>
      </section>
    </main>
  );
};

export default App;
