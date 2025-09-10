"use client";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-violet-400">TaskMama</div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              The ultimate productivity app designed specifically for moms. Balance family, 
              business, and personal tasks with AI-powered organization tools.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center bg-black rounded-lg px-4 py-3 border border-gray-700 hover:border-violet-400 transition-colors cursor-pointer">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec44d4e0-7070-467e-9785-0e19a4ffb458.png"
                  alt="Download on App Store"
                  className="w-8 h-8 mr-3"
                />
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
              <div className="flex items-center bg-black rounded-lg px-4 py-3 border border-gray-700 hover:border-violet-400 transition-colors cursor-pointer">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d95fe287-fd39-49bf-aeca-68dd6389c4fd.png"
                  alt="Get it on Google Play"
                  className="w-8 h-8 mr-3"
                />
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
                <span className="text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
                <span className="text-sm">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
                <span className="text-sm">tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-violet-600 transition-colors">
                <span className="text-sm">yt</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-violet-400">Features</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Smart Dashboard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI Assistant</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Family Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business Hub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Meal Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Task Management</a></li>
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-violet-400">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="max-w-md mx-auto text-center md:text-left md:max-w-none">
            <h3 className="text-xl font-semibold text-violet-400 mb-4">
              Stay Updated with Mom Life Tips
            </h3>
            <p className="text-gray-300 mb-6">
              Get weekly productivity tips, organizational hacks, and exclusive features delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-400"
              />
              <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 TaskMama. All rights reserved. Made with ❤️ for moms everywhere.
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              All systems operational
            </div>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}