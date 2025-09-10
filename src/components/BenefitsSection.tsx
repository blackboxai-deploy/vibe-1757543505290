"use client";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Balance Family & Business Seamlessly",
      description: "Switch between Mama Mode and Boss Mode instantly. Manage family schedules and business tasks without missing a beat.",
      color: "from-violet-500 to-purple-600"
    },
    {
      title: "AI-Powered Task Management",
      description: "Get personalized daily plans, smart task prioritization, and AI suggestions that adapt to your unique mom life.",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Everything in One Place",
      description: "No more juggling multiple apps. Calendars, meal planning, chores, business tools, and family coordination - all unified.",
      color: "from-pink-500 to-violet-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Moms Love TaskMama
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Designed by moms, for moms. TaskMama understands the unique challenges of balancing 
            family life, personal goals, and business aspirations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${benefit.color} p-1 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <img 
                      src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8f800e57-ab10-43cc-883f-36c0a4c314d7.png' ')[0]}+Icon+${benefit.title.split(' ')[1]}+modern+minimalist+violet+theme`}
                      alt={`${benefit.title} icon in modern minimalist style`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                
                {/* Connecting Line for Desktop */}
                {index < benefits.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-violet-200 to-transparent -z-10"></div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Row */}
        <div className="mt-20 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-violet-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Moms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600 mb-2">2.5hrs</div>
              <div className="text-gray-600">Saved Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600 mb-2">95%</div>
              <div className="text-gray-600">Less Stress</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-600 mb-2">4.9★</div>
              <div className="text-gray-600">App Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}