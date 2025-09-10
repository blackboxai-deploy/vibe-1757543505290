"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-violet-50 via-white to-violet-50/30 pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The Ultimate{" "}
              <span className="text-violet-600">Productivity App</span>{" "}
              for Moms
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Balance family, business, and personal tasks with ease. AI-powered task management, 
              shared calendars, meal planning, and business tools - all in one app designed 
              specifically for busy moms.
            </p>

            {/* Key Benefits */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">AI-powered daily planning & task prioritization</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Family + Business calendars in one place</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Meal planning, chores & business tools included</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Start Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-violet-200 text-violet-600 hover:bg-violet-50 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-sm text-gray-500 mb-2">Trusted by over 50,000+ moms worldwide</p>
              <div className="flex items-center justify-center lg:justify-start space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                ))}
                <span className="ml-2 text-sm text-gray-600">4.9/5 average rating</span>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Phone Mockup Container */}
              <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Phone Screen */}
                  <div className="aspect-[9/19] bg-gradient-to-br from-violet-50 to-white p-4">
                    <img 
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8379a79f-796f-40e0-bc37-6cf3afc703ea.png"
                      alt="TaskMama app dashboard showing daily overview with AI suggestions, family calendar integration, and task prioritization in elegant violet theme"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  NEW
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white border border-violet-200 px-3 py-2 rounded-xl shadow-lg">
                  <div className="text-xs text-gray-600">Today's Tasks</div>
                  <div className="text-sm font-semibold text-gray-900">12 completed</div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-violet-200 rounded-full opacity-20"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-violet-100 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V120z"></path>
        </svg>
      </div>
    </section>
  );
}