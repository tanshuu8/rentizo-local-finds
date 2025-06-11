
import { Button } from '@/components/ui/button';

const Categories = () => {
  const categories = [
    {
      name: "Cameras & Gear",
      icon: "📸",
      description: "DSLRs, lenses, tripods, lighting equipment",
      priceRange: "₹300-1500/day",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      name: "Furniture",
      icon: "🛏️",
      description: "Beds, chairs, tables, storage solutions",
      priceRange: "₹200-800/day",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    },
    {
      name: "Bikes & Scooters",
      icon: "🚲",
      description: "Cycles, electric scooters, motorcycles",
      priceRange: "₹150-500/day",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop"
    },
    {
      name: "Home Appliances",
      icon: "🏠",
      description: "Washing machines, fridges, microwaves",
      priceRange: "₹100-600/day",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      name: "Tools & Equipment",
      icon: "🔨",
      description: "Power tools, measuring equipment, hardware",
      priceRange: "₹100-400/day",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop"
    },
    {
      name: "Books & Study",
      icon: "📚",
      description: "Textbooks, reference materials, stationery",
      priceRange: "₹50-200/day",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From cameras to furniture, find everything you need for short-term use. 
            Or list your unused items to earn passive income.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 text-3xl bg-white/90 w-12 h-12 rounded-full flex items-center justify-center">
                  {category.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">{category.priceRange}</span>
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    Browse
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
