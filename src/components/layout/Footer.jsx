import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Clock3,
  Navigation,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  // =====================================================
  // SCROLL TO TOP WHEN ROUTE CHANGES
  // =====================================================
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  // =====================================================
  // FOOTER VISIBILITY ANIMATION
  // =====================================================
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden bg-[#07101D] text-[#FDFDFD]"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/footer_lamb.png"
          alt="DesignCurve Engineering"
          className={`
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-[8000ms]
            ease-out
            ${visible ? "scale-100" : "scale-[1.08]"}
          `}
        />

        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-[#07101D]/45" />

        {/* Left cinematic gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#07101D]/80
            via-[#07101D]/35
            to-transparent
          "
        />

        {/* Bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[55%]
            bg-gradient-to-t
            from-[#07101D]
            via-[#07101D]/70
            to-transparent
          "
        />

        {/* Top gradient */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[25%]
            bg-gradient-to-b
            from-[#07101D]/70
            to-transparent
          "
        />

        {/* Orange cinematic glow */}
        <div
          className="
            absolute
            -right-[220px]
            bottom-[5%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#F05C36]/[0.08]
            blur-[170px]
            animate-[pulse_9s_ease-in-out_infinite]
          "
        />

        {/* Horizontal cinematic light */}
        <div
          className="
            absolute
            left-0
            top-[48%]
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#0166FF]/30
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          FLOATING ORBIT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[12%]
          z-[2]
          hidden
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-[#0166FF]/15
          lg:block
          animate-[spin_25s_linear_infinite]
        "
      >
        <div
          className="
            absolute
            -right-1
            top-1/2
            h-2
            w-2
            -translate-y-1/2
            rounded-full
            bg-[#0166FF]
            shadow-[0_0_25px_#0166FF]
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-20 mx-auto max-w-[1550px]">

        {/* =================================================
            HERO CONTACT
        ================================================= */}

        <div className="px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">

          {/* Label */}

          <div
            className={`
              flex
              items-center
              gap-4
              transition-all
              duration-[1400ms]
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <span className="h-px w-14 bg-[#0166FF]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/45">
              Contact DesignCurve
            </span>

            <span className="h-px w-14 bg-[#F05C36]" />
          </div>

          {/* Heading */}

          <div
            className={`
              mt-8
              transition-all
              delay-150
              duration-[1600ms]
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
          >
            <h1
              className="
                max-w-[1100px]
                text-5xl
                font-black
                leading-[0.88]
                tracking-[-0.075em]
                text-white
                sm:text-6xl
                md:text-7xl
                lg:text-[8rem]
              "
            >
              Let's Bring Your
              <br />

              <span className="text-[#0166FF]">Ideas</span>{" "}

              <span className="relative inline-block">
                to Life

                <span
                  className="
                    absolute
                    -bottom-3
                    left-0
                    h-[4px]
                    w-20
                    bg-[#F05C36]
                    sm:w-28
                    lg:w-36
                  "
                />
              </span>
            </h1>
          </div>

          {/* Description */}

          <p
            className={`
              mt-8
              max-w-[650px]
              text-base
              leading-8
              text-white/50
              transition-all
              delay-300
              duration-[1500ms]
              sm:text-lg
              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            From product design and engineering to development and
            production support, let's create something exceptional
            together.
          </p>
        </div>

        {/* =================================================
            CONTACT PANEL
        ================================================= */}

        <div className="px-5 sm:px-8 lg:px-12">
          <div
            className="
              relative
              overflow-hidden
              border
              border-white/10
              bg-[#07101D]/65
              backdrop-blur-xl
            "
          >

            {/* Animated top line */}

            <div
              className="
                absolute
                left-0
                top-0
                z-10
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-[#0166FF]
                to-[#F05C36]
              "
            />

            <div className="grid lg:grid-cols-[1fr_1fr_1fr]">

              {/* =================================================
                  COMPANY
              ================================================= */}

              <div
                className="
                  border-b
                  border-white/10
                  p-8
                  sm:p-10
                  lg:border-b-0
                  lg:border-r
                  lg:p-12
                "
              >
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#0166FF]
                      shadow-[0_0_18px_#0166FF]
                      animate-pulse
                    "
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/35">
                    DesignCurve Technologies
                  </span>
                </div>

                <h3
                  className="
                    mt-7
                    text-3xl
                    font-black
                    tracking-[-0.05em]
                    text-white
                    sm:text-4xl
                  "
                >
                  Engineering
                  <br />

                  <span className="text-[#0166FF]">
                    Beyond Ideas.
                  </span>
                </h3>

                <p className="mt-6 max-w-[380px] text-sm leading-7 text-white/40">
                  We transform ideas into engineered products through
                  innovative design, advanced engineering and
                  production-focused solutions.
                </p>
              </div>

              {/* =================================================
                  CONTACT
              ================================================= */}

              <div
                className="
                  border-b
                  border-white/10
                  p-8
                  sm:p-10
                  lg:border-b-0
                  lg:border-r
                  lg:p-12
                "
              >

                {/* EMAIL */}

                <div className="group">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        bg-[#0166FF]/10
                        text-[#0166FF]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:bg-[#0166FF]
                        group-hover:text-white
                      "
                    >
                      <Mail size={17} />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                        Email
                      </p>

                      <a
                        href="mailto:sales@designcurvetech.com"
                        className="
                          mt-1
                          block
                          text-sm
                          font-semibold
                          text-white
                          transition-colors
                          hover:text-[#0166FF]
                        "
                      >
                        sales@designcurvetech.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* PHONE */}

                <div className="group mt-9">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        bg-[#F05C36]/10
                        text-[#F05C36]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:bg-[#F05C36]
                        group-hover:text-white
                      "
                    >
                      <Phone size={17} />
                    </div>

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                        Phone
                      </p>

                      <a
                        href="tel:+918857857300"
                        className="
                          mt-1
                          block
                          text-lg
                          font-black
                          text-white
                          transition-colors
                          hover:text-[#F05C36]
                        "
                      >
                        +91 8857857300
                      </a>
                    </div>
                  </div>
                </div>

                {/* HOURS */}

                <div className="mt-9 flex items-center gap-3">
                  <Clock3
                    size={17}
                    className="text-[#0166FF]"
                  />

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                      Working Hours
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white/70">
                      Mon - Fri · 9:00 AM – 6:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  LOCATION
              ================================================= */}

              <div className="relative p-8 sm:p-10 lg:p-12">

                {/* Location pulse */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-10
                    top-10
                    h-16
                    w-16
                    rounded-full
                    border
                    border-[#F05C36]/20
                    animate-ping
                  "
                />

                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      bg-[#F05C36]/10
                      text-[#F05C36]
                      transition-all
                      duration-500
                      hover:bg-[#F05C36]
                      hover:text-white
                    "
                  >
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                      Our Location
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      Pune, Maharashtra
                    </p>
                  </div>
                </div>

                <p
                  className="
                    mt-7
                    max-w-[430px]
                    text-sm
                    leading-7
                    text-white/50
                  "
                >
                  Sayaji Square Business Hub, 2nd Floor,
                  Sector 13, Jadhavwadi Corner, Spine Road,
                  Chikhali, Pimpri-Chinchwad,
                  Pune, Maharashtra – 411062.
                </p>

                {/* Location link */}

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sayaji+Square+Business+Hub+Chikhali+Pune+Maharashtra+411062"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white/60
                    transition-colors
                    hover:text-[#F05C36]
                  "
                >
                  <Navigation
                    size={13}
                    className="
                      transition-transform
                      duration-500
                      group-hover:-translate-y-1
                    "
                  />

                  View Location

                  <ArrowUpRight
                    size={13}
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="mt-20 border-t border-white/10">
          <div
            className="
              flex
              flex-col
              gap-5
              px-5
              py-7
              sm:px-8
              md:flex-row
              md:items-center
              md:justify-between
              lg:px-12
            "
          >
            <p
              className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-white/25
              "
            >
              © {new Date().getFullYear()} DesignCurve Technologies
            </p>

            <div className="flex items-center gap-6">

              {/* HOME */}

              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#0166FF]
                "
              >
                Home
              </Link>

              {/* SERVICES */}

              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#0166FF]
                "
              >
                Services
              </Link>

              {/* ABOUT */}

              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#0166FF]
                "
              >
                About
              </Link>

              {/* CONTACT */}

              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/30
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:text-[#F05C36]
                "
              >
                Contact
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;