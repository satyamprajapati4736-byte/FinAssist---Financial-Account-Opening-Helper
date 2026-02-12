
import React from 'react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isOpen, setIsOpen }) => {
  const navItems = [
    { label: 'Home', view: View.Home },
    { label: 'LIC', view: View.Lic },
    { label: 'Post Office', view: View.PostOffice },
    { label: 'Share Market', view: View.ShareMarket },
    { label: 'About', view: View.About },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => onNavigate(View.Home)}
          >
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-bold text-xl text-blue-800">FinAssist</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={`relative px-1 py-2 font-medium transition-colors ${
                  currentView === item.view ? 'text-blue-700' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
                {currentView === item.view && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 rounded-full" />
                )}
              </button>
            ))}
            <button 
              onClick={() => onNavigate(View.Contact)}
              className="gradient-bg text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:opacity-90 transition-all"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-slate-100 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-1 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => onNavigate(item.view)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentView === item.view ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 mt-4">
                <button 
                  onClick={() => onNavigate(View.Contact)}
                  className="w-full gradient-bg text-white py-3 rounded-xl font-semibold shadow-md"
                >
                  Get Assistance
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
