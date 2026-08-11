import Image from 'next/image';
import { motion } from 'framer-motion';
import BlurDivider from '@/components/BlurDivider'; // Double check this path matches your project structure

/* =========================================================
   ADJUSTMENT CONFIGURATION
   ========================================================= */
const CONFIG = {
  // 1. LEFT BACKGROUND IMAGE
  leftWash: 'absolute left-0 bottom-0 w-full sm:w-[95%] md:w-[85%] lg:w-[78%] xl:w-[72%] h-[75%] sm:h-[80%] md:h-[85%]',

  // 2. RIGHT BACKGROUND IMAGE
  rightGraphic: 'hidden md:block absolute top-0 right-0 h-screen w-[44%] lg:w-[38%] xl:w-[80%]',

  // 3. TOP-RIGHT SVG MASK
  topMask: 'absolute -top-[380px] -right-[50px] w-[150%] md:w-[1111px] z-10 pointer-events-none',

  // 4. BOTTOM MASK (USING YOUR BlurDivider COMPONENT)
  // Small height on purpose — this should read as an edge fade, not a wash up the page.
  bottomMaskPosition: 'absolute inset-x-0 bottom-0 h-12 md:h-16 z-10',
};

// Fade masks so the raster images blend into the white section background
// instead of showing a hard rectangular edge. Radial, anchored at the
// corner that's flush with the page edge, fading outward.
const LEFT_WASH_MASK = 'radial-gradient(circle at 0% 100%, black 0%, black 25%, transparent 100%)';
const RIGHT_GRAPHIC_MASK = 'radial-gradient(circle at 100% 0%, black 0%, black 25%, transparent 100%)';

export default function ConversationCTASection() {
  return (
    <section id="contact" className="relative mt-10 w-full bg-white overflow-hidden pt-8 pb-20 sm:pt-12 sm:pb-28 md:pt-16 md:pb-36 lg:pt-16 lg:pb-65 lg:-mt-35 font-sans">

      {/* ========================================= */}
      {/* LEFT SOFT PURPLE WASH (blur-em.png) */}
      {/* ========================================= */}
      <div className={`${CONFIG.leftWash} pointer-events-none select-none z-0`}>
        <div
          className="relative w-[700px] h-full"
          style={{
            maskImage: LEFT_WASH_MASK,
            WebkitMaskImage: LEFT_WASH_MASK,
          }}
        >
          <Image
            src="/blurr.png"
            alt=""
            fill
            priority
            className="object-contain object-left-bottom"
          />
        </div>
      </div>

      {/* ========================================= */}
      {/* RIGHT-SIDE GRAPHIC (right.png) */}
      {/* ========================================= */}
      <div
        className={`${CONFIG.rightGraphic} pointer-events-none select-none z-0`}
        style={{
          maskImage: RIGHT_GRAPHIC_MASK,
          WebkitMaskImage: RIGHT_GRAPHIC_MASK,
        }}
      >
        <Image
          src="/right.png"
          alt=""
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Mobile version of the right side graphic completely removed/commented out here to hide it on smaller screens */}

      {/* ========================================= */}
      {/* TOP RIGHT MASK SVG (Blends the upper edge) */}
      {/* ========================================= */}
      <div className={CONFIG.topMask}>
        <svg width="1111" height="748" viewBox="0 0 1111 748" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_961_151)">
            <rect x="174.199" y="174.2" width="1312" height="399" fill="#FDFDFC"/>
          </g>
          <defs>
            <filter id="filter0_f_961_151" x="-0.000778198" y="0.000198364" width="1660.4" height="747.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="87.1" result="effect1_foregroundBlur_961_151"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* ========================================= */}
      {/* 🌟 BOTTOM EDGE MASK (USING BlurDivider) */}
      {/* ========================================= */}
      <BlurDivider className={CONFIG.bottomMaskPosition} />

      {/* ========================================= */}
      {/* TEXT CONTENT & ANIMATIONS */}
      {/* ========================================= */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-[680px] text-center mx-auto md:mx-0 md:ml-[8%] lg:ml-[10%]">

          {/* ANIMATED HEADING */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:relative lg:left-54 max-w-[520px] mx-auto md:mx-0 font-readex-pro text-[26px] sm:text-[36px] md:text-[42px] lg:text-[40px] font-light leading-[1.2] tracking-tight text-black"
          >
            Leadership Shapes The Way People Experience Work And{' '}
            <span className="italic font-serif font-light text-[#9564F4]">
              therefore life.
            </span>
          </motion.h2>

          {/* ANIMATED PARAGRAPH */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="mt-4 lg:relative lg:left-34 font-outfit sm:mt-3 text-[14px] sm:text-[15px] md:text-[17px] text-neutral-800 font-medium leading-relaxed"
          >
            If this resonates, let's have a conversation.
            <br className="hidden sm:block" />
            {' '}We reply within a day — always personally.
          </motion.p>

          {/* ANIMATED BUTTON CONTAINER */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="mt-6 sm:mt-4"
          >
            <button
              type="button"
              className="inline-flex font-outfit lg:relative lg:left-34 items-center justify-center px-4 py-2 rounded-full border border-neutral-900 text-[14px] sm:text-[15px] font-medium text-neutral-900 tracking-wide transition-colors duration-300 hover:bg-neutral-900 hover:text-white shadow-sm cursor-pointer"
            >
              Start a Private Conversation
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}