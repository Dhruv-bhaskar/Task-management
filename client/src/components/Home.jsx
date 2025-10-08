import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle, Search, Moon, Monitor, Star, ArrowRight, Github, Linkedin } from 'lucide-react';

const EnhancedLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Task Control",
      description: "Add, edit, and delete tasks effortlessly with intuitive controls.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Sorting",
      description: "Filter & sort tasks by status, title, or due date with lightning speed.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Dark Mode",
      description: "Enjoy beautiful light & dark themes synced with your device preferences.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Cross Platform",
      description: "Works seamlessly on desktop, tablet, and mobile with responsive design.",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-40 px-6 py-4 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-15 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <img src="taskify.png" alt="logo" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Taskify
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="/login" className="px-4 py-2 text-white/80 hover:text-white transition-colors duration-300">
              Sign In
            </a>
            <a href="/register" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20 mb-8">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm">The future of task management is here</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Taskify
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              Simplify your life, stay productive, and manage all your tasks in one place. 
              Taskify is your smart companion for staying organized and achieving more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/register" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Maximum Productivity
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Discover the tools that make task management effortless and enjoyable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${feature.color} transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r ${feature.color} rounded-2xl transition-opacity duration-500`} style={{padding: '2px'}}>
                  <div className="w-full h-full bg-slate-900/90 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Productivity?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already revolutionized their task management. 
              Stop juggling sticky notes and scattered reminders — get everything organized in one beautiful place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/register" className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="mt-8">
              <div className="inline-flex items-center text-6xl mb-4">💡</div>
              <p className="text-white/60 text-sm">No credit card required • Free forever plan available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 bg-black/50 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-white/90">Connect With Us</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <a
                  href="https://www.linkedin.com/in/dhruv-kumar-4206b0274/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Dhruv Kumar</span>
                </a>
                
                <a
                  href="https://github.com/Dhruv-bhaskar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Dhruv-bhaskar</span>
                </a>
              </div>
              
              <p className="text-white/50 text-sm mt-4">
                © 2025 Taskify. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-25 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl">
                <img src="taskify.png" alt="footer-logo" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedLanding;