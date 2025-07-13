import { useEffect, useRef } from "react";
import gsap from "gsap";

const balloonImages = [
  "/balloons/8983219.webp",
  "/balloons/7228079.webp",
  "/balloons/6347121.webp",
];

const BALLOON_COUNT = 8;

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const FloatingBalloons = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove any previous balloons
    container.innerHTML = "";

    for (let i = 0; i < BALLOON_COUNT; i++) {
      const img = document.createElement("img");
      img.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];
      img.alt = "Floating Balloon";
      img.style.position = "absolute";
      img.style.left = `${getRandom(0, 90)}vw`;
      img.style.bottom = `-${getRandom(10, 30)}vh`;
      img.style.width = `${getRandom(60, 120)}px`;
      img.style.pointerEvents = "none";
      img.style.zIndex = "10";
      img.style.opacity = String(getRandom(0.7, 1));
      img.style.filter = `drop-shadow(0 8px 16px rgba(0,0,0,0.15))`;
      container.appendChild(img);

      // Animate with GSAP
      gsap.to(img, {
        y: -window.innerHeight - getRandom(100, 300),
        x: `+=${getRandom(-60, 60)}`,
        rotation: getRandom(-20, 20),
        duration: getRandom(10, 18),
        delay: getRandom(0, 6),
        ease: "sine.inOut",
        repeat: -1,
        repeatDelay: getRandom(2, 6),
        yoyo: false,
        onRepeat: () => {
          img.src =
            balloonImages[Math.floor(Math.random() * balloonImages.length)];
          img.style.left = `${getRandom(0, 90)}vw`;
          img.style.width = `${getRandom(60, 120)}px`;
          img.style.opacity = String(getRandom(0.7, 1));
        },
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    />
  );
};

export default FloatingBalloons;
