import PageContainer from "../UI/Shared/PageContainer";

const BADGE = {
  upcoming:  "border border-crimson text-crimson",
  education: "bg-border-strong text-text-secondary",
  project:   "bg-border-strong text-text-secondary",
  work:      "bg-border-strong text-text-secondary",
};

const entries = [
  {
    title:       "B.S. Computer Science",
    subtitle:    "University of Utah",
    description: "Graduating December 2026. Coursework in algorithms, distributed systems, ML, and systems programming. Capstone: Start or Bench — a full-stack fantasy football platform with a PySpark ML pipeline.",
    tags:        ["algorithms", "systems", "ML", "capstone"],
    date:        "Dec 2026",
    badge:       "education",
    dot:         "open",
  },
  {
    title:       "Start or Bench",
    subtitle:    "capstone project",
    description: "Fantasy football platform built with Spring Boot, PostgreSQL, Redis, and Auth0 JWT auth. PySpark Random Forest model for WR point predictions (RMSE 6.39 vs baseline 6.93). Vector DB scouting report pipeline with a collaborator.",
    tags:        ["Java", "Spring Boot", "PostgreSQL", "Redis", "PySpark", "React"],
    date:        "2025 — 2026",
    badge:       "project",
    dot:         "filled",
  },
  {
    title:       "Freelance Web Developer",
    subtitle:    "LC Bodywork · independent",
    description: "Designed and built a professional site for a local massage therapy practice. Mobile-first layout, service pages, and booking integration.",
    tags:        ["React", "Node.js", "Express"],
    date:        "2023 — 2024",
    badge:       "work",
    dot:         "filled",
  },
  {
    title:       "Software Developer",
    subtitle:    "SALT · startup",
    description: "Built a Node.js/Express POS platform with an analytics dashboard and iPad integration. First production codebase — learned what it means to ship.",
    tags:        ["Node.js", "Express", "React", "analytics"],
    date:        "2022 — 2023",
    badge:       "work",
    dot:         "filled",
  },
  {
    title:       "Enrolled in CS",
    subtitle:    "University of Utah",
    description: "Decided to go all-in on a formal CS degree after teaching myself to code. Wanted the theory — algorithms, systems, complexity — to back up the practical skills.",
    tags:        [],
    date:        "2021",
    badge:       "education",
    dot:         "filled",
  },
  {
    title:       "Coding Bootcamp",
    subtitle:    "where it started",
    description: "Picked up web development from scratch. Learned HTML, CSS, JavaScript, and got hooked. The beginning of a deliberate pivot into software engineering.",
    tags:        ["HTML", "CSS", "JavaScript"],
    date:        "2020",
    badge:       "education",
    dot:         "filled",
  },
];

const Dot = ({ type }) =>
  type === "open" ? (
    <span className="w-4 h-4 rounded-full border-2 border-crimson bg-bg
                     flex-shrink-0 mt-[3px] relative z-10" />
  ) : (
    <span className="w-3 h-3 rounded-full bg-border-strong
                     flex-shrink-0 mt-[5px] relative z-10" />
  );

const Experience = () => (
  <main className="min-h-screen pt-[72px]">
    <PageContainer className="py-20">
    <div className="max-w-3xl">

      {/* Header */}
      <p className="hero-label mb-16 text-4xl">career</p>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border-subtle" />

        <div className="flex flex-col gap-16">
          {entries.map((entry) => (
            <div key={entry.title + entry.date} className="flex gap-6">

              {/* Dot */}
              <div className="flex flex-col items-center flex-shrink-0 w-4">
                <Dot type={entry.dot} />
              </div>

              {/* Content + date row */}
              <div className="flex-1 pb-2">
                <div className="flex flex-col sm:flex-row sm:items-start
                                sm:justify-between gap-2 mb-1">

                  {/* Left: title */}
                  <h2 className="text-text-primary text-2xl font-medium leading-snug">
                    {entry.title}
                    {entry.cursor && <span className="vim-cursor ml-1" />}
                  </h2>

                  {/* Right: date + badge */}
                  <div className="flex items-center gap-2 flex-shrink-0 pt-1">
                    <span className="text-text-muted text-base font-mono whitespace-nowrap">
                      {entry.date}
                    </span>
                    <span className={`text-sm font-mono px-2.5 py-0.5 rounded
                                     ${BADGE[entry.badge]}`}>
                      {entry.badge}
                    </span>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-base mb-4" style={{ color: "var(--color-crimson)" }}>
                  {entry.subtitle}
                </p>

                {/* Description */}
                <p className="text-text-muted leading-relaxed mb-5 text-lg">
                  {entry.description}
                </p>

                {/* Tags */}
                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((t) => (
                      <span key={t} className="tag text-sm px-3 py-1">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageContainer>
  </main>
);

export default Experience;
