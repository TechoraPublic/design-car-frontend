import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Car,
  Activity,
  Factory,
  Users,
  GraduationCap,
  Code2,
} from "lucide-react";

const Services = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: "01",
      title: "Automotive Product Design",
      shortTitle: "Product Design",
      description:
        "From concept development to production-ready engineering, we create innovative automotive products with precision, performance and manufacturability at the core.",
      icon: Car,
      accent: "#0166FF",
      tags: [
        "Concept Development",
        "3D CAD Design",
        "Engineering Design",
        "Product Development",
      ],
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "02",
      title: "Engineering Simulations",
      shortTitle: "Simulations",
      description:
        "Advanced simulation and analysis help us validate designs, identify potential issues and optimize product performance before manufacturing.",
      icon: Activity,
      accent: "#F05C36",
      tags: [
        "CAE Analysis",
        "Structural Analysis",
        "Performance Testing",
        "Design Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "03",
      title: "Manufacturing Support",
      shortTitle: "Manufacturing",
      description:
        "We bridge the gap between engineering and manufacturing through production-focused design, supplier coordination and quality-driven processes.",
      icon: Factory,
      accent: "#0166FF",
      tags: [
        "DFM",
        "Production Support",
        "Supplier Coordination",
        "Quality Control",
      ],
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "04",
      title: "Engineering Staffing",
      shortTitle: "Staffing",
      description:
        "Access skilled engineering professionals who can integrate seamlessly with your teams and support demanding product development programs.",
      icon: Users,
      accent: "#F05C36",
      tags: [
        "Engineering Talent",
        "Dedicated Teams",
        "Project Resources",
        "Technical Experts",
      ],
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "05",
      title: "Technical Training",
      shortTitle: "Training",
      description:
        "Practical, industry-focused training programs designed to develop engineering capabilities and prepare professionals for real-world projects.",
      icon: GraduationCap,
      accent: "#0166FF",
      tags: [
        "CAD Training",
        "Engineering Skills",
        "Industry Programs",
        "Professional Development",
      ],
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "06",
      title: "IT Services",
      shortTitle: "IT Services",
      description:
        "Technology solutions that support modern engineering organizations with scalable digital systems, software development and technical expertise.",
      icon: Code2,
      accent: "#F05C36",
      tags: [
        "Software Development",
        "Digital Solutions",
        "Technical Support",
        "IT Consulting",
      ],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    },
  ];

  const current = services[activeService];
  const CurrentIcon = current.icon;

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#FDFDFD] bg-cover bg-center bg-no-repeat py-8 sm:py-10 lg:py-12"
      style={{
        backgroundImage: "url('/ServiceBG.png')",
      }}
    >
      {/* =====================================================
          BACKGROUND
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
          animate-[floatGlow_8s_ease-in-out_infinite]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[300px]
          top-[45%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#F05C36]/[0.035]
          blur-[170px]
          animate-[floatGlowReverse_10s_ease-in-out_infinite]
        "
      />

      {/* Technical Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
          animate-[gridMove_20s_linear_infinite]
        "
        style={{
          backgroundImage: `
            linear-gradient(#0B1220 1px, transparent 1px),
            linear-gradient(90deg, #0B1220 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Giant Background Number */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-40px]
          top-[2%]
          select-none
          text-[280px]
          font-black
          leading-none
          tracking-[-0.12em]
          text-[#0B1220]/[0.018]
          animate-[numberFloat_12s_ease-in-out_infinite]
        "
      >
        06
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className={`
            max-w-[1050px]
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(.16,1,.3,1)]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#0166FF] animate-[lineGrow_1s_ease-out]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.35em]
                text-[#0B1220]/40
              "
            >
              What We Do
            </span>

            <span className="h-px w-12 bg-[#F05C36] animate-[lineGrow_1s_ease-out_0.2s_both]" />
          </div>

          {/* Heading */}

          <h1
            className="
              max-w-[1000px]
              text-5xl
              font-black
              text-white
              leading-[0.9]
              tracking-[-0.07em]
              text-[#0B1220]
              sm:text-6xl
              lg:text-[7rem]
            "
          >
            Engineering
            <br />

            <span className="relative inline-block text-[#0166FF] animate-[textReveal_1.2s_cubic-bezier(.16,1,.3,1)_both]">
              expertise.
            </span>

            <br />

            <span className="relative inline-block">
              Built to perform.

              <span
                className="
                  absolute
                  -bottom-3
                  left-0
                  h-[4px]
                  w-28
                  bg-[#F05C36]
                  origin-left
                  animate-[underlineGrow_1s_cubic-bezier(.16,1,.3,1)_700ms_both]
                "
              />
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-7
              max-w-[700px]
              text-base
              leading-8
              text-white
              sm:text-lg
              animate-[paragraphReveal_1s_cubic-bezier(.16,1,.3,1)_400ms_both]
            "
          >
            From automotive product development to engineering simulations,
            manufacturing support and digital solutions, we provide
            comprehensive services designed around performance, precision
            and real-world results.
          </p>
        </div>

        {/* =====================================================
            SERVICE EXPERIENCE
        ====================================================== */}

        <div className="mt-14 lg:mt-20">
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.75fr_1.25fr]
              lg:gap-16
            "
          >
            {/* =================================================
                SERVICE LIST
            ================================================= */}

            <div>
              {services.map((service, index) => {
                const Icon = service.icon;
                const active = activeService === index;

                return (
                  <button
                    key={service.number}
                    onMouseEnter={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-5
                      border-t
                      border-[#0B1220]/10
                      py-5
                      text-left
                       text-white
                      transition-all
                      duration-700
                      hover:pl-3
                      hover:bg-[#0166FF]/[0.02]
                      ${
                        visible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 100 + 150}ms`,
                    }}
                  >
                    {/* Active Line */}

                    <span
                      className={`
                        absolute
                        left-0
                        top-0
                         text-white
                        h-px
                        bg-[#0166FF]
                        transition-all
                        duration-700
                        ${
                          active
                            ? "w-full shadow-[0_0_12px_rgba(1,102,255,.4)]"
                            : "w-0"
                        }
                      `}
                    />

                    {/* Number */}

                    <span
                      className={`
                        w-8
                        shrink-0
                        text-[10px]
                         text-white
                        font-black
                        tracking-[0.2em]
                        transition-all
                        duration-500
                        ${
                          active
                            ? "translate-x-1 text-[#0166FF]"
                            : "text-[#0B1220]/25"
                        }
                      `}
                    >
                      {service.number}
                    </span>

                    {/* Icon */}

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                         text-white
                        items-center
                        justify-center
                        transition-all
                        duration-700
                        group-hover:rotate-[-8deg]
                        ${
                          active
                            ? "scale-110 text-[#0166FF] drop-shadow-[0_0_8px_rgba(1,102,255,.3)]"
                            : "text-[#0B1220]/35"
                        }
                      `}
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </span>

                    {/* Title */}

                    <span
                      className={`
                        flex-1
                        text-lg
                        font-black
                        text-white
                        tracking-[-0.035em]
                        transition-all
                        duration-500
                        sm:text-xl
                        ${
                          active
                            ? "translate-x-2 scale-[1.02] text-[#0166FF]"
                            : "text-[#0B1220]"
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    {/* Arrow */}

                    <ArrowUpRight
                      size={18}
                       text-white
                      className={`
                        transition-all
                        duration-700
                        ${
                          active
                            ? "rotate-45 text-[#F05C36] opacity-100"
                            : "translate-x-2 text-[#0B1220]/15 opacity-0"
                        }
                      `}
                    />
                  </button>
                );
              })}

              <div className="h-px w-full bg-[#0B1220]/10" />
            </div>

            {/* =================================================
                FEATURED SERVICE
            ================================================= */}

            <div
              className="
                group
                relative
                min-h-[500px]
                overflow-hidden
                bg-[#0B1220]
                shadow-[0_30px_80px_rgba(11,18,32,.08)]
                transition-all
                duration-700
                hover:shadow-[0_40px_100px_rgba(11,18,32,.14)]
              "
            >
              {/* Image */}

              <img
                key={current.image}
                src={current.image}
                alt={current.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  opacity-45
                  transition-all
                  duration-[1000ms]
                  animate-[imageDrift_12s_ease-in-out_infinite]
                  group-hover:scale-[1.08]
                "
              />

              {/* Dark Overlay */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0B1220]
                  via-[#0B1220]/65
                  to-[#0B1220]/10
                "
              />

              {/* Blue Light */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-[300px]
                  w-[300px]
                  rounded-full
                  bg-[#0166FF]/20
                  blur-[100px]
                  animate-[featureGlow_7s_ease-in-out_infinite]
                "
              />

              {/* Orange Light */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-[#F05C36]/15
                  blur-[90px]
                  animate-[orangeGlow_8s_ease-in-out_infinite]
                "
              />

              {/* Content */}

              <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10">
                {/* Top */}

                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      border
                      border-white/15
                      bg-white/10
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-500
                      hover:scale-110
                      hover:rotate-3
                      hover:border-white/30
                    "
                  >
                    <CurrentIcon size={21} strokeWidth={1.5} />
                  </div>

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-white/40
                    "
                  >
                    Service / {current.number}
                  </span>
                </div>

                {/* Bottom */}

                <div>
                  {/* Title */}

                  <div
                    key={current.title}
                    className="
                      animate-[serviceReveal_700ms_cubic-bezier(.16,1,.3,1)]
                    "
                  >
                    <h2
                      className="
                        max-w-[700px]
                        text-4xl
                        font-black
                        leading-[0.95]
                        tracking-[-0.055em]
                        text-white
                        sm:text-5xl
                        lg:text-6xl
                      "
                    >
                      {current.title}
                    </h2>

                    <p
                      className="
                        mt-5
                        max-w-[650px]
                        text-sm
                        leading-7
                        text-white/60
                        sm:text-base
                      "
                    >
                      {current.description}
                    </p>
                  </div>

                  {/* Tags */}

                  <div className="mt-7 flex flex-wrap gap-2">
                    {current.tags.map((tag, index) => (
                      <span
                        key={tag}
                        style={{
                          animationDelay: `${index * 80}ms`,
                        }}
                        className="
                          border
                          border-white/15
                          bg-white/5
                          px-3
                          py-2
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-white/60
                          backdrop-blur-md
                          transition-all
                          duration-500
                          hover:-translate-y-1
                          hover:border-[#0166FF]/50
                          hover:bg-[#0166FF]/10
                          hover:text-white
                          animate-[tagReveal_600ms_cubic-bezier(.16,1,.3,1)_both]
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner */}

              <div
                className="
                  absolute
                  right-6
                  top-6
                  h-10
                  w-10
                  border-r
                  border-t
                  border-white/20
                  transition-all
                  duration-700
                  group-hover:h-14
                  group-hover:w-14
                  group-hover:border-white/40
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  h-10
                  w-10
                  border-b
                  border-l
                  border-white/20
                  transition-all
                  duration-700
                  group-hover:h-14
                  group-hover:w-14
                  group-hover:border-white/40
                "
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            SERVICE PHILOSOPHY
        ====================================================== */}

        <div
          className={`
            mt-14
            border-t
            border-[#0B1220]/10
            pt-12
            transition-all
            duration-[1200ms]
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
              gap-10
              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >
            {/* Heading */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#F05C36]
                    shadow-[0_0_12px_rgba(240,92,54,.5)]
                    animate-[pulseDot_2s_ease-in-out_infinite]
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#0B1220]/40
                  "
                >
                  Our Approach
                </span>
              </div>

              <h3
                className="
                  text-4xl
                  font-black
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                One partner.
                <br />

                <span className="text-[#0166FF]">Complete</span>

                <br />

                capability.
              </h3>
            </div>

            {/* Description */}

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
                "
              >
                Our multidisciplinary approach allows engineering,
                simulation, manufacturing and technology teams to work
                together throughout the product lifecycle. This creates
                faster decisions, better collaboration and dependable
                results.
              </p>

              {/* Metrics */}

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {/* Card 01 */}

                <div
                  className="
                    border
                    border-[#0B1220]/10
                    bg-white
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-[1.02]
                    hover:border-[#0166FF]/30
                    hover:shadow-[0_20px_50px_rgba(11,18,32,.08)]
                  "
                >
                  <span
                    className="
                      text-2xl
                      font-black
                      tracking-[-0.05em]
                      text-[#0166FF]
                    "
                  >
                    01
                  </span>

                  <h4 className="mt-4 text-sm font-black text-[#0B1220]">
                    Engineering
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-[#0B1220]/45">
                    Deep technical expertise.
                  </p>
                </div>

                {/* Card 02 */}

                <div
                  className="
                    border
                    border-[#0B1220]/10
                    bg-white
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-[1.02]
                    hover:border-[#F05C36]/30
                    hover:shadow-[0_20px_50px_rgba(11,18,32,.08)]
                  "
                >
                  <span
                    className="
                      text-2xl
                      font-black
                      tracking-[-0.05em]
                      text-[#F05C36]
                    "
                  >
                    02
                  </span>

                  <h4 className="mt-4 text-sm font-black text-[#0B1220]">
                    Precision
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-[#0B1220]/45">
                    Quality at every stage.
                  </p>
                </div>

                {/* Card 03 */}

                <div
                  className="
                    border
                    border-[#0B1220]/10
                    bg-white
                    p-5
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:scale-[1.02]
                    hover:border-[#0166FF]/30
                    hover:shadow-[0_20px_50px_rgba(11,18,32,.08)]
                  "
                >
                  <span
                    className="
                      text-2xl
                      font-black
                      tracking-[-0.05em]
                      text-[#0166FF]
                    "
                  >
                    03
                  </span>

                  <h4 className="mt-4 text-sm font-black text-[#0B1220]">
                    Delivery
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-[#0B1220]/45">
                    Built around your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CTA
        ====================================================== */}

        <div
          className="
            group
            relative
            mt-14
            overflow-hidden
            bg-[#0B1220]
            px-7
            py-8
            sm:px-10
            transition-all
            duration-700
            hover:shadow-[0_30px_80px_rgba(11,18,32,.15)]
          "
        >
          {/* Moving Glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              top-1/2
              h-[220px]
              w-[220px]
              -translate-y-1/2
              rounded-full
              bg-[#0166FF]/20
              blur-[80px]
              animate-[ctaGlow_6s_ease-in-out_infinite]
            "
          />

          {/* Gradient Line */}

          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-1
              bg-gradient-to-b
              from-[#0166FF]
              to-[#F05C36]
              transition-all
              duration-700
              group-hover:w-2
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-start
              justify-between
              gap-6
              sm:flex-row
              sm:items-center
            "
          >
            <div>
              <div
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                Ready to build?
              </div>

              <div
                className="
                  mt-2
                  text-xl
                  font-black
                  tracking-[-0.03em]
                  text-white
                  sm:text-2xl
                "
              >
                Let's engineer your next product.
              </div>
            </div>

            <a
              href="/contact"
              className="
                group/button
                inline-flex
                items-center
                gap-3
                bg-[#0166FF]
                px-5
                py-3.5
                text-[10px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-500
                hover:bg-[#F05C36]
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(240,92,54,.25)]
              "
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-500
                  group-hover/button:rotate-45
                "
              />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        /* -----------------------------------------------
           SERVICE CONTENT REVEAL
        ------------------------------------------------ */

        @keyframes serviceReveal {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* -----------------------------------------------
           BACKGROUND FLOAT
        ------------------------------------------------ */

        @keyframes floatGlow {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(35px, -25px, 0) scale(1.06);
          }
        }

        @keyframes floatGlowReverse {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-30px, 25px, 0) scale(1.05);
          }
        }

        /* -----------------------------------------------
           GRID MOVEMENT
        ------------------------------------------------ */

        @keyframes gridMove {
          0% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(20px, 20px, 0);
          }

          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        /* -----------------------------------------------
           BIG NUMBER
        ------------------------------------------------ */

        @keyframes numberFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-18px) rotate(1deg);
          }
        }

        /* -----------------------------------------------
           IMAGE CINEMATIC MOVEMENT
        ------------------------------------------------ */

        @keyframes imageDrift {
          0%,
          100% {
            transform: scale(1.02) translate3d(0, 0, 0);
          }

          50% {
            transform: scale(1.08) translate3d(-12px, -8px, 0);
          }
        }

        /* -----------------------------------------------
           FEATURE GLOW
        ------------------------------------------------ */

        @keyframes featureGlow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }

          50% {
            transform: translate(-35px, 30px) scale(1.2);
            opacity: 1;
          }
        }

        @keyframes orangeGlow {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }

          50% {
            transform: translate(30px, -20px) scale(1.15);
            opacity: 0.9;
          }
        }

        /* -----------------------------------------------
           TAG REVEAL
        ------------------------------------------------ */

        @keyframes tagReveal {
          0% {
            opacity: 0;
            transform: translateY(12px) scale(0.94);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* -----------------------------------------------
           CTA GLOW
        ------------------------------------------------ */

        @keyframes ctaGlow {
          0%,
          100% {
            transform: translateY(-50%) translateX(0) scale(1);
            opacity: 0.7;
          }

          50% {
            transform: translateY(-50%) translateX(-40px) scale(1.15);
            opacity: 1;
          }
        }

        /* -----------------------------------------------
           HEADER ANIMATIONS
        ------------------------------------------------ */

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes paragraphReveal {
          0% {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(5px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes underlineGrow {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }

          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes lineGrow {
          0% {
            transform: scaleX(0);
            transform-origin: left;
            opacity: 0;
          }

          100% {
            transform: scaleX(1);
            transform-origin: left;
            opacity: 1;
          }
        }

        /* -----------------------------------------------
           DOT PULSE
        ------------------------------------------------ */

        @keyframes pulseDot {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
            box-shadow: 0 0 8px rgba(240, 92, 54, 0.35);
          }

          50% {
            transform: scale(1.35);
            opacity: 1;
            box-shadow: 0 0 18px rgba(240, 92, 54, 0.65);
          }
        }

        /* -----------------------------------------------
           ACCESSIBILITY
        ------------------------------------------------ */

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

export default Services;