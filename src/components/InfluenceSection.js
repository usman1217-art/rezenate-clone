import Image from 'next/image';
import { motion } from 'framer-motion';

const CYCLE_DURATION = 4.5;
const VANISH_AT = 3.85;
const VANISH_END = 3.86;

const arrows = [
  {
    viewBox: '0 0 589 589',
    path: 'M588.052 0H0L138.843 139.69C145.382 146.268 154.273 149.967 163.548 149.967H434.45V420.931C434.45 430.169 438.12 439.029 444.652 445.561L588.052 588.961V0Z',
    appearStart: 0.40,
    appearEnd: 0.48,
    className: "w-full h-full bottom-0 left-0",
  },
  {
    viewBox: '0 0 376 378',
    path: 'M375.372 0H0L140.263 140.263C146.476 146.476 154.904 149.967 163.691 149.967H224.496V212.59C224.496 221.377 227.987 229.805 234.2 236.018L375.372 377.19V0Z',
    appearStart: 0.26,
    appearEnd: 0.34,
    className: "w-[63.83%] h-[64.17%] bottom-0 left-0",
  },
  {
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

export default function InfluenceSection() {
  return (
    <section 
      id="philosophy" 
      className="w-full relative bg-white overflow-hidden font-sans flex flex-col justify-center pt-20 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36"
    >
      {/* GLOBAL SECTION CONTAINER */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-16 md:px-20 lg:px-28 xl:px-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ========================================= */}
        {/* LEFT COLUMN: TYPOGRAPHY TEXT CONTENT */}
        {/* ========================================= */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="grid-cols-1 md:col-span-1 lg:col-span-7 xl:col-span-5 flex flex-col justify-center text-left py-2 pr-4 sm:pr-12 md:pr-24 lg:pr-0"
        >
          <h2 className="relative left-0 sm:left-10 md:left-20 font-readex-pro text-4xl md:text-[56px] lg:text-[40px] xl:text-[42px] lg:w-[600px]  z-40 font-light tracking-tight leading-[1.12] mb-7 md:mb-6 text-black transition-all duration-300">
            Every Leader Influences A Culture Long Before They{' '}
            <span className="text-[#9564F4] italic font-tartuffo tracking-normal font-light">change a strategy.</span>
          </h2> 

          <div className="font-outfit space-y-6 font-normal md:space-y-2.5 relative left-0 sm:left-10 md:left-20 text-[15px] md:text-[22px] text-black leading-[1.2] max-w-md transition-all duration-300">
            <p className="max-w-[320px]">Some support people <br/> to become more of themselves.</p>
            <p className="max-w-[280px]">Others slowly ask <br/> them to become less.</p>
            <p className="pt-2 max-w-[240px]">Rezenate exists because leadership resonates.</p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: EMPTY HOLDER SPACE */}
        <div className="hidden lg:block lg:col-span-5 xl:col-span-7 pointer-events-none h-1" />
      </div>

      {/* BACKGROUND GRAPHIC CONTAINER */}
      <div className="relative sm:absolute right-0 top-0 bottom-0 w-full sm:max-w-[50%] lg:max-w-[52%] xl:max-w-[55%] h-[350px] sm:h-full z-0 pointer-events-none mt-12 sm:mt-0">
        
        {/* ========================================= */}
        {/* FIX: CSS MASK - LEFT, TOP, AND BOTTOM FADE */}
        {/* ========================================= */}
        <div 
          className="relative w-full h-full"
          style={{
            // Gradient 1 (Y-axis): Fades at top (0-20%) and bottom (80-100%)
            // Gradient 2 (X-axis): Fades at left (0-30%) but stays solid black all the way to the right (100%)
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%), linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            WebkitMaskComposite: 'source-in', // Intersects the two gradients together
            maskComposite: 'intersect'
          }}
        >
          <Image
            src="/new-bg.png"
            alt="Abstract purple vertical glowing bars decoration"
            fill
            priority
            className="object-cover object-right-top mix-blend-multiply opacity-95"
          />
        </div>

        {/* ========================================= */}
        {/* ANIMATED ARROW CLUSTER */}
        {/* ========================================= */}
        <div
          className="hidden lg:block absolute lg:top-[220px] lg:left-[340px] xl:top-[300px] xl:left-[480px] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]"
        >
          {/* Intro drop circle */}
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
            <circle cx="83.5" cy="83.5" r="42" fill="white" />
          </motion.svg>

          {/* Expanding arrows */}
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
                <path d={arrow.path} fill="white" />
              </motion.svg>
            );
          })}
        </div>

        {/* ========================================= */}
        {/* MOBILE QUOTE BADGE CARD */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: "-50%", x: "-50%" }}
          whileInView={{ opacity: 1, y: "-50%", x: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-outfit block lg:hidden absolute top-1/2 left-1/2 w-[92%] max-w-[340px] p-6 rounded-[28px] z-20 overflow-hidden pointer-events-auto flex flex-col justify-center items-start text-left shadow-[0_12px_40px_rgba(149,100,244,0.15)] bg-transparent border border-white/60"
        >
          <div 
            className="absolute inset-0 bg-repeat bg-contain opacity-40 z-0 pointer-events-none"
            style={{ backgroundImage: "url('/dots.png')" }}
          />
          <p className="text-[16px] text-white font-medium leading-relaxed mb-3 relative z-20 max-w-[270px] drop-shadow-sm">
            People buy into the leader before they buy into the vision.
          </p>
          <span className="text-[13px] tracking-[0.12em] uppercase font-bold text-white/90 block relative z-20 drop-shadow-sm">
            — JOHN C MAXWELL
          </span>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* DESKTOP QUOTE CARD */}
      {/* ========================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="hidden lg:block absolute bottom-[35%] xl:bottom-[15%] left-[64%] xl:left-[60%] w-full max-w-[300px] z-20"
      >
        {/* Purple glow — sits behind the card, peeking out at the lower-left */}
        <svg
          className="pointer-events-none absolute -bottom-15 -left-10 w-[327px] h-[212px] z-0"
          viewBox="0 0 327 212"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_269_43)">
            <ellipse cx="163.199" cy="105.7" rx="108" ry="50.5" fill="#6D00FF" fillOpacity="0.8" />
          </g>
          <defs>
            <filter
              id="filter0_f_269_43"
              x="-0.000782013"
              y="-4.95911e-05"
              width="326.4"
              height="211.4"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="27.6"
                result="effect1_foregroundBlur_269_43"
              />
            </filter>
          </defs>
        </svg>

        {/* Inner container to capture the right lower shadow and dual-gradient styling */}
        <div className="relative w-full p-6 md:p-5 rounded-[24px] z-10 overflow-hidden pointer-events-auto transition-all duration-300 flex flex-col justify-center items-start text-left bg-gradient-to-br from-white/25 via-[#9564F4]/15 to-white/5 backdrop-blur-xl shadow-[15px_20px_50px_rgba(120,70,255,0.3)]">
          
          {/* Outer Border Layer - Main White Border running from Top-Right down to Bottom-Left */}
          <div className="absolute inset-0 p-[2px] rounded-[24px] bg-gradient-to-bl from-white via-white/100 to-transparent z-30 pointer-events-none" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
          
          {/* Left Border Layer - Purple Tint Gradient highlighting specifically the left side */}
          <div className="absolute inset-0 p-[2px] rounded-[24px] bg-gradient-to-r from-[#9564F4] via-transparent to-transparent z-40 pointer-events-none" style={{ WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />

          {/* Grain texture */}
          <div 
            className="absolute inset-0 bg-repeat bg-contain opacity-40 filter invert z-0 pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: "url('/dots.png')" }}
          />

          {/* Top inner sheen */}
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-white/30 via-transparent to-transparent" />

          <p className="text-[15px] md:text-[17px] font-outfit text-[#FDFDFC] font-light leading-[1.2] mb-1 relative z-20 tracking-wide max-w-[250px] drop-shadow-sm">
            People buy into the leader before they buy into the vision.
          </p>
          <span className="text-[20px] md:text-[18px] font-outfit  uppercase font-semibold text-white/90 block relative z-20 drop-shadow-sm">
            — JOHN C MAXWELL
          </span>
        </div>
      </motion.div>

    </section>
  );
}