import { useState } from "react";
import { Heart } from "lucide-react";

const HeartButton = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showAnimatedHeart, setShowAnimatedHeart] = useState(false);

  const handleHeartClick = () => {
    setShowMessage(true);

    // Hide message after 2 seconds and show animated heart
    setTimeout(() => {
      setShowMessage(false);
      setShowAnimatedHeart(true);

      // Hide animated heart after 3 seconds
      setTimeout(() => {
        setShowAnimatedHeart(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="relative">
      {/* Heart Button */}
      <button
        onClick={handleHeartClick}
        className="group relative bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      >
        <Heart
          className="text-white group-hover:animate-pulse"
          size={32}
          fill="currentColor"
        />
      </button>

      {/* Thank You Message */}
      {showMessage && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-fade-in">
          <p className="text-gray-800 font-semibold whitespace-nowrap">
            Buổi tối tốt lành ! 💕
          </p>
        </div>
      )}

      {/* Animated Heart */}
      {showAnimatedHeart && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Heart
            className="text-pink-500 animate-ping"
            size={64}
            fill="currentColor"
          />
        </div>
      )}
    </div>
  );
};

export default HeartButton;
