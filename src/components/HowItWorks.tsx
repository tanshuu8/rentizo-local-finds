
import { Users, Search, Camera } from 'lucide-react';

const HowItWorks = () => {
  const renterSteps = [
    {
      icon: Search,
      title: "Browse & Search",
      description: "Find items you need in your city. Filter by category, price, and availability."
    },
    {
      icon: Users,
      title: "Connect & Verify",
      description: "Contact the owner through WhatsApp. Both parties verify IDs for security."
    },
    {
      icon: Camera,
      title: "Rent or Buy",
      description: "Pick up the item, pay the owner directly. Love it? Buy it at a discounted price!"
    }
  ];

  const listerSteps = [
    {
      icon: Camera,
      title: "List Your Item",
      description: "Upload photos and details of items you rarely use. Set rental and sale prices."
    },
    {
      icon: Users,
      title: "Get Requests",
      description: "Receive rental requests through WhatsApp. Verify renter's ID and details."
    },
    {
      icon: Search,
      title: "Earn Money",
      description: "Meet up for handover. Earn passive income from items sitting unused!"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">Rentizo</span> Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, secure, and local. Whether you want to rent something or earn from your unused items.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Renters */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">For Renters</h3>
            <div className="space-y-8">
              {renterSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 hover-scale">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Listers */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-accent mb-8 text-center">For Item Owners</h3>
            <div className="space-y-8">
              {listerSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 hover-scale">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">🔒 Security & Trust</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Every transaction includes ID verification, security deposits, and local meetups. 
            We're building a trusted community where everyone feels safe to share and rent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
