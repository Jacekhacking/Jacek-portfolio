import { useState, useCallback, useEffect } from "react";
import { useMatch, Link } from "@tanstack/react-location";
import { projectData } from "../data";

/* ── Shared icons ─────────────────────────────────────────────── */
const GitHubIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
             0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
             -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
             .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15
             -.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27
             .68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
             .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48
             0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8
             c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ── Mini nav (shared) ────────────────────────────────────────── */
const MiniNav = () => (
  <div className="flex items-center px-6 py-4 border-b border-border">
    <button
      onClick={() => window.history.back()}
      className="font-mono text-text-secondary hover:text-text-primary
                 transition-colors duration-150 cursor-pointer bg-transparent border-none"
      style={{ fontSize: "15px" }}
    >
      ← go back
    </button>
  </div>
);

/* ── Screenshot carousel ──────────────────────────────────────── */
const ScreenshotCarousel = ({ screenshots }) => {
  const [idx, setIdx]       = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIdx((i) => (i + 1) % screenshots.length), [screenshots.length]);

  useEffect(() => {
    if (paused || screenshots.length < 2) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next, screenshots.length]);

  if (!screenshots.length) return (
    <div className="bg-bg rounded-lg border border-border h-44
                    flex items-center justify-center">
      <span className="font-mono text-text-faint" style={{ fontSize: "13px" }}>
        no screenshots yet
      </span>
    </div>
  );

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="rounded-lg overflow-hidden border border-border bg-bg h-44">
        <img src={screenshots[idx]} alt={`screenshot ${idx + 1}`}
             className="w-full h-full object-cover" />
      </div>
      {screenshots.length > 1 && (
        <div className="flex items-center justify-between mt-2 px-1">
          <span className="font-mono text-text-faint" style={{ fontSize: "11px" }}>
            screenshot {idx + 1} / {screenshots.length}
          </span>
          <div className="flex gap-1.5">
            {screenshots.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer
                                  ${i === idx ? "w-6 bg-text-secondary" : "w-3 bg-border-strong"}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Layout A — visual (hero image + two-column) ──────────────── */
const LayoutVisual = ({ project }) => (
  <div className="min-h-screen">
    <div className="max-w-5xl mx-auto">
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden mt-8 mx-4 mb-12">

        <MiniNav />

        {/* Hero banner */}
        <div className="bg-bg border-b border-border h-52 flex items-center justify-center">
          {project.screenshots[0]
            ? <img src={project.screenshots[0]} alt="hero"
                   className="w-full h-full object-cover object-top" />
            : <span className="font-mono text-text-faint tracking-widest"
                    style={{ fontSize: "13px" }}>
                hero screenshot / banner image
              </span>
          }
        </div>

        {/* Project header */}
        <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-text-primary text-3xl font-semibold leading-tight mb-1">
              {project.name}
            </h1>
            <p className="text-text-muted font-mono" style={{ fontSize: "14px" }}>
              {project.subtitle}
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0 mt-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 font-mono text-text-secondary
                          border border-border rounded px-3 py-1.5
                          hover:border-border-strong hover:text-text-primary
                          transition-colors duration-150"
               style={{ fontSize: "13px" }}>
              <GitHubIcon /> github
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 font-mono text-text-secondary
                            border border-border rounded px-3 py-1.5
                            hover:border-border-strong hover:text-text-primary
                            transition-colors duration-150"
                 style={{ fontSize: "13px" }}>
                <ExternalIcon /> live
              </a>
            )}
          </div>
        </div>

        <div className="divider mx-6" />

        {/* Two-column content */}
        <div className="flex flex-col lg:flex-row gap-0">

          {/* Left — writeup */}
          <div className="flex-1 px-6 py-6 min-w-0">
            {project.sections.map((s) => (
              <div key={s.title} className="mb-8">
                <p className="font-mono text-text-faint mb-3 tracking-wide"
                   style={{ fontSize: "12px" }}>
                  {s.title}
                </p>
                <p className="text-text-muted leading-relaxed" style={{ fontSize: "16px" }}>
                  {s.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right — sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0 px-6 py-6
                          border-t lg:border-t-0 lg:border-l border-border">

            <p className="font-mono text-text-faint mb-3 tracking-wide"
               style={{ fontSize: "12px" }}>
              screenshots
            </p>
            <ScreenshotCarousel screenshots={project.screenshots} />

            <p className="font-mono text-text-faint mt-6 mb-3 tracking-wide"
               style={{ fontSize: "12px" }}>
              tech stack
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            {project.highlights.length > 0 && (
              <>
                <p className="font-mono text-text-faint mb-3 tracking-wide"
                   style={{ fontSize: "12px" }}>
                  highlights
                </p>
                <div className="flex flex-col gap-2">
                  {project.highlights.map((h) => (
                    <div key={h.label} className="bg-bg rounded-lg border border-border px-4 py-3">
                      <p className="font-mono text-text-faint mb-1"
                         style={{ fontSize: "11px" }}>
                        {h.label}
                      </p>
                      <p className="text-text-primary font-semibold text-xl">{h.value}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Layout B — editorial (full-width writeup) ────────────────── */
const LayoutEditorial = ({ project }) => (
  <div className="min-h-screen">
    <div className="max-w-4xl mx-auto px-4 mb-12">
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden mt-8">

        <MiniNav />

        <div className="px-8 py-8">
          {/* Category breadcrumb */}
          <p className="hero-label mb-3">{project.category} · writeup</p>

          {/* Title */}
          <h1 className="text-text-primary text-4xl font-semibold leading-tight
                         tracking-tight mb-2">
            {project.name}
          </h1>

          {/* Subtitle / tech inline */}
          <p className="text-text-muted font-mono mb-8" style={{ fontSize: "15px" }}>
            {project.tech.join(" · ")} · {project.subtitle.split("·").pop().trim()}
          </p>

          <div className="divider mb-8" />

          {/* Sections */}
          {project.sections.map((s, i) => (
            <div key={s.title} className="mb-10">
              <h2 className="text-text-primary text-2xl font-semibold mb-4">
                {s.title.charAt(0).toUpperCase() + s.title.slice(1)}
              </h2>
              <p className="text-text-muted leading-relaxed" style={{ fontSize: "17px" }}>
                {s.content}
              </p>

              {/* Callout after first section if highlights exist */}
              {i === 0 && project.highlights.length > 0 && (
                <div className="border-l-2 border-crimson pl-4 py-2 mt-6 bg-bg rounded-r-lg">
                  <p className="font-mono text-crimson mb-2"
                     style={{ fontSize: "12px", color: "var(--color-crimson)" }}>
                    key metrics
                  </p>
                  {project.highlights.map((h) => (
                    <p key={h.label} className="text-text-muted" style={{ fontSize: "15px" }}>
                      {h.label}: <span className="text-text-primary font-semibold">{h.value}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Bottom actions */}
          <div className="flex gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 font-mono text-text-secondary
                          border border-border rounded px-4 py-2
                          hover:border-border-strong hover:text-text-primary
                          transition-colors duration-150"
               style={{ fontSize: "14px" }}>
              <GitHubIcon /> github
            </a>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 font-mono cursor-pointer
                            border rounded px-4 py-2 transition-colors duration-150"
                 style={{
                   fontSize: "14px",
                   color: "var(--color-crimson)",
                   borderColor: "var(--color-crimson-border)",
                 }}>
                <ExternalIcon /> live site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Router ───────────────────────────────────────────────────── */
const ProjectDetail = () => {
  const { params: { slug } } = useMatch();
  const project = projectData.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return (
    <main className="min-h-screen flex items-center justify-center pt-[72px]">
      <div className="text-center">
        <p className="text-text-muted text-xl mb-4">Project not found.</p>
        <Link to="../../projects" className="text-crimson font-mono"
              style={{ color: "var(--color-crimson)" }}>
          ← back to projects
        </Link>
      </div>
    </main>
  );

  return (
    <div className="pt-[72px]">
      {project.layout === "editorial"
        ? <LayoutEditorial project={project} />
        : <LayoutVisual    project={project} />
      }
    </div>
  );
};

export default ProjectDetail;
