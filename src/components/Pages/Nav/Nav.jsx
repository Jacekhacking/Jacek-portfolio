import { Link } from "@tanstack/react-location";
import { useState, useEffect } from "react";
import Backdrop from "../../UI/Shared/Backdrop";
import SideDrawer from "../../UI/Shared/SideDrawer";
import resumePdf from "../../UI/Shared/JacekPortfolio.PDF";

const NAV_LINKS = [
  { label: "about",      to: "about" },
  { label: "experience", to: "experience" },
  { label: "projects",   to: "projects" },
];

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const Navigation = () => {
  const [sideDrawer, setSideDrawer] = useState(false);
  const [hamburger, setHamburger]   = useState(false);

  const closeMenu = () => { setSideDrawer(false); setHamburger(false); };
  const toggleMenu = () => { setSideDrawer((c) => !c); setHamburger((c) => !c); };

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) closeMenu(); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav fixed top-0 left-0 right-0 z-50 bg-bg relative">

      {/* Logo */}
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <span className="logo">
          <span className="logo-bracket">{"{"}</span>
          <span className="logo-initials">JH</span>
          <span className="logo-bracket">{"}"}</span>
        </span>
      </Link>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className="nav-link"
            getActiveProps={() => ({ className: "nav-link nav-link-active" })}
            onClick={() => window.scrollTo(0, 0)}
          >
            {label}
          </Link>
        ))}

        {/* Divider */}
        <span className="w-px h-5 bg-border" />

        {/* Resume download — intentionally subtle */}
        <a href={resumePdf} download="JacekHacking-Resume.pdf"
           className="flex items-center gap-2 font-mono transition-colors duration-150
                      hover:text-text-secondary"
           style={{ fontSize: "var(--text-nav-link)", color: "var(--color-text-faint)" }}>
          <DownloadIcon /> resume
        </a>

        {/* Contact */}
        <a href="mailto:jacekhacking@gmail.com" className="nav-cta">
          contact
        </a>
      </div>

      {/* Hamburger (mobile only) */}
      <button className="lg:hidden p-2 cursor-pointer" onClick={toggleMenu} aria-label="Toggle menu">
        <div className="flex flex-col gap-[6px]">
          <span className={`block h-px w-6 bg-text-secondary transition-all duration-300 origin-center ${hamburger ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-text-secondary transition-all duration-300 ${hamburger ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-text-secondary transition-all duration-300 origin-center ${hamburger ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </div>
      </button>

      {/* Mobile drawer */}
      {sideDrawer && <Backdrop onClick={closeMenu} />}
      {sideDrawer && (
        <SideDrawer onClick={closeMenu}>
          <div className="flex flex-col items-center gap-8">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} className="nav-link text-base"
                    getActiveProps={() => ({ className: "nav-link nav-link-active text-base" })}
                    onClick={closeMenu}>
                {label}
              </Link>
            ))}
            <a href={resumePdf} download="JacekHacking-Resume.pdf"
               className="flex items-center gap-2 nav-link text-base" onClick={closeMenu}>
              <DownloadIcon /> resume
            </a>
            <a href="mailto:jacekhacking@gmail.com" className="nav-cta" onClick={closeMenu}>
              contact
            </a>
          </div>
        </SideDrawer>
      )}
    </nav>
  );
};

export default Navigation;
