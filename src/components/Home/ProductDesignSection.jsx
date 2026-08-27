import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ProductDesignSection = () => {
  const [hovered, setHovered] = useState(false);

  const businessVerticals = [
    "Automotive Product Design",
    "Home Appliances",
    "Mould Design",
    "Mould Flow Analysis",
    "Computer-Aided Engineering (CAE)",
  ];

  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#FDFDFD]
        py-8
        sm:py-10
        lg:py-12
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[280px]
          top-[15%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#0166FF]/[0.035]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          bottom-[5%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#F05C36]/[0.035]
          blur-[150px]
        "
      />

      {/* =====================================================
          SUBTLE ENGINEERING GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(#0B1220 1px, transparent 1px),
            linear-gradient(90deg, #0B1220 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            items-center
            gap-8
            lg:grid-cols-[1fr_1fr]
            lg:gap-0
          "
        >
          {/* =================================================
              IMAGE SIDE
          ================================================= */}

          <div
            className="
              relative
              z-10
              w-full
              lg:pr-10
            "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className="
                group
                relative
                h-[380px]
                w-full
                max-w-[760px]
                overflow-hidden
                rounded-[4px]
                bg-[#0B1220]
                sm:h-[480px]
                lg:h-[600px]
                transform-gpu
              "
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <img
                src="/handShake.png"
                alt="DesignCurve Product Engineering"
                draggable="false"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  transform-gpu
                  transition-all
                  ease-[cubic-bezier(.16,1,.3,1)]
                "
                style={{
                  transform: hovered
                    ? "scale(1.055) translate3d(0, -4px, 0)"
                    : "scale(1) translate3d(0, 0, 0)",
                  transitionDuration: "1800ms",
                }}
              />

              {/* =================================================
                  DARK CINEMATIC EDGE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/20
                  via-transparent
                  to-black/25
                "
              />

              {/* =================================================
                  BOTTOM GRADIENT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[40%]
                  bg-gradient-to-t
                  from-[#0B1220]/55
                  via-[#0B1220]/10
                  to-transparent
                "
              />

              {/* =================================================
                  BLUE LIGHT
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  right-[-10%]
                  top-[-10%]
                  h-[65%]
                  w-[45%]
                  rounded-full
                  bg-[#0166FF]/20
                  blur-[90px]
                  transition-all
                  ease-[cubic-bezier(.16,1,.3,1)]
                  ${
                    hovered
                      ? "scale-125 opacity-100"
                      : "scale-75 opacity-0"
                  }
                `}
                style={{
                  transitionDuration: "1800ms",
                }}
              />

              {/* =================================================
                  ORANGE LIGHT
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  bottom-[-15%]
                  left-[-10%]
                  h-[45%]
                  w-[40%]
                  rounded-full
                  bg-[#F05C36]/20
                  blur-[80px]
                  transition-all
                  ease-[cubic-bezier(.16,1,.3,1)]
                  ${
                    hovered
                      ? "scale-125 opacity-100"
                      : "scale-75 opacity-0"
                  }
                `}
                style={{
                  transitionDuration: "2000ms",
                }}
              />

              {/* =================================================
                  LUXURY LIGHT SWEEP
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  -left-[55%]
                  top-0
                  h-full
                  w-[28%]
                  skew-x-[-18deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/15
                  to-transparent
                  blur-md
                  transition-all
                  ease-[cubic-bezier(.16,1,.3,1)]
                  ${
                    hovered
                      ? "left-[125%]"
                      : "left-[-55%]"
                  }
                `}
                style={{
                  transitionDuration: "1800ms",
                }}
              />

              {/* =================================================
                  IMAGE INFORMATION
              ================================================= */}

              <div
                className={`
                  absolute
                  bottom-[9%]
                  left-[8%]
                  transition-all
                  ease-[cubic-bezier(.16,1,.3,1)]
                  ${
                    hovered
                      ? "translate-x-3 opacity-100"
                      : "translate-x-0 opacity-90"
                  }
                `}
                style={{
                  transitionDuration: "1200ms",
                }}
              >
                
              </div>

              {/* =================================================
                  IMAGE TOP MARKER
              ================================================= */}

              <div
                className="
                  absolute
                  right-[7%]
                  top-[8%]
                "
              >

              </div>


              {/* =================================================
                  HOVER CORNER
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  bottom-6
                  right-6
                  h-10
                  w-10
                  border-b
                  border-r
                  border-[#F05C36]
                  transition-all
                  duration-1000
                  ${
                    hovered
                      ? "h-14 w-14 opacity-100"
                      : "opacity-60"
                  }
                `}
              />
            </div>
          </div>

          {/* =================================================
              TEXT SIDE
          ================================================= */}

          <div
            className="
              relative
              z-20
              w-full
              lg:pl-8
              xl:pl-12
            "
          >
            {/* =================================================
                TEXT AMBIENT GLOW
            ================================================= */}

            <div
              className={`
                pointer-events-none
                absolute
                -left-16
                top-1/2
                h-[360px]
                w-[360px]
                -translate-y-1/2
                rounded-full
                bg-[#0166FF]/[0.045]
                blur-[120px]
                transition-all
                ease-[cubic-bezier(.16,1,.3,1)]
                ${
                  hovered
                    ? "scale-125 opacity-100"
                    : "scale-75 opacity-0"
                }
              `}
              style={{
                transitionDuration: "1800ms",
              }}
            />

            <div className="relative z-30">
              {/* =================================================
                  SECTION NUMBER
              ================================================= */}

              <div
                className="
                  mb-6
                  flex
                  items-center
                  gap-4
                "
              >
                <span
                  className="
                    text-xs
                    font-black
                    tracking-[0.2em]
                    text-[#0166FF]
                  "
                >
                  01
                </span>

                <span
                  className="
                    h-px
                    w-12
                    bg-[#0B1220]/15
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#0B1220]/40
                  "
                >
                  Product Design
                </span>
              </div>

              {/* =================================================
                  HEADING
              ================================================= */}

              <h2
                className="
                  max-w-[720px]
                  text-4xl
                  font-black
                  leading-[0.94]
                  tracking-[-0.06em]
                  text-[#0B1220]
                  sm:text-5xl
                  lg:text-[4rem]
                  xl:text-[4.15rem]
                "
              >
                We specialize in

                <br />

                <span className="text-[#0166FF]">
                  comprehensive
                </span>

                <br />

                product design

                <br />

                <span className="relative inline-block">
                  &amp; analysis

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[3px]
                      w-16
                      bg-[#F05C36]
                    "
                  />
                </span>
              </h2>

              {/* =================================================
                  STATS
              ================================================= */}

              <div
                className="
                  mt-8
                  grid
                  grid-cols-3
                  border-y
                  border-[#0B1220]/10
                  py-5
                "
              >
                {/* PROJECTS */}

                <div
                  className="
                    border-r
                    border-[#0B1220]/10
                    pr-4
                  "
                >
                  <div
                    className="
                      text-3xl
                      font-black
                      tracking-[-0.06em]
                      text-[#0B1220]
                      sm:text-4xl
                    "
                  >
                    86
                  </div>

                  <div
                    className="
                      mt-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#0B1220]/40
                    "
                  >
                    Projects
                  </div>
                </div>

                {/* CUSTOMERS */}

                <div
                  className="
                    border-r
                    border-[#0B1220]/10
                    px-4
                  "
                >
                  <div
                    className="
                      text-3xl
                      font-black
                      tracking-[-0.06em]
                      text-[#0B1220]
                      sm:text-4xl
                    "
                  >
                    23
                  </div>

                  <div
                    className="
                      mt-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#0B1220]/40
                    "
                  >
                    Customers
                  </div>
                </div>

                {/* EXPERIENCE */}

                <div className="pl-4">
                  <div
                    className="
                      text-3xl
                      font-black
                      tracking-[-0.06em]
                      text-[#0B1220]
                      sm:text-4xl
                    "
                  >
                    18
                  </div>

                  <div
                    className="
                      mt-1
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#0B1220]/40
                    "
                  >
                    Years Experience
                  </div>
                </div>
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                className="
                  mt-7
                  max-w-[650px]
                  text-base
                  leading-7
                  text-[#0B1220]/60
                  sm:text-lg
                "
              >
                Our focus on innovative solutions has driven
                significant growth in our customer base, business
                operations, and market value, particularly within
                the automotive sector.
              </p>

              {/* =================================================
                  BUSINESS VERTICALS
              ================================================= */}

              <div className="mt-7">
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#F05C36]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.28em]
                      text-[#0B1220]/40
                    "
                  >
                    Key Business Verticals
                  </span>
                </div>

                <div
                  className="
                    grid
                    max-w-[680px]
                    grid-cols-1
                    gap-x-8
                    gap-y-3
                    sm:grid-cols-2
                  "
                >
                  {businessVerticals.map((item) => (
                    <div
                      key={item}
                      className="
                        group/item
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          relative
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                        "
                      >
                        <span
                          className="
                            absolute
                            inset-0
                            rounded-full
                            bg-[#0166FF]/10
                            transition-transform
                            duration-500
                            group-hover/item:scale-125
                          "
                        />

                        <span
                          className="
                            relative
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-[#0166FF]
                          "
                        />
                      </span>

                      <span
                        className="
                          text-xs
                          font-semibold
                          leading-5
                          text-[#0B1220]/60
                          transition-colors
                          duration-500
                          group-hover/item:text-[#0B1220]
                        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* =================================================
                  CTA
              ================================================= */}

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          IMAGE → TEXT CONNECTION
      ====================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          left-[38%]
          top-[53%]
          hidden
          h-px
          w-[18%]
          bg-gradient-to-r
          from-transparent
          via-[#0166FF]/25
          to-transparent
          transition-all
          ease-[cubic-bezier(.16,1,.3,1)]
          ${
            hovered
              ? "translate-x-5 opacity-100"
              : "translate-x-0 opacity-0"
          }
          lg:block
        `}
        style={{
          transitionDuration: "1800ms",
        }}
      />

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-6
          bg-gradient-to-t
          from-[#FDFDFD]
          to-transparent
        "
      />

      {/* =====================================================
          IMAGE DRAG PREVENTION
      ====================================================== */}

      <style>{`
        img {
          user-select: none;
          -webkit-user-drag: none;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
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

export default ProductDesignSection;