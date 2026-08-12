// src/components/ConversationCTASection.js
import Image from "next/image";
import { motion } from "framer-motion";

export default function ConversationCTASection() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white py-32 md:py-40"
    >
      {/* Lower-left ambient purple glow — radial mask fades every direction, no rectangle edges anywhere */}
      <div
        className="pointer-events-none absolute -bottom-40 -left-32 w-[750px] h-[650px] md:w-[950px] md:h-[800px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 65% at 35% 65%, black 0%, black 35%, transparent 80%)",
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
      </div>

      {/* White blur mask pasted over the bottom of the left glow, as provided */}
      <svg
        className="absolute pointer-events-none"
        width="1920"
        height="813"
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

      {/* Right-side folded ribbon graphic — top, bottom, AND left edges all faded so no side of the box is a hard line */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[520px] md:w-[420px] lg:w-[530px] overflow-hidden">
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
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl leading-tight text-black"
        >
          Leadership Shapes The Way People Experience Work And{" "}
          <span className="italic text-purple-500">therefore life.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-6 text-base md:text-lg text-gray-600"
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
          className="mt-8"
        >
          <button className="rounded-full border border-purple-300 px-8 py-3 text-sm text-black hover:bg-purple-50 transition-colors">
            Start a Private Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}