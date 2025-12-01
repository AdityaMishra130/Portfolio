import React, { useEffect, useState, useRef } from "react";
import CVPic from "./assets/CV_Pic.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [imgError, setImgError] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  const name = "Adi Mishra";
  const role = "Front-end • React";

  // NOTE: these are the ids you said you used (lowercase except Home)
  const sections = [
    { id: "Home", label: "Introduction" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skill", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  // compute nav height from DOM (so we don't hardcode)
  const getNavHeight = () => {
    if (!navRef.current) return 84;
    const rect = navRef.current.getBoundingClientRect();
    return Math.round(rect.height);
  };

  // Robust IntersectionObserver which picks the entry with largest intersectionRatio
  useEffect(() => {
    // find which section elements actually exist
    const existing = sections
      .map((s) => ({ ...s, el: document.getElementById(s.id) }))
      .filter((s) => s.el);

    const missing = sections.filter((s) => !document.getElementById(s.id)).map(s => s.id);
    if (missing.length) {
      // warn so you can inspect (not fatal)
      console.warn("[Navbar] Missing section IDs (not found in DOM):", missing);
    }

    if (existing.length === 0) {
      // nothing to observe
      return;
    }

    const opts = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    };

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting || e.intersectionRatio > 0);
      if (visible.length === 0) return;
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const topEntry = visible[0];
      const id = topEntry.target.getAttribute("id");
      if (id) setActive(id);
    }, opts);

    existing.forEach((s) => observer.observe(s.el));

    // fallback: if IntersectionObserver misses something (rare), poll scroll position
    let scrollTimeout = null;
    function onScrollFallback() {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
        // find the section whose top is nearest to center of viewport
        const centerY = window.innerHeight / 2;
        let best = { id: null, dist: Infinity };
        existing.forEach(({ id, el }) => {
          const r = el.getBoundingClientRect();
          const dist = Math.abs(r.top + r.height / 2 - centerY);
          if (dist < best.dist) best = { id, dist };
        });
        if (best.id) setActive(best.id);
      }, 150);
    }
    window.addEventListener("scroll", onScrollFallback, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollFallback);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []); // run once

  // close mobile menu when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (open && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // goto with computed navHeight; also handle hash on load
  const goto = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) {
      console.warn("[Navbar] goto: element not found for id:", id);
      return;
    }
    const navH = getNavHeight();
    const y = el.getBoundingClientRect().top + window.pageYOffset - navH + 8;
    window.scrollTo({ top: y, behavior: "smooth" });
    // set active immediately for better UX
    setActive(id);
    // update url hash without jumping
    try {
      history.replaceState(null, "", `#${id}`);
    } catch (e) {}
  };

  // on mount: if url has a hash, scroll to it (after a tiny timeout so layout settles)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      // delay slightly to allow layout to stabilize
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const navH = getNavHeight();
          const y = el.getBoundingClientRect().top + window.pageYOffset - navH + 8;
          window.scrollTo({ top: y, behavior: "smooth" });
          setActive(hash);
        }
      }, 120);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="w-full sticky top-0 z-50" ref={navRef}>
      <nav className="w-full bg-[#071022]/90 backdrop-blur-sm border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Left: avatar + name */}
            <div className="flex items-center gap-3">
              <div className="relative">
                {!imgError ? (
                  <img
                    src={CVPic}
                    alt={name}
                    onError={() => setImgError(true)}
                    loading="lazy"
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-indigo-400 shadow-md"
                  />
                ) : (
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
                    {name.split(" ").map(n => n[0]).slice(0,2).join("").toUpperCase()}
                  </div>
                )}

                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 ring-2 ring-white" />
              </div>

              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm md:text-base text-gray-100 font-semibold">{name}</span>
                <span className="text-xs text-gray-400">{role}</span>
              </div>
            </div>

            {/* Center links */}
            <div className="flex-1 flex justify-center">
              <div className="hidden md:flex items-center gap-8">
                {sections.map((s) => {
                  const isActive = active === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => goto(s.id)}
                      className={`relative px-2 py-2 rounded-md transition-colors duration-200
                        ${isActive ? "text-indigo-300" : "text-gray-300 hover:text-indigo-300"}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="text-sm md:text-base">{s.label}</span>

                      {/* underline bar */}
                      <div
                        className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-indigo-400 transition-all duration-300
                          ${isActive ? "w-full" : "w-0"}`}
                        aria-hidden
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: contact + mobile */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); goto('contact'); }}
                className="hidden md:inline-block px-4 py-2 rounded-md bg-indigo-600 text-white text-sm md:text-base shadow hover:opacity-95"
              >
                Contact Me
              </a>

              <div ref={menuRef} className="md:hidden relative">
                <button
                  aria-label="Toggle menu"
                  aria-expanded={open}
                  onClick={() => setOpen(!open)}
                  className="p-2 rounded-md bg-transparent border border-gray-700/30"
                >
                  <svg className="w-6 h-6 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    {open ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                    )}
                  </svg>
                </button>

                {open && (
                  <div className="absolute right-0 top-full mt-3 w-screen max-w-xs sm:max-w-sm bg-[#071223] border border-gray-800/50 rounded-lg shadow-lg p-4">
                    <div className="flex flex-col gap-2">
                      {sections.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => goto(s.id)}
                          className={`text-left w-full px-3 py-3 rounded-md text-base transition
                            ${active === s.id ? "bg-indigo-600/20 text-indigo-300" : "text-gray-200 hover:bg-white/3"}`}
                        >
                          {s.label}
                        </button>
                      ))}
                      <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); goto('contact'); }}
                        className="mt-2 block w-full text-center px-3 py-3 bg-indigo-600 text-white rounded-md"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}
