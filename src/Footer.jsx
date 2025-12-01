import React from "react";
import CVPic from "./assets/CV_Pic.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-red-500 to-purple-500">
      {/* dramatic dark wave divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="w-full h-40"               /* much taller wave */
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,120 C160,260 320,40 520,120 C720,200 880,280 1200,140 L1200,300 L0,300 Z"
            fill="#06111a"
            opacity="1"
          />
        </svg>
      </div>

      {/* dark band and footer content */}
      <div className="w-full bg-linear-to-b from-[#04101a] via-[#071022] to-[#071223]">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* LEFT: avatar area with floating blob + pulse */}
            <div className="relative flex items-center gap-5">
              {/* floating gradient blob behind avatar */}
              <div
                className="absolute -left-6 -top-6 w-44 h-44 rounded-2xl filter blur-3xl opacity-60 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(60% 60% at 30% 30%, rgba(99,102,241,0.22), rgba(139,92,246,0.12) 40%, rgba(0,0,0,0) 70%)",
                  transform: "translateZ(0)",
                  animation: "blobFloat 9s ease-in-out infinite",
                }}
              />

              {/* avatar (pulse) */}
              <div className="relative">
                <img
                  src={CVPic}
                  alt="Adi"
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-indigo-400/40 shadow-2xl animate-avatarPulse"
                  style={{ boxShadow: "0 26px 60px rgba(2,6,23,0.6)" }}
                />
                {/* subtle outer pulse ring */}
                <span className="absolute -inset-0.5 rounded-full animate-pulseRing pointer-events-none" />
              </div>

              {/* name */}
              <div className="z-10">
                <p className="text-gray-100 font-bold text-xl">Adi Mishra</p>
                <p className="text-sm text-gray-300 mt-1">Designed & built with ❤️ • Portfolio v1.0</p>
              </div>
            </div>

            {/* CENTER: nav links — larger spacing */}
            <div className="flex flex-wrap justify-center gap-10">
              {[
                { l: "Home", href: "#Home" },
                { l: "About", href: "#about" },
                { l: "Projects", href: "#projects" },
                { l: "Skills", href: "#skill" },
                { l: "Contact", href: "#contact" },
              ].map(({ l, href }) => (
                <a
                  key={l}
                  href={href}
                  className="relative text-gray-200 text-base font-medium px-1 py-1 hover:text-indigo-300 transition hover:shadow-amber-400"
                >
                  <span className="inline-block">{l}</span>
                  <span
                    className="absolute left-0 right-0 -bottom-2 h-[3px] bg-indigo-400 scale-x-0 origin-left transition-transform"
                    style={{ transformOrigin: "left" }}
                  />
                </a>
              ))}
            </div>

            {/* RIGHT: large social icons */}
            <div className="flex items-center gap-5 text-3xl text-gray-200">
              <a
                href="https://github.com/AdityaMishra130"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full hover:text-white hover:bg-indigo-600/90 transition-shadow"
                aria-label="GitHub"
                style={{ boxShadow: "0 12px 30px rgba(13,36,74,0.35)" }}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/adityamishra1977/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full hover:text-white hover:bg-indigo-600/90 transition-shadow"
                aria-label="LinkedIn"
                style={{ boxShadow: "0 12px 30px rgba(13,36,74,0.35)" }}
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="p-3 rounded-full hover:text-white hover:bg-indigo-600/90 transition-shadow"
                aria-label="Instagram"
                style={{ boxShadow: "0 12px 30px rgba(13,36,74,0.35)" }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* bottom centered message */}
          <div className="text-center mt-12 text-gray-300 font-medium">
            Let’s build something amazing together 🚀
          </div>
        </div>
      </div>

      {/* animations & small tweaks */}
      <style>{`
        /* dramatic wave already applied via taller SVG */

        /* blob float animation */
        @keyframes blobFloat {
          0% { transform: translateY(0) rotate(0deg) scale(1); }
          33% { transform: translateY(-8px) rotate(3deg) scale(1.02); }
          66% { transform: translateY(6px) rotate(-2deg) scale(0.99); }
          100% { transform: translateY(0) rotate(0deg) scale(1); }
        }

        /* subtle avatar pulse (scale) */
        @keyframes avatarPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.015); }
          100% { transform: scale(1); }
        }

        .animate-avatarPulse {
          animation: avatarPulse 4.5s ease-in-out infinite;
          will-change: transform;
        }

        /* soft outer ring pulse */
        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(99,102,241,0.18); opacity: 1; }
          70% { box-shadow: 0 0 0 16px rgba(99,102,241,0.04); opacity: 0.6; }
          100% { box-shadow: 0 0 0 28px rgba(99,102,241,0); opacity: 0; }
        }
        .animate-pulseRing {
          animation: pulseRing 5.5s ease-out infinite;
        }

        /* underline reveal on hover */
        footer a:hover > span + span {
          transform: scaleX(1);
        }
        footer a > span + span {
          transform: scaleX(0);
        }

        /* icon glow */
        footer a:hover {
          box-shadow: 0 18px 45px rgba(99,102,241,0.08);
        }

        /* responsive adjustments */
        @media (max-width: 640px) {
          svg.w-full.h-40 { height: 28px; } /* smaller wave on mobile */
          .animate-pulseRing { display: none; } /* hide ring on tiny screens to reduce clutter */
        }
      `}</style>
    </footer>
  );
}
