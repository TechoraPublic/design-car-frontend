import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  ArrowUpRight,
} from "lucide-react";

const ClientTestimonials = () => {
  const sliderRef = useRef(null);
  const autoScrollRef = useRef(null);
  const sectionRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [visible, setVisible] = useState(false);

  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const testimonials = [
    {
      name: "Vijay Sharma",
      role: "Automotive OEM",
      text: "I had a fantastic experience with Design curve Technologies, their team was professional and attentive, delivering innovative solutions on time. Their commitment to quality and customer satisfaction truly sets them apart!",
      image:
        "https://designcurvetech.com/wp-content/uploads/2025/02/Screenshot-2025-02-03-171806.png",
    },
    {
      name: "Rahul Adiga",
      role: "Automotive Tier 1 Supplier",
      text: "Design curve Technologies provided exceptional service, combining expert knowledge with timely delivery. Their proactive problem-solving and clear communication made our project a success—highly recommended.",
      image:
        "https://designcurvetech.com/wp-content/uploads/2025/02/Screenshot-2025-02-03-171806.png",
    },
    {
      name: "Navin Malhotra",
      role: "Automotive Tier 1 Supplier",
      text: "I was impressed with Design curve Technologies, their expertise and responsiveness made the entire process seamless. They tackled challenges creatively and consistently exceeded my expectations.",
      image:
        "https://designcurvetech.com/wp-content/uploads/2025/02/Screenshot-2025-02-03-171806.png",
    },
    {
      name: "Arjun Mehta",
      role: "Automotive OEM",
      text: "The DesignCurve team understood our requirements quickly and translated complex engineering challenges into practical solutions. Their attention to detail and delivery discipline were excellent.",
      image:
        "https://designcurvetech.com/wp-content/uploads/2025/02/Screenshot-2025-02-03-171806.png",
    },
    {
      name: "Sanjay Kapoor",
      role: "Automotive Tier 1 Supplier",
      text: "Working with DesignCurve was a smooth and professional experience. Their engineering knowledge, communication and ability to adapt made a significant difference to our project.",
      image:
        "https://designcurvetech.com/wp-content/uploads/2025/02/Screenshot-2025-02-03-171806.png",
    },
    {
      name: "Amit Verma",
      role: "Product Engineering Partner",
      text: "DesignCurve consistently demonstrated strong technical expertise and a genuine understanding of our business requirements. Their team delivered reliable solutions while maintaining excellent quality standards.",
      image:
        "https://designcurvetech.com/wp-content/uploads/2025/02/Screenshot-2025-02-03-171806.png",
    },
  ];

  /* ==========================================================
     TEXT / SECTION REVEAL
  ========================================================== */

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

  /* ==========================================================
     AUTO SCROLL
  ========================================================== */

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    autoScrollRef.current = setInterval(() => {
      if (isHovered || isDragging || !slider) {
        return;
      }

      slider.scrollBy({
        left: 1,
        behavior: "auto",
      });

      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 5
      ) {
        slider.scrollTo({
          left: 0,
          behavior: "auto",
        });
      }
    }, 25);

    return () => {
      clearInterval(autoScrollRef.current);
    };
  }, [isHovered, isDragging]);

  /* ==========================================================
     MANUAL CONTROLS
  ========================================================== */

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  /* ==========================================================
     DRAG SUPPORT
  ========================================================== */

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;

    setIsDragging(true);

    dragStartX.current = e.pageX;
    dragScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    e.preventDefault();

    const distance =
      (e.pageX - dragStartX.current) * 1.2;

    sliderRef.current.scrollLeft =
      dragScrollLeft.current - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-[#FDFDFD]
        py-7
        sm:py-9
        lg:py-11
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[300px]
          top-[15%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#0166FF]/[0.035]
          blur-[160px]
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
          bg-[#F05C36]/[0.035]
          blur-[160px]
        "
      />

      {/* =====================================================
          GRID
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
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="px-5 sm:px-8 lg:px-12">

          {/* Label */}

          <div
            className={`
              flex
              items-center
              gap-4

              transition-all
              duration-[1000ms]
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
              Client Stories
            </span>

            <span className="h-px w-12 bg-[#F05C36]" />
          </div>

          <div
            className="
              mt-6
              flex
              flex-col
              justify-between
              gap-7

              lg:flex-row
              lg:items-end
            "
          >

            {/* =================================================
                TITLE + DESCRIPTION
            ================================================= */}

            <div>

              <h2
                className={`
                  max-w-[900px]
                  text-5xl
                  font-black
                  leading-[0.92]
                  tracking-[-0.065em]
                  text-[#0B1220]

                  sm:text-6xl
                  lg:text-[6rem]

                  transition-all
                  duration-[1200ms]
                  delay-100
                  ease-[cubic-bezier(.16,1,.3,1)]

                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-14 opacity-0"
                  }
                `}
              >
                What Our
                <br />

                <span className="text-[#0166FF]">
                  Clients Say
                </span>
              </h2>

              <p
                className={`
                  mt-6
                  max-w-[620px]
                  text-base
                  leading-8
                  text-[#0B1220]/50

                  sm:text-lg

                  transition-all
                  duration-[1100ms]
                  delay-300
                  ease-[cubic-bezier(.16,1,.3,1)]

                  ${
                    visible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }
                `}
              >
                Trusted by automotive OEMs, Tier 1 suppliers and
                engineering teams that demand precision,
                flexibility and quality.
              </p>

            </div>

            {/* =================================================
                CONTROLS
            ================================================= */}

            <div
              className={`
                flex
                items-center
                gap-3

                transition-all
                duration-[1000ms]
                delay-400
                ease-[cubic-bezier(.16,1,.3,1)]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >


            </div>

          </div>
        </div>

        {/* =================================================
            SLIDER
        ================================================= */}

        <div
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsDragging(false);
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className={`
            mt-12
            flex
            cursor-grab
            gap-5
            overflow-x-auto
            px-5
            pb-5

            sm:mt-14
            sm:px-8

            lg:px-12

            ${isDragging ? "cursor-grabbing" : ""}

            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          `}
        >

          {testimonials.map((testimonial, index) => (

            <article
              key={`${testimonial.name}-${index}`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              className={`
                group
                relative
                flex
                min-h-[420px]
                w-[350px]
                shrink-0
                flex-col
                justify-between

                border
                border-[#0B1220]/10
                bg-white

                p-7

                transition-all
                duration-[900ms]
                ease-[cubic-bezier(.16,1,.3,1)]

                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }

                hover:-translate-y-2
                hover:border-[#0166FF]/30
                hover:shadow-[0_30px_80px_rgba(11,18,32,.08)]

                sm:w-[410px]
                sm:p-9

                lg:w-[450px]
              `}
            >

              {/* =================================================
                  TOP
              ================================================= */}

              <div>

                <div
                  className="
                    flex
                    items-start
                    justify-between
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      bg-[#0166FF]/[0.07]
                      text-[#0166FF]

                      transition-all
                      duration-700

                      group-hover:bg-[#0166FF]
                      group-hover:text-white
                    "
                  >
                    <Quote
                      size={20}
                      fill="currentColor"
                    />
                  </div>

                  <span
                    className="
                      text-[9px]
                      font-bold
                      tracking-[0.2em]
                      text-[#0B1220]/20
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* =================================================
                    TESTIMONIAL TEXT
                ================================================= */}

                <p
                  className="
                    mt-8
                    text-base
                    font-medium
                    leading-8
                    tracking-[-0.01em]
                    text-[#0B1220]/65

                    sm:text-[17px]
                  "
                >
                  “{testimonial.text}”
                </p>

              </div>

              {/* =================================================
                  CLIENT
              ================================================= */}

              <div>

                <div
                  className="
                    mb-6
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#0166FF]/30
                    via-[#0B1220]/10
                    to-transparent
                  "
                />

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <div className="flex items-center gap-4">

                    {/* CLIENT IMAGE */}

                    <div
                      className="
                        relative
                        h-12
                        w-12
                        shrink-0
                        overflow-hidden
                        rounded-full
                        bg-[#0B1220]/5
                      "
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="
                          h-full
                          w-full
                          object-cover
                        "
                      />
                    </div>

                    <div>

                      <h3
                        className="
                          text-sm
                          font-black
                          tracking-[-0.02em]
                          text-[#0B1220]
                        "
                      >
                        {testimonial.name}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-[#0B1220]/35
                        "
                      >
                        {testimonial.role}
                      </p>

                    </div>

                  </div>

               

                </div>

              </div>

              {/* =================================================
                  HOVER ACCENT
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-gradient-to-r
                  from-[#0166FF]
                  to-[#F05C36]

                  transition-all
                  duration-700

                  group-hover:w-full
                "
              />

            </article>

          ))}

        </div>

        {/* =================================================
            BOTTOM INFORMATION
        ================================================= */}

        <div
          className={`
            mt-5
            flex
            flex-col
            justify-between
            gap-4
            px-5

            sm:px-8

            md:flex-row
            md:items-center

            lg:px-12

            transition-all
            duration-[1000ms]
            delay-500
            ease-[cubic-bezier(.16,1,.3,1)]

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#0166FF]
                shadow-[0_0_12px_rgba(1,102,255,.6)]
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#0B1220]/35
              "
            >
              Auto scroll enabled
            </span>

          </div>

          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#0B1220]/30
            "
          >
            <span>Drag to explore</span>

            <span className="h-px w-8 bg-[#F05C36]" />

            <span>6 Client Stories</span>
          </div>

        </div>

        {/* =================================================
            CTA
        ================================================= */}

        <div
          className={`
            mt-12
            px-5

            sm:px-8
            lg:px-12

            transition-all
            duration-[1000ms]
            delay-700
            ease-[cubic-bezier(.16,1,.3,1)]

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >

          <a
            href="/contact"
            className="
              group
              inline-flex
              items-center
              gap-3

              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#0B1220]

              transition-colors
              duration-500

              hover:text-[#0166FF]
            "
          >
            Start your project

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#0B1220]
                text-white

                transition-all
                duration-700

                group-hover:rotate-45
                group-hover:bg-[#0166FF]
              "
            >
              <ArrowUpRight size={15} />
            </span>

          </a>

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
          h-4
          bg-gradient-to-t
          from-[#FDFDFD]
          to-transparent
        "
      />

    </section>
  );
};

export default ClientTestimonials;