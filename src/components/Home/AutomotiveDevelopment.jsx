import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Layers3,
  Box,
  Factory,
} from "lucide-react";

const phases = [
  {
    id: "01",
    title: "Concept Phase",
    shortTitle: "Concept",
    icon: Layers3,
    color: "#0166FF",
    description:
      "Transforming initial ideas into technically viable automotive concepts through analysis, packaging, benchmarking and regulatory studies.",
    items: [
      "Concept creation",
      "Surface Analysis",
      "Radius Analysis",
      "Draft analysis",
      "Passive safety analysis",
      "Regulation check",
      "Packaging Study",
      "Master section creation",
      "Benchmarking",
      "Post process study",
    ],
  },
  {
    id: "02",
    title: "Design Phase",
    shortTitle: "Design",
    icon: Box,
    color: "#F05C36",
    description:
      "Developing detailed engineering solutions through 3D modelling, drawings, tolerance analysis, BOM, DFMEA and prototype support.",
    items: [
      "Master section updation",
      "3D modeling",
      "2D drawing",
      "Tolerance stack",
      "BOM",
      "DFMEA",
      "VA/VE",
      "DVP Support",
      "Prototype support",
      "Data management",
    ],
  },
  {
    id: "03",
    title: "Build & Production",
    shortTitle: "Production",
    icon: Factory,
    color: "#0166FF",
    description:
      "Supporting the transition from engineering design to physical build, trials, testing, process development and production.",
    items: [
      "Tool Development",
      "SPM and post process development",
      "ECN",
      "Build & trial Support",
      "Physical test support",
    ],
  },
];

const AutomotiveDevelopment = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section
      id="automotive-development"
      className="relative overflow-hidden bg-[#FDFDFD] py-0"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue glow */}
        <div className="absolute left-[-180px] top-[15%] h-[450px] w-[450px] rounded-full bg-[#0166FF]/[0.055] blur-[120px]" />

        {/* Orange glow */}
        <div className="absolute right-[-180px] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#F05C36]/[0.055] blur-[120px]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#0B1220 1px, transparent 1px),
              linear-gradient(90deg, #0B1220 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Label */}
          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
              animate-[luxuryFade_1.8s_cubic-bezier(.16,1,.3,1)_both]
            "
          >
            <span
              className="
                h-px
                w-10
                origin-left
                bg-[#0166FF]
                animate-[lineLuxury_1.8s_cubic-bezier(.16,1,.3,1)_0.2s_both]
              "
            />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#0166FF]
              "
            >
              Our Process
            </span>

            <span
              className="
                h-px
                w-10
                origin-right
                bg-[#F05C36]
                animate-[lineLuxury_1.8s_cubic-bezier(.16,1,.3,1)_0.35s_both]
              "
            />
          </div>

          {/* Heading */}
          <h2
            className="
              text-4xl
              font-black
              leading-[0.95]
              tracking-[-0.055em]
              text-[#0B1220]
              sm:text-5xl
              lg:text-7xl
              animate-[headingLuxury_2s_cubic-bezier(.16,1,.3,1)_0.35s_both]
            "
          >
            Automotive Product
            <br />

            <span
              className="
                relative
                inline-block
                text-[#0166FF]
                animate-[blueTextLuxury_2.2s_cubic-bezier(.16,1,.3,1)_0.55s_both]
              "
            >
              Design & Development

              {/* Luxury underline */}
              <span
                className="
                  absolute
                  -bottom-3
                  left-0
                  h-[3px]
                  w-full
                  origin-left
                  bg-gradient-to-r
                  from-[#0166FF]
                  via-[#0166FF]
                  to-[#F05C36]
                  opacity-70
                  animate-[underlineLuxury_2s_cubic-bezier(.16,1,.3,1)_1s_both]
                "
              />
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-[#0B1220]/55
              animate-[descriptionLuxury_2s_cubic-bezier(.16,1,.3,1)_0.9s_both]
              sm:text-base
            "
          >
            From initial concept creation to engineering design and
            production support, we provide comprehensive solutions across
            the complete automotive product development lifecycle.
          </p>
        </div>

        {/* =====================================================
            PROCESS FLOW
        ====================================================== */}

        <div className="relative mt-20 lg:mt-28">

          {/* Desktop connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[39px] hidden h-px bg-[#0B1220]/10 lg:block" />

          {/* Animated line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[39px] hidden h-px overflow-hidden lg:block">
            <div
              className="
                h-full
                w-1/3
                bg-gradient-to-r
                from-transparent
                via-[#0166FF]
                to-transparent
              "
              style={{
                animation: "automotiveLine 7s linear infinite",
              }}
            />
          </div>

          {/* Phase nodes */}
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">

            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = activePhase === index;

              return (
                <div
                  key={phase.id}
                  className="relative animate-[cardReveal_1.8s_cubic-bezier(.16,1,.3,1)_both]"
                  style={{
                    animationDelay: `${1.15 + index * 0.25}s`,
                  }}
                >

                  {/* =================================================
                      NODE
                  ================================================= */}

                  <div className="relative z-10 mb-8 flex justify-center">

                    <button
                      onClick={() => setActivePhase(index)}
                      className="group relative"
                      aria-label={`View ${phase.title}`}
                    >

                      {/* Outer ring */}
                      <span
                        className={`absolute -inset-3 rounded-full border transition-all duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                          isActive
                            ? "border-[#0166FF]/30 scale-100 opacity-100"
                            : "border-transparent scale-75 opacity-0"
                        }`}
                      />

                      {/* Second luxury ring */}
                      <span
                        className={`absolute -inset-5 rounded-full border border-[#0166FF]/10 transition-all duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-50 opacity-0"
                        }`}
                      />

                      {/* Node */}
                      <span
                        className="
                          relative
                          flex
                          h-[78px]
                          w-[78px]
                          items-center
                          justify-center
                          rounded-full
                          border-[5px]
                          border-[#FDFDFD]
                          shadow-[0_12px_35px_rgba(11,18,32,0.12)]
                          transition-all
                          duration-[1000ms]
                          ease-[cubic-bezier(.16,1,.3,1)]
                          group-hover:-translate-y-2
                          group-hover:scale-[1.06]
                        "
                        style={{
                          backgroundColor: phase.color,
                          boxShadow: isActive
                            ? `0 18px 55px ${phase.color}40`
                            : undefined,
                        }}
                      >
                        <Icon
                          size={27}
                          strokeWidth={1.8}
                          className="
                            text-white
                            transition-transform
                            duration-[1000ms]
                            ease-[cubic-bezier(.16,1,.3,1)]
                            group-hover:scale-110
                          "
                        />

                        {/* Number */}
                        <span
                          className="
                            absolute
                            -right-2
                            -top-2
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            bg-[#0B1220]
                            text-[9px]
                            font-bold
                            text-white
                            shadow-[0_5px_20px_rgba(11,18,32,0.2)]
                            transition-all
                            duration-700
                            group-hover:scale-110
                          "
                        >
                          {phase.id}
                        </span>
                      </span>
                    </button>
                  </div>

                  {/* =================================================
                      PHASE CARD
                  ================================================= */}

                  <div
                    className={`
                      group/card
                      overflow-hidden
                      rounded-[28px]
                      border
                      bg-white
                      transition-all
                      duration-[1100ms]
                      ease-[cubic-bezier(.16,1,.3,1)]
                      ${
                        isActive
                          ? "border-[#0166FF]/20 shadow-[0_30px_90px_rgba(11,18,32,0.12)]"
                          : "border-[#0B1220]/[0.08] shadow-[0_10px_40px_rgba(11,18,32,0.045)]"
                      }
                      hover:-translate-y-2
                      hover:scale-[1.012]
                      hover:border-[#0166FF]/20
                      hover:shadow-[0_35px_100px_rgba(11,18,32,0.13)]
                    `}
                  >

                    {/* Luxury card glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        h-[250px]
                        w-[250px]
                        rounded-full
                        bg-[#0166FF]/[0.035]
                        blur-[80px]
                        opacity-0
                        transition-all
                        duration-[1400ms]
                        group-hover/card:opacity-100
                      "
                    />

                    {/* Card top */}
                    <button
                      onClick={() => setActivePhase(index)}
                      className="relative w-full text-left"
                    >
                      <div className="p-7 sm:p-8">

                        <div className="mb-5 flex items-start justify-between">

                          <div>

                            <p
                              className="
                                mb-2
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.25em]
                                transition-all
                                duration-700
                                group-hover/card:tracking-[0.32em]
                              "
                              style={{
                                color: phase.color,
                              }}
                            >
                              Phase {phase.id}
                            </p>

                            <h3
                              className="
                                text-2xl
                                font-black
                                tracking-[-0.035em]
                                text-[#0B1220]
                                transition-all
                                duration-[900ms]
                                ease-[cubic-bezier(.16,1,.3,1)]
                                group-hover/card:translate-x-1
                                group-hover/card:tracking-[-0.025em]
                                sm:text-3xl
                              "
                            >
                              {phase.title}
                            </h3>
                          </div>

                          <span
                            className="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              transition-all
                              duration-[800ms]
                              lg:hidden
                            "
                            style={{
                              backgroundColor: `${phase.color}12`,
                              color: phase.color,
                              transform: isActive
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          >
                            <ChevronDown size={18} />
                          </span>

                        </div>

                        <p
                          className="
                            text-sm
                            leading-6
                            text-[#0B1220]/55
                            transition-all
                            duration-[900ms]
                            group-hover/card:text-[#0B1220]/70
                          "
                        >
                          {phase.description}
                        </p>

                      </div>
                    </button>

                    {/* =================================================
                        ITEMS
                    ================================================= */}

                    <div
                      className={`border-t border-[#0B1220]/[0.07] transition-all duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                        isActive
                          ? "max-h-[800px] opacity-100"
                          : "max-h-0 opacity-0 lg:max-h-[800px] lg:opacity-100"
                      }`}
                    >
                      <div className="grid gap-x-4 gap-y-1 p-5 sm:grid-cols-2 sm:p-7">

                        {phase.items.map((item, itemIndex) => (
                          <div
                            key={item}
                            className="
                              group/item
                              flex
                              items-center
                              gap-3
                              rounded-xl
                              px-3
                              py-3
                              transition-all
                              duration-500
                              hover:bg-[#0B1220]/[0.025]
                              hover:translate-x-1
                            "
                          >

                            {/* Check */}
                            <span
                              className="
                                flex
                                h-6
                                w-6
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                transition-all
                                duration-500
                                group-hover/item:scale-110
                              "
                              style={{
                                backgroundColor: `${phase.color}10`,
                                color: phase.color,
                              }}
                            >
                              <Check
                                size={13}
                                strokeWidth={3}
                                className="transition-transform duration-500 group-hover/item:scale-110"
                              />
                            </span>

                            <span
                              className="
                                text-xs
                                font-semibold
                                leading-5
                                text-[#0B1220]/65
                                transition-colors
                                duration-500
                                group-hover/item:text-[#0B1220]
                              "
                            >
                              {item}
                            </span>

                            <span
                              className="
                                ml-auto
                                text-[8px]
                                font-bold
                                text-[#0B1220]/15
                                transition-all
                                duration-500
                                group-hover/item:text-[#0166FF]/40
                              "
                            >
                              {String(itemIndex + 1).padStart(2, "0")}
                            </span>

                          </div>
                        ))}

                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="
                        h-[3px]
                        w-full
                        transition-all
                        duration-[1200ms]
                        ease-[cubic-bezier(.16,1,.3,1)]
                      "
                      style={{
                        background: `linear-gradient(90deg, ${phase.color}, transparent)`,
                        opacity: isActive ? 1 : 0.35,
                      }}
                    />

                  </div>

                </div>
              );
            })}

          </div>
        </div>


        
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`

        /* -----------------------------------------
           SLOW LUXURY HEADING REVEAL
        ----------------------------------------- */

        @keyframes headingLuxury {
          0% {
            opacity: 0;
            transform: translateY(45px);
            filter: blur(14px);
            letter-spacing: -0.02em;
          }

          45% {
            opacity: 0.65;
            filter: blur(6px);
          }

          75% {
            opacity: 0.95;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
            letter-spacing: -0.055em;
          }
        }

        /* -----------------------------------------
           BLUE TEXT REVEAL
        ----------------------------------------- */

        @keyframes blueTextLuxury {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(10px);
          }

          55% {
            opacity: 0.6;
            filter: blur(4px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* -----------------------------------------
           DESCRIPTION
        ----------------------------------------- */

        @keyframes descriptionLuxury {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(7px);
          }

          65% {
            opacity: 0.7;
            filter: blur(2px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* -----------------------------------------
           LABEL
        ----------------------------------------- */

        @keyframes luxuryFade {
          0% {
            opacity: 0;
            transform: translateY(15px);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* -----------------------------------------
           LINE REVEAL
        ----------------------------------------- */

        @keyframes lineLuxury {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }

          60% {
            opacity: 0.7;
          }

          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        /* -----------------------------------------
           UNDERLINE
        ----------------------------------------- */

        @keyframes underlineLuxury {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }

          60% {
            opacity: 0.5;
          }

          100% {
            transform: scaleX(1);
            opacity: 0.7;
          }
        }

        /* -----------------------------------------
           CARDS
        ----------------------------------------- */

        @keyframes cardReveal {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.97);
            filter: blur(8px);
          }

          55% {
            opacity: 0.7;
            filter: blur(2px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* -----------------------------------------
           PROCESS LINE
        ----------------------------------------- */

        @keyframes automotiveLine {
          0% {
            transform: translateX(-150%);
          }

          100% {
            transform: translateX(450%);
          }
        }

        /* -----------------------------------------
           SMALL LUXURY PULSE
        ----------------------------------------- */

        @keyframes luxuryPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.45);
            opacity: 1;
          }
        }

        /* -----------------------------------------
           REDUCED MOTION
        ----------------------------------------- */

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }

      `}</style>
    </section>
  );
};

export default AutomotiveDevelopment;