"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesGrid() {
  const features = [
    {
      title: "Smart Dashboard",
      description: "Daily overview with AI-powered 'Plan My Day' suggestions, mood check-ins, and your top 3 prioritized tasks.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92e9f303-dd2e-4026-9e5b-ea8f9ef40e59.png",
      highlights: ["AI Daily Planning", "Mood Tracking", "Task Prioritization", "Quick Access Buttons"]
    },
    {
      title: "Smart Calendar",
      description: "Unified calendar integrating family events and business appointments with color coding and drag-drop scheduling.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94c17182-500e-4a77-b7b6-879caa0ad32c.png",
      highlights: ["Family + Business Sync", "Color Coding", "Drag & Drop", "Auto-suggestions"]
    },
    {
      title: "AI Task Manager",
      description: "Intelligent task organization with voice input, smart sorting, and templates for cleaning, packing, and social posts.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b4b2e432-ff82-400d-8391-50be8369b1c0.png",
      highlights: ["Voice-to-Task", "Smart Sorting", "Task Templates", "Auto-categorization"]
    },
    {
      title: "Meal & Home Organizer",
      description: "Weekly meal planning with smart grocery lists, pantry tracking, assignable chore boards, and QR organization.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/871a0add-a784-4af7-acac-dba9b909b840.png",
      highlights: ["Meal Planning", "Smart Grocery Lists", "Chore Assignment", "QR Organization"]
    },
    {
      title: "Business Hub",
      description: "Complete business management with client tracking, invoicing, social media scheduling, and expense management.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8eb58d43-93fc-4b49-baf3-61ae0f8d0d93.png",
      highlights: ["Client Management", "Invoice Generation", "Social Scheduling", "Expense Tracking"]
    },
    {
      title: "Family Zone",
      description: "Collaborative family hub with shared calendars, kids' task tracking, homework management, and emergency info.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52de81f4-91aa-48f1-9133-277fa7d60c94.png",
      highlights: ["Shared Calendars", "Kids' Tasks", "Homework Tracker", "Emergency Hub"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-violet-50/30 via-white to-violet-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need in One App
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From morning routines to business meetings, TaskMama has all the tools 
            to keep your family organized and your business thriving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-violet-100 hover:border-violet-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={feature.image}
                    alt={`${feature.title} - ${feature.description}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-violet-600 transition-colors">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-violet-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Powered by Advanced AI</h3>
          <p className="text-violet-100 max-w-3xl mx-auto mb-6">
            Our AI assistant learns your patterns and preferences to provide personalized suggestions, 
            automate routine tasks, and help you stay ahead of your busy schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 px-4 py-2 rounded-full">Smart Prioritization</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">Predictive Planning</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">Voice Commands</div>
            <div className="bg-white/20 px-4 py-2 rounded-full">Automated Suggestions</div>
          </div>
        </div>
      </div>
    </section>
  );
}