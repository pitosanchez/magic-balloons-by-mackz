import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Balloon {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  hue: number;
}

const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    const createBalloon = () => {
      const newBalloon: Balloon = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        size: 60 + Math.random() * 40,
        hue: Math.random() * 360,
      };

      setBalloons((prev) => [...prev, newBalloon]);

      // Remove balloon after animation
      setTimeout(() => {
        setBalloons((prev) => prev.filter((b) => b.id !== newBalloon.id));
      }, newBalloon.duration * 1000);
    };

    // Create initial balloons
    for (let i = 0; i < 5; i++) {
      setTimeout(createBalloon, i * 1000);
    }

    // Create balloons periodically
    const interval = setInterval(createBalloon, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute bottom-0"
          style={{
            left: `${balloon.x}%`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.25}px`,
          }}
          initial={{ y: "100vh", rotate: -5 }}
          animate={{
            y: "-20vh",
            rotate: [0, 5, -5, 0],
            x: [0, -20, 20, -10, 0],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            ease: "easeInOut",
            rotate: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div
            className="w-full h-full relative"
            style={{
              filter: `hue-rotate(${balloon.hue}deg)`,
            }}
          >
            {/* Balloon */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-lg">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full opacity-60" />
            </div>

            {/* String */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-400" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
