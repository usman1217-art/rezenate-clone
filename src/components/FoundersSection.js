import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FoundersSection() {
  return (
    <section className="relative w-full bg-white pt-16 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-32 lg:pt-28 lg:pb-40 overflow-hidden">
      
      {/* ========================================= */}
      {/* FULL WIDTH SCREEN BACKGROUND IMAGE WITH BLURRED EDGES */}
      {/* ========================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        {/* Top Edge Blur Mask */}
        <div
          className="absolute top-0 left-0 w-full h-40 sm:h-52 md:h-72 z-10"
          style={{
            background:
              'linear-gradient(to bottom, white 0%, white 20%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.4) 75%, transparent 100%)',
          }}
        />

        {/* Full Screen Background Graphic Asset */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/fbg.png" 
            alt="Abstract purple light waves decoration background" 
            fill 
            className="object-cover object-center opacity-80"
            priority
          />
        </div>

        {/* Bottom Edge Blur Mask */}
        <div 
          className="absolute bottom-0 left-0 w-full h-48 sm:h-64 md:h-80 z-10"
          style={{
            background:
              'linear-gradient(to top, white 0%, white 25%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.45) 78%, transparent 100%)',
          }}
        />
      </div>

      {/* ========================================= */}
      {/* MAIN CONTENT CONTAINER */}
      {/* ========================================= */}
      <div id="founders" className="relative z-20 w-full max-w-[1200px] mx-auto px-4 md:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-0.5">
          <h2 className="font-readex-pro font-light text-[28px] sm:text-4xl md:text-[36px] lg:text-[42px] tracking-tight text-neutral-900 leading-[1.15] mb-3 sm:mb-4">
            The <span className="text-[#9564F4] italic font-tartuffo tracking-normal font-light">founders</span>
          </h2>
          <p className="text-[14px] font-outfit sm:text-[15px] md:text-[16px] text-neutral-800 font-medium tracking-wide max-w-[700px] mx-auto px-2">
            Rezenate is founder-led. We believe that leadership can be both strong and kind.
          </p>
        </div>

        {/* ========================================= */}
        {/* FOUNDERS CARDS — MOBILE / TABLET (below lg) */}
        {/* ========================================= */}
        {/* CHANGED: Wrapped the container block to slide smoothly from a slight bottom offset */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-[420px] mx-auto lg:hidden"
        >
          {/* FOUNDER 1: ZAK */}
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden p-6 sm:p-8 flex flex-col items-center text-center bg-gradient-to-br from-[#F5F1FF] via-white to-[#F0EAFE] shadow-[0_8px_30px_rgba(149,100,244,0.08)] border border-purple-100/60">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 shadow-sm">
              <Image src="/zak.png" alt="Zak - The Alchemist" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-semibold text-neutral-900 mb-2 tracking-tight">
              Zak — The Alchemist
            </h3>
            <p className="text-[13px] sm:text-[14px] font-bold text-neutral-900 leading-snug max-w-[280px] mb-2">
              "Leadership begins with honesty and not hierarchy."
            </p>
            <div className="w-12 h-px bg-neutral-300 mb-2" />
            <p className="text-[12px] sm:text-[13px] text-neutral-900 font-medium leading-relaxed max-w-[320px]">
              Zak brings clarity to who companies are, what they stand for, and who should lead them next.
            </p>
          </div>

          {/* FOUNDER 2: CHLOE */}
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden p-6 sm:p-8 flex flex-col items-center text-center bg-gradient-to-br from-[#F5F1FF] via-white to-[#F0EAFE] shadow-[0_8px_30px_rgba(149,100,244,0.08)] border border-purple-100/60">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 shadow-sm">
              <Image src="/chloe.png" alt="Chloe - The Architect" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-semibold text-neutral-900 mb-2 tracking-tight">
              Chloe — The Architect
            </h3>
            <p className="text-[13px] sm:text-[14px] font-bold text-neutral-900 leading-snug max-w-[280px] mb-2">
              "We built Rezenate to make leadership feel human again."
            </p>
            <div className="w-12 h-px bg-neutral-300 mb-2" />
            <p className="text-[12px] sm:text-[13px] text-neutral-900 font-medium leading-relaxed max-w-[320px]">
              Chloe brings structure, psychology, and emotional intelligence to every engagement, ensuring great partnerships are built to last.
            </p>
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* FOUNDERS CARDS — DESKTOP / TABLET (lg and up) */}
        {/* ========================================= */}
        {/* CHANGED: Converted container into a motion.div to execute the bottom up fade entrance smoothly */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="hidden lg:block relative w-full max-w-[840px] mx-auto overflow-hidden"
          style={{ aspectRatio: '1194 / 780' }}
        >
          {/* Single background asset */}
          <Image
            src="/img-cover.png"
            alt="Card background"
            fill
            className="object-cover object-center pointer-events-none select-none z-0"
          />

          {/* White blurred edge fades */}
          <div className="absolute top-0 left-0 w-full h-8 md:h-12 bg-gradient-to-b from-white via-white/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-gradient-to-t from-white via-white/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 left-0 h-full w-8 md:w-12 bg-gradient-to-r from-white via-white/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-8 md:w-12 bg-gradient-to-l from-white via-white/60 to-transparent z-10 pointer-events-none" />

          {/* FOUNDER 1: ZAK */}
          <div
            className="absolute z-20 flex flex-col items-center justify-start text-center px-6 md:px-10 pt-8 md:pt-10"
            style={{
              left: '3.0%',
              top: '8.0%',
              width: '44.0%',
              height: '84.0%',
            }}
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-[130px] md:h-[130px] rounded-full overflow-hidden mb-3 md:mb-4 shadow-sm">
              <Image 
                src="/zak.png" 
                alt="Zak - The Alchemist"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-[16px] font-readex-pro sm:text-[18px] md:text-[21px] font-normal text-neutral-900 mb-2 md:mb-3 tracking-tight">
              Zak — The Alchemist
            </h3>

            <p className="text-[12px] font-outfit sm:text-[13px] md:text-[15px] font-bold text-neutral-900 leading-snug max-w-[250px] mb-2 md:mb-3 flex items-center justify-center min-h-[36px] md:min-h-[46px]">
              "Leadership begins with honesty and not hierarchy."
            </p>

            <div className="w-20 md:w-50 h-px bg-[#9564F4] mb-2 md:mb-4" />

            <p className="text-[11px] font-outfit sm:text-[12.5px] md:text-[15px] text-neutral-900 font-medium leading-relaxed max-w-[240px]">
              Zak brings clarity to who companies are, what they stand for, and who should lead them next.
            </p>
          </div>

          {/* FOUNDER 2: CHLOE */}
          <div
            className="absolute z-20 flex flex-col items-center justify-start text-center px-6 md:px-10 pt-8 md:pt-10"
            style={{
              left: '53.0%',
              top: '8.0%',
              width: '44.0%',
              height: '84.0%',
            }}
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-[130px] md:h-[130px] rounded-full overflow-hidden mb-3 md:mb-4 shadow-sm">
              <Image 
                src="/chloe.png" 
                alt="Chloe - The Architect"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-[16px] font-readex-pro sm:text-[18px] md:text-[21px] font-normal text-neutral-900 mb-2 md:mb-3 tracking-tight">
              Chloe — The Architect
            </h3>

            <p className="text-[12px] font-outfit sm:text-[13px] md:text-[15px] font-bold text-neutral-900 leading-snug max-w-[290px] mb-2 md:mb-3 flex items-center justify-center min-h-[36px] md:min-h-[46px]">
              "We built Rezenate to make leadership feel human again."
            </p>

            <div className="w-12 md:w-50 h-px bg-[#9564F4] mb-2 md:mb-4" />

            <p className="text-[11px] font-outfit sm:text-[12.5px] md:text-[15px] text-neutral-900 font-medium leading-relaxed max-w-[290px]">
              Chloe brings structure, psychology, and emotional intelligence to every engagement, ensuring great partnerships are built to last.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}