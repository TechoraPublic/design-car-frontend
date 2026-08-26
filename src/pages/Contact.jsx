import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Clock3,
  Send,
  CheckCircle2,
  Sparkles,
  Navigation,
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
   CONTACT PAGE
========================================================= */

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  /* =======================================================
     FORM HANDLERS
  ======================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#FDFDFD] text-gray-900"
      style={{
        "--blue": "#0166FF",
        "--orange": "#F05C36",
      }}
    >
      {/* =====================================================
          GLOBAL ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes wordReveal {
          0% {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.10;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.18;
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

        .word-reveal {
          opacity: 0;
          animation: wordReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .float-animation {
          animation: float 6s ease-in-out infinite;
        }

        .pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .rotate-slow {
          animation: rotateSlow 25s linear infinite;
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

        .line-animation {
          animation: lineGrow 1.2s ease-out forwards;
          animation-delay: 700ms;
        }

        .contact-input {
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease,
            background-color 0.3s ease;
        }

        .contact-input:focus {
          transform: translateY(-1px);
        }

        .contact-card {
          transition:
            transform 0.5s ease,
            box-shadow 0.5s ease,
            border-color 0.5s ease;
        }

        .contact-card:hover {
          transform: translateY(-8px);
        }
      `}</style>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[68vh] flex items-center px-6 md:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">
        {/* BLUE GLOW */}

        <div
          className="absolute -top-48 -left-48 w-[650px] h-[650px] rounded-full blur-[150px] pulse-glow"
          style={{
            backgroundColor: "#0166FF",
            opacity: 0.07,
          }}
        />

        {/* ORANGE GLOW */}

        <div
          className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full blur-[150px] pulse-glow"
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
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
            {/* =================================================
                HERO CONTENT
            ================================================== */}

            <div>
              {/* LABEL */}

              <div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 word-reveal"
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
                  CONTACT DESIGNCURVE
                </span>
              </div>

              {/* HEADING */}

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                <span
                  className="inline-block word-reveal"
                  style={{ animationDelay: "250ms" }}
                >
                  Let's build
                </span>

                <span className="block">
                  <span
                    className="inline-block animated-gradient word-reveal"
                    style={{ animationDelay: "400ms" }}
                  >
                    something
                  </span>
                </span>

                <span
                  className="inline-block word-reveal"
                  style={{ animationDelay: "550ms" }}
                >
                  remarkable.
                </span>
              </h1>

              {/* LINE */}

              <div
                className="mt-7 h-[2px] w-0 line-animation"
                style={{
                  background:
                    "linear-gradient(90deg,#0166FF,#F05C36)",
                }}
              />

              {/* DESCRIPTION */}

              <p
                className="mt-8 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed word-reveal"
                style={{
                  animationDelay: "850ms",
                }}
              >
                Have a product idea, engineering challenge, or
                development requirement? Let's connect and
                explore how we can turn your vision into a
                reliable, production-ready solution.
              </p>

              {/* SMALL FEATURES */}

              <div
                className="mt-9 flex flex-wrap gap-6 word-reveal"
                style={{
                  animationDelay: "1000ms",
                }}
              >
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2
                    size={18}
                    style={{ color: "#0166FF" }}
                  />

                  Engineering Expertise
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle2
                    size={18}
                    style={{ color: "#F05C36" }}
                  />

                  End-to-End Solutions
                </div>
              </div>
            </div>

            {/* =================================================
                HERO VISUAL
            ================================================== */}

            <Reveal direction="left" delay={300}>
              <div className="relative float-animation">
                <div className="relative aspect-square max-w-[470px] mx-auto">
                  {/* OUTER CIRCLE */}

                  <div
                    className="absolute inset-5 rounded-full rotate-slow"
                    style={{
                      border:
                        "1px solid rgba(1,102,255,0.15)",
                    }}
                  />

                  {/* SECOND CIRCLE */}

                  <div
                    className="absolute inset-16 rounded-full"
                    style={{
                      border:
                        "1px solid rgba(240,92,54,0.18)",
                    }}
                  />

                  {/* THIRD CIRCLE */}

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
                      opacity: 0.09,
                    }}
                  />

                  {/* CENTER */}

                  <div
                    className="
                      absolute
                      inset-[27%]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-700
                      hover:scale-110
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,#0166FF 0%,#0145B5 100%)",
                      boxShadow:
                        "0 30px 90px rgba(1,102,255,0.25)",
                    }}
                  >
                    <div className="text-center text-white">
                      <Mail
                        size={48}
                        strokeWidth={1.4}
                        className="mx-auto"
                      />

                      <div className="mt-4 text-xs tracking-[0.35em] text-white/70">
                        LET'S CONNECT
                      </div>
                    </div>
                  </div>

                  {/* FLOATING CARD */}

                  <div
                    className="
                      absolute
                      top-[8%]
                      right-[0]
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
                      RESPONSE
                    </div>

                    <div className="font-medium mt-1 text-gray-900">
                      Fast & Focused
                    </div>
                  </div>

                  {/* FLOATING CARD */}

                  <div
                    className="
                      absolute
                      bottom-[10%]
                      left-[0]
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
                      Engineering First
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
                      top-[21%]
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
          CONTACT INFORMATION
      ====================================================== */}

      <section
        className="py-24 px-6 md:px-12 lg:px-20 border-y"
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
                  color: "#F05C36",
                }}
              >
                GET IN TOUCH
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                Let's start a{" "}
                <span className="animated-gradient">
                  conversation.
                </span>
              </h2>

              <p className="mt-6 text-gray-500 leading-relaxed">
                Whether you have a new product concept or
                need engineering support for an existing
                project, our team is ready to help.
              </p>
            </div>
          </Reveal>

          {/* INFORMATION CARDS */}

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* EMAIL */}

            <Reveal delay={100}>
              <a
                href="mailto:sales@designcurvetech.com"
                className="
                  contact-card
                  group
                  block
                  h-full
                  p-7
                  rounded-3xl
                  bg-white
                  shadow-sm
                "
                style={{
                  border:
                    "1px solid rgba(17,24,39,0.08)",
                }}
              >
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
                  "
                  style={{
                    backgroundColor:
                      "rgba(1,102,255,0.08)",
                  }}
                >
                  <Mail
                    size={22}
                    style={{
                      color: "#0166FF",
                    }}
                  />
                </div>

                <div className="mt-7 text-xs tracking-[0.2em] text-gray-400">
                  EMAIL
                </div>

                <div className="mt-2 font-medium text-gray-900 break-all">
                  sales@designcurvetech.com
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    mt-6
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  style={{
                    color: "#0166FF",
                  }}
                />
              </a>
            </Reveal>

            {/* PHONE */}

            <Reveal delay={200}>
              <a
                href="tel:+918857857300"
                className="
                  contact-card
                  group
                  block
                  h-full
                  p-7
                  rounded-3xl
                  bg-white
                  shadow-sm
                "
                style={{
                  border:
                    "1px solid rgba(17,24,39,0.08)",
                }}
              >
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
                  "
                  style={{
                    backgroundColor:
                      "rgba(240,92,54,0.08)",
                  }}
                >
                  <Phone
                    size={22}
                    style={{
                      color: "#F05C36",
                    }}
                  />
                </div>

                <div className="mt-7 text-xs tracking-[0.2em] text-gray-400">
                  PHONE
                </div>

                <div className="mt-2 font-medium text-gray-900">
                  +91 8857857300
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    mt-6
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  style={{
                    color: "#F05C36",
                  }}
                />
              </a>
            </Reveal>

            {/* OFFICE HOURS */}

            <Reveal delay={300}>
              <div
                className="
                  contact-card
                  group
                  h-full
                  p-7
                  rounded-3xl
                  bg-white
                  shadow-sm
                "
                style={{
                  border:
                    "1px solid rgba(17,24,39,0.08)",
                }}
              >
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
                  "
                  style={{
                    backgroundColor:
                      "rgba(1,102,255,0.08)",
                  }}
                >
                  <Clock3
                    size={22}
                    style={{
                      color: "#0166FF",
                    }}
                  />
                </div>

                <div className="mt-7 text-xs tracking-[0.2em] text-gray-400">
                  OFFICE HOURS
                </div>

                <div className="mt-2 font-medium text-gray-900">
                  Mon - Fri
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  9:00 AM - 6:30 PM
                </div>
              </div>
            </Reveal>

            {/* LOCATION */}

            <Reveal delay={400}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sayaji+Square+Business+Hub+Chikhali+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  contact-card
                  group
                  block
                  h-full
                  p-7
                  rounded-3xl
                  bg-white
                  shadow-sm
                "
                style={{
                  border:
                    "1px solid rgba(17,24,39,0.08)",
                }}
              >
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
                  "
                  style={{
                    backgroundColor:
                      "rgba(240,92,54,0.08)",
                  }}
                >
                  <MapPin
                    size={22}
                    style={{
                      color: "#F05C36",
                    }}
                  />
                </div>

                <div className="mt-7 text-xs tracking-[0.2em] text-gray-400">
                  LOCATION
                </div>

                <div className="mt-2 font-medium text-gray-900">
                  Pune, Maharashtra
                </div>

                <div className="mt-1 text-sm text-gray-500">
                  India
                </div>

                <ArrowUpRight
                  size={18}
                  className="
                    mt-6
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                  style={{
                    color: "#F05C36",
                  }}
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT FORM
      ====================================================== */}

      <section className="py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24 items-start">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <Reveal direction="right">
              <div className="lg:sticky lg:top-28">
                <span
                  className="text-sm font-medium tracking-[0.2em]"
                  style={{
                    color: "#0166FF",
                  }}
                >
                  SEND AN ENQUIRY
                </span>

                <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-gray-900">
                  Tell us about your{" "}
                  <span className="animated-gradient">
                    project.
                  </span>
                </h2>

                <div
                  className="mt-6 h-[2px] w-24"
                  style={{
                    background:
                      "linear-gradient(90deg,#0166FF,#F05C36)",
                  }}
                />

                <p className="mt-7 text-lg text-gray-600 leading-relaxed">
                  Share a few details about your project
                  and our team will get back to you to
                  discuss the next steps.
                </p>

                {/* SIDE INFO */}

                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <div
                      className="
                        flex-shrink-0
                        w-10
                        h-10
                        rounded-xl
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        backgroundColor:
                          "rgba(1,102,255,0.08)",
                      }}
                    >
                      <CheckCircle2
                        size={19}
                        style={{
                          color: "#0166FF",
                        }}
                      />
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900">
                        Engineering Expertise
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Product design, development and
                        engineering analysis.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div
                      className="
                        flex-shrink-0
                        w-10
                        h-10
                        rounded-xl
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        backgroundColor:
                          "rgba(240,92,54,0.08)",
                      }}
                    >
                      <CheckCircle2
                        size={19}
                        style={{
                          color: "#F05C36",
                        }}
                      />
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900">
                        Client-Focused Approach
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Collaborative development from
                        concept to production.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CONTACT MINI CARD */}

                <div
                  className="
                    mt-10
                    p-6
                    rounded-3xl
                    bg-[#F5F7FA]
                  "
                  style={{
                    border:
                      "1px solid rgba(17,24,39,0.08)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={18}
                      style={{
                        color: "#F05C36",
                      }}
                    />

                    <span className="text-sm font-medium text-gray-900">
                      Ready to discuss your idea?
                    </span>
                  </div>

                  <a
                    href="mailto:sales@designcurvetech.com"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      mt-4
                      text-sm
                      font-medium
                      transition-all
                      hover:gap-3
                    "
                    style={{
                      color: "#0166FF",
                    }}
                  >
                    Email our team

                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* =================================================
                FORM
            ================================================== */}

            <Reveal direction="left" delay={150}>
              <div
                className="
                  relative
                  p-7
                  md:p-10
                  lg:p-12
                  rounded-[2rem]
                  bg-white
                  shadow-xl
                "
                style={{
                  border:
                    "1px solid rgba(17,24,39,0.08)",
                  boxShadow:
                    "0 30px 80px rgba(17,24,39,0.07)",
                }}
              >
                {/* FORM TOP GLOW */}

                <div
                  className="
                    absolute
                    -top-20
                    -right-20
                    w-48
                    h-48
                    rounded-full
                    blur-[80px]
                    pointer-events-none
                  "
                  style={{
                    backgroundColor: "#0166FF",
                    opacity: 0.08,
                  }}
                />

                <form
                  onSubmit={handleSubmit}
                  className="relative"
                >
                  {/* SUCCESS MESSAGE */}

                  {submitted && (
                    <div
                      className="
                        mb-7
                        flex
                        items-start
                        gap-3
                        p-4
                        rounded-2xl
                      "
                      style={{
                        backgroundColor:
                          "rgba(1,102,255,0.06)",
                        border:
                          "1px solid rgba(1,102,255,0.15)",
                      }}
                    >
                      <CheckCircle2
                        size={21}
                        className="flex-shrink-0 mt-0.5"
                        style={{
                          color: "#0166FF",
                        }}
                      />

                      <div>
                        <div className="font-medium text-gray-900">
                          Thank you for reaching out.
                        </div>

                        <div className="text-sm text-gray-500 mt-1">
                          Your enquiry has been received.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FORM HEADER */}

                  <div className="mb-9">
                    <div className="text-xs tracking-[0.2em] text-gray-400">
                      PROJECT DETAILS
                    </div>

                    <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                      Let's talk.
                    </h3>
                  </div>

                  {/* NAME */}

                  <div className="grid md:grid-cols-2 gap-5">
                    {/* FIRST NAME */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField("firstName")
                        }
                        onBlur={() =>
                          setFocusedField("")
                        }
                        required
                        placeholder="John"
                        className="
                          contact-input
                          w-full
                          px-5
                          py-4
                          rounded-2xl
                          outline-none
                          text-gray-900
                          placeholder:text-gray-400
                        "
                        style={{
                          backgroundColor:
                            focusedField === "firstName"
                              ? "#FFFFFF"
                              : "#F8FAFC",

                          border:
                            focusedField === "firstName"
                              ? "1px solid rgba(1,102,255,0.5)"
                              : "1px solid rgba(17,24,39,0.08)",

                          boxShadow:
                            focusedField === "firstName"
                              ? "0 0 0 4px rgba(1,102,255,0.07)"
                              : "none",
                        }}
                      />
                    </div>

                    {/* LAST NAME */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField("lastName")
                        }
                        onBlur={() =>
                          setFocusedField("")
                        }
                        required
                        placeholder="Doe"
                        className="
                          contact-input
                          w-full
                          px-5
                          py-4
                          rounded-2xl
                          outline-none
                          text-gray-900
                          placeholder:text-gray-400
                        "
                        style={{
                          backgroundColor:
                            focusedField === "lastName"
                              ? "#FFFFFF"
                              : "#F8FAFC",

                          border:
                            focusedField === "lastName"
                              ? "1px solid rgba(1,102,255,0.5)"
                              : "1px solid rgba(17,24,39,0.08)",

                          boxShadow:
                            focusedField === "lastName"
                              ? "0 0 0 4px rgba(1,102,255,0.07)"
                              : "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* EMAIL + PHONE */}

                  <div className="grid md:grid-cols-2 gap-5 mt-5">
                    {/* EMAIL */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField("email")
                        }
                        onBlur={() =>
                          setFocusedField("")
                        }
                        required
                        placeholder="john@company.com"
                        className="
                          contact-input
                          w-full
                          px-5
                          py-4
                          rounded-2xl
                          outline-none
                          text-gray-900
                          placeholder:text-gray-400
                        "
                        style={{
                          backgroundColor:
                            focusedField === "email"
                              ? "#FFFFFF"
                              : "#F8FAFC",

                          border:
                            focusedField === "email"
                              ? "1px solid rgba(1,102,255,0.5)"
                              : "1px solid rgba(17,24,39,0.08)",

                          boxShadow:
                            focusedField === "email"
                              ? "0 0 0 4px rgba(1,102,255,0.07)"
                              : "none",
                        }}
                      />
                    </div>

                    {/* PHONE */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField("phone")
                        }
                        onBlur={() =>
                          setFocusedField("")
                        }
                        placeholder="+91 98765 43210"
                        className="
                          contact-input
                          w-full
                          px-5
                          py-4
                          rounded-2xl
                          outline-none
                          text-gray-900
                          placeholder:text-gray-400
                        "
                        style={{
                          backgroundColor:
                            focusedField === "phone"
                              ? "#FFFFFF"
                              : "#F8FAFC",

                          border:
                            focusedField === "phone"
                              ? "1px solid rgba(1,102,255,0.5)"
                              : "1px solid rgba(17,24,39,0.08)",

                          boxShadow:
                            focusedField === "phone"
                              ? "0 0 0 4px rgba(1,102,255,0.07)"
                              : "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* COMPANY + SERVICE */}

                  <div className="grid md:grid-cols-2 gap-5 mt-5">
                    {/* COMPANY */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>

                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField("company")
                        }
                        onBlur={() =>
                          setFocusedField("")
                        }
                        placeholder="Company name"
                        className="
                          contact-input
                          w-full
                          px-5
                          py-4
                          rounded-2xl
                          outline-none
                          text-gray-900
                          placeholder:text-gray-400
                        "
                        style={{
                          backgroundColor:
                            focusedField === "company"
                              ? "#FFFFFF"
                              : "#F8FAFC",

                          border:
                            focusedField === "company"
                              ? "1px solid rgba(1,102,255,0.5)"
                              : "1px solid rgba(17,24,39,0.08)",

                          boxShadow:
                            focusedField === "company"
                              ? "0 0 0 4px rgba(1,102,255,0.07)"
                              : "none",
                        }}
                      />
                    </div>

                    {/* SERVICE */}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service
                      </label>

                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocusedField("service")
                        }
                        onBlur={() =>
                          setFocusedField("")
                        }
                        className="
                          contact-input
                          w-full
                          px-5
                          py-4
                          rounded-2xl
                          outline-none
                          text-gray-900
                          appearance-none
                        "
                        style={{
                          backgroundColor:
                            focusedField === "service"
                              ? "#FFFFFF"
                              : "#F8FAFC",

                          border:
                            focusedField === "service"
                              ? "1px solid rgba(1,102,255,0.5)"
                              : "1px solid rgba(17,24,39,0.08)",

                          boxShadow:
                            focusedField === "service"
                              ? "0 0 0 4px rgba(1,102,255,0.07)"
                              : "none",
                        }}
                      >
                        <option value="">
                          Select a service
                        </option>

                        <option value="Automotive Product Design">
                          Automotive Product Design
                        </option>

                        <option value="Home Appliances">
                          Home Appliances
                        </option>

                        <option value="Mould Design">
                          Mould Design
                        </option>

                        <option value="Mould Flow Analysis">
                          Mould Flow Analysis
                        </option>

                        <option value="CAE">
                          Computer-Aided Engineering
                        </option>

                        <option value="Other">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}

                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project *
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() =>
                        setFocusedField("message")
                      }
                      onBlur={() =>
                        setFocusedField("")
                      }
                      required
                      rows="6"
                      placeholder="Tell us about your idea, requirements, timeline or engineering challenge..."
                      className="
                        contact-input
                        w-full
                        px-5
                        py-4
                        rounded-2xl
                        outline-none
                        text-gray-900
                        placeholder:text-gray-400
                        resize-none
                      "
                      style={{
                        backgroundColor:
                          focusedField === "message"
                            ? "#FFFFFF"
                            : "#F8FAFC",

                        border:
                          focusedField === "message"
                            ? "1px solid rgba(1,102,255,0.5)"
                            : "1px solid rgba(17,24,39,0.08)",

                        boxShadow:
                          focusedField === "message"
                            ? "0 0 0 4px rgba(1,102,255,0.07)"
                            : "none",
                      }}
                    />
                  </div>

                  {/* SUBMIT */}

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <p className="text-xs text-gray-400 max-w-xs">
                      By submitting this form, you agree
                      to be contacted regarding your
                      enquiry.
                    </p>

                    <button
                      type="submit"
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
                      Send Enquiry

                      <Send
                        size={18}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION / MAP STYLE SECTION
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
              min-h-[390px]
            "
            style={{
              background:
                "linear-gradient(135deg,#F4F7FC 0%,#FFFFFF 100%)",
              border:
                "1px solid rgba(17,24,39,0.08)",
              boxShadow:
                "0 25px 70px rgba(17,24,39,0.06)",
            }}
          >
            {/* GRID */}

            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage: `
                  linear-gradient(#111827 1px, transparent 1px),
                  linear-gradient(90deg,#111827 1px, transparent 1px)
                `,
                backgroundSize: "55px 55px",
              }}
            />

            {/* BLUE GLOW */}

            <div
              className="
                absolute
                -right-32
                -top-32
                w-96
                h-96
                rounded-full
                blur-[110px]
                pulse-glow
              "
              style={{
                backgroundColor: "#0166FF",
                opacity: 0.1,
              }}
            />

            {/* ORANGE GLOW */}

            <div
              className="
                absolute
                -left-20
                -bottom-32
                w-80
                h-80
                rounded-full
                blur-[100px]
              "
              style={{
                backgroundColor: "#F05C36",
                opacity: 0.08,
              }}
            />

            <div className="relative z-10 min-h-[390px] flex items-center justify-center p-8">
              {/* CENTRAL LOCATION */}

              <div
                className="
                  relative
                  w-full
                  max-w-xl
                  p-8
                  md:p-10
                  rounded-[2rem]
                  bg-white/85
                  backdrop-blur-xl
                  text-center
                  shadow-xl
                "
                style={{
                  border:
                    "1px solid rgba(1,102,255,0.12)",
                }}
              >
                <div
                  className="
                    mx-auto
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                  "
                  style={{
                    backgroundColor:
                      "rgba(1,102,255,0.08)",
                  }}
                >
                  <MapPin
                    size={30}
                    style={{
                      color: "#0166FF",
                    }}
                  />
                </div>

                <div className="mt-6 text-xs tracking-[0.25em] text-gray-400">
                  VISIT OUR OFFICE
                </div>

                <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-gray-900">
                  Designcurve Technologies
                </h3>

                <p className="mt-4 text-gray-500 leading-relaxed">
                  Sayaji Square Business Hub, 2nd Floor,
                  Sector 13, Jadhavwadi Corner, Spine Road,
                  Chikhali, Pimpri-Chinchwad,
                  Pune, Maharashtra – 411062.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sayaji+Square+Business+Hub+Chikhali+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    mt-7
                    px-6
                    py-3
                    rounded-full
                    font-medium
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                  style={{
                    color: "#0166FF",
                    backgroundColor:
                      "rgba(1,102,255,0.06)",
                    border:
                      "1px solid rgba(1,102,255,0.12)",
                  }}
                >
                  <Navigation size={17} />

                  View Location

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 md:px-12 lg:px-20 pb-28">
        <Reveal>
          <div
            className="
              relative
              max-w-7xl
              mx-auto
              overflow-hidden
              rounded-[2.5rem]
            "
            style={{
              background:
                "linear-gradient(120deg,rgba(1,102,255,0.08),rgba(240,92,54,0.06))",
              border:
                "1px solid rgba(1,102,255,0.14)",
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
                  Talk to our engineering team about your
                  product, design, development, or analysis
                  requirements.
                </p>
              </div>

              <a
                href="mailto:sales@designcurvetech.com"
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

export default Contact;