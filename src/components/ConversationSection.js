import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ConversationCTASection() {
  return (
    <section id="contact" className="relative mt-10 w-full bg-white overflow-hidden pt-8 pb-20 sm:pt-12 sm:pb-28 md:pt-16 md:pb-36 lg:pt-16 lg:pb-44 lg:-mt-35 font-sans">

      {/* ========================================= */}
      {/* SOFT PURPLE WASH — Using blur.png in lower left, only top edge blended */}
      {/* ========================================= */}
      <div className="absolute left-0 bottom-0 w-full sm:w-[95%] md:w-[85%] lg:w-[78%] xl:w-[72%] h-[75%] sm:h-[80%] md:h-[85%] pointer-events-none select-none z-0">
        <div
          className="relative w-full h-full"
          style={{
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 18%, black 88%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 18%, black 88%, transparent 100%)',
          }}
        >
          <Image
            src="/blur.png"
            alt=""
            fill
            priority
            className="object-cover object-left-bottom mix-blend-normal opacity-90"
          />
        </div>
      </div>

      {/* ========================================= */}
      {/* RIGHT-SIDE GRAPHIC — purple ribbon asset, full element, top/bottom blended only */}
      {/* ========================================= */}
      <div
        className="hidden md:block absolute top-0 right-0 h-screen w-[44%] lg:w-[38%] xl:w-[80%] pointer-events-none select-none z-0"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
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

      {/* Softer, smaller version bled behind content on mobile */}
      <div
        className="md:hidden absolute -top-10 -right-20 w-[240px] h-[360px] opacity-70 pointer-events-none select-none z-0"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <Image
          src="/right.png"
          alt=""
          fill
          className="object-contain object-right"
           animate-pulse
        />
      </div>

      {/* ========================================= */}
      {/* BOTTOM EDGE BLUR MASK — smoothly blends bottom edges into white */}
      {/* ========================================= */}
      <div className="absolute bottom-0 left-0 w-full h-36 md:h-56 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12">
        <div className="max-w-[680px] text-center mx-auto md:mx-0 md:ml-[8%] lg:ml-[10%]">

          {/* ANIMATED HEADING: Slides gracefully from the LEFT */}
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

          {/* ANIMATED PARAGRAPH: Slides gracefully from the RIGHT */}
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

          {/* ANIMATED BUTTON CONTAINER: Slides gracefully from the RIGHT */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="mt-6 sm:mt-4"
          >
            <button
              type="button"
              className="inline-flex font-outfit lg:relative lg:left-34 items-center justify-center px-4 py-2 rounded-full border border-neutral-900 text-[14px] sm:text-[15px] font-medium text-neutral-900 tracking-wide transition-colors duration-300 hover:bg-neutral-900 hover:text-white shadow-sm"
            >
              Start a Private Conversation
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}