"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PricingPlans() {
  const plans = [
    {
      name: "Starter Mama",
      price: "Free",
      period: "forever",
      description: "Perfect for getting started with basic family organization",
      popular: false,
      features: [
        "Basic task manager (personal/family)",
        "Calendar sync (Google/Apple)",
        "1 family member access",
        "Limited AI assistance (3/month)",
        "Meal planner & grocery list",
        "1 home organization template",
        "Up to 10 tasks per week"
      ],
      cta: "Start Free",
      gradient: "from-gray-100 to-gray-200",
      textColor: "text-gray-600"
    },
    {
      name: "Organized Mama",
      price: "$4.99",
      period: "per month",
      description: "Ideal for moms balancing family and light business tasks",
      popular: false,
      features: [
        "Everything in Starter Mama",
        "Unlimited personal + family tasks",
        "Boss Mode unlocked",
        "3 AI assistant prompts daily",
        "Cleaning & chore scheduler",
        "Pantry & inventory tracker",
        "QR label generator (10/month)",
        "Up to 3 family members",
        "Task templates included"
      ],
      cta: "Try 7 Days Free",
      gradient: "from-violet-100 to-purple-200",
      textColor: "text-violet-600"
    },
    {
      name: "Boss Mama",
      price: "$9.99",
      period: "per month",
      description: "Complete solution for mompreneurs and business owners",
      popular: true,
      features: [
        "Everything in Organized Mama",
        "Unlimited AI support",
        "Business CRM & client management",
        "Invoice generation & payments",
        "Social media planner",
        "Document scanner & receipts",
        "Expense & mileage tracking",
        "QR labels (10/month)",
        "Goal & habit tracker",
        "Priority customer support"
      ],
      cta: "Start Free Trial",
      gradient: "from-violet-500 to-purple-600",
      textColor: "text-white"
    },
    {
      name: "Team Mama",
      price: "$14.99",
      period: "per month", 
      description: "Perfect for large families and collaborative households",
      popular: false,
      features: [
        "Everything in Boss Mama",
        "Up to 6 user profiles",
        "Role-based access control",
        "Shared task boards",
        "Client/team collaboration",
        "Family journal & memory keeper",
        "Group calendar management",
        "Emergency & medical info center",
        "Extra 50 QR labels/month",
        "Advanced family features"
      ],
      cta: "Try 7 Days Free",
      gradient: "from-purple-100 to-pink-200",
      textColor: "text-purple-600"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Start with our free plan and upgrade as your family and business grow. 
            All paid plans include a 7-day free trial with full access.
          </p>
          
          {/* Annual/Monthly Toggle */}
          <div className="inline-flex items-center bg-violet-50 p-1 rounded-xl">
            <div className="px-4 py-2 text-sm font-medium text-gray-700">Monthly</div>
            <div className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg">
              Annual (Save 20%)
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
              plan.popular 
                ? 'border-violet-500 shadow-lg scale-105' 
                : 'border-gray-200 hover:border-violet-300'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} p-1`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <img 
                      src={`https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b75068ca-0e93-4aa6-a33d-ea1d7042145d.png' ')[0]}+${plan.name.split(' ')[1]}+subscription+plan+icon+violet+theme`}
                      alt={`${plan.name} subscription plan icon`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-600">/{plan.period}</span>}
                </div>
                
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-5 h-5 bg-violet-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button 
                    className={`w-full py-3 font-semibold rounded-xl ${
                      plan.popular 
                        ? 'bg-violet-600 hover:bg-violet-700 text-white' 
                        : 'bg-violet-100 hover:bg-violet-200 text-violet-700'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-violet-600 text-3xl mb-2">📱</div>
                <div className="font-semibold text-gray-900">Cross-Platform</div>
                <div className="text-gray-600 text-sm">iOS, Android, Web</div>
              </div>
              <div>
                <div className="text-violet-600 text-3xl mb-2">🔒</div>
                <div className="font-semibold text-gray-900">Secure & Private</div>
                <div className="text-gray-600 text-sm">End-to-end encryption</div>
              </div>
              <div>
                <div className="text-violet-600 text-3xl mb-2">💬</div>
                <div className="font-semibold text-gray-900">24/7 Support</div>
                <div className="text-gray-600 text-sm">Help when you need it</div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            Cancel anytime. No hidden fees. 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}