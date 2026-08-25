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
            gap-0
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          {/* =================================================
              IMAGE SIDE
          ================================================= */}

          <div
            className="
              relative
              z-20
              w-full
              lg:-mr-24
            "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div
              className={`
                group
                relative
                h-[380px]
                w-full
                overflow-hidden
                sm:h-[480px]
                lg:h-[620px]
                max-w-[850px]

                transform-gpu
                transition-transform
                ease-[cubic-bezier(.16,1,.3,1)]

                ${
                  hovered
                    ? "lg:translate-x-[7%] lg:scale-[1.035]"
                    : "translate-x-0 scale-100"
                }
              `}
              style={{
                transitionDuration: "2200ms",
              }}
            >
              {/* =================================================
                  IMAGE
              ================================================= */}

              <img
                src="https://designcurvetech.com/wp-content/uploads/2025/02/r2.png"
                alt="Automotive Product Design"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center

                  transition-transform
                  ease-[cubic-bezier(.16,1,.3,1)]
                "
                style={{
                  transform: hovered ? "scale(1.04)" : "scale(1)",
                  transitionDuration: "2400ms",
                }}
              />

              {/* =================================================
                  CINEMATIC DARK EDGE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/10
                  via-transparent
                  to-black/10
                "
              />

              {/* =================================================
                  BOTTOM CINEMATIC GRADIENT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[32%]
                  bg-gradient-to-t
                  from-[#0B1220]/35
                  to-transparent
                "
              />

              {/* =================================================
                  BLUE LIGHT EDGE
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-full
                  w-[35%]

                  bg-gradient-to-l
                  from-[#0166FF]/[0.14]
                  via-[#0166FF]/[0.035]
                  to-transparent

                  transition-opacity
                  duration-[1800ms]

                  ${
                    hovered
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              />

              {/* =================================================
                  ORANGE LIGHT EDGE
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  bottom-0
                  right-[5%]
                  h-[35%]
                  w-[28%]

                  bg-gradient-to-t
                  from-[#F05C36]/20
                  to-transparent

                  blur-[35px]

                  transition-opacity
                  duration-[2200ms]

                  ${
                    hovered
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
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
                      ? "translate-x-4 opacity-100"
                      : "translate-x-0 opacity-85"
                  }
                `}
                style={{
                  transitionDuration: "1800ms",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#0166FF]
                      shadow-[0_0_14px_rgba(1,102,255,0.9)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-white
                      drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
                    "
                  >
                    Product Engineering
                  </span>
                </div>
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
                <div className="flex items-center gap-3">
                  <span
                    className="
                      text-[8px]
                      font-bold
                      tracking-[0.25em]
                      text-white/75
                      drop-shadow-lg
                    "
                  >
                    01 / PRODUCT
                  </span>

                  <span className="h-px w-10 bg-[#F05C36]" />
                </div>
              </div>

              {/* =================================================
                  HOVER EXPANSION LINE
              ================================================= */}

              <div
                className={`
                  pointer-events-none
                  absolute
                  right-[-20px]
                  top-1/2
                  h-px
                  w-[140px]

                  bg-gradient-to-r
                  from-[#0166FF]/60
                  to-transparent

                  transition-all
                  ease-[cubic-bezier(.16,1,.3,1)]

                  ${
                    hovered
                      ? "translate-x-[70px] opacity-100"
                      : "translate-x-0 opacity-0"
                  }
                `}
                style={{
                  transitionDuration: "2200ms",
                }}
              />
            </div>
          </div>

          {/* =================================================
              TEXT SIDE
          ================================================= */}

          <div
            className="
              relative
              z-[100]
              mt-8
              lg:mt-0
              lg:pl-14
            "
          >
            {/* =================================================
                TEXT AMBIENT GLOW
            ================================================= */}

            <div
              className={`
                pointer-events-none
                absolute
                -left-20
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
                transitionDuration: "2200ms",
              }}
            />

            <div className="relative z-[110]">
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
                  lg:text-[4.15rem]
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
                  & analysis

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

              <div className="mt-8">
                <a
                  href="#services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#0B1220]
                    px-6
                    py-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    text-white
                    transition-all
                    duration-700
                    hover:-translate-y-1
                    hover:bg-[#0166FF]
                    hover:shadow-[0_18px_45px_rgba(1,102,255,0.22)]
                  "
                >
                  Explore Product Design

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      transition-transform
                      duration-700
                      group-hover:rotate-45
                    "
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          IMAGE → TEXT LIGHT CONNECTION
      ====================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          left-[39%]
          top-[53%]
          hidden
          h-px
          w-[25%]

          bg-gradient-to-r
          from-transparent
          via-[#0166FF]/25
          to-transparent

          transition-all
          ease-[cubic-bezier(.16,1,.3,1)]

          ${
            hovered
              ? "translate-x-8 opacity-100"
              : "translate-x-0 opacity-0"
          }

          lg:block
        `}
        style={{
          transitionDuration: "2400ms",
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
    </section>
  );
};

export default ProductDesignSection;