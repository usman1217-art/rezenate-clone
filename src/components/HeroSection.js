import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function HeroSection() {
  // Base delay synced to your LoadingScreen timeout (2.8s + small buffer for the transition)
  const INITIAL_DELAY = 3.0;

  return (
    <div 
      id='home'
      className="relative min-h-screen lg:min-h-[130vh] w-full flex flex-col font-sans text-neutral-950 bg-cover bg-center bg-no-repeat overflow-hidden bg-white"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* GLOBAL STICKY NAVBAR */}
      <Navbar />

      {/* HERO CONTENT */}
      <main className=" flex-1 relative top-8 sm:top-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto z-20 pb-20 md:pb-40 lg:pb-[280px] 2xl:pb-72">
        
        {/* ANIMATED HEADING */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // Starts fading in exactly as the loading screen pulls away
          transition={{ duration: 0.8, ease: "easeOut", delay: INITIAL_DELAY }}
          className="text-5xl font-reddit-sans lg:relative lg:bottom-25 font-light md:text-[54px] lg:text-[62px] 2xl:text-[84px] tracking-tight leading-[1.05] mb-6 2xl:mb-8 text-black transition-all duration-300"
        >
          Leadership <br />
          Changes <span className="text-[#9564F4] font-tartuffo font-light italic tracking-normal">everything.</span>
        </motion.h1>

        {/* ANIMATED PARAGRAPH */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // Staggered slightly after the heading (3.0s + 0.2s)
          transition={{ duration: 0.8, ease: "easeOut", delay: INITIAL_DELAY + 0.2 }}
          className="text-[14px] lg:relative lg:bottom-25 font-outfit font-normal md:text-[15px] lg:text-[16px] 2xl:text-[21px] max-w-[540px] lg:max-w-[600px] 2xl:max-w-[800px] text-black leading-[1.1] mx-auto transition-all duration-300"
        >
          We partner with organisations and leaders to attract, <br className="hidden sm:inline" />
          assess and support exceptional leadership <br className="hidden sm:inline" />
          that creates lasting impact.
        </motion.p>
      </main>

      {/* ========================================= */}
      {/* ABSTRACT GRAPHIC CONSTRAINED TO THE SCREEN BOTTOM */}
      {/* ========================================= */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1350px] px-4 z-10 pointer-events-none flex justify-center items-end">
        <div className="w-full h-auto max-h-[35vh] md:max-h-[52vh] relative flex justify-center items-end">
          <img
            src="/hero-btm.svg"
            alt="Abstract purple organic shape decorations"
            className="w-full h-auto object-contain object-bottom mix-blend-multiply opacity-95"
          />
        </div>
      </div>

      {/* ========================================= */}
      {/* TARGETED BOTTOM BLUR & FADE MASK — SVG blur centered at the lower part of the hero image */}
      {/* ========================================= */}
      <svg
        className="absolute bottom-[-310] left-1/2 -translate-x-1/2 w-[1200px] h-[186px] md:w-[1920px] md:h-[600px] z-[15] pointer-events-none"
        viewBox="0 0 1920 938"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_269_12)">
          <rect x="-102" y="189.3" width="2097" height="559" fill="#FDFDFC" />
        </g>
        <defs>
          <filter
            id="filter0_f_269_12"
            x="-291.3"
            y="-1.52588e-05"
            width="2475.6"
            height="937.6"
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
              stdDeviation="94.65"
              result="effect1_foregroundBlur_269_12"
            />
          </filter>
        </defs>
      </svg>

      {/* Bottom-left corner blur — softens the sharp corner of the abstract graphic */}
      <div
        className="absolute bottom-0 left-0 w-[220px] h-[150px] md:w-[340px] md:h-[120px] z-[16] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 75%)",
        }}
      />

      {/* Bottom-right corner blur — softens the sharp corner of the abstract graphic */}
      <div
        className="absolute bottom-0 right-0 w-[220px] h-[150px] md:w-[340px] md:h-[120px] z-[16] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 75%)",
        }}
      />

      {/* ========================================= */}
      {/* SCROLL TO EXPLORE BUTTON */}
      {/* ========================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // Button appears last (3.0s + 0.4s)
        transition={{ duration: 0.8, ease: "easeOut", delay: INITIAL_DELAY + 0.4 }}
        className="absolute bottom-0 md:bottom-16 lg:bottom-7 left-1/2 -translate-x-1/2 z-40"
      >
        <Link href="#philosophy" className="pointer-events-auto block">
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="flex items-center justify-center w-[90px] h-[90px] md:w-[100px] md:h-[90px] rounded-[45px] border border-white/100 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgba(149,100,244,0.08)] duration-500"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
              <path id="text-curve" d="M 12 54 A 38 38 0 0 1 88 54" fill="none" />
              <text className="text-[9.5px] uppercase font-outfit font-medium fill-neutral-800 tracking-[0.15em]">
                <textPath href="#text-curve" startOffset="50%" textAnchor="middle">
                  Scroll to explore
                </textPath>
              </text>
            </svg>

            {/* 🌟 CUSTOM UPDATED SVG ARROW — bounces on hover anywhere over the circle */}
            <motion.svg 
              width="14" 
              height="32" 
              viewBox="0 0 18 43" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="mt-4 text-[#9564F4]"
              variants={{
                rest: { y: 0 },
                hover: { y: [0, 6, 0] },
              }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <path 
                d="M8.66016 42.5L17.3204 27.5L-9.75728e-05 27.5L8.66016 42.5ZM10.1602 1.5C10.1602 0.671574 9.48859 3.62117e-08 8.66016 0C7.83173 -3.62117e-08 7.16016 0.671574 7.16016 1.5L8.66016 1.5L10.1602 1.5ZM8.66016 29L10.1602 29L10.1602 1.5L8.66016 1.5L7.16016 1.5L7.16016 29L8.66016 29Z" 
                fill="currentColor"
              />
            </motion.svg>
          </motion.div>
        </Link>
      </motion.div>
      
    </div>
  );
}