
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">Rent</span> what you need.{' '}
              <span className="gradient-text">Buy</span> what you love.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              The peer-to-peer platform for students, freelancers, and creators. 
              Access cameras, furniture, tools, and more - locally and affordably.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg hover-scale"
              >
                List Your Item
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg hover-scale"
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Rentals
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Items Listed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-sm text-gray-600">Cities Live</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Person using laptop - representing modern sharing economy"
                className="rounded-2xl shadow-2xl w-full hover-scale"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-fade-in">
                <div className="text-sm font-semibold text-primary">📸 Camera</div>
                <div className="text-xs text-gray-600">₹500/day</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-fade-in">
                <div className="text-sm font-semibold text-accent">🚲 Bike</div>
                <div className="text-xs text-gray-600">₹200/day</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-fade-in">
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex flex-col items-center text-gray-500 hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Learn How It Works</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
