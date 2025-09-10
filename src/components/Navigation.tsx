"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-violet-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold text-violet-600">
              TaskMama
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-violet-600 px-3 py-2 text-sm font-medium transition-colors">
                Reviews
              </a>
              <Button 
                className="bg-violet-600 hover:bg-violet-700 text-white px-6"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                Download App
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-violet-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-violet-100">
              <a href="#features" className="text-gray-700 hover:text-violet-600 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-violet-600 block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-violet-600 block px-3 py-2 text-base font-medium">
                Reviews
              </a>
              <div className="pt-2">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white w-full">
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}