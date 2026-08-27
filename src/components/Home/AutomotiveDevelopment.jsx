import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const phases = [
  {
    id: "01",
    title: "Concept Phase",
    shortTitle: "Concept",
    image: "/ConceptCar.png",
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
    image: "/DesignCar.png",
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
    image: "/BuildProduction.png",
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
      className="relative overflow-hidden bg-[#FDFDFD] pt-20 pb-0 sm:pt-24 lg:pt-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute -left-[180px] top-[10%] h-[450px] w-[450px] rounded-full bg-[#0166FF]/[0.055] blur-[120px]" />

        {/* Orange glow */}
        <div className="absolute -right-[180px] bottom-[8%] h-[450px] w-[450px] rounded-full bg-[#F05C36]/[0.055] blur-[120px]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-[45%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#0166FF]/[0.025] blur-[120px]" />

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

        {/* Side lines */}
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#0B1220]/[0.035]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#0B1220]/[0.035]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        {/* ================= HEADER ================= */}

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
              mt-8
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

        {/* ================= PROCESS ================= */}

        <div className="relative mt-20 lg:mt-28">
          {/* Connecting line */}
          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-[39px]
              hidden
              h-px
              bg-[#0B1220]/10
              lg:block
            "
          />

          {/* Animated line */}
          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-[39px]
              hidden
              h-px
              overflow-hidden
              lg:block
            "
          >
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

          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-8">
            {phases.map((phase, index) => {
              const isActive = activePhase === index;

              return (
                <div
                  key={phase.id}
                  className="
                    relative
                    animate-[cardReveal_1.8s_cubic-bezier(.16,1,.3,1)_both]
                  "
                  style={{
                    animationDelay: `${1.15 + index * 0.25}s`,
                  }}
                >
                  {/* ================= IMAGE NODE ================= */}

                  <div className="relative z-20 mb-8 flex justify-center">
                    <button
                      onClick={() => setActivePhase(index)}
                      className="group relative outline-none"
                      aria-label={`View ${phase.title}`}
                    >
                      {/* Outer ring */}
                      <span
                        className={`
                          absolute
                          -inset-4
                          rounded-full
                          border
                          transition-all
                          duration-1000
                          ${
                            isActive
                              ? "scale-100 border-[#0166FF]/30 opacity-100"
                              : "scale-75 border-transparent opacity-0"
                          }
                        `}
                      />

                      {/* Rotating ring */}
                      <span
                        className={`
                          absolute
                          -inset-6
                          rounded-full
                          border
                          border-dashed
                          border-[#0166FF]/15
                          ${
                            isActive
                              ? "animate-[spinSlow_12s_linear_infinite]"
                              : ""
                          }
                        `}
                      />

                      {/* Orange outer ring */}
                      <span
                        className={`
                          absolute
                          -inset-8
                          rounded-full
                          border
                          border-[#F05C36]/10
                          transition-all
                          duration-[1400ms]
                          ${
                            isActive
                              ? "scale-100 opacity-100"
                              : "scale-50 opacity-0"
                          }
                        `}
                      />

                      {/* Circular image */}
                      <span
                        className="
                          relative
                          block
                          h-[86px]
                          w-[86px]
                          overflow-hidden
                          rounded-full
                          border-[5px]
                          border-[#FDFDFD]
                          bg-[#0B1220]
                          shadow-[0_15px_45px_rgba(11,18,32,0.18)]
                          transition-all
                          duration-1000
                          ease-[cubic-bezier(.16,1,.3,1)]
                          group-hover:-translate-y-2
                          group-hover:scale-110
                        "
                        style={{
                          boxShadow: isActive
                            ? `0 20px 60px ${phase.color}55`
                            : undefined,
                        }}
                      >
                        <img
                          src={phase.image}
                          alt={phase.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-[1800ms]
                            ease-[cubic-bezier(.16,1,.3,1)]
                            group-hover:scale-125
                          "
                        />

                        {/* Overlay */}
                        <span
                          className="
                            absolute
                            inset-0
                            bg-black/20
                            transition-all
                            duration-700
                            group-hover:bg-black/5
                          "
                        />

                        {/* Shine */}
                        <span
                          className="
                            absolute
                            inset-y-0
                            -left-full
                            w-1/2
                            skew-x-[-20deg]
                            bg-gradient-to-r
                            from-transparent
                            via-white/45
                            to-transparent
                            transition-all
                            duration-[1200ms]
                            group-hover:left-[150%]
                          "
                        />
                      </span>

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
                          shadow-[0_5px_20px_rgba(11,18,32,0.25)]
                          transition-all
                          duration-700
                          group-hover:scale-125
                        "
                      >
                        {phase.id}
                      </span>
                    </button>
                  </div>

                  {/* ================= CARD ================= */}

                  <div
                    className={`
                      group/card
                      relative
                      overflow-hidden
                      rounded-[30px]
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
                      hover:-translate-y-3
                      hover:scale-[1.012]
                      hover:border-[#0166FF]/25
                      hover:shadow-[0_40px_110px_rgba(11,18,32,0.15)]
                    `}
                  >
                    {/* Ambient glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-20
                        -top-20
                        h-[250px]
                        w-[250px]
                        rounded-full
                        bg-[#0166FF]/[0.045]
                        blur-[80px]
                        opacity-0
                        transition-all
                        duration-[1400ms]
                        group-hover/card:opacity-100
                      "
                    />

                    {/* ================= CARD IMAGE ================= */}

                    <button
                      onClick={() => setActivePhase(index)}
                      className="relative block w-full text-left outline-none"
                    >
                      <div className="relative h-[230px] overflow-hidden sm:h-[255px]">
                        {/* Image */}
                        <img
                          src={phase.image}
                          alt={phase.title}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-[1800ms]
                            ease-[cubic-bezier(.16,1,.3,1)]
                            group-hover/card:scale-110
                          "
                        />

                        {/* Cinematic overlay */}
                        <div
                          className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#0B1220]/90
                            via-[#0B1220]/25
                            to-transparent
                          "
                        />

                        {/* Color overlay */}
                        <div
                          className="
                            absolute
                            inset-0
                            opacity-0
                            transition-opacity
                            duration-1000
                            group-hover/card:opacity-100
                          "
                          style={{
                            background: `linear-gradient(135deg, ${phase.color}35, transparent 65%)`,
                          }}
                        />

                        {/* Shine */}
                        <div
                          className="
                            absolute
                            inset-y-0
                            -left-[100%]
                            w-[50%]
                            skew-x-[-20deg]
                            bg-gradient-to-r
                            from-transparent
                            via-white/25
                            to-transparent
                            transition-all
                            duration-[1500ms]
                            group-hover/card:left-[150%]
                          "
                        />

                        {/* Phase badge */}
                        <div className="absolute left-6 top-6">
                          <span
                            className="
                              inline-flex
                              rounded-full
                              border
                              border-white/20
                              bg-black/25
                              px-3
                              py-1.5
                              text-[8px]
                              font-bold
                              uppercase
                              tracking-[0.25em]
                              text-white
                              backdrop-blur-md
                            "
                          >
                            Phase {phase.id}
                          </span>
                        </div>

                        {/* Number */}
                        <div className="absolute right-5 top-5">
                          <span
                            className="
                              flex
                              h-11
                              w-11
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-white/20
                              bg-black/25
                              text-xs
                              font-bold
                              text-white
                              backdrop-blur-md
                              transition-all
                              duration-700
                              group-hover/card:scale-110
                              group-hover/card:rotate-6
                            "
                          >
                            {phase.id}
                          </span>
                        </div>

                        {/* Image title */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="overflow-hidden">
                            <span
                              className="
                                mb-2
                                block
                                translate-y-3
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                opacity-0
                                transition-all
                                duration-700
                                group-hover/card:translate-y-0
                                group-hover/card:opacity-100
                              "
                              style={{
                                color: phase.color,
                              }}
                            >
                              Automotive Engineering
                            </span>
                          </div>

                          <h3
                            className="
                              text-2xl
                              font-black
                              tracking-[-0.035em]
                              text-white
                              transition-all
                              duration-700
                              group-hover/card:translate-x-1
                              sm:text-3xl
                            "
                          >
                            {phase.title}
                          </h3>
                        </div>
                      </div>
                    </button>

                    {/* ================= DESCRIPTION ================= */}

                    <div className="relative p-7 sm:p-8">
                      <p
                        className="
                          pr-8
                          text-sm
                          leading-6
                          text-[#0B1220]/55
                          transition-all
                          duration-700
                          group-hover/card:text-[#0B1220]/75
                        "
                      >
                        {phase.description}
                      </p>

                      {/* Mobile arrow */}
                      <button
                        onClick={() => setActivePhase(index)}
                        className="
                          absolute
                          right-7
                          top-7
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          lg:hidden
                        "
                        style={{
                          backgroundColor: `${phase.color}12`,
                          color: phase.color,
                        }}
                        aria-label={`Toggle ${phase.title}`}
                      >
                        <ChevronDown
                          size={18}
                          className="transition-transform duration-700"
                          style={{
                            transform: isActive
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          }}
                        />
                      </button>
                    </div>

                    {/* ================= ITEMS ================= */}

                    <div
                      className={`
                        border-t
                        border-[#0B1220]/[0.07]
                        transition-all
                        duration-[900ms]
                        ease-[cubic-bezier(.16,1,.3,1)]
                        ${
                          isActive
                            ? "max-h-[800px] opacity-100"
                            : "max-h-0 overflow-hidden opacity-0 lg:max-h-[800px] lg:opacity-100"
                        }
                      `}
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
                              hover:translate-x-1
                              hover:bg-[#0B1220]/[0.025]
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
                                className="
                                  transition-transform
                                  duration-500
                                  group-hover/item:scale-110
                                "
                              />
                            </span>

                            {/* Text */}
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

                            {/* Number */}
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

                    {/* ================= BOTTOM ACCENT ================= */}

                    <div className="relative h-[3px] w-full overflow-hidden">
                      <div
                        className="
                          absolute
                          inset-0
                          transition-all
                          duration-[1200ms]
                        "
                        style={{
                          background: `linear-gradient(90deg, ${phase.color}, transparent)`,
                          opacity: isActive ? 1 : 0.35,
                        }}
                      />

                      <div
                        className="
                          absolute
                          inset-y-0
                          -left-full
                          w-1/2
                          bg-white/70
                          transition-all
                          duration-[1200ms]
                          group-hover/card:left-[150%]
                        "
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}

      <style>{`
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

        @keyframes automotiveLine {
          0% {
            transform: translateX(-150%);
          }

          100% {
            transform: translateX(450%);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

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