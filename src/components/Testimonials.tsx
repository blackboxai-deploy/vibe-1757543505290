"use client";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mom of 3 & Business Owner",
      content: "TaskMama has completely transformed how I manage my family and business. The AI suggestions are spot-on, and switching between Mama and Boss modes is a game-changer!",
      rating: 5,
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3ef4e443-cf3e-4822-b0ee-99b4c89b01c2.png"
    },
    {
      name: "Maria Rodriguez",
      role: "Working Mom & Content Creator",
      content: "I love how everything is in one place - from meal planning to client invoices. The social media scheduler alone has saved me hours every week!",
      rating: 5,
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46b5570b-754d-40fb-8397-c73a4c904206.png"
    },
    {
      name: "Jennifer Chen",
      role: "Stay-at-Home Mom of Twins",
      content: "The family features are incredible. My twins can see their chores, my husband stays updated on school events, and I finally feel organized for the first time in years!",
      rating: 5,
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d89daba-1c3f-4058-a21f-31154942d8b2.png"
    },
    {
      name: "Amanda Thompson",
      role: "Mompreneur & Coach",
      content: "TaskMama understands the unique challenges of being a mom in business. The business hub has everything I need to run my coaching practice while managing family life.",
      rating: 5,
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/15a79637-d8e9-447b-934a-6743a3856aef.png"
    },
    {
      name: "Lisa Parker",
      role: "Mom of 4 & Blogger", 
      content: "The AI assistant feels like having a personal helper who actually gets mom life. It suggests realistic daily plans and helps me stay on top of everything without feeling overwhelmed.",
      rating: 5,
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/993c8933-4457-415c-b82f-69fde84ba5a4.png"
    },
    {
      name: "Rachel Kim",
      role: "Single Mom & Freelancer",
      content: "As a single mom running a freelance business, TaskMama is my lifesaver. The expense tracking, client management, and family coordination all work together perfectly.",
      rating: 5,
      avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/09a0cd9e-44d8-4ec2-8aad-120cd156d1da.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Moms Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of moms who have transformed their productivity and reduced stress with TaskMama.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
            <div className="text-3xl font-bold text-violet-600 mb-2">50K+</div>
            <div className="text-gray-600 font-medium">Happy Moms</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
            <div className="text-3xl font-bold text-violet-600 mb-2">4.9★</div>
            <div className="text-gray-600 font-medium">App Store Rating</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
            <div className="text-3xl font-bold text-violet-600 mb-2">2.5hrs</div>
            <div className="text-gray-600 font-medium">Time Saved Daily</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-violet-100">
            <div className="text-3xl font-bold text-violet-600 mb-2">95%</div>
            <div className="text-gray-600 font-medium">Feel Less Stressed</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-violet-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-violet-100 to-purple-100">
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-violet-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Transform Your Mom Life?
          </h3>
          <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of organized, productive moms who have found their perfect balance 
            between family, business, and personal goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Watch Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}