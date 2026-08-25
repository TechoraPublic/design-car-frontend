import React from "react";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="
        relative
        isolate
        min-h-[calc(100vh-82px)]
        overflow-hidden
        bg-[#FDFDFD]
      "
    >
      {/* =====================================================
          SUBTLE STATIC AMBIENCE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[260px]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0166FF]/[0.025]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[260px]
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#F05C36]/[0.02]
          blur-[150px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
          NO EXTRA TOP / BOTTOM PADDING
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-82px)]
          max-w-[1450px]
          items-center
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div className="w-full">

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="relative z-20 max-w-[850px]">

            {/* =================================================
                TOP LABEL
            ================================================= */}

            <div
              className="
                hero-label
                mb-6
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-12
                  origin-left
                  bg-[#0166FF]
                  animate-[lineReveal_1.2s_cubic-bezier(.16,1,.3,1)_both]
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.32em]
                  text-[#0B1220]/45
                "
              >
                DesignCurve Technologies
              </span>

              <span
                className="
                  h-px
                  w-12
                  origin-right
                  bg-[#F05C36]
                  animate-[lineReveal_1.2s_cubic-bezier(.16,1,.3,1)_0.15s_both]
                "
              />
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1
              className="
                relative
                text-[clamp(4rem,8vw,7.8rem)]
                font-black
                leading-[0.82]
                tracking-[-0.075em]
                text-[#0B1220]
              "
            >
              {/* THINK */}

              <span
                className="
                  hero-word
                  inline-block
                  animate-[luxuryWord_1.2s_cubic-bezier(.16,1,.3,1)_0.15s_both]
                "
              >
                Think
              </span>

              <br />

              {/* BEYOND */}

              <span
                className="
                  hero-word
                  relative
                  inline-block
                  animate-[luxuryWord_1.4s_cubic-bezier(.16,1,.3,1)_0.3s_both]
                "
              >
                Beyond

                {/* Elegant underline */}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-1
                    h-[5px]
                    w-[0.8em]
                    origin-left
                    bg-[#F05C36]
                    animate-[underlineReveal_1.4s_cubic-bezier(.16,1,.3,1)_1s_both]
                  "
                />

                {/* Tiny blue accent */}

                <span
                  className="
                    absolute
                    -right-5
                    bottom-[0.15em]
                    h-2
                    w-2
                    rounded-full
                    bg-[#0166FF]
                    opacity-0
                    shadow-[0_0_18px_rgba(1,102,255,0.5)]
                    animate-[dotReveal_1s_ease-out_1.35s_forwards]
                  "
                />
              </span>
            </h1>

            {/* =================================================
                PREMIUM MICRO LINE
            ================================================= */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-3
                opacity-0
                animate-[fadeUp_1s_cubic-bezier(.16,1,.3,1)_0.8s_forwards]
              "
            >
              <span className="h-[2px] w-5 bg-[#0166FF]" />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#0B1220]/35
                "
              >
                Engineering • Design • Innovation
              </span>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-6
                max-w-[590px]
                text-base
                leading-7
                text-[#0B1220]/60
                opacity-0
                animate-[fadeUp_1.1s_cubic-bezier(.16,1,.3,1)_0.95s_forwards]
                sm:text-lg
                sm:leading-8
              "
            >
              Transforming ideas into intelligent products through
              advanced automotive engineering, product design,
              simulation and technology-driven solutions.
            </p>

            {/* =================================================
                BUTTON
            ================================================= */}

            <div
              className="
                mt-8
                opacity-0
                animate-[fadeUp_1.1s_cubic-bezier(.16,1,.3,1)_1.1s_forwards]
              "
            >
              <a
                href="#projects"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-[#0166FF]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_35px_rgba(1,102,255,0.18)]
                  transition-all
                  duration-700
                  ease-[cubic-bezier(.16,1,.3,1)]
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(1,102,255,0.25)]
                "
              >
                {/* Orange sweep */}

                <span
                  className="
                    absolute
                    inset-0
                    translate-x-[-105%]
                    bg-[#F05C36]
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:translate-x-0
                  "
                />

                {/* Light sweep */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -left-[45%]
                    top-0
                    h-full
                    w-[28%]
                    skew-x-[-20deg]
                    bg-white/20
                    blur-md
                    transition-all
                    duration-[1200ms]
                    ease-out
                    group-hover:left-[120%]
                  "
                />

                {/* Button text */}

                <span className="relative z-10 whitespace-nowrap">
                  Explore the Project
                </span>

                {/* Arrow */}

                <span
                  className="
                    relative
                    z-10
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    transition-all
                    duration-700
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:rotate-45
                    group-hover:bg-white
                    group-hover:text-[#F05C36]
                  "
                >
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2.2}
                    className="
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          VERY SUBTLE RIGHT TYPOGRAPHIC ELEMENT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-1/2
          hidden
          -translate-y-1/2
          lg:block
        "
      >
        <div
          className="
            select-none
            text-[180px]
            font-black
            leading-none
            tracking-[-0.12em]
            text-[#0B1220]/[0.018]
            opacity-0
            animate-[fadeIn_2s_ease-out_1.1s_forwards]
          "
        >
          DC
        </div>

        <div
          className="
            absolute
            bottom-[8px]
            right-[12px]
            h-2
            w-2
            rounded-full
            bg-[#F05C36]
            shadow-[0_0_20px_rgba(240,92,54,0.35)]
          "
        />
      </div>

      {/* =====================================================
          CUSTOM TEXT ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes luxuryWord {
          0% {
            opacity: 0;
            transform: translateY(45px);
            filter: blur(12px);
          }

          60% {
            opacity: 1;
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(25px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes lineReveal {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }

          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes underlineReveal {
          0% {
            width: 0;
            opacity: 0;
          }

          100% {
            width: 0.8em;
            opacity: 1;
          }
        }

        @keyframes dotReveal {
          0% {
            opacity: 0;
            transform: scale(0);
          }

          70% {
            opacity: 1;
            transform: scale(1.3);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;