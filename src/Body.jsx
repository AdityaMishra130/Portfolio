import React from "react";
import CVPic from "./assets/CV_Pic.png";
// MainBody.jsx
// A self-contained React component (Tailwind CSS) for the body of a personal portfolio.
// Drop this component between your existing <Navbar /> and <Footer /> in App.jsx (or wherever you want it).
// Replace placeholder text, links and images with your real content.

export default function MainBody() {
  const skills = [
    "React.js",
    "Node.js",
    "HTML5",
    "Tailwind CSS",
    "CSS3",
    "C++",
    "Java",
    "JavaScript"
  ];

  const projects = [
    {
      title: "IdeaStreamX - Project Demo",
      desc: "A simple storefront/portfolio demo showing project cards and modal previews (static).",
      tech: "React • Tailwind • Static",
      link: "#"
    },
    {
      title: "Task Manager (UI)",
      desc: "A front-end only task manager UI to demonstrate CRUD-style interactions (mock).",
      tech: "React • Tailwind",
      link: "#"
    },
    {
      title: "Algorithm Visualizer",
      desc: "Small interactive visual demos for sorting and searching algorithms.",
      tech: "JavaScript • React",
      link: "#"
    }
  ];
const [showMsg, setShowMsg] = React.useState(false);

function handleSend(e) {
  e.preventDefault();
  setShowMsg(true);
  setTimeout(() => setShowMsg(false), 4000);
}

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div id="Home">
            <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4">Hi, I'm Adi</span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">I build sleek front-end experiences with React</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Student &amp; aspiring software engineer — I love converting ideas into user-friendly interfaces. Currently learning & building with React, Node.js and modern web tools.</p>

            <div className="flex gap-3">
              <a href="#projects" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:shadow-lg transition">See my work</a>
              <a href="#contact" className="inline-block px-5 py-3 border border-gray-200 rounded-lg hover:bg-gray-100 transition hover:text-black">Contact me</a>
            </div>

            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              <strong>Quick facts:</strong> Fast learner • Problem solver • Vegetarian (so I code with energy 😄)
            </div>
          </div>

          {/* Hero profile — larger, modern, subtle animations */}
<div className="flex justify-center md:justify-end">
  <div className="relative group" style={{ zIndex: 10 }}>
    {/* soft glowing gradient ring (behind) */}
    <div
      className="absolute -inset-1 rounded-3xl opacity-70 pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.10))",
        filter: "blur(22px)",
        transform: "translateZ(0)"
      }}
    />

    {/* main card */}
    <div
      className="relative overflow-hidden rounded-3xl shadow-2xl"
      style={{
        width: "18rem",            // mobile default (w-72)
        height: "18rem",           // mobile default
      }}
    >
      {/* responsive sizing — larger on md */}
      <div
        className="w-full h-full rounded-3xl border border-white/10 overflow-hidden"
        style={{
          // subtle float animation + smooth transform when hovered
          animation: "float 6s ease-in-out infinite",
          transition: "transform 350ms ease, box-shadow 350ms ease",
        }}
      >
        <img
          src={CVPic}
          alt="Adi Mishra"
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl"
          style={{
            display: "block",
            transformOrigin: "center",
            // on hover the parent will scale so keep image sharp with slight transform
          }}
        />

        {/* soft dark gradient overlay at bottom for depth */}
        <div
          className="absolute left-0 right-0 bottom-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 100%)",
          }}
        />

        {/* small caption/label inside the card (optional) */}
        <div
          className="absolute left-4 bottom-4 text-white text-sm font-semibold pointer-events-none"
          style={{ textShadow: "0 6px 18px rgba(0,0,0,0.45)" }}
        >
          Adi Mishra — Front-end
        </div>
      </div>

      {/* hover interactions — scale + rotate a hair */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          transition: "opacity 300ms ease",
          pointerEvents: "none"
        }}
      />
    </div>
  </div>

  {/* Inline styles for keyframes + responsive sizing */}
  <style>{`
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }

    /* on group hover (desktop) slightly scale up and rotate for subtle pop */
    @media (hover: hover) {
      .group:hover .w-full {
        transform: scale(1.03) rotate(-0.5deg);
      }
      .group:hover img {
        transform: scale(1.02);
      }
    }

    /* responsive: make the card larger on md+ */
    @media (min-width: 768px) {
      .group > div[style] { width: 24rem !important; height: 24rem !important; } /* md:w-96 */
    }
  `}</style>
</div>


        </div>
      </section>

      {/* ABOUT & SKILLS */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white/60 dark:bg-gray-900/60 rounded-2xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-3">About me</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">I am a Computer Science student who enjoys building front-end interfaces and small full-stack demos. I focus on writing clean, reusable React components, and I like to play with animations and micro-interactions to make the UI feel alive.</p>

              <p className="text-gray-700 dark:text-gray-300">I also study algorithms and data structures — so I care about not only how an interface looks but also how it performs. I love collaborating on small projects and learning new tools.</p>
            </div>

            <div id="skill">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 12.5l2.2 2.2L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="mt-4 inline-block text-sm text-indigo-600 hover:underline">Let's work together →</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Selected projects</h2>
          <p className="text-sm text-gray-500">Front-end focused demos and UI experiments.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl p-5 bg-white dark:bg-gray-900 shadow hover:scale-[1.01] transform transition">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{p.desc}</p>
              <div className="text-xs text-gray-500 mb-4">{p.tech}</div>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="max-w-4xl mx-auto px-6 py-12">
  <div className="bg-[#0b1220]/70 rounded-2xl p-8 shadow-sm border border-gray-800/40">
    <h2 className="text-2xl font-bold mb-4 text-gray-100">Contact</h2>
    <p className="text-gray-300 mb-6">
      Got a project, internship or just want to say hi? Drop a message — I'll reply as soon as I can.
    </p>

    {/* add these state + handler lines at top of your component (inside the MainBody function),
        right before the return() if they are not already present:
        const [showMsg, setShowMsg] = React.useState(false);
        function handleSend(e) {
          e.preventDefault();
          setShowMsg(true);
          setTimeout(() => setShowMsg(false), 4000);
        }
    */}

    {/* If you prefer, you can place them directly above this section inside the same component. */}
    <form
      id="contactForm"
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        // show the nice message
        // ensure these variables exist in scope (see comment above)
        if (typeof setShowMsg === "function") {
          setShowMsg(true);
          setTimeout(() => setShowMsg(false), 4000);
        }
      }}
    >
      <input
        name="name"
        className="p-3 border rounded bg-transparent text-gray-100 placeholder-gray-400"
        placeholder="Your name"
        aria-label="Your name"
        required
      />
      <input
        name="email"
        type="email"
        className="p-3 border rounded bg-transparent text-gray-100 placeholder-gray-400"
        placeholder="Your email"
        aria-label="Your email"
        required
      />
      <textarea
        name="message"
        className="md:col-span-2 p-3 border rounded bg-transparent text-gray-100 placeholder-gray-400"
        rows={5}
        placeholder="Message"
        aria-label="Message"
        required
      />
      <button
        type="submit"
        className="md:col-span-2 inline-block px-5 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Send message
      </button>
    </form>

    {/* The themed success message (static local UI) */}
    {/* Make sure `showMsg` state exists in the same component scope as noted above */}
    {typeof showMsg !== "undefined" && showMsg && (
      <div
        className="mt-6 p-4 rounded-xl bg-indigo-600/10 border border-indigo-400/30 text-indigo-200 text-sm font-medium shadow-lg"
        role="status"
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl">✅</div>
          <div>
            <div className="font-semibold">Message sent!</div>
            <div className="text-sm text-indigo-200/90">Grazie 🙌</div>
          </div>
        </div>
      </div>
    )}

    <div className="mt-6 text-sm text-gray-400">
      Or find me on:
      <a className="text-indigo-400 hover:underline ml-2" href="https://github.com/AdityaMishra130" target="_blank" rel="noreferrer">GitHub</a>
      <span className="mx-2">•</span>
      <a className="text-indigo-400 hover:underline" href="https://www.linkedin.com/in/adityamishra1977/" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  </div>

  {/* small keyframe for smooth appearance (Tailwind-only page but inline style allowed) */}
  <style>{`
    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    /* apply animation to the success box when shown */
    .animate-slideUpFade {
      animation: slideUpFade 320ms ease-out;
    }
  `}</style>
</section>

      {/* FINAL MINI FOOTER ABOVE THE WAVE */}
      <section className="w-full bg-[#0b1220] py-10 text-center text-sm text-gray-300">
        <div>Made with ❤️ using React + Tailwind • © {new Date().getFullYear()} Adi</div>
      </section>
    </main>
  );
}
