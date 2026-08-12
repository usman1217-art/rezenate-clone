import Image from 'next/image';
import { motion } from 'framer-motion';

// ========================================= 
// ANIMATION TIMING & DIRECTION
// =========================================
const CYCLE_DURATION = 5.5; 
const VANISH_AT = 3;     
const VANISH_END = 3.4;

const arrows = [
  {
    // Largest arrow (Third to appear)
    viewBox: '0 0 589 589',
    path: 'M588.052 0H0L138.843 139.69C145.382 146.268 154.273 149.967 163.548 149.967H434.45V420.931C434.45 430.169 438.12 439.029 444.652 445.561L588.052 588.961V0Z',
    appearStart: 0.40, 
    appearEnd: 0.48,
    className: "w-full h-full bottom-0 left-0",
  },
  {
    // Medium arrow (Second to appear)
    viewBox: '0 0 376 378',
    path: 'M375.372 0H0L140.263 140.263C146.476 146.476 154.904 149.967 163.691 149.967H224.496V212.59C224.496 221.377 227.987 229.805 234.2 236.018L375.372 377.19V0Z',
    appearStart: 0.26, 
    appearEnd: 0.34,
    className: "w-[63.83%] h-[64.17%] bottom-0 left-0",
  },
  {
    // Smallest arrow (First to appear after circle lands)
    viewBox: '0 0 167 167',
    path: 'M166.327 166.327V0H0L166.327 166.327Z',
    appearStart: 0.12, 
    appearEnd: 0.20,
    className: "w-[28.35%] h-[28.35%] bottom-0 left-0",
  },
];

function buildArrowKeyframes(appearStart, appearEnd) {
  const startX = -12; 
  const startY = 12;  
  
  return {
    opacity: [0, 0, 1, 1, 0, 0],
    x: [startX, startX, 0, 0, 0, 0],
    y: [startY, startY, 0, 0, 0, 0],
    times: [0, appearStart, appearEnd, VANISH_AT, VANISH_END, 1],
  };
}

export default function FooterSection() {
  return (
    <footer className="relative bottom-0 w-full overflow-hidden font-sans">

      {/* ========================================= */}
      {/* PURPLE GRADIENT BACKGROUND CONTAINER */}
      {/* ========================================= */}
      {/* FIX: Removed pt-1 to ensure no inner top spacing */}
      <div className="relative w-full min-h-[540px] sm:min-h-[580px] md:min-h-[740px] flex items-center justify-center px-6 sm:px-8 pt-0 pb-24">
        
        {/* Background Image Asset */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/f-bg.png"
            alt=""
            fill
            className="object-cover object-top pointer-events-none select-none"
          />
        </div>

        {/* FIX: The white Top Edge Blur Mask that was creating the gap has been completely removed from here. */}

        {/* ========================================= */}
        {/* CARD + ARROWS WRAPPER (Pure Show-Up Animation - No Up/Down Shift) */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-20 w-full max-w-[760px]"
        >

          {/* ANIMATED ARROW CLUSTER */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:left-50 sm:translate-x-0 z-0 pointer-events-none select-none w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px]"
          >
            {/* INTRO DROP CIRCLE */}
            <motion.svg
              className="absolute bottom-0 left-0 w-[28.35%] h-[28.35%]"
              style={{ zIndex: 10 }}
              viewBox="0 0 167 167"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: [180, 0, 0, 0, 0],
                y: [-180, 0, 0, 0, 0],
                opacity: [0, 1, 1, 0, 0],
                scale: [0.4, 1, 1, 0, 0]
              }}
              transition={{
                duration: CYCLE_DURATION,
                times: [0, 0.10, 0.13, 0.15, 1],
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              <circle cx="83.5" cy="83.5" r="42" fill="white" fillOpacity={0.4} />
            </motion.svg>

            {/* THE THREE EXPANDING ARROWS */}
            {arrows.map((arrow, i) => {
              const keyframes = buildArrowKeyframes(arrow.appearStart, arrow.appearEnd);
              
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
                    duration: CYCLE_DURATION,
                    times: keyframes.times,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                >
                  <path d={arrow.path} fill="white" fillOpacity={0.4} />
                </motion.svg>
              );
            })}
          </div>

          {/* ========================================= */}
          {/* GLASS CARD */}
          {/* ========================================= */}
          <div
            className="relative top-8 z-10 w-full rounded-[24px] sm:rounded-[28px] border border-white/50 bg-white/10 backdrop-blur-md px-6 py-10 sm:px-12 sm:py-12 md:px-16 md:py-14 text-center shadow-[0_8px_40px_rgba(120,70,220,0.12)] overflow-hidden"
          >

            {/* Grain/dots texture overlay */}
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-[0.12] mix-blend-multiply"
              style={{
                backgroundImage: 'url(/dots.png)',
                backgroundRepeat: 'repeat',
                backgroundSize: '420px auto',
              }}
            />

            {/* Card content */}
            <div className="relative z-10">
              <h2 className="font-readex-pro text-[28px] sm:text-[34px] md:text-[38px] font-light tracking-tight text-black leading-tight mb-2 sm:mb-1.5">
                Lead The <span className="italic font-tartuffo font-light">way.</span>
              </h2>
              <p className="font-outfit text-[13px] leading-tight sm:text-[14px] md:text-[17px] text-black font-normal max-w-[480px] mx-auto">
                10% of every retainer supports a cause our clients care about. We also make a matching donation to a charity chosen by their new leader, because good business should always leave the world better than it found it.
              </p>
            </div>
          </div>

        </motion.div>

        {/* ========================================= */}
        {/* COPYRIGHT BAR */}
        {/* ========================================= */}
        <div className="absolute bottom-0 left-0 right-0 z-20 py-4 text-center bg-[#8B55EC]/80 border-t border-white/20">
          <p className="text-white text-[13px] font-outfit md:text-[18px] font-light tracking-wide">
            © Rezenate 2025. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}