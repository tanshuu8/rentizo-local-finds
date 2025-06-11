
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="gradient-text">Rentizo</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Started by Tanush in Warangal, Rentizo was born from a simple observation: 
              students and freelancers need expensive items for short periods, while others 
              have unused items gathering dust.
            </p>
            
            <p className="text-lg text-gray-600 mb-6">
              We're building a trusted community where you can access what you need without 
              the hefty purchase price, and earn passive income from your unused belongings.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-3">🎯 Our Mission</h3>
              <p className="text-gray-600">
                To make expensive items accessible to everyone while creating sustainable 
                income opportunities for item owners. Starting in Warangal, expanding to Hyderabad next.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Verified user community</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Local meetups for safety</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Transparent pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-gray-700">Rent-to-buy options</span>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Join Our Community
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&h=400&fit=crop"
              alt="Community and sharing concept"
              className="rounded-2xl shadow-2xl w-full hover-scale"
            />
          </div>
        </div>

        {/* Call for Co-founders */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">🚀 Join Our Journey</h3>
          <p className="text-lg mb-6 opacity-90">
            Excited about the sharing economy? Looking to build something impactful? 
            We're looking for co-founders to scale Rentizo across India.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white text-primary hover:bg-gray-100 border-white"
          >
            Let's Talk - DM on Telegram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
