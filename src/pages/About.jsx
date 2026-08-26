import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Users,
  ShieldCheck,
  Cpu,
  Factory,
  Zap,
  Sparkles,
} from "lucide-react";

/* =========================================================
   REVEAL COMPONENT
========================================================= */

const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
    none: "",
  };

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transform
        ${
          visible
            ? "translate-x-0 translate-y-0 opacity-100"
            : `${transforms[direction]} opacity-0`
        }
        transition-all
        duration-1000
        ease-[cubic-bezier(0.22,1,0.36,1)]
      `}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

/* =========================================================
   ANIMATED WORD
========================================================= */

const AnimatedWord = ({ children, delay = 0, blue = false }) => {
  return (
    <span
      className={`
        inline-block
        opacity-0
        translate-y-8
        animate-[wordReveal_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]
        ${blue ? "text-[#0166FF]" : ""}
      `}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </span>
  );
};

/* =========================================================
   MAIN ABOUT PAGE
========================================================= */

const About = () => {
  const [activeCard, setActiveCard] = useState(null);

  /* =====================================================
     STATS
  ====================================================== */

  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
    },
    {
      number: "150+",
      label: "Projects Delivered",
    },
    {
      number: "50+",
      label: "Global Clients",
    },
    {
      number: "25+",
      label: "Industry Experts",
    },
  ];

  /* =====================================================
     VALUES
  ====================================================== */

  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "We focus on accuracy, engineering excellence, and attention to every detail throughout the product development journey.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We combine creative thinking with advanced engineering methodologies to create smarter and more effective solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients and their teams to transform ideas into practical, scalable products.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      description:
        "Our processes are built around quality, consistency, confidentiality, and long-term client relationships.",
    },
  ];

  /* =====================================================
     CAPABILITIES
  ====================================================== */

  const capabilities = [
    {
      icon: Cpu,
      title: "Product Engineering",
      text:
        "From early concepts to detailed engineering, we create products designed for performance, reliability, and manufacturability.",
    },
    {
      icon: Factory,
      title: "Design & Development",
      text:
        "Our multidisciplinary team works across design, development, analysis, and optimization to create production-ready solutions.",
    },
    {
      icon: Zap,
      title: "Engineering Analysis",
      text:
        "We use advanced engineering analysis to validate concepts, identify challenges, and improve overall product performance.",
    },
  ];

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#FDFDFD] text-gray-900"
      style={{
        "--blue": "#0166FF",
        "--orange": "#F05C36",
      }}
    >
      {/* =====================================================
          GLOBAL ANIMATION STYLES
      ====================================================== */}

      <style>{`
        @keyframes wordReveal {
          0% {
            opacity: 0;
            transform: translateY(32px);
            filter: blur(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes floatOrb {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.12;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.2;
          }
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }

          100% {
            background-position: 200% center;
          }
        }

        @keyframes lineGrow {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }

        .animated-gradient {
          background: linear-gradient(
            90deg,
            #0166FF,
            #3988ff,
            #0166FF,
            #F05C36,
            #0166FF
          );

          background-size: 300% auto;

          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;

          animation: shimmer 5s linear infinite;
        }

        .float-animation {
          animation: floatOrb 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .rotate-slow {
          animation: rotateSlow 25s linear infinite;
        }

        .line-animation {
          animation: lineGrow 1.2s ease-out forwards;
          animation-delay: 500ms;
        }
      `}</style>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[85vh] flex items-center px-6 md:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
        {/* BLUE GLOW */}

        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[150px] pulse-glow"
          style={{
            backgroundColor: "#0166FF",
            opacity: 0.07,
          }}
        />

        {/* ORANGE GLOW */}

        <div
          className="absolute bottom-0 right-[-150px] w-[500px] h-[500px] rounded-full blur-[150px] pulse-glow"
          style={{
            backgroundColor: "#F05C36",
            opacity: 0.06,
            animationDelay: "1s",
          }}
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(#111827 1px, transparent 1px),
              linear-gradient(90deg, #111827 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* =================================================
                HERO LEFT
            ================================================== */}

            <div>
              {/* LABEL */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-4
                  py-2
                  rounded-full
                  mb-8
                  opacity-0
                  animate-[wordReveal_0.8s_ease-out_forwards]
                "
                style={{
                  backgroundColor: "rgba(1,102,255,0.05)",
                  border: "1px solid rgba(1,102,255,0.15)",
                  animationDelay: "100ms",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: "#F05C36",
                  }}
                />

                <span className="text-sm tracking-[0.15em] text-gray-500">
                  ABOUT DESIGNCURVE
                </span>
              </div>

              {/* HERO HEADING */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                <AnimatedWord delay={250}>
                  Engineering
                </AnimatedWord>

                <span className="block">
                  <AnimatedWord
                    delay={400}
                    blue
                  >
                    ideas
                  </AnimatedWord>{" "}

                  <AnimatedWord delay={500}>
                    into
                  </AnimatedWord>
                </span>

                <span className="inline-block">
                  <AnimatedWord delay={650}>
                    reality
                  </AnimatedWord>

                  <AnimatedWord
                    delay={750}
                    blue={false}
                  >
                    <span className="animated-gradient">
                      .
                    </span>
                  </AnimatedWord>
                </span>
              </h1>

              {/* HERO UNDERLINE */}

              <div
                className="
                  mt-6
                  h-[2px]
                  w-0
                  line-animation
                "
                style={{
                  background:
                    "linear-gradient(90deg,#0166FF,#F05C36)",
                }}
              />

              {/* DESCRIPTION */}

              <p
                className="
                  mt-8
                  max-w-xl
                  text-lg
                  md:text-xl
                  text-gray-600
                  leading-relaxed
                  opacity-0
                  animate-[wordReveal_1s_cubic-bezier(0.22,1,0.36,1)_forwards]
                "
                style={{
                  animationDelay: "900ms",
                }}
              >
                Designcurve Technologies is an engineering and product
                development company focused on transforming ideas into
                innovative, reliable, and commercially viable products.
              </p>

              {/* BUTTONS */}

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  gap-4
                  opacity-0
                  animate-[wordReveal_1s_cubic-bezier(0.22,1,0.36,1)_forwards]
                "
                style={{
                  animationDelay: "1100ms",
                }}
              >
                <a
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-4
                    rounded-full
                    text-white
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                  style={{
                    backgroundColor: "#0166FF",
                    boxShadow:
                      "0 15px 40px rgba(1,102,255,0.20)",
                  }}
                >
                  Let's Work Together

                  <ArrowUpRight
                    size={18}
                    className="
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-transform
                    "
                  />
                </a>

                <a
                  href="/services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-7
                    py-4
                    rounded-full
                    font-medium
                    text-gray-900
                    transition-all
                    duration-300
                    hover:bg-gray-100
                    hover:-translate-y-1
                  "
                  style={{
                    border:
                      "1px solid rgba(17,24,39,0.12)",
                  }}
                >
                  Explore Services

                  <ArrowUpRight
                    size={18}
                    className="
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition-transform
                    "
                  />
                </a>
              </div>
            </div>

            {/* =================================================
                HERO RIGHT VISUAL
            ================================================== */}

            <Reveal direction="left" delay={300}>
              <div className="relative float-animation">
                <div className="relative aspect-square max-w-[520px] mx-auto">
                  {/* OUTER CIRCLE */}

                  <div
                    className="absolute inset-5 rounded-full rotate-slow"
                    style={{
                      border:
                        "1px solid rgba(1,102,255,0.15)",
                    }}
                  />

                  {/* ORANGE CIRCLE */}

                  <div
                    className="absolute inset-16 rounded-full"
                    style={{
                      border:
                        "1px solid rgba(240,92,54,0.18)",
                    }}
                  />

                  {/* INNER CIRCLE */}

                  <div
                    className="absolute inset-28 rounded-full rotate-slow"
                    style={{
                      border:
                        "1px solid rgba(17,24,39,0.08)",
                      animationDirection: "reverse",
                    }}
                  />

                  {/* BLUE GLOW */}

                  <div
                    className="absolute inset-20 rounded-full blur-[90px] pulse-glow"
                    style={{
                      backgroundColor: "#0166FF",
                      opacity: 0.12,
                    }}
                  />

                  {/* ORANGE GLOW */}

                  <div
                    className="absolute inset-32 rounded-full blur-[60px]"
                    style={{
                      backgroundColor: "#F05C36",
                      opacity: 0.08,
                    }}
                  />

                  {/* CENTER */}

                  <div
                    className="
                      absolute
                      inset-[28%]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-700
                      hover:scale-105
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,#0166FF 0%,#0145B5 100%)",
                      boxShadow:
                        "0 25px 80px rgba(1,102,255,0.25)",
                    }}
                  >
                    <div className="text-center text-white">
                      <div className="text-5xl md:text-6xl font-bold">
                        DC
                      </div>

                      <div className="text-[10px] tracking-[0.35em] mt-2 text-white/70">
                        TECHNOLOGIES
                      </div>
                    </div>
                  </div>

                  {/* FLOATING CARD */}

                  <div
                    className="
                      absolute
                      top-[10%]
                      right-[2%]
                      px-5
                      py-4
                      rounded-2xl
                      backdrop-blur-xl
                      bg-white/90
                      shadow-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                    style={{
                      border:
                        "1px solid rgba(1,102,255,0.12)",
                    }}
                  >
                    <div className="text-[10px] text-gray-400 tracking-widest">
                      FOCUS
                    </div>

                    <div className="font-medium mt-1 text-gray-900">
                      Innovation
                    </div>
                  </div>

                  {/* FLOATING CARD */}

                  <div
                    className="
                      absolute
                      bottom-[12%]
                      left-[2%]
                      px-5
                      py-4
                      rounded-2xl
                      backdrop-blur-xl
                      bg-white/90
                      shadow-xl
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-2xl
                    "
                    style={{
                      border:
                        "1px solid rgba(240,92,54,0.15)",
                    }}
                  >
                    <div className="text-[10px] text-gray-400 tracking-widest">
                      APPROACH
                    </div>

                    <div className="font-medium mt-1 text-gray-900">
                      Engineering
                    </div>
                  </div>

                  {/* ORANGE DOT */}

                  <div
                    className="
                      absolute
                      top-[47%]
                      right-[-5px]
                      w-4
                      h-4
                      rounded-full
                      animate-pulse
                    "
                    style={{
                      backgroundColor: "#F05C36",
                      boxShadow:
                        "0 0 25px rgba(240,92,54,0.45)",
                    }}
                  />

                  {/* BLUE DOT */}

                  <div
                    className="
                      absolute
                      top-[22%]
                      left-[8%]
                      w-3
                      h-3
                      rounded-full
                      animate-pulse
                    "
                    style={{
                      backgroundColor: "#0166FF",
                      boxShadow:
                        "0 0 25px rgba(1,102,255,0.45)",
                    }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section
        className="border-y"
        style={{
          borderColor: "rgba(17,24,39,0.08)",
          backgroundColor: "#F5F7FA",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={index}
              delay={index * 120}
              direction="up"
            >
              <div
                className="
                  group
                  px-6
                  py-10
                  md:py-14
                  border-r
                  last:border-r-0
                  transition-all
                  duration-300
                  hover:bg-white
                "
                style={{
                  borderColor:
                    "rgba(17,24,39,0.08)",
                }}
              >
                <div
                  className="
                    text-4xl
                    md:text-5xl
                    font-semibold
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                  style={{
                    color:
                      index % 2 === 0
                        ? "#0166FF"
                        : "#F05C36",
                  }}
                >
                  {stat.number}
                </div>

                <div className="mt-2 text-sm text-gray-500">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          WHO WE ARE
      ====================================================== */}

      <section className="py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* =================================================
              CAR IMAGE
          ================================================== */}

          <Reveal direction="right">
            <div className="relative group">

              {/* OUTER GLOW */}

              <div
                className="
                  absolute
                  -inset-8
                  rounded-[2.5rem]
                  blur-3xl
                  opacity-0
                  group-hover:opacity-30
                  transition-all
                  duration-1000
                "
                style={{
                  background:
                    "linear-gradient(135deg,#0166FF,#F05C36)",
                }}
              />

              {/* IMAGE CONTAINER */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  rounded-[2rem]
                  overflow-hidden
                  bg-gray-100
                  transition-all
                  duration-700
                  group-hover:-translate-y-3
                  group-hover:shadow-2xl
                "
                style={{
                  border:
                    "1px solid rgba(1,102,255,0.12)",
                  boxShadow:
                    "0 25px 70px rgba(17,24,39,0.08)",
                }}
              >

                {/* CAR IMAGE */}

                <img
                  src="/CAR.png"
                  alt="Automotive Engineering"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-1000
                    ease-out
                    group-hover:scale-110
                  "
                  draggable="false"
                />

                {/* DARK OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                    opacity-60
                    group-hover:opacity-30
                    transition-opacity
                    duration-700
                  "
                />

                {/* MOVING LIGHT */}

                <div
                  className="
                    absolute
                    top-0
                    -left-[60%]
                    w-[45%]
                    h-full
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/35
                    to-transparent
                    group-hover:left-[120%]
                    transition-all
                    duration-[1200ms]
                    ease-out
                  "
                />

                {/* BLUE GLOW */}

                <div
                  className="
                    absolute
                    -bottom-20
                    -left-20
                    w-64
                    h-64
                    rounded-full
                    blur-[90px]
                    opacity-20
                    group-hover:opacity-40
                    transition-opacity
                    duration-700
                  "
                  style={{
                    backgroundColor: "#0166FF",
                  }}
                />

                {/* ORANGE GLOW */}

                <div
                  className="
                    absolute
                    -top-20
                    -right-20
                    w-60
                    h-60
                    rounded-full
                    blur-[90px]
                    opacity-10
                    group-hover:opacity-30
                    transition-opacity
                    duration-700
                  "
                  style={{
                    backgroundColor: "#F05C36",
                  }}
                />


                {/* BORDER LIGHT */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-[2rem]
                    border
                    border-white/0
                    group-hover:border-white/30
                    transition-all
                    duration-700
                    pointer-events-none
                  "
                />

              </div>

              {/* ORANGE DOT */}

              <div
                className="
                  absolute
                  -right-3
                  top-[35%]
                  w-5
                  h-5
                  rounded-full
                  animate-pulse
                  z-10
                "
                style={{
                  backgroundColor: "#F05C36",
                  boxShadow:
                    "0 0 30px rgba(240,92,54,0.55)",
                }}
              />

              {/* BLUE DOT */}

              <div
                className="
                  absolute
                  -left-3
                  bottom-[25%]
                  w-3
                  h-3
                  rounded-full
                  animate-pulse
                  z-10
                "
                style={{
                  backgroundColor: "#0166FF",
                  boxShadow:
                    "0 0 25px rgba(1,102,255,0.55)",
                }}
              />

            </div>
          </Reveal>

          {/* =================================================
              CONTENT
          ================================================== */}

          <Reveal direction="left" delay={150}>
            <div>

              <span
                className="text-sm font-medium tracking-[0.2em]"
                style={{
                  color: "#F05C36",
                }}
              >
                WHO WE ARE
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-900">
                Building better products through{" "}
                <span className="animated-gradient">
                  engineering excellence.
                </span>
              </h2>

              <div
                className="mt-5 h-[2px] w-24"
                style={{
                  background:
                    "linear-gradient(90deg,#0166FF,#F05C36)",
                }}
              />

              <p className="mt-7 text-gray-600 leading-relaxed text-lg">
                At Designcurve Technologies, we specialize
                in comprehensive product design,
                development, and engineering analysis. Our
                goal is to help businesses turn challenging
                ideas into practical, high-performance
                products.
              </p>

              <p className="mt-5 text-gray-500 leading-relaxed">
                From concept development and industrial
                design to detailed engineering and analysis,
                our team works across the complete product
                lifecycle. We combine creativity, engineering
                expertise, and technology to deliver
                solutions built for the real world.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "End-to-end product development",
                  "Engineering-focused design approach",
                  "Quality-driven development process",
                  "Client-focused collaboration",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      group
                      transition-all
                      duration-300
                      hover:translate-x-2
                    "
                  >
                    <CheckCircle2
                      size={20}
                      style={{
                        color: "#0166FF",
                      }}
                      className="
                        flex-shrink-0
                        group-hover:scale-110
                        transition-transform
                      "
                    />

                    <span className="text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section
        className="py-28 px-6 md:px-12 lg:px-20 border-y"
        style={{
          backgroundColor: "#F5F7FA",
          borderColor: "rgba(17,24,39,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto">

          <Reveal>
            <div className="max-w-2xl">

              <span
                className="text-sm font-medium tracking-[0.2em]"
                style={{
                  color: "#0166FF",
                }}
              >
                OUR VALUES
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-gray-900">
                What drives
                <span className="animated-gradient">
                  {" "}us.
                </span>
              </h2>

              <p className="mt-6 text-gray-500 leading-relaxed">
                Our values shape how we think, design,
                engineer, and collaborate with every client.
              </p>

            </div>
          </Reveal>

          {/* CARDS */}

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal
                  key={index}
                  delay={index * 120}
                >
                  <div
                    onMouseEnter={() =>
                      setActiveCard(index)
                    }
                    onMouseLeave={() =>
                      setActiveCard(null)
                    }
                    className="
                      group
                      relative
                      p-7
                      min-h-[280px]
                      rounded-3xl
                      overflow-hidden
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      bg-white
                    "
                    style={{
                      border:
                        "1px solid rgba(17,24,39,0.08)",
                      boxShadow:
                        activeCard === index
                          ? "0 25px 60px rgba(1,102,255,0.10)"
                          : "0 10px 35px rgba(17,24,39,0.04)",
                    }}
                  >

                    {/* HOVER GLOW */}

                    <div
                      className="
                        absolute
                        -right-20
                        -top-20
                        w-48
                        h-48
                        rounded-full
                        blur-3xl
                        opacity-0
                        group-hover:opacity-20
                        transition-opacity
                        duration-500
                      "
                      style={{
                        backgroundColor:
                          index % 2 === 0
                            ? "#0166FF"
                            : "#F05C36",
                      }}
                    />

                    <div className="relative">

                      {/* ICON */}

                      <div
                        className="
                          w-12
                          h-12
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:rotate-3
                        "
                        style={{
                          backgroundColor:
                            index % 2 === 0
                              ? "rgba(1,102,255,0.08)"
                              : "rgba(240,92,54,0.08)",
                          border:
                            index % 2 === 0
                              ? "1px solid rgba(1,102,255,0.15)"
                              : "1px solid rgba(240,92,54,0.15)",
                        }}
                      >
                        <Icon
                          size={22}
                          style={{
                            color:
                              index % 2 === 0
                                ? "#0166FF"
                                : "#F05C36",
                          }}
                        />
                      </div>

                      <h3 className="mt-8 text-xl font-semibold text-gray-900">
                        {value.title}
                      </h3>

                      <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                        {value.description}
                      </p>

                      {/* CARD LINE */}

                      <div
                        className="
                          absolute
                          left-0
                          bottom-[-15px]
                          h-[2px]
                          w-0
                          group-hover:w-full
                          transition-all
                          duration-500
                        "
                        style={{
                          background:
                            index % 2 === 0
                              ? "#0166FF"
                              : "#F05C36",
                        }}
                      />

                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERTISE
      ====================================================== */}

      <section className="py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

              <div>

                <span
                  className="text-sm font-medium tracking-[0.2em]"
                  style={{
                    color: "#F05C36",
                  }}
                >
                  OUR EXPERTISE
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-gray-900">
                  Engineering capability{" "}
                  <span className="animated-gradient">
                    that delivers.
                  </span>
                </h2>

              </div>

              <p className="max-w-md text-gray-500 leading-relaxed">
                A multidisciplinary approach helps us solve
                complex product challenges from concept
                through development.
              </p>

            </div>
          </Reveal>

          {/* CARDS */}

          <div className="mt-16 grid lg:grid-cols-3 gap-6">

            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={index}
                  delay={index * 150}
                >
                  <div
                    className="
                      group
                      p-8
                      rounded-[2rem]
                      transition-all
                      duration-500
                      hover:-translate-y-3
                      hover:shadow-2xl
                      bg-white
                    "
                    style={{
                      border:
                        "1px solid rgba(17,24,39,0.08)",
                      boxShadow:
                        "0 10px 35px rgba(17,24,39,0.04)",
                    }}
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:rotate-3
                        "
                        style={{
                          backgroundColor:
                            index === 1
                              ? "rgba(240,92,54,0.08)"
                              : "rgba(1,102,255,0.08)",
                        }}
                      >
                        <Icon
                          size={25}
                          style={{
                            color:
                              index === 1
                                ? "#F05C36"
                                : "#0166FF",
                          }}
                        />
                      </div>

                      <ArrowUpRight
                        size={22}
                        className="
                          group-hover:translate-x-2
                          group-hover:-translate-y-2
                          transition-all
                        "
                        style={{
                          color:
                            index === 1
                              ? "#F05C36"
                              : "#0166FF",
                        }}
                      />

                    </div>

                    <h3
                      className="
                        mt-10
                        text-2xl
                        font-semibold
                        text-gray-900
                        transition-colors
                        duration-300
                        group-hover:text-[#0166FF]
                      "
                    >
                      {item.title}
                    </h3>

                    <p className="mt-4 text-gray-500 leading-relaxed">
                      {item.text}
                    </p>

                    {/* NUMBER */}

                    <div
                      className="
                        mt-8
                        text-xs
                        tracking-[0.3em]
                        font-medium
                      "
                      style={{
                        color:
                          index === 1
                            ? "#F05C36"
                            : "#0166FF",
                      }}
                    >
                      0{index + 1} / EXPERTISE
                    </div>

                  </div>
                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="px-6 md:px-12 lg:px-20 pb-28">
        <Reveal direction="up">

          <div
            className="
              relative
              max-w-7xl
              mx-auto
              overflow-hidden
              rounded-[2.5rem]
              transition-all
              duration-500
              hover:-translate-y-1
              hover:shadow-2xl
            "
            style={{
              background:
                "linear-gradient(120deg,rgba(1,102,255,0.08),rgba(240,92,54,0.05))",
              border:
                "1px solid rgba(1,102,255,0.15)",
            }}
          >

            {/* BLUE GLOW */}

            <div
              className="
                absolute
                w-96
                h-96
                rounded-full
                blur-[120px]
                -right-20
                -top-40
                pulse-glow
              "
              style={{
                backgroundColor: "#0166FF",
                opacity: 0.12,
              }}
            />

            {/* ORANGE GLOW */}

            <div
              className="
                absolute
                w-72
                h-72
                rounded-full
                blur-[100px]
                -left-20
                -bottom-40
              "
              style={{
                backgroundColor: "#F05C36",
                opacity: 0.08,
              }}
            />

            <div className="relative px-8 md:px-16 py-16 md:py-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              <div>

                <div className="flex items-center gap-2">

                  <Sparkles
                    size={16}
                    style={{
                      color: "#F05C36",
                    }}
                  />

                  <p
                    className="text-sm tracking-[0.2em] font-medium"
                    style={{
                      color: "#F05C36",
                    }}
                  >
                    HAVE AN IDEA?
                  </p>

                </div>

                <h2 className="mt-4 text-4xl md:text-5xl font-semibold max-w-2xl text-gray-900">
                  Let's turn your next idea into something{" "}
                  <span className="animated-gradient">
                    real.
                  </span>
                </h2>

                <p className="mt-5 text-gray-500 max-w-xl">
                  Talk to our team about your product,
                  engineering, or development requirements.
                </p>

              </div>

              <a
                href="/contact"
                className="
                  group
                  flex-shrink-0
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
                style={{
                  backgroundColor: "#0166FF",
                  boxShadow:
                    "0 15px 40px rgba(1,102,255,0.20)",
                }}
              >
                Start a Conversation

                <ArrowUpRight
                  size={19}
                  className="
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                  "
                />
              </a>

            </div>
          </div>

        </Reveal>
      </section>

    </main>
  );
};

export default About;