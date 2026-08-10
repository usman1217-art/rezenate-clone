import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Motion values track the exact mouse coordinates
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Spring physics create the "puffy/glassy" smooth trailing effect
  // Adjust damping/stiffness to make it feel heavier or lighter
  const springConfig = { damping: 35, stiffness: 120, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Show the cursor once the mouse enters the screen
      if (!isVisible) setIsVisible(true);
      
      // Update coordinates (centering the 400px blob means offsetting by 200px)
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <motion.div
      // pointer-events-none is CRITICAL so it doesn't block your clicks
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9998]"
      style={{
        x: smoothX,
        y: smoothY,
        // The Rezenate Purple color
        background: "radial-gradient(circle, rgba(149,100,244,0.45) 0%, rgba(149,100,244,0) 70%)",
        // The extreme blur makes it look like ambient light/glass
        filter: "blur(60px)",
        // Hides it when the mouse leaves the browser window
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease-out"
      }}
    />
  );
}