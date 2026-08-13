// src/components/ConversationCTASection.js
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConversationCTASection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white py-20 sm:py-24 md:py-32 lg:py-40"
    >
      {/* Lower-left ambient purple glow — radial mask fades every direction, no rectangle edges anywhere */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 w-[420px] h-[380px] sm:-bottom-32 sm:-left-28 sm:w-[600px] sm:h-[520px] md:-bottom-40 md:-left-32 md:w-[1100px] md:h-[900px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 65% at 35% 65%, black 0%, black 55%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 35% 65%, black 0%, black 35%, transparent 80%)",
        }}
      >
        <Image
          src="/blurr.png"
          alt=""
          fill
          priority
          className="object-cover "
        />
        {/* Top fade — plain white gradient overlay blends the top edge of the glow into the section's white bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 30%)",
          }}
        />
      </div>

      {/* White blur mask pasted over the bottom of the left glow, as provided */}
      <svg
        className="absolute pointer-events-none w-[1200px] h-[508px] md:w-[1920px] md:h-[813px]"
        viewBox="0 0 1920 843"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_269_122)">
          <path d="M-407 189.3H2093V653.3H-407V189.3Z" fill="#FDFDFC" />
        </g>
        <defs>
          <filter
            id="filter0_f_269_122"
            x="-596.3"
            y="-0.000198364"
            width="2878.6"
            height="842.6"
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
              result="effect1_foregroundBlur_269_122"
            />
          </filter>
        </defs>
      </svg>

      {/* Right-side folded ribbon graphic — hidden on mobile, top/bottom/left edges faded so no side is a hard line */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[520px] hidden md:block md:w-[420px] lg:w-[430px] overflow-hidden">
        <div
          className="relative w-full h-full"
          style={{
            maskImage: `
              linear-gradient(to bottom, transparent 0%, black 18%, black 55%, transparent 100%),
              linear-gradient(to right, transparent 0%, black 25%)
            `,
            WebkitMaskImage: `
              linear-gradient(to bottom, transparent 0%, black 18%, black 55%, transparent 100%),
              linear-gradient(to right, transparent 0%, black 25%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <Image
            src="/right.png"
            alt=""
            fill
            priority
            className="object-cover object-left"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative font-readex-pro w-full sm:w-[90%] md:w-155 font-light z-10 mx-auto max-w-3xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-[42px] leading-[1.15] md:leading-[1.1] text-black"
        >
          Leadership Shapes The Way People Experience Work And{" "}
          <span className="italic font-light font-tartuffo text-purple-500">therefore life.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-3 md:mt-2 font-outfit text-sm leading-[1.1] sm:text-base md:text-lg text-black"
        >
          If this resonates, let&apos;s have a conversation.
          <br />
          We reply within a day — always personally.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-5 md:mt-3"
        >
          <button className="rounded-full border border-black px-6 sm:px-8 py-2 font-outfit text-sm text-black hover:bg-black hover:text-white transition-all cursor-pointer">
            Start a Private Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}