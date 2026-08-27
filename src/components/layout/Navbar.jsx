import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // =====================================================
  // INITIAL NAVBAR ANIMATION
  // =====================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // =====================================================
  // SCROLL EFFECT
  // NAVBAR STAYS TRANSPARENT THROUGH HERO
  // TURNS WHITE AFTER HERO
  // =====================================================

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;

      // White navbar only after hero section
      setScrolled(window.scrollY >= heroHeight - 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // =====================================================
  // BODY LOCK WHEN MOBILE MENU OPEN
  // =====================================================

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            loaded
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }

          ${
            scrolled || mobileOpen
              ? `
                bg-white/95
                shadow-[0_8px_40px_rgba(11,18,32,0.10)]
                backdrop-blur-2xl
              `
              : `
                bg-transparent
                shadow-none
                backdrop-blur-0
              `
          }
        `}
      >
        {/* =================================================
            TOP ACCENT LINE
        ================================================== */}

        <div
          className={`
            absolute
            left-0
            right-0
            top-0
            h-[2px]

            origin-left

            bg-gradient-to-r
            from-[#0166FF]
            via-[#0166FF]
            to-[#F05C36]

            transition-transform
            duration-1000

            ${
              loaded
                ? "scale-x-100"
                : "scale-x-0"
            }
          `}
        />

        <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">

          <div className="flex h-[82px] items-center justify-between">

            {/* =================================================
                LOGO
            ================================================== */}

            <a
              href="/"
              className={`
                group
                relative
                flex
                items-center

                transition-all
                duration-700
                delay-100

                ${
                  loaded
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }
              `}
            >

              {/* Logo glow */}

              <span
                className="
                  absolute
                  -inset-3
                  -z-10
                  rounded-full

                  bg-[#0166FF]/10

                  opacity-0
                  blur-xl

                  transition-all
                  duration-500

                  group-hover:opacity-100
                "
              />

              <img
                src="/logo.png"
                alt="DesignCurve Technologies"
                className="
                  h-[58px]
                  w-auto
                  object-contain

                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:scale-[1.04]
                  group-hover:-translate-y-[1px]
                "
              />

            </a>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <div className="hidden items-center lg:flex">

              <NavLink
                href="/"
                label="Home"
                delay="delay-200"
                loaded={loaded}
                scrolled={scrolled}
              />

              <NavLink
                href="/services"
                label="Services"
                delay="delay-[250ms]"
                loaded={loaded}
                scrolled={scrolled}
              />

              <NavLink
                href="/contact"
                label="Contact Us"
                delay="delay-300"
                loaded={loaded}
                scrolled={scrolled}
              />

              <NavLink
                href="/about"
                label="About Us"
                delay="delay-[350ms]"
                loaded={loaded}
                scrolled={scrolled}
              />

              <NavLink
                href="/career"
                label="Careers"
                delay="delay-[400ms]"
                loaded={loaded}
                scrolled={scrolled}
              />

            </div>

            {/* =================================================
                CONTACT BUTTON
            ================================================== */}

            <div
              className={`
                hidden
                lg:block

                transition-all
                duration-700
                delay-500

                ${
                  loaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
            >

              <a
                href="/contact"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-full

                  bg-[#0166FF]

                  px-6
                  py-3.5

                  text-sm
                  font-bold
                  text-white

                  shadow-[0_8px_25px_rgba(1,102,255,0.22)]

                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(1,102,255,0.3)]

                  active:translate-y-0
                "
              >

                {/* Orange slide */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full

                    bg-[#F05C36]

                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]

                    group-hover:translate-x-0
                  "
                />

                {/* Shine */}

                <span
                  className="
                    absolute
                    left-[-80%]
                    top-0
                    h-full
                    w-[50%]

                    rotate-[20deg]

                    bg-white/20
                    blur-md

                    transition-all
                    duration-700

                    group-hover:left-[130%]
                  "
                />

                <span className="relative z-10">
                  Contact Us
                </span>

              </a>

            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="
                group
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-full

                border
                border-[#0B1220]/10

                bg-white
                text-[#0B1220]

                transition-all
                duration-300

                hover:border-[#0166FF]/30
                hover:text-[#0166FF]
                hover:shadow-[0_8px_25px_rgba(1,102,255,0.12)]

                lg:hidden
              "
              aria-label="Toggle menu"
            >

              <span
                className="
                  absolute
                  inset-0
                  scale-0
                  rounded-full

                  bg-[#0166FF]/5

                  transition-transform
                  duration-300

                  group-hover:scale-100
                "
              />

              <span className="relative z-10">

                {mobileOpen ? (
                  <X
                    size={22}
                    className="animate-[spin_0.35s_ease-out]"
                  />
                ) : (
                  <Menu
                    size={22}
                    className="
                      transition-transform
                      duration-300

                      group-hover:scale-110
                    "
                  />
                )}

              </span>

            </button>

          </div>

        </div>

        {/* =====================================================
            MOBILE NAVIGATION
        ====================================================== */}

        <div
          className={`
            overflow-hidden

            border-t
            border-gray-100

            bg-white/95
            backdrop-blur-2xl

            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            lg:hidden

            ${
              mobileOpen
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="mx-auto max-w-[1450px] px-5 py-5 sm:px-8">

            <MobileLink
              href="/"
              label="Home"
              onClick={closeMobileMenu}
              active={true}
              visible={mobileOpen}
              delay="delay-100"
            />

            <MobileLink
              href="/services"
              label="Services"
              onClick={closeMobileMenu}
              visible={mobileOpen}
              delay="delay-150"
            />

            <MobileLink
              href="/contact"
              label="Contact Us"
              onClick={closeMobileMenu}
              visible={mobileOpen}
              delay="delay-200"
            />

            <MobileLink
              href="/about"
              label="About Us"
              onClick={closeMobileMenu}
              visible={mobileOpen}
              delay="delay-300"
            />

            <MobileLink
              href="/career"
              label="Careers"
              onClick={closeMobileMenu}
              visible={mobileOpen}
              delay="delay-[350ms]"
            />

            {/* =================================================
                MOBILE CONTACT
            ================================================== */}

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className={`
                group
                mt-5
                flex
                items-center
                justify-center
                gap-3

                rounded-full

                bg-[#0166FF]

                px-6
                py-4

                font-bold
                text-white

                shadow-[0_8px_25px_rgba(1,102,255,0.2)]

                transition-all
                duration-500

                hover:bg-[#F05C36]
                hover:shadow-[0_15px_35px_rgba(1,102,255,0.25)]

                ${
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }

                delay-[400ms]
              `}
            >

              <span>
                Contact Us
              </span>

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full

                  bg-white/10

                  transition-all
                  duration-300

                  group-hover:rotate-[-8deg]
                "
              >

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300

                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />

              </span>

            </a>

          </div>

        </div>

      </nav>

      {/* =====================================================
          NAVBAR SPACING
      ====================================================== */}

      <div className="h-[82px]" />
    </>
  );
};


/* =========================================================
   DESKTOP NAV LINK
========================================================= */

const NavLink = ({
  href,
  label,
  active = false,
  delay = "",
  loaded,
  scrolled,
}) => {
  return (
    <a
      href={href}
      className={`
        group
        relative

        px-5
        py-3

        text-[15px]
        font-semibold

        transition-all
        duration-700

        ${delay}

        ${
          loaded
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }

        ${
          scrolled
            ? "text-[#0B1220]"
            : "text-white"
        }
      `}
    >

      <span
        className="
          relative
          z-10

          transition-colors
          duration-300

          group-hover:text-[#0166FF]
        "
      >
        {label}
      </span>

      {/* Hover underline */}

      <span
        className={`
          absolute
          bottom-[5px]
          left-5
          right-5
          h-[2px]

          origin-left
          rounded-full

          bg-[#0166FF]

          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            active
              ? "scale-x-100"
              : "scale-x-0 group-hover:scale-x-100"
          }
        `}
      />



    </a>
  );
};


/* =========================================================
   MOBILE NAV LINK
========================================================= */

const MobileLink = ({
  href,
  label,
  onClick,
  active = false,
  visible,
  delay = "",
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        group
        flex
        items-center
        justify-between

        border-b
        border-gray-100

        py-4

        text-lg
        font-semibold

        transition-all
        duration-500

        ${delay}

        ${
          visible
            ? "translate-x-0 opacity-100"
            : "-translate-x-5 opacity-0"
        }

        ${
          active
            ? "text-[#0166FF]"
            : "text-[#0B1220]"
        }
      `}
    >

      <span
        className="
          transition-transform
          duration-300

          group-hover:translate-x-2
        "
      >
        {label}
      </span>

      <ArrowUpRight
        size={18}
        className="
          text-[#0B1220]/30

          transition-all
          duration-300

          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:text-[#0166FF]
        "
      />

    </a>
  );
};


export default Navbar;