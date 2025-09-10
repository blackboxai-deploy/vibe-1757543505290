"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AppModes() {
  const [activeMode, setActiveMode] = useState<'mama' | 'boss'>('mama');

  const modes = {
    mama: {
      title: "Mama Mode",
      subtitle: "Focus on Family Life",
      description: "Perfect for managing household tasks, family schedules, meal planning, and kids' activities. Keep your family organized and running smoothly.",
      features: [
        "Family calendar with school events",
        "Meal planning & grocery lists", 
        "Kids' chore assignments",
        "Homework & activity tracking",
        "Household inventory management",
        "Family emergency contacts"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bf8a1315-d9d4-49b8-9ee6-613cccb590d3.png",
      gradient: "from-pink-400 to-violet-500",
      bgColor: "bg-pink-50"
    },
    boss: {
      title: "Boss Mode", 
      subtitle: "Business & Professional",
      description: "Designed for mompreneurs and working moms. Manage clients, track finances, schedule social media, and grow your business.",
      features: [
        "Client relationship management",
        "Invoice generation & payments",
        "Social media content scheduler", 
        "Expense & mileage tracking",
        "Document scanning & storage",
        "Business goal tracking"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c2e1815-b015-47a6-860a-af4ab540d41e.png",
      gradient: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50"
    }
  };

  const currentMode = modes[activeMode];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Two Modes, One Powerful App
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Switch seamlessly between family management and business operations. 
            TaskMama adapts to your role at any moment.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex">
              <Button
                variant={activeMode === 'mama' ? 'default' : 'ghost'}
                className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeMode === 'mama' 
                    ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveMode('mama')}
              >
                👩‍👧‍👦 Mama Mode
              </Button>
              <Button
                variant={activeMode === 'boss' ? 'default' : 'ghost'}
                className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeMode === 'boss' 
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveMode('boss')}
              >
                💼 Boss Mode
              </Button>
            </div>
          </div>
        </div>

        {/* Mode Content */}
        <div className={`${currentMode.bgColor} rounded-3xl p-8 lg:p-12 transition-all duration-500`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${currentMode.gradient} text-white rounded-full text-sm font-semibold mb-6`}>
                {currentMode.title}
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {currentMode.subtitle}
              </h3>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {currentMode.description}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {currentMode.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-6 h-6 bg-gradient-to-r ${currentMode.gradient} rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0`}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button 
                  size="lg"
                  className={`bg-gradient-to-r ${currentMode.gradient} hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl`}
                >
                  Try {currentMode.title}
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-md">
                {/* Phone Mockup */}
                <div className="relative bg-gray-900 rounded-3xl p-3 shadow-2xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="aspect-[9/19] bg-gray-100">
                      <img 
                        src={currentMode.image}
                        alt={`${currentMode.title} interface showing ${currentMode.subtitle.toLowerCase()}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className={`absolute -top-4 -right-4 bg-gradient-to-r ${currentMode.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                  {activeMode === 'mama' ? 'Family First' : 'Business Ready'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Switch Between Modes Instantly
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            No need to juggle multiple apps or complicated interfaces. One tap switches your entire 
            dashboard to match your current priority - family or business.
          </p>
          <Button 
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}