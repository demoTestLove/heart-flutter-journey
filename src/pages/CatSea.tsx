
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CatSea = () => {
  const navigate = useNavigate();

  const handleBackToLove = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-teal-50 to-cyan-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            Cat & Sea
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
            Where feline grace meets ocean waves
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Cat Section */}
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
                alt="Beautiful cat"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Feline Companions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover the mysterious world of cats, their graceful movements, 
              and the peaceful companionship they bring to our lives. Each whisker 
              tells a story of independence and love.
            </p>
          </div>

          {/* Sea Section */}
          <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 shadow-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop"
                alt="Ocean waves"
                className="w-full h-48 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ocean Serenity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Feel the calming rhythm of ocean waves, the vast blue horizon 
              that stretches beyond imagination. Let the sea's eternal dance 
              wash away your worries and fill your soul with tranquility.
            </p>
          </div>
        </div>

        {/* Keywords Section */}
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Keywords</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Cat', 'Feline', 'Whiskers', 'Purr', 'Sea', 'Ocean', 'Waves', 'Serenity', 'Blue', 'Peaceful'].map((keyword, index) => (
              <span
                key={keyword}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button
            onClick={handleBackToLove}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold"
          >
            Back to Love Page
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '1s' }}>
          <ArrowDown className="text-blue-400 opacity-60 rotate-45" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '2s' }}>
          <ArrowDown className="text-teal-400 opacity-60 -rotate-45" size={32} />
        </div>
      </div>
    </div>
  );
};

export default CatSea;
