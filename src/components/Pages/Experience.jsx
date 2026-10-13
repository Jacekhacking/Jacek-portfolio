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
    description: "Expected December 2026. Coursework includes algorithms, distributed systems, machine learning, systems programming, databases, parallel programming, and scientific computing. My capstone is Start or Bench, a fantasy football platform with a PySpark prediction pipeline.",
    tags:        ["algorithms", "systems", "ML", "capstone"],
    date:        "Dec 2026",
    badge:       "education",
    dot:         "open",
  },
  {
    title:       "Start or Bench",
    subtitle:    "capstone project",
    description: "A three-person capstone building league and roster management, NFL data services, and player projections. I lead backend development in Java and Spring Boot and contribute to the PySpark prediction pipeline. The current WR model has a 6.39 RMSE against a 6.93 rolling-average baseline.",
    tags:        ["Java", "Spring Boot", "PostgreSQL", "Flyway", "PySpark", "React"],
    date:        "2025 - present",
    badge:       "project",
    dot:         "filled",
  },
  {
    title:       "Software Engineer",
    subtitle:    "ZYA Tech",
    description: "Worked on multi-tenant web applications for point-of-sale and service businesses. Contributed across React interfaces, internal dashboards, authenticated API flows, and PostgreSQL-backed application features.",
    tags:        ["React", "Node.js", "Express", "PostgreSQL", "Auth0"],
    date:        "2024 - 2026",
    badge:       "work",
    dot:         "filled",
  },
  {
    title:       "Freelance Web Developer",
    subtitle:    "LC Bodywork",
    description: "Designed and built a professional site for a local massage therapy practice with a mobile-first layout, service information, and booking integration.",
    tags:        ["React", "Node.js", "Express"],
    date:        "2023 - 2024",
    badge:       "work",
    dot:         "filled",
  },
  {
    title:       "Enrolled in CS",
    subtitle:    "University of Utah",
    description: "Started a formal Computer Science degree after teaching myself to code and working in web development.",
    tags:        [],
    date:        "2021",
    badge:       "education",
    dot:         "filled",
  },
  {
    title:       "Coding Bootcamp",
    subtitle:    "where it started",
    description: "Learned the fundamentals of web development, including HTML, CSS, and JavaScript, and began my transition into software engineering.",
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
    <div className="max-w-3xl xl:max-w-4xl mx-auto">

      {/* Header */}
      <p className="hero-label mb-16 text-4xl lg:text-5xl xl:text-6xl">career</p>

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
                  <h2 className="text-text-primary text-2xl xl:text-3xl font-medium leading-snug">
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
                <p className="text-text-muted leading-relaxed mb-5 text-lg xl:text-xl">
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
