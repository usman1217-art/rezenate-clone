import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BedIcon = ({ className = "w-6 h-6 text-[#9564F4]", ...props }) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M2.71484 5.42847V27.1428"
      stroke="currentColor"
      strokeWidth="2.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.71484 10.8569H27.1434C27.8633 10.8569 28.5537 11.1429 29.0627 11.6519C29.5717 12.161 29.8577 12.8513 29.8577 13.5712V27.1426"
      stroke="currentColor"
      strokeWidth="2.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.71484 23.0713H29.8577"
      stroke="currentColor"
      strokeWidth="2.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.14258 10.8569V23.0712"
      stroke="currentColor"
      strokeWidth="2.71429"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PhilosophySection() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const rightColumnCards = [
    {
      id: "01",
      title: "Meraki",
      desc: "We bring heart to everything we do.",
      alignClass: "lg:ml-0",
    },
    {
      id: "02",
      title: "Wisdom",
      desc: "We make thoughtful decisions.",
      alignClass: "lg:ml-13",
    },
    {
      id: "03",
      title: "Rezolutionary",
      desc: "We believe everyone has the power to shape what happens next.",
      alignClass: "lg:-ml-1",
    },
    {
      id: "04",
      title: "Upekkha",
      desc: "We meet every moment with balance.",
      alignClass: "lg:ml-10",
    },
  ];

  return (
    <section
      id="philosophy"
      className="w-full bg-white pb-0 pt-8 md:pt-12 lg:pb-4 lg:pt-16 overflow-hidden font-sans"
    >
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-8 relative">
        {/* ========================================= */}
        {/* SECTION HEADER */}
        {/* ========================================= */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl font-readex-pro font-light md:text-[42px] relative top-14 lg:text-[42px] tracking-tight text-neutral-900 leading-[1.15]">
            The Way We Work Should Reflect <br />
            <span className="text-[#9564F4] italic font-tartuffo tracking-normal font-light">
              the way we live.
            </span>
          </h2>
        </div>

        {/* ========================================= */}
        {/* MAIN COMPONENT CONTENT GRID */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 relative lg:bottom-28 lg:left-[72px] lg:grid-cols-2 gap-10 lg:gap-0 items-center">
          {/* LEFT COLUMN: Sphere Graphic ONLY */}
          <div className="relative flex flex-col items-center justify-center w-full order-1">
            {/* FIXED: Starts from bottom-left (x: -150, y: 150) */}
            <motion.div
              initial={{ opacity: 0, x: -150, y: 150, rotate: -180 }}
              whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-[110%] sm:w-[90%] lg:left-[72px] lg:bottom-8 lg:w-[110%] xl:w-[135%] aspect-square z-0 mix-blend-multiply mx-auto lg:mx-0"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full relative"
              >
                <Image
                  src="/circle.svg"
                  alt="3D Purple layered circle graphic"
                  fill
                  priority
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Cards 1 to 4 */}
          <div className="relative z-10 w-full max-w-[500px] mx-auto lg:ml-0 lg:-ml-8 xl:-ml-24 flex flex-col gap-4 lg:gap-5 px-2 lg:px-0 order-2">
            {rightColumnCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{
                  opacity: 0,
                  x: isDesktop ? 100 : 0,
                  y: isDesktop ? 0 : 60,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <div
                  className={`bg-white rounded-[24px]  p-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:border-[#9564F4] relative ${card.alignClass}`}
                >
                  <div className="w-14 h-14 shrink-0 bg-[#F4F0FF] rounded-2xl flex items-center justify-center text-[#9564F4]">
                    <BedIcon />
                  </div>

                  <div className="flex-1 mt-1 sm:mt-0 pr-6">
                    <h4 className="text-[21px] font-readex-pro font-normal text-black mb-1">
                      {card.title}
                    </h4>
                    <p className="text-[14px] font-mulish text-black leading-[1.2]">
                      {card.desc}
                    </p>
                  </div>

                  <div className="absolute font-mulish top-6 right-6 sm:static sm:top-auto sm:right-auto text-[#9564F4] text-[12px] font-bold tracking-wider">
                    {card.id}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* MOBILE ONLY CARD 05 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: isDesktop ? 0 : rightColumnCards.length * 0.1,
              }}
              className="block lg:hidden w-full"
            >
              <div className="bg-white rounded-[24px] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:border-[#9564F4] relative">
                <div className="w-14 h-14 shrink-0 bg-[#F4F0FF] rounded-2xl flex items-center justify-center text-[#9564F4]">
                  <BedIcon />
                </div>
                <div className="flex-1 mt-1 sm:mt-0">
                  <h4 className="text-[19px] font-readex-pro font-normal text-black mb-1">
                    Cadence
                  </h4>
                  <p className=" text-[14px] font-mulish text-black leading-relaxed">
                    We move with rhythm and intention.
                  </p>
                </div>
                <div className="absolute top-6 right-6 font-mulish sm:static sm:mt-0 text-[#9564F4] text-[12px] font-bold tracking-wider">
                  05
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ========================================= */}
        {/* DESKTOP ONLY CARD 05 (Slides from Bottom) */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="hidden lg:flex absolute bottom-36 xl:bottom-44 left-[28%] xl:left-[32%] -translate-x-1/2 w-full max-w-[500px] z-30 px-2 lg:px-0"
        >
          <div className="bg-white rounded-[24px] p-6 w-full  flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:border-[#9564F4]">
            <div className="w-14 h-14 shrink-0 bg-[#F4F0FF] rounded-2xl flex items-center justify-center text-[#9564F4]">
              <BedIcon />
            </div>
            <div className="flex-1 mt-1 sm:mt-0">
              <h4 className="text-[21px] font-normal font-readex-pro text-black mb-1">
                Cadence
              </h4>
              <p className="text-[14px] font-mulish text-black leading-1.2">
                We move with rhythm and intention.
              </p>
            </div>
            <div className="absolute font-mulish top-6 right-6 sm:static sm:mt-0 text-[#9564F4] text-[12px] font-bold tracking-wider">
              05
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}