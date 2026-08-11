import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ========================================= 
// LOGO ARROW ANIMATION TIMING Config
// =========================================
const LOGO_CYCLE_DURATION = 4.4; 
const LOGO_VANISH_AT = 3.5;     
const LOGO_VANISH_END = 3.86;

const LOGO_ARROWS = [
  {
    viewBox: '0 0 589 589',
    path: 'M588.052 0H0L138.843 139.69C145.382 146.268 154.273 149.967 163.548 149.967H434.45V420.931C434.45 430.169 438.12 439.029 444.652 445.561L588.052 588.961V0Z',
    appearStart: 0.35, 
    appearEnd: 0.45,
    className: "w-full h-full bottom-0 left-0",
  },
  {
    viewBox: '0 0 376 378',
    path: 'M375.372 0H0L140.263 140.263C146.476 146.476 154.904 149.967 163.691 149.967H224.496V212.59C224.496 221.377 227.987 229.805 234.2 236.018L375.372 377.19V0Z',
    appearStart: 0.25, 
    appearEnd: 0.35,
    className: "w-[63.83%] h-[64.17%] bottom-0 left-0",
  },
  {
    viewBox: '0 0 167 167',
    path: 'M166.327 166.327V0H0L166.327 166.327Z',
    appearStart: 0.15, 
    appearEnd: 0.25,
    className: "w-[28.35%] h-[28.35%] bottom-0 left-0",
  },
];

function buildLogoKeyframes(appearStart, appearEnd) {
  const startX = -4; 
  const startY = 4;  
  return {
    opacity: [0, 0, 1, 1, 0, 0],
    x: [startX, startX, 0, 0, 0, 0],
    y: [startY, startY, 0, 0, 0, 0],
    times: [0, appearStart, appearEnd, LOGO_VANISH_AT, LOGO_VANISH_END, 1],
  };
}

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
          className="fixed inset-0 w-screen h-screen z-[9999] bg-white flex items-center justify-center overflow-hidden"
        >
          {/* ========================================= */}
          {/* 1. BACKGROUND FADING WAVES (.png) */}
          {/* ========================================= */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
            <Image
              src="/loading.png"
              alt=""
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* ========================================= */}
          {/* 2. FULL SCREEN ZOOM-OUT & SPINNING FLOWER */}
          {/* ========================================= */}
          {/* FIXED: Replaced rigid 800px with dynamic vw sizing for mobile, scaling up to 800px on desktop */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1.0, opacity: 0.95, x: "-50%", y: "-50%" }}
            exit={{ 
              scale: 3.5, 
              opacity: 0, 
              transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] } 
            }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 w-[120vw] h-[120vw] sm:w-[90vw] sm:h-[90vw] md:w-[800px] md:h-[800px] mix-blend-multiply pointer-events-none select-none z-10"
          >
            {/* FIXED: Reduced duration from 25 to 15 to make it spin faster */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, ease: "linear", repeat: Infinity }}
              className="relative w-full h-full"
            >
              <Image
                src="/flower.png"
                alt=""
                fill
                priority
                className="object-contain object-center scale-100 md:scale-110"
              />
            </motion.div>
          </motion.div>

          {/* ========================================= */}
          {/* 3. INTERIOR CONTENT CORE */}
          {/* ========================================= */}
          {/* FIXED: Added px-4 to ensure text doesn't touch the very edge of tiny mobile screens */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.35 } }}
            className="relative z-20 flex flex-col items-center justify-center text-center font-sans w-full max-w-lg px-4 p-6"
          >
            {/* MICRO-SCALE ANIMATED CLUSTER MARK */}
            <div className="relative w-[20px] h-[20px] pointer-events-none select-none">
              {/* INTRO DROP CIRCLE WITH DIAGONAL BOUNCE */}
              <motion.svg
                className="absolute bottom-0 left-0 w-[28.35%] h-[28.35%]"
                style={{ zIndex: 10 }}
                viewBox="0 0 167 167"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  x: [60, -4, 0, 0, 0, 0],
                  y: [-60, 4, 0, 0, 0, 0],
                  opacity: [0, 1, 1, 1, 0, 0],
                  scale: [0.4, 1.1, 1, 1, 0, 0]
                }}
                transition={{
                  duration: LOGO_CYCLE_DURATION,
                  times: [0, 0.10, 0.15, 0.20, 0.25, 1],
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              >
                <circle cx="83.5" cy="83.5" r="42" fill="#9564F4" />
              </motion.svg>

              {/* THE THREE EXPANDING LOGO ARROWS */}
              {LOGO_ARROWS.map((arrow, i) => {
                const keyframes = buildLogoKeyframes(arrow.appearStart, arrow.appearEnd);
                return (
                  <motion.svg
                    key={i}
                    className={`absolute ${arrow.className}`}
                    viewBox={arrow.viewBox}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ 
                      opacity: keyframes.opacity,
                      x: keyframes.x,
                      y: keyframes.y
                    }}
                    transition={{
                      duration: LOGO_CYCLE_DURATION,
                      times: keyframes.times,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  >
                    <path d={arrow.path} fill="#9564F4" />
                  </motion.svg>
                );
              })}
            </div>

            {/* WORDMARK TEXT */}
            <Image
              src="/logo.png"
              alt="Rezenate"
              width={155}
              height={28}
              priority
              className="object-contain relative left-6 bottom-3 mb-2 sm:mb-4"
            />

            {/* MOTTO TEXT */}
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-light text-black font-reddit-sans leading-tight mb-2 tracking-tight">
              Lead The <span className="italic font-tartuffo text-[#9564F4] font-light">way.</span>
            </h2>
            
            <p className="text-[14px] font-outfit sm:text-[15px] md:text-[17px] text-neutral-800 font-medium tracking-wide mb-8 max-w-[280px] sm:max-w-[360px]">
              Leadership that resonates. Impact that lasts.
            </p>

            {/* CIRCULAR SPINNER LOADING SYSTEM */}
            <div className="flex flex-col items-center gap-2">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-full border-[2.5px] border-white" />
                <div className="absolute inset-0 rounded-full border-[2.5px] border-transparent border-t-[#9564F4] animate-spin" />
              </div>
              <span className="text-[12px] uppercase font-semibold text-black tracking-[0.15em] mt-1 animate-pulse">
                Loading
              </span>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}