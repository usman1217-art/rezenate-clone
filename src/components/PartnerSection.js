import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CustomTriangleArrow = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.79492 13.5 L0.000695455 -1.4682e-06 L15.5892 -1.05412e-07 Z"
      fill="#9564F4"
    />
  </svg>
);

export default function PartnerSection() {
  const [expandedStage, setExpandedStage] = useState(null);

  const toggleStage = (num) => {
    setExpandedStage((prev) => (prev === num ? null : num));
  };

  const stages = [
    {
      num: "01",
      title: "Attract",
      desc: "We make your story magnetic.",
      expandedText:
        "We craft a compelling narrative around your leadership needs, positioning your opportunity in a way that draws the right candidates naturally.",
    },
    {
      num: "02",
      title: "Assess",
      desc: "We reveal leadership truth.",
      expandedText:
        "We deploy rigorous evaluation methods to uncover the authentic capabilities, working styles, and cultural add of every candidate before they join.",
    },
    {
      num: "03",
      title: "Align",
      desc: "We create mutual clarity before commitment.",
      expandedText:
        "We ensure absolute alignment between candidate expectations and company realities, forging a foundation built on transparency and trust.",
    },
    {
      num: "04",
      title: "Anchor",
      desc: "We enable new leaders to land and lead.",
      expandedText:
        "We provide structured onboarding and integration support so leaders can confidently navigate their new environment and make an impact from day one.",
    },
    {
      num: "05",
      title: "Ascend",
      desc: "We extend the reach of exceptional leadership.",
      expandedText:
        "We focus on long-term leadership development, helping individuals and executive teams scale their influence across the entire organization.",
    },
  ];

  return (
    <section className="relative w-full bg-white pb-12 pt-4 md:pb-20 lg:pb-2 lg:pt-0 lg:-mt-22 overflow-hidden">
      {/* FULL WIDTH BACKGROUND IMAGE WITH BLURRED EDGES */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
        <div className="absolute top-0 left-0 w-full h-36 md:h-56 bg-gradient-to-b from-white via-white/70 to-transparent z-10" />
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/partner.png"
            alt="Abstract purple light waves decoration background"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-36 md:h-56 bg-gradient-to-t from-white via-white/70 to-transparent z-10" />
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-20 w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div id="how-we-partner" className="text-center mb-10 lg:mb-8">
          <h2 className="text-3xl font-readex-pro md:text-[38px] lg:text-[42px] font-light tracking-tight text-black leading-[1.15] mb-3 sm:mb-4">
            How We{" "}
            <span className="text-[#9564F4] italic font-tartuffo tracking-normal font-light">
              partner
            </span>
          </h2>
          <p className="text-[14.5px] font-outfit sm:text-[15.5px] md:text-[16.5px] text-black font-light leading-[1.2] max-w-[620px] mx-auto px-2">
            We partner with founders and boards to introduce leaders who
            strengthen culture and build momentum without losing what makes the
            company human.
            <br className="hidden md:inline" /> Every engagement moves through
            five deliberate stages.
          </p>
        </div>

        {/* STAGES LIST CONTAINER */}
        <div className="w-full flex max-w-[750px] flex-col gap-4 lg:gap-4 overflow-visible px-2 sm:px-0">
          {stages.map((stage, index) => {
            const isExpanded = expandedStage === stage.num;
            const slideOrigin = index % 2 === 0 ? -60 : 60;

            return (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, x: slideOrigin }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="w-full max-w-[820px] mx-auto relative"
              >
                {/* ANIMATED CARD WRAPPER */}
                <motion.div
                  onClick={() => toggleStage(stage.num)}
                  animate={{
                    backgroundColor: isExpanded
                      ? "rgba(255, 255, 255, 0.85)"
                      : "rgba(255, 255, 255, 0.4)",
                    boxShadow: isExpanded
                      ? "0 12px 40px rgba(149, 100, 244, 0.15), inset 0 0 0 1px rgba(149, 100, 244, 0.45)"
                      : "0 8px 32px rgba(149, 100, 244, 0.04), inset 0 0 0 0px rgba(149, 100, 244, 0)",
                  }}
                  whileHover={{
                    backgroundColor: isExpanded
                      ? "rgba(255, 255, 255, 0.85)"
                      : "rgba(255, 255, 255, 0.7)",
                    boxShadow: isExpanded
                      ? "0 12px 40px rgba(149, 100, 244, 0.15), inset 0 0 0 1px rgba(149, 100, 244, 0.45)"
                      : "0 12px 40px rgba(149, 100, 244, 0.08), inset 0 0 0 0px rgba(149, 100, 244, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col backdrop-blur-xl rounded-[24px] sm:rounded-[35px] py-4 px-4 sm:px-5 sm:pl-7 sm:pr-7 w-full cursor-pointer relative"
                >
                  {/* THIN FADING GRADIENT BORDER */}
                  <div
                    className="absolute inset-0 rounded-[24px] sm:rounded-[35px] pointer-events-none z-0"
                    style={{
                      padding: "1.5px",
                      background:
                        "linear-gradient(to right, rgba(149,100,244,0.45) 0%, rgba(149,100,244,0) 45%, rgba(255,255,255,0) 55%, rgba(255,255,255,0.8) 100%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  {/* BASE ROW CONTENT (Always visible) */}
                  <div className="flex flex-row items-center gap-3 sm:gap-8 relative z-10 w-full">
                    {/* Left Identifier & Title Block */}
                    <div className="flex items-center gap-2 sm:gap-8 shrink-0">
                      <span className="font-readex-pro text-xl sm:text-3xl md:text-[42px] text-[#9564F4] font-light tracking-wide w-7 sm:w-12 text-center">
                        {stage.num}
                      </span>

                      {/* Thin Vertical Divider */}
                      <div className="w-[2px] h-8 sm:h-10 bg-[#9564F4]/20 hidden sm:block" />

                      <h3 className="text-[15px] font-readex-pro sm:text-[18px] md:text-[24px] font-normal text-neutral-900 w-[60px] sm:w-[110px] md:w-[130px]">
                        {stage.title}
                      </h3>
                    </div>

                    {/* Description Sentence */}
                    <div className="flex-1 font-outfit text-[12px] sm:text-[14.5px] md:text-[16px] text-black font-light text-left pr-6 sm:pr-4 line-clamp-2 sm:line-clamp-none">
                      {stage.desc}
                    </div>

                    {/* Right Action Side: Animated Arrow Wrapper */}
                    <motion.div
                      animate={{ rotate: isExpanded ? -180 : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute right-3 sm:static shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 ml-auto flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                    >
                      <CustomTriangleArrow />
                    </motion.div>
                  </div>

                  {/* EXPANDABLE ACCORDION CONTENT */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden w-full relative z-10"
                      >
                        {/* Responsive left margin: zeroed out on mobile so text spans neatly, locked back to desktop spec on sm+ */}
                        <div className="ml-0 sm:ml-2 md:ml-[160px] lg:ml-[10] font-outfit text-[12.5px] sm:text-[14.5px] text-neutral-800 font-normal leading-relaxed pb-1 sm:pb-2 text-left">
                          {stage.expandedText}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
