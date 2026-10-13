import middleGroundSS  from './UI/Images/middle-ground-full-ss.png';
import middleGroundSS2 from './UI/Images/middle-ground-ss.png';
import lcBodyworkSS    from './UI/Images/LCBodyworkSC.png';
import lcBodyworkSS2   from './UI/Images/Small-LCBodyworkSC.png';
import oneWaveGolfSS   from './UI/Images/onewavegolf.png';
import oneWaveGolfSS2  from './UI/Images/Small-onewavegolf.png';

export const projectData = [
  {
    slug:        "start-or-bench",
    name:        "Start or Bench",
    category:    "backend",
    layout:      "editorial",
    previewText: "java 21 · spring boot · postgresql · pyspark",
    subtitle:    "senior capstone · fantasy sports platform · 2025–present",
    shortDesc:   "A full-stack fantasy sports platform with authenticated league management, a PostgreSQL data layer, and an offline PySpark prediction pipeline.",
    tech:        ["Java 21", "Spring Boot", "PostgreSQL", "Flyway", "React", "PySpark"],
    github:      "https://github.com/jacekhacking/start-or-bench",
    live:        null,
    screenshots: [],
    sections: [
      {
        title:   "overview",
        content: "Start or Bench is a senior-capstone fantasy football platform built by a three-person team. It brings together league and roster management, NFL statistics, player projections, and a responsive web experience. I lead backend development and contribute to the data and prediction workflows that turn raw football data into product features.",
      },
      {
        title:   "backend platform",
        content: "The API is built with Java 21, Spring Boot, PostgreSQL, and Flyway. It exposes REST endpoints for users, players, teams, statistics, leagues, rosters, and projections. My work includes JWT and Google sign-in flows, security and CORS configuration, SQL-backed repositories, league and roster workflows, external-provider imports, and automated controller and repository tests.",
      },
      {
        title:   "prediction pipeline",
        content: "The prediction work uses PySpark to build leakage-aware rolling features from prior player, matchup, and team performance. A Random Forest model is evaluated against a simple rolling-average baseline using time-based train, validation, and test splits; completed predictions are written back to PostgreSQL for the application to serve. I am expanding the evaluation to report position-level error, baseline comparisons, and early-season performance before presenting it as a production recommendation system.",
      },
      {
        title:   "current release work",
        content: "The team is completing a demo-ready release: end-to-end authentication and league workflows, live score updates, CI/CD checks, and a reproducible prediction evaluation. The platform is active development, but the core backend, data model, and ML integration are already implemented and testable locally.",
      },
    ],
    highlights: [
      { label: "WR model RMSE", value: "6.39" },
      { label: "rolling baseline RMSE", value: "6.93" },
    ],
    important: true,
  },
  {
    slug:        "veil",
    name:        "Veil",
    category:    "systems",
    layout:      "editorial",
    previewText: "c++ · qt 6 · wayland · glsl",
    subtitle:    "Linux accessibility prototype · 2026–present",
    shortDesc:   "A native Wayland overlay and GPU color-transform prototype for people who need color-shift accessibility without disrupting normal desktop input.",
    tech:        ["C++", "Qt 6", "Wayland", "LayerShellQt", "GLSL", "KWin"],
    github:      "https://github.com/Jacekhacking/veil",
    live:        null,
    screenshots: [],
    sections: [
      {
        title:   "overview",
        content: "Veil is a Linux accessibility tool in development for users who benefit from a system-wide color shift. The project combines a native C++/Qt overlay with a GPU shader path so the visual transform can run in real time while ordinary desktop applications remain usable.",
      },
      {
        title:   "systems design",
        content: "The current prototype uses Wayland layer-shell surfaces to place a transparent overlay above the desktop without taking focus. A separate masked input layer exposes only resize handles, leaving the rest of the display click-through. The rendering path uses an OKLab/OKLCh GLSL transform, which is a better basis for controlled hue changes than directly rotating RGB channels.",
      },
      {
        title:   "MVP target",
        content: "The next milestone is a working Linux MVP with adjustable color shifting, explicit preservation of black and neutral pixels, and a clean install and demo path. I am also designing a parallel-computing comparison: a serial CPU reference, an OpenMP implementation, and the production GPU shader, measured for correctness and frame-time performance.",
      },
    ],
    highlights: [
      { label: "input behavior", value: "click-through" },
      { label: "rendering goal", value: "real-time GPU" },
    ],
    important: true,
  },
  {
    slug:        "lc-bodywork",
    name:        "LC Bodywork",
    category:    "web",
    layout:      "visual",
    previewText: "lcbodywork.com",
    subtitle:    "massage therapy website · 2023–2024",
    shortDesc:   "Professional site for a local massage therapy practice — booking integration, service pages, and mobile-first layout.",
    tech:        ["React", "Node.js", "Express"],
    github:      "https://github.com/jacekhacking/lc-bodywork",
    live:        "https://www.lcbodywork.com",
    screenshots: [lcBodyworkSS, lcBodyworkSS2],
    sections: [
      {
        title:   "overview",
        content: "Built a complete marketing and booking site for LC Bodywork, a local massage therapy practice. Designed mobile-first with a focus on clean service presentation and a frictionless contact flow. The client needed something professional they could confidently hand to potential customers.",
      },
      {
        title:   "technical details",
        content: "React frontend with an Express backend handling contact form submissions. Deployed on a custom domain with SSL. Responsive layout tuned for mobile-first usage since most of the client's traffic comes from phones. Ongoing client updates managed without any downtime.",
      },
    ],
    highlights:  [],
    important:   true,
  },
  {
    slug:        "middle-ground",
    name:        "Middle Ground",
    category:    "web",
    layout:      "visual",
    previewText: "middle-ground-production.up.railway.app",
    subtitle:    "massage therapy website · 2022–2023",
    shortDesc:   "Website for a local massage therapy business — service pages, contact flow, and Railway hosting.",
    tech:        ["React", "CSS", "Railway"],
    github:      "https://github.com/Jacekhacking/Middle-Ground",
    live:        "https://middle-ground-production.up.railway.app/",
    screenshots: [middleGroundSS, middleGroundSS2],
    sections: [
      {
        title:   "overview",
        content: "Marketing site for Middle Ground Treatment & Training, a local massage therapy business. Built a service-focused layout with a contact form and clear calls to action. One of my first production client sites — shipped and maintained on Railway with a custom domain.",
      },
    ],
    highlights: [],
    important: true,
  },
  {
    slug:        "onewavegolf",
    name:        "OneWave Golf",
    category:    "web",
    layout:      "visual",
    previewText: "onewavegolf.com",
    subtitle:    "golf company website · 2022",
    shortDesc:   "Website for a golf company specializing in recyclable golf goods, caddying, and lessons.",
    tech:        ["React", "CSS"],
    github:      "https://github.com/jacekhacking/OneWaveGolf",
    live:        "https://www.onewavegolf.com",
    screenshots: [oneWaveGolfSS, oneWaveGolfSS2],
    sections: [
      {
        title:   "overview",
        content: "Marketing website for OneWave Golf, a company based in Bandon, Oregon. Covers their recyclable goods line, professional caddying services, and lesson booking. Designed for a clean outdoors-oriented aesthetic that matched their brand identity.",
      },
    ],
    highlights: [],
    important: true,
  },
];
