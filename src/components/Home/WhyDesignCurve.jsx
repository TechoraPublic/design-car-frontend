import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  Zap,
  BadgeCheck,
} from "lucide-react";

const WhyDesignCurve = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeReason, setActiveReason] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      number: "01",
      title: "European Standards",
      text: "We're familiar with European culture and high-quality standards. We connect our customers with local suppliers.",
      icon: Globe2,
    },
    {
      number: "02",
      title: "Data Security",
      text: "Your data security is our top priority. We use secure IT systems to protect your information at every step.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Flexible & Adaptive",
      text: "Our team is flexible and quickly adapts to your changing needs.",
      icon: Zap,
    },
    {
      number: "04",
      title: "Strict Quality Control",
      text: "We maintain strict quality control throughout every stage of product design and development.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        isolate
        overflow-hidden
        bg-[#FDFDFD]
        py-2
        sm:py-3
        lg:py-4
      "
    >
      {/* =====================================================
          BACKGROUND AMBIENCE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[300px]
          top-[5%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#0166FF]/[0.035]
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[300px]
          bottom-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#F05C36]/[0.03]
          blur-[170px]
        "
      />

      {/* =====================================================
          TECHNICAL GRID
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
          backgroundSize: "90px 90px",
        }}
      />

      {/* =====================================================
          BACKGROUND NUMBER
      ====================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          right-[-30px]
          top-[3%]
          select-none
          text-[260px]
          font-black
          leading-none
          tracking-[-0.12em]
          text-[#0B1220]/[0.018]

          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(.16,1,.3,1)]

          ${
            visible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"
          }
        `}
      >
        02
      </div>

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

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="max-w-[900px]">

          {/* eyebrow */}

          <div
            className={`
              mb-5
              flex
              items-center
              gap-4

              transition-all
              duration-[1200ms]
              ease-[cubic-bezier(.16,1,.3,1)]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <span className="h-px w-12 bg-[#0166FF]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-[#0B1220]/40
              "
            >
              Why DesignCurve
            </span>

            <span className="h-px w-12 bg-[#F05C36]" />
          </div>

          {/* =================================================
              LUXURY HEADING
          ================================================= */}

          <h2
            className={`
              max-w-[950px]

              text-5xl
              font-black
              leading-[0.92]
              tracking-[-0.065em]
              text-[#0B1220]

              sm:text-6xl
              lg:text-[6.2rem]

              transition-all
              duration-[1500ms]
              ease-[cubic-bezier(.16,1,.3,1)]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }
            `}
          >
            <span className="inline-block transition-transform duration-700 hover:-translate-y-1">
              Built around
            </span>

            <br />

            <span
              className="
                inline-block
                text-[#0166FF]
                transition-all
                duration-700
                hover:tracking-[-0.045em]
                hover:drop-shadow-[0_8px_25px_rgba(1,102,255,0.18)]
              "
            >
              trust.
            </span>{" "}

            <span className="inline-block transition-transform duration-700 hover:-translate-y-1">
              Built for
            </span>

            <br />

            <span className="relative inline-block">

              <span
                className="
                  relative
                  z-10
                  inline-block
                  transition-all
                  duration-700
                  hover:-translate-y-1
                  hover:tracking-[-0.045em]
                "
              >
                performance.
              </span>

              {/* luxury underline */}

              <span
                className={`
                  absolute
                  -bottom-3
                  left-0
                  h-[4px]
                  bg-[#F05C36]

                  transition-all
                  duration-[1200ms]
                  ease-[cubic-bezier(.16,1,.3,1)]

                  ${
                    visible
                      ? "w-24"
                      : "w-0"
                  }
                `}
              />

              {/* glow */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -bottom-5
                  left-0
                  h-6
                  w-28
                  bg-[#F05C36]/20
                  blur-xl
                  opacity-0
                  transition-opacity
                  duration-700
                  hover:opacity-100
                "
              />

            </span>
          </h2>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className={`
              mt-6
              max-w-[680px]
              text-base
              leading-8
              text-[#0B1220]/55
              sm:text-lg

              transition-all
              duration-[1400ms]
              delay-200
              ease-[cubic-bezier(.16,1,.3,1)]

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            We combine engineering expertise, international standards,
            secure processes and flexible collaboration to deliver
            dependable product development for our customers.
          </p>
        </div>

        {/* =================================================
            WHY DESIGNCURVE
        ================================================= */}

        <div className="mt-10 lg:mt-14">

          <div
            className="
              grid
              gap-10
              lg:grid-cols-[0.95fr_1.05fr]
              lg:gap-20
            "
          >

            {/* =============================================
                REASONS
            ============================================== */}

            <div>
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                const isActive = activeReason === index;

                return (
                  <div
                    key={reason.number}
                    onMouseEnter={() => setActiveReason(index)}
                    onMouseLeave={() => setActiveReason(null)}
                    className={`
                      group
                      relative
                      border-t
                      border-[#0B1220]/10
                      py-6

                      transition-all
                      duration-[1000ms]
                      ease-[cubic-bezier(.16,1,.3,1)]

                      ${
                        visible
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-10 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 120 + 300}ms`,
                    }}
                  >

                    {/* active line */}

                    <div
                      className={`
                        absolute
                        left-0
                        top-0
                        h-px
                        bg-gradient-to-r
                        from-[#0166FF]
                        to-[#F05C36]

                        transition-all
                        duration-700

                        ${
                          isActive
                            ? "w-full"
                            : "w-0"
                        }
                      `}
                    />

                    <div className="flex gap-5 sm:gap-7">

                      {/* number */}

                      <div className="w-10 shrink-0">

                        <span
                          className={`
                            text-[11px]
                            font-black
                            tracking-[0.2em]

                            transition-all
                            duration-500

                            ${
                              isActive
                                ? "text-[#0166FF]"
                                : "text-[#0B1220]/30"
                            }
                          `}
                        >
                          {reason.number}
                        </span>

                      </div>

                      {/* icon */}

                      <div
                        className={`
                          relative
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center

                          transition-all
                          duration-700

                          ${
                            isActive
                              ? "scale-110 text-[#0166FF]"
                              : "text-[#0B1220]/35"
                          }
                        `}
                      >

                        <div
                          className={`
                            absolute
                            inset-0
                            rounded-full
                            bg-[#0166FF]/10
                            blur-md

                            transition-all
                            duration-700

                            ${
                              isActive
                                ? "scale-125 opacity-100"
                                : "scale-75 opacity-0"
                            }
                          `}
                        />

                        <Icon
                          size={19}
                          strokeWidth={1.7}
                          className="relative"
                        />

                      </div>

                      {/* content */}

                      <div className="flex-1">

                        <div className="flex items-center justify-between gap-5">

                          <h3
                            className={`
                              text-xl
                              font-black
                              tracking-[-0.035em]

                              sm:text-2xl

                              transition-all
                              duration-500

                              ${
                                isActive
                                  ? "translate-x-1 text-[#0166FF]"
                                  : "translate-x-0 text-[#0B1220]"
                              }
                            `}
                          >
                            {reason.title}
                          </h3>

                          <ArrowUpRight
                            size={18}
                            className={`
                              shrink-0

                              transition-all
                              duration-700

                              ${
                                isActive
                                  ? "translate-x-0 rotate-45 text-[#F05C36] opacity-100"
                                  : "translate-x-2 text-[#0B1220]/20 opacity-0"
                              }
                            `}
                          />

                        </div>

                        <p
                          className={`
                            mt-2
                            max-w-[570px]
                            text-sm
                            leading-7

                            transition-all
                            duration-500

                            ${
                              isActive
                                ? "translate-x-1 text-[#0B1220]/70"
                                : "translate-x-0 text-[#0B1220]/50"
                            }
                          `}
                        >
                          {reason.text}
                        </p>

                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="h-px w-full bg-[#0B1220]/10" />
            </div>

            {/* =============================================
                LOGOS IMAGE
            ============================================== */}

            <div
              className={`
                relative
                flex
                min-h-[360px]
                items-center
                justify-center

                transition-all
                duration-[1500ms]
                ease-[cubic-bezier(.16,1,.3,1)]

                ${
                  visible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-12 opacity-0"
                }
              `}
            >

              {/* blue ambient light */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[15%]
                  top-[20%]
                  h-[260px]
                  w-[260px]
                  rounded-full
                  bg-[#0166FF]/10
                  blur-[100px]
                  animate-pulse
                "
              />

              {/* orange ambient light */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[5%]
                  right-[10%]
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-[#F05C36]/10
                  blur-[100px]
                "
              />

              {/* image */}

              <img
                src="https://designcurvetech.com/wp-content/uploads/2025/02/logos.png"
                alt="DesignCurve customers and technology partners"
                className="
                  relative
                  z-10
                  w-full
                  max-w-[680px]
                  object-contain

                  transition-all
                  duration-[1200ms]
                  ease-[cubic-bezier(.16,1,.3,1)]

                  hover:scale-[1.025]
                  hover:-translate-y-1
                "
              />

              {/* precision marker */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[5%]
                  top-[8%]
                  z-20
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    text-[8px]
                    font-bold
                    tracking-[0.25em]
                    text-[#0B1220]/30
                  "
                >
                  GLOBAL NETWORK
                </span>

                <span className="h-px w-8 bg-[#F05C36]" />
              </div>

              {/* blue corner marker */}

              <div
                className="
                  absolute
                  bottom-[8%]
                  left-[5%]
                  z-20
                  flex
                  items-center
                  gap-3
                "
              >

             
              </div>

            </div>
          </div>
        </div>

        {/* =================================================
            COST / SOFTWARE SECTION
        ================================================= */}

        <div
          className={`
            relative
            mt-10
            border-t
            border-[#0B1220]/10
            pt-10

            transition-all
            duration-[1300ms]
            ease-[cubic-bezier(.16,1,.3,1)]

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >

          <div
            className="
              grid
              items-start
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >

            {/* HEADING */}

            <div>

              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-2 w-2 rounded-full bg-[#F05C36]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#0B1220]/40
                  "
                >
                  Smart Engineering
                </span>
              </div>

              <h3
                className="
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#0B1220]

                  sm:text-5xl
                  lg:text-6xl
                "
              >
                <span className="inline-block transition-transform duration-700 hover:-translate-y-1">
                  Design Doesn't
                </span>

                <br />

                <span
                  className="
                    inline-block
                    text-[#0166FF]
                    transition-all
                    duration-700
                    hover:tracking-[-0.03em]
                    hover:drop-shadow-[0_8px_20px_rgba(1,102,255,.15)]
                  "
                >
                  Have to Be
                </span>

                <br />

                <span className="inline-block transition-transform duration-700 hover:-translate-y-1">
                  Expensive.
                </span>
              </h3>

            </div>

            {/* DESCRIPTION */}

            <div className="relative">

              <div
                className="
                  absolute
                  -left-7
                  top-0
                  hidden
                  h-full
                  w-px
                  bg-gradient-to-b
                  from-[#0166FF]
                  via-[#0166FF]/20
                  to-transparent
                  lg:block
                "
              />

              <p
                className="
                  max-w-[760px]
                  text-base
                  leading-8
                  text-[#0B1220]/60

                  sm:text-lg

                  transition-all
                  duration-700
                  hover:text-[#0B1220]/80
                "
              >
                We utilize a comprehensive suite of industry-standard
                software, ensuring compatibility and efficiency across
                all projects. Our engineers possess multi-disciplinary
                expertise in various software platforms, providing our
                customers with the flexibility and adaptability they
                require to meet their unique project demands.
              </p>

              {/* software cards */}

              <div
                className="
                  mt-8
                  grid
                  gap-5
                  sm:grid-cols-3
                "
              >

                {/* CARD 01 */}

                <div
                  className="
                    group
                    border
                    border-[#0B1220]/10
                    bg-white
                    p-5

                    transition-all
                    duration-700

                    hover:-translate-y-2
                    hover:border-[#0166FF]/30
                    hover:shadow-[0_25px_60px_rgba(11,18,32,.07)]
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#0166FF]
                    "
                  >
                    01
                  </span>

                  <h4
                    className="
                      mt-5
                      text-sm
                      font-black
                      text-[#0B1220]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    Industry Standard
                  </h4>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-[#0B1220]/45
                    "
                  >
                    Professional tools built for modern engineering.
                  </p>
                </div>

                {/* CARD 02 */}

                <div
                  className="
                    group
                    border
                    border-[#0B1220]/10
                    bg-white
                    p-5

                    transition-all
                    duration-700

                    hover:-translate-y-2
                    hover:border-[#F05C36]/30
                    hover:shadow-[0_25px_60px_rgba(11,18,32,.07)]
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#F05C36]
                    "
                  >
                    02
                  </span>

                  <h4
                    className="
                      mt-5
                      text-sm
                      font-black
                      text-[#0B1220]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    Multi-Disciplinary
                  </h4>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-[#0B1220]/45
                    "
                  >
                    Expertise across multiple engineering platforms.
                  </p>
                </div>

                {/* CARD 03 */}

                <div
                  className="
                    group
                    border
                    border-[#0B1220]/10
                    bg-white
                    p-5

                    transition-all
                    duration-700

                    hover:-translate-y-2
                    hover:border-[#0166FF]/30
                    hover:shadow-[0_25px_60px_rgba(11,18,32,.07)]
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-[#0166FF]
                    "
                  >
                    03
                  </span>

                  <h4
                    className="
                      mt-5
                      text-sm
                      font-black
                      text-[#0B1220]
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    Flexible Solutions
                  </h4>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-6
                      text-[#0B1220]/45
                    "
                  >
                    Adaptable workflows for unique project demands.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

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
          h-2
          bg-gradient-to-t
          from-[#FDFDFD]
          to-transparent
        "
      />

    </section>
  );
};

export default WhyDesignCurve;