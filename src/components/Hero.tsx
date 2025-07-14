import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const balloonImg = "/balloons/6347121.webp";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-400 via-yellow-300 to-blue-400 animate-gradient-xy"
    >
      {/* Animated Confetti */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${Math.random() * 360}, 90%, 70%)`,
              opacity: 0.7,
              zIndex: 1,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Balloon Illustration */}
      <motion.img
        src={balloonImg}
        alt="Colorful Balloons"
        className="hidden md:block absolute right-0 bottom-0 w-[420px] max-w-[60vw] z-20 drop-shadow-2xl animate-float"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, type: "spring" }}
      />

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Burst Effect */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-radial from-yellow-300 via-pink-400 to-blue-400 opacity-40 blur-2xl rounded-full z-0 animate-pulse" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 text-gradient-blue-red text-outline-white"
        >
          <span className="block">Unleash the</span>
          <span className="block">Magic of Balloons</span>
          <span className="block text-3xl sm:text-5xl font-bold mt-2">
            with Mack!
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl sm:text-3xl font-semibold text-white mb-10 max-w-2xl mx-auto drop-shadow-lg animate-pulse"
        >
          🎉 Colorful. Creative. Unforgettable. <br />
          <span className="text-yellow-200">
            Birthday parties, events, and celebrations that POP!
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="group bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-2xl hover:shadow-pink-400/40 transition-all duration-300 flex items-center gap-3 border-4 border-white/30 hover:border-yellow-200"
          >
            Book Your Balloon Magic!
            <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document
                .querySelector("#gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white/80 text-pink-600 px-10 py-5 rounded-full text-2xl font-bold border-4 border-pink-200 hover:bg-yellow-100 hover:text-blue-600 transition-all duration-300 shadow-lg"
          >
            See Our Creations
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
