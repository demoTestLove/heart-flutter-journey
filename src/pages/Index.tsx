
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeartButton from "@/components/HeartButton";

const Index = () => {
  const navigate = useNavigate();
  const [showFloatingHearts, setShowFloatingHearts] = useState(false);

  const handleCatSeaNavigation = () => {
    navigate("/cat-sea");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-red-100 overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-300 opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 bg-clip-text text-transparent mb-6 animate-scale-in">
            Love
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
            Where hearts connect and love stories begin
          </p>
        </div>

        {/* Main Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Love Story Card */}
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in group">
            <div className="mb-6 relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop"
                alt="Romantic setting"
                className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 filter saturate-150 contrast-125"
                style={{
                  filter: 'saturate(150%) contrast(125%) brightness(110%) drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Love Story Awaits
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every love story is beautiful, but yours will be our favorite. 
              Discover the magic of connection and let your heart guide you 
              to extraordinary moments.
            </p>
          </div>

          {/* Journey Card */}
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in group" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6 relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop"
                alt="Cozy moments"
                className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 filter saturate-150 contrast-125"
                style={{
                  filter: 'saturate(150%) contrast(125%) brightness(110%) drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Journey Together
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Love is not just a feeling, it's a journey of two souls finding 
              their way to each other. Create memories that will last a lifetime 
              in the comfort of togetherness.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Button
            onClick={handleCatSeaNavigation}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold"
          >
            Explore Cat & Sea Adventures
          </Button>

          <HeartButton />
        </div>

        {/* Quote Section */}
        <div className="text-center max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-4">
            "Love is composed of a single soul inhabiting two bodies."
          </blockquote>
          <cite className="text-gray-500 text-lg">- Aristotle</cite>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '1s' }}>
          <Heart className="text-pink-400 opacity-60" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '2s' }}>
          <Heart className="text-rose-400 opacity-60" size={32} />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '3s' }}>
          <Heart className="text-red-400 opacity-60" size={28} />
        </div>
      </div>

      {/* Animated Hearts Overlay */}
      {showFloatingHearts && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-500 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${Math.random() * 30 + 20}px`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
