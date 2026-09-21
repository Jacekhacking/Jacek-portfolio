import { useEffect } from "react";
import { Link } from "@tanstack/react-location";
import { projectData } from "../data";
import PageContainer from "../UI/Shared/PageContainer";

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

const WebIcon = () => (
  <svg className="w-8 h-8 text-border-strong" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const BackendIcon = () => (
  <svg className="w-8 h-8 text-border-strong" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="5" r="2"/>
    <circle cx="5" cy="19" r="2"/>
    <circle cx="19" cy="19" r="2"/>
    <line x1="12" y1="7" x2="5.7" y2="17.1"/>
    <line x1="12" y1="7" x2="18.3" y2="17.1"/>
    <line x1="7" y1="19" x2="17" y2="19"/>
  </svg>
);

const PreviewIcon = ({ category }) =>
  category === "backend" ? <BackendIcon /> : <WebIcon />;

const ProjectCard = ({ project }) => (
  <div className="col-span-4 sm:col-span-8 lg:col-span-6
                  bg-bg-card border border-border rounded-xl overflow-hidden
                  flex flex-col hover:border-border-strong transition-colors duration-200">

    {/* Preview area */}
    <div className="bg-bg h-44 flex flex-col items-center justify-center gap-3 px-6">
      <PreviewIcon category={project.category} />
      <span className="font-mono text-text-faint tracking-wide text-center"
            style={{ fontSize: "13px" }}>
        {project.previewText}
      </span>
    </div>

    {/* Card body */}
    <div className="p-6 flex flex-col flex-1 gap-4">

      {/* Title + category */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-text-primary font-semibold text-xl xl:text-2xl leading-snug">
          {project.name}
        </h3>
        <span className="tag flex-shrink-0 mt-0.5">{project.category}</span>
      </div>

      {/* Description */}
      <p className="text-text-muted leading-relaxed flex-1 text-base xl:text-lg">
        {project.shortDesc}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t}
                className="font-mono text-text-secondary border border-border
                           rounded px-2.5 py-0.5"
                style={{ fontSize: "13px" }}>
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-1">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 font-mono text-text-secondary
                      border border-border rounded px-3 py-1.5
                      hover:border-border-strong hover:text-text-primary
                      transition-colors duration-150"
           style={{ fontSize: "13px" }}>
          <GitHubIcon /> GitHub
        </a>

        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 font-mono text-text-secondary
                        border border-border rounded px-3 py-1.5
                        hover:border-border-strong hover:text-text-primary
                        transition-colors duration-150"
             style={{ fontSize: "13px" }}>
            <ExternalIcon /> Live
          </a>
        )}

        <Link to={`../project/${project.slug}`}
              className="flex items-center gap-2 font-mono ml-auto
                         border border-crimson-border rounded px-3 py-1.5
                         hover:bg-crimson-dim hover:border-crimson
                         transition-colors duration-150"
              style={{ fontSize: "13px", color: "var(--color-crimson)" }}>
          → Details
        </Link>
      </div>
    </div>
  </div>
);

const Projects = ({ onlyImportant = false }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const projects = onlyImportant
    ? projectData.filter((p) => p.important)
    : projectData;
  return (
  <main className="min-h-screen pt-[72px]">
    <PageContainer className="py-20" grid>
      <p className="hero-label mb-10 text-4xl lg:text-5xl xl:text-6xl
                   col-span-4 sm:col-span-8 lg:col-span-12">projects</p>

      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </PageContainer>
  </main>
  );
};

export default Projects;
