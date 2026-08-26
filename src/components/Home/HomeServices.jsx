import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Product Design",
    description:
      "We offer comprehensive CAD design and construction services for the Automotive, Aerospace, and Transportation industries, covering the entire development process from concept to manufacturing and product launch. Our skilled and experienced team supports OEMs, Tier 1, and Tier 2 suppliers throughout their product launch journey.",
    image: "/ProductDesign.png",
  },
  {
    number: "02",
    title: "Staffing",
    description:
      "We focus on our expertise, providing the best candidates for your CAD and CAE contract or direct hire roles, along with flexible payroll options. Many of our hires come through internal referrals, as our skilled engineers and analysts personally curate our talent pool. We recognize top talent and ensure they seamlessly integrate into your team. Once onboard, they bring their creativity, technical expertise, and enthusiasm to deliver exceptional results tailored to your project needs.",
    image: "/Staffing.png",
  },
  {
    number: "03",
    title: "Simulations",
    description:
      "We specialize in creating a wide range of finite element models across various industry domains with exceptional turnaround times. Leveraging our extensive experience in finite element analysis, we deliver models that closely align with calculation requirements, ensuring enhanced accuracy and reliability in results.",
    image: "/Simulations.png",
  },
  {
    number: "04",
    title: "Training",
    description:
      "We offer specialized training services in CAD, CAE, and automotive product knowledge designed to empower engineers and professionals with industry-relevant skills. Our training programs are tailored to cover essential design and analysis tools, advanced simulation techniques, and key automotive product development processes. With a focus on hands-on learning, participants gain practical experience in using industry-standard software and understanding the intricacies of automotive interiors, exteriors, and systems.",
    image: "/Training.png",
  },
];

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FDFDFD]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Blue Glow */}
        <div
          className="
            absolute
            -left-[250px]
            top-[10%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#0166FF]/[0.035]
            blur-[150px]
          "
        />

        {/* Orange Glow */}
        <div
          className="
            absolute
            -right-[250px]
            top-[45%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#F05C36]/[0.035]
            blur-[150px]
          "
        />

        {/* Technical Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(#0B1220 1px, transparent 1px),
              linear-gradient(90deg, #0B1220 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Large Background Number */}
        <div
          className="
            absolute
            right-[-40px]
            top-[5%]
            select-none
            text-[300px]
            font-black
            leading-none
            tracking-[-0.12em]
            text-[#0B1220]/[0.018]
          "
        >
          02
        </div>
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
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <div
          className={`
            max-w-[950px]
            transition-all
            duration-[1400ms]
            ease-[cubic-bezier(.16,1,.3,1)]
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          {/* Eyebrow */}

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#0166FF]" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#0B1220]/45
              "
            >
              Our Expertise
            </span>

            <span className="h-px w-12 bg-[#F05C36]" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-[clamp(3rem,6vw,6.4rem)]
              font-black
              leading-[0.9]
              tracking-[-0.065em]
              text-[#0B1220]
            "
          >
            Extensive expertise in
            <br />

            <span
              className="
                relative
                inline-block
                text-[#0166FF]
              "
            >
              automotive interior design.

              {/* Orange Line */}

              <span
                className={`
                  absolute
                  -bottom-3
                  left-0
                  h-[4px]
                  bg-[#F05C36]
                  transition-all
                  duration-[1600ms]
                  ease-[cubic-bezier(.16,1,.3,1)]
                  ${visible ? "w-[110px]" : "w-0"}
                `}
              />
            </span>
          </h2>
        </div>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:mt-24">
          {services.map((service, index) => {
            const isActive = activeCard === index;

            return (
              <article
                key={service.number}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`
                  group
                  relative
                  min-h-[460px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#0B1220]/[0.08]
                  bg-[#0B1220]
                  shadow-[0_20px_70px_rgba(11,18,32,0.08)]
                  transition-all
                  duration-[900ms]
                  ease-[cubic-bezier(.16,1,.3,1)]
                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-14 opacity-0"
                  }
                  ${
                    isActive
                      ? "scale-[1.015] border-[#0166FF]/30 shadow-[0_35px_100px_rgba(1,102,255,0.15)]"
                      : ""
                  }
                `}
                style={{
                  transitionDelay: `${index * 130}ms`,
                }}
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  draggable="false"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    opacity-65
                    transition-all
                    duration-[1400ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:scale-[1.08]
                    group-hover:opacity-75
                  "
                />

                {/* =================================================
                    DARK CINEMATIC OVERLAY
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#07101f]
                    via-[#07101f]/65
                    to-[#07101f]/5
                  "
                />

                {/* =================================================
                    BLUE LIGHT
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-[350px]
                    w-[350px]
                    rounded-full
                    bg-[#0166FF]/20
                    blur-[100px]
                    transition-all
                    duration-[1200ms]
                    group-hover:bg-[#0166FF]/35
                    group-hover:scale-125
                  "
                />

                {/* =================================================
                    ORANGE LIGHT
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    -left-32
                    h-[280px]
                    w-[280px]
                    rounded-full
                    bg-[#F05C36]/10
                    blur-[90px]
                    transition-all
                    duration-[1400ms]
                    group-hover:bg-[#F05C36]/25
                    group-hover:scale-125
                  "
                />

                {/* =================================================
                    LUXURY LIGHT SWEEP
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-[60%]
                    top-0
                    h-full
                    w-[35%]
                    skew-x-[-18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/10
                    to-transparent
                    blur-sm
                    transition-all
                    duration-[1500ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:left-[130%]
                  "
                />

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div
                  className="
                    relative
                    flex
                    min-h-[460px]
                    flex-col
                    justify-between
                    p-7
                    sm:p-8
                    lg:p-10
                  "
                >
                  {/* TOP */}

                  <div className="flex items-start justify-between">
                    {/* Number */}

                    <div className="flex items-center gap-3">
                      <span
                        className="
                          text-[11px]
                          font-bold
                          tracking-[0.25em]
                          text-white/50
                        "
                      >
                        {service.number}
                      </span>

                      <span
                        className="
                          h-px
                          w-8
                          bg-white/20
                          transition-all
                          duration-700
                          group-hover:w-14
                          group-hover:bg-[#0166FF]
                        "
                      />
                    </div>

                    {/* Arrow */}

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-white/[0.07]
                        backdrop-blur-md
                        transition-all
                        duration-700
                        group-hover:border-[#0166FF]
                        group-hover:bg-[#0166FF]
                        group-hover:rotate-45
                      "
                    >
                      <ArrowUpRight
                        size={19}
                        className="text-white"
                      />
                    </div>
                  </div>

                  {/* BOTTOM */}

                  <div>
                    {/* Small Category */}

                    <div
                      className="
                        mb-4
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.28em]
                        text-[#F05C36]
                      "
                    >
                      DesignCurve Technologies
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        max-w-[500px]
                        text-3xl
                        font-black
                        leading-[0.95]
                        tracking-[-0.05em]
                        text-white
                        transition-transform
                        duration-700
                        group-hover:-translate-y-1
                        sm:text-4xl
                      "
                    >
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-5
                        max-w-[650px]
                        text-sm
                        leading-6
                        text-white/60
                        transition-colors
                        duration-700
                        group-hover:text-white/75
                        sm:text-[15px]
                      "
                    >
                      {service.description}
                    </p>

                    {/* Bottom Line */}

                    <div className="mt-7 flex items-center gap-3">
                      <span
                        className="
                          h-[2px]
                          w-8
                          bg-[#F05C36]
                          transition-all
                          duration-700
                          group-hover:w-16
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.22em]
                          text-white/45
                          transition-colors
                          duration-500
                          group-hover:text-white
                        "
                      >
                        Explore
                      </span>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CARD EDGE
                ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    from-[#0166FF]
                    to-[#F05C36]
                    transition-all
                    duration-[1000ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                    group-hover:w-full
                  "
                />
              </article>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          CUSTOM ANIMATIONS
      ====================================================== */}

      <style>{`
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

export default Services;