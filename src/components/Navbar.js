import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Philosophy", id: "philosophy" },
  { label: "How We Partner", id: "how-we-partner" },
  { label: "Founders", id: "founders" },
  { label: "Contact", id: "contact" },
];

const LOGO_CYCLE_DURATION = 5; 
const LOGO_VANISH_AT = 4.80;     
const LOGO_VANISH_END = 4.85;

const LOGO_ARROWS = [
  {
    viewBox: '0 0 589 589',
    path: 'M588.052 0H0L138.843 139.69C145.382 146.268 154.273 149.967 163.548 149.967H434.45V420.931C434.45 430.169 438.12 439.029 444.652 445.561L588.052 588.961V0Z',
    appearStart: 0.35, 
    appearEnd: 0.45,
    className: "w-full h-full bottom-0 left-0",
  },
  {
    viewBox: '0 0 376 378',
    path: 'M375.372 0H0L140.263 140.263C146.476 146.476 154.904 149.967 163.691 149.967H224.496V212.59C224.496 221.377 227.987 229.805 234.2 236.018L375.372 377.19V0Z',
    appearStart: 0.25, 
    appearEnd: 0.35,
    className: "w-[63.83%] h-[64.17%] bottom-0 left-0",
  },
  {
    viewBox: '0 0 167 167',
    path: 'M166.327 166.327V0H0L166.327 166.327Z',
    appearStart: 0.15, 
    appearEnd: 0.25,
    className: "w-[28.35%] h-[28.35%] bottom-0 left-0",
  },
];

function buildLogoKeyframes(appearStart, appearEnd) {
  const startX = -4; 
  const startY = 4;  
  return {
    opacity: [0, 0, 1, 1, 0, 0],
    x: [startX, startX, 0, 0, 0, 0],
    y: [startY, startY, 0, 0, 0, 0],
    times: [0, appearStart, appearEnd, LOGO_VANISH_AT, LOGO_VANISH_END, 1],
  };
}

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const isClickScrolling = useRef(false);

  const scrollToSection = (id, label) => {
    const target = document.getElementById(id);
    if (!target) return;

    isClickScrolling.current = true;
    setActiveNav(label);
    setMobileOpen(false);

    const headerHeight = headerRef.current?.offsetHeight ?? 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top, behavior: "smooth" });

    window.clearTimeout(scrollToSection._t);
    scrollToSection._t = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  };

  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight ?? 0;

    const sections = NAV_ITEMS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const match = NAV_ITEMS.find((n) => n.id === visible[0].target.id);
          if (match) setActiveNav(match.label);
        }
      },
      {
        rootMargin: `-${headerHeight + 10}px 0px -60% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Prevent background scrolling when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed font-outfit top-0 left-0 z-50 w-full bg-transparent px-4 py-3 sm:px-6 md:px-8 md:py-4"
    >
      {/* Dynamic Evolving Border Engine Styles */}
      <style jsx global>{`
        @property --border-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        @keyframes rotateBorder {
          to {
            --border-angle: 360deg;
          }
        }

        .evolving-pill {
          background: linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0.4));
          position: relative;
        }

        .evolving-pill::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          padding: 1.5px;
          background: conic-gradient(
            from var(--border-angle),
            #9564F4 0%,
            rgba(149, 100, 244, 0.3) 25%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(149, 100, 244, 0.3) 75%,
            #9564F4 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: rotateBorder 6s linear infinite;
          pointer-events: none;
        }
      `}</style>

      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* ========================================= */}
        {/* LOGO WRAPPER CONTAINER */}
        {/* ========================================= */}
        <div className="relative md:left-4 lg:left-20 xl:left-40 flex flex-col items-center justify-center gap-1 transition-all duration-300">
          
          <div className="relative top-4 left-1 w-[20px] h-[20px] pointer-events-none select-none">
            <motion.svg
              className="absolute bottom-0 left-0 w-[28.35%] h-[28.35%]"
              style={{ zIndex: 10 }}
              viewBox="0 0 167 167"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: [60, 0, 0, 0, 0],
                y: [-60, 0, 0, 0, 0],
                opacity: [0, 1, 1, 0, 0],
                scale: [0.5, 1, 1, 0, 0]
              }}
              transition={{
                duration: LOGO_CYCLE_DURATION,
                times: [0, 0.15, 0.20, 0.25, 1],
                repeat: Infinity,
                ease: "easeOut"
              }}
            >
              <circle cx="83.5" cy="83.5" r="42" fill="#9564F4" />
            </motion.svg>

            {LOGO_ARROWS.map((arrow, i) => {
              const keyframes = buildLogoKeyframes(arrow.appearStart, arrow.appearEnd);
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
                    duration: LOGO_CYCLE_DURATION,
                    times: keyframes.times,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                >
                  <path d={arrow.path} fill="#9564F4" />
                </motion.svg>
              );
            })}
          </div>

          <Image
            src="/logo.png"
            alt="Rezenate"
            width={160}
            height={28}
            priority
            className="object-contain relative left-6 bottom-1"
          />
        </div>

        {/* ========================================= */}
        {/* EVOLVING NAV PILL CONTAINER */}
        {/* ========================================= */}
        <nav
          className="hidden font-light items-center justify-between rounded-full px-4 lg:px-6 py-3.5 shadow-sm md:flex relative w-auto lg:w-[460px] evolving-pill backdrop-blur-md transition-all duration-300"
        >
          <div
            className="absolute inset-0 bg-repeat opacity-5 rounded-full"
            style={{ backgroundImage: "url('/dots.png')" }}
          />

          {NAV_ITEMS.map(({ label, id }) => {
            const isActive = activeNav === label;
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id, label)}
                className={`relative z-10 flex-1 cursor-pointer whitespace-nowrap rounded-full px-2 lg:px-3 py-1.5 text-center text-[12px] lg:text-[13px] font-medium leading-tight transition-colors group ${
                  isActive
                    ? "bg-[#9564F4] text-white shadow-sm"
                    : "text-gray-800 hover:text-[#9564F4]"
                }`}
              >
                {label}
                {/* Center-out expanding underline hover effect for inactive nav items */}
                {!isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#9564F4] transition-all duration-300 group-hover:w-[70%]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* ========================================= */}
        {/* CTA & MOBILE TOGGLE */}
        {/* ========================================= */}
        <button
          onClick={() => scrollToSection("contact", "Contact")}
          className="hidden md:block cursor-pointer rounded-full relative md:right-4 lg:right-16 xl:right-30 border border-gray-800 px-4.5 py-1 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
        >
          Contact us
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-800 md:hidden z-50 relative"
          aria-label="Open menu"
        >
          <span className="relative flex h-3.5 w-4 flex-col justify-between">
            <span className="h-0.5 w-full bg-gray-900 transition-transform" />
            <span className="h-0.5 w-full bg-gray-900 transition-opacity" />
            <span className="h-0.5 w-full bg-gray-900 transition-transform" />
          </span>
        </button>
      </div>

      {/* ========================================= */}
      {/* RESPONSIVE MOBILE SIDEBAR DRAWER */}
      {/* ========================================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[99] md:hidden"
            />

            {/* Sliding Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85vw] sm:w-[320px] bg-white z-[100] p-6 sm:p-8 flex flex-col shadow-2xl md:hidden"
            >
              <div className="flex justify-end mb-10 mt-2">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900 hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map(({ label, id }) => {
                  const isActive = activeNav === label;
                  return (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id, label)}
                      className={`rounded-2xl px-5 py-3.5 text-left text-[15px] font-medium transition-all ${
                        isActive
                          ? "bg-[#9564F4] text-white shadow-md shadow-purple-500/20"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-auto pb-4">
                <button
                  onClick={() => scrollToSection("contact", "Contact")}
                  className="w-full rounded-2xl border-2 border-gray-900 bg-transparent px-5 py-3.5 text-[15px] font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                >
                  Contact us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}