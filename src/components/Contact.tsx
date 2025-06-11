
import { Button } from '@/components/ui/button';

const Contact = () => {
  const whatsappNumber = "919876543210"; // Replace with actual number
  const telegramHandle = "@tanush_rentizo"; // Replace with actual handle

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in Rentizo.`, '_blank');
  };

  const handleTelegramClick = () => {
    window.open(`https://t.me/${telegramHandle.substring(1)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-12">
            Ready to start renting or listing? Have questions? We're here to help!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover-scale">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Quick questions? Want to rent or list an item? Chat with us directly.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white w-full"
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Telegram */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover-scale">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">Telegram</h3>
              <p className="text-gray-600 mb-6">
                Interested in partnerships or becoming a co-founder? Let's connect.
              </p>
              <Button 
                onClick={handleTelegramClick}
                className="bg-blue-500 hover:bg-blue-600 text-white w-full"
              >
                Message on Telegram
              </Button>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Other Ways to Reach Us</h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">📧</div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-600">hello@rentizo.com</div>
              </div>
              
              <div>
                <div className="text-2xl mb-2">📍</div>
                <div className="font-semibold">Location</div>
                <div className="text-gray-600">Warangal, Telangana</div>
              </div>
              
              <div>
                <div className="text-2xl mb-2">⏰</div>
                <div className="font-semibold">Response Time</div>
                <div className="text-gray-600">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
