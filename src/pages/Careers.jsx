import React, { useState } from "react";
import { ArrowUpRight, Send, X, CheckCircle2 } from "lucide-react";

const Careers = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Career Application:", formData);

    alert("Application submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });

    setIsFormOpen(false);
  };

  return (
    <>
      <main className="min-h-screen bg-[#FDFDFD] text-gray-900 overflow-hidden">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-28 pb-20 overflow-hidden">

          {/* Blue Glow */}
          <div
            className="absolute -top-48 -left-48 w-[650px] h-[650px] rounded-full blur-[150px]"
            style={{
              backgroundColor: "#0166FF",
              opacity: 0.07,
            }}
          />

          {/* Orange Glow */}
          <div
            className="absolute -bottom-60 -right-48 w-[650px] h-[650px] rounded-full blur-[150px]"
            style={{
              backgroundColor: "#F05C36",
              opacity: 0.06,
            }}
          />

          {/* Grid */}
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

          {/* Decorative Circles */}
          <div
            className="absolute right-[-180px] top-1/2 -translate-y-1/2
            w-[600px] h-[600px] rounded-full
            border border-[#0166FF]/10"
          />

          <div
            className="absolute right-[-80px] top-1/2 -translate-y-1/2
            w-[400px] h-[400px] rounded-full
            border border-[#F05C36]/10"
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full">

            <div className="max-w-5xl">

              {/* Badge */}
              <div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8"
                style={{
                  backgroundColor: "rgba(1,102,255,0.05)",
                  border: "1px solid rgba(1,102,255,0.15)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: "#F05C36",
                  }}
                />

                <span className="text-sm tracking-[0.18em] text-gray-500">
                  CAREERS AT DESIGNCURVE
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.92] tracking-tight">

                Build your

                <span
                  className="block"
                  style={{
                    color: "#0166FF",
                  }}
                >
                  future
                </span>

                with us

                <span
                  style={{
                    color: "#F05C36",
                  }}
                >
                  .
                </span>

              </h1>

              {/* Description */}
              <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
                Join Designcurve Technologies and work with a team that
                transforms engineering ideas into innovative products. We are
                looking for talented, ambitious and passionate professionals
                ready to solve real-world engineering challenges.
              </p>

              {/* Apply Button */}
              <div className="mt-10">

                <button
                  type="button"
                  onClick={() => setIsFormOpen(true)}
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-white font-medium transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "#0166FF",
                    boxShadow: "0 15px 40px rgba(1,102,255,0.20)",
                  }}
                >
                  Apply Now

                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>

              </div>

            </div>

          </div>
        </section>
      </main>

      {/* =====================================================
          APPLICATION MODAL
      ====================================================== */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
          style={{
            backgroundColor: "rgba(10, 15, 25, 0.65)",
            backdropFilter: "blur(10px)",
          }}
        >

          {/* Modal */}
          <div
            className="
              relative
              w-full
              max-w-3xl
              max-h-[92vh]
              overflow-y-auto
              rounded-[2rem]
              bg-white
              shadow-2xl
              animate-[modalIn_0.35s_ease-out]
            "
          >

            {/* Blue Top Line */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{
                background:
                  "linear-gradient(90deg, #0166FF, #F05C36)",
              }}
            />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsFormOpen(false)}
              className="
                absolute
                top-5
                right-5
                z-10
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                bg-gray-100
                text-gray-600
                hover:bg-gray-200
                hover:rotate-90
                transition-all
              "
            >
              <X size={20} />
            </button>

            {/* Form Header */}
            <div className="px-7 md:px-10 pt-10 pb-6">

              <div className="flex items-center gap-3">

                <span
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: "#F05C36",
                  }}
                />

                <span
                  className="text-sm tracking-[0.18em] font-medium"
                  style={{
                    color: "#F05C36",
                  }}
                >
                  JOIN OUR TEAM
                </span>

              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                Apply at{" "}
                <span style={{ color: "#0166FF" }}>
                  Designcurve
                </span>
              </h2>

              <p className="mt-3 text-gray-500">
                Tell us about yourself and the opportunity you're interested
                in.
              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="px-7 md:px-10 pb-10 space-y-5"
            >

              {/* First / Last Name */}
              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="w-full px-5 py-4 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-100 focus:border-[#0166FF]"
                    style={{
                      border: "1px solid rgba(17,24,39,0.10)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last Name"
                    className="w-full px-5 py-4 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-100 focus:border-[#0166FF]"
                    style={{
                      border: "1px solid rgba(17,24,39,0.10)",
                    }}
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-5 py-4 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-100 focus:border-[#0166FF]"
                  style={{
                    border: "1px solid rgba(17,24,39,0.10)",
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-5 py-4 rounded-xl outline-none transition-all focus:ring-2 focus:ring-blue-100 focus:border-[#0166FF]"
                  style={{
                    border: "1px solid rgba(17,24,39,0.10)",
                  }}
                />
              </div>

              {/* Position */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position Applying For
                </label>

                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl outline-none bg-white transition-all focus:ring-2 focus:ring-blue-100 focus:border-[#0166FF]"
                  style={{
                    border: "1px solid rgba(17,24,39,0.10)",
                  }}
                >
                  <option value="">
                    Select a position
                  </option>

                  <option value="Design Engineer">
                    Design Engineer
                  </option>

                  <option value="Senior Design Engineer">
                    Senior Design Engineer
                  </option>

                  <option value="Lead Engineer">
                    Lead Engineer
                  </option>

                  <option value="Other">
                    Other / General Application
                  </option>
                </select>
              </div>

              {/* Comment / Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comment or Message *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your experience, skills and the role you are interested in..."
                  className="w-full px-5 py-4 rounded-xl outline-none resize-none transition-all focus:ring-2 focus:ring-blue-100 focus:border-[#0166FF]"
                  style={{
                    border: "1px solid rgba(17,24,39,0.10)",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full inline-flex justify-center items-center gap-3 px-7 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#0166FF",
                  boxShadow: "0 15px 40px rgba(1,102,255,0.18)",
                }}
              >
                Submit Application

                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to be contacted regarding
                career opportunities at Designcurve Technologies.
              </p>

            </form>
          </div>
        </div>
      )}

      {/* Modal Animation */}
      <style>
        {`
          @keyframes modalIn {
            from {
              opacity: 0;
              transform: translateY(25px) scale(0.96);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default Careers;