import middleGroundSS  from './UI/Images/middle-ground-full-ss.png';
import middleGroundSS2 from './UI/Images/middle-ground-ss.png';
import lcBodyworkSS    from './UI/Images/LCBodyworkSC.png';
import lcBodyworkSS2   from './UI/Images/Small-LCBodyworkSC.png';
import oneWaveGolfSS   from './UI/Images/onewavegolf.png';
import oneWaveGolfSS2  from './UI/Images/Small-onewavegolf.png';

export const projectData = [
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
  },
  {
    slug:        "start-or-bench",
    name:        "Start or Bench",
    category:    "backend",
    layout:      "visual",
    previewText: "spring boot · postgresql · redis",
    subtitle:    "fantasy football platform · 2025–2026",
    shortDesc:   "Fantasy football platform with JWT auth, ML-powered WR predictions via PySpark, and a vector DB scouting report pipeline.",
    tech:        ["Java", "Spring Boot", "PostgreSQL", "Redis", "PySpark", "React", "Auth0"],
    github:      "https://github.com/jacekhacking/start-or-bench",
    live:        null,
    screenshots: [],
    sections: [
      {
        title:   "overview",
        content: "Full-stack fantasy football platform built as a CS capstone. Users manage rosters, draft players, and get ML-powered start/sit recommendations for wide receivers. Built with a collaborator over two semesters.",
      },
      {
        title:   "technical challenges",
        content: "Feature engineering across historical player stats, matchup data, and defensive rankings in PySpark was the hardest part. Getting the Random Forest tuned to beat the naive baseline took several iterations of feature selection and hyperparameter search. Also built a Vector DB scouting report pipeline where player descriptions are embedded and queried semantically.",
      },
      {
        title:   "architecture",
        content: "Spring Boot REST API backed by PostgreSQL with Redis caching for hot player data. Auth0 JWT for authentication. React frontend with a real-time draft board. PySpark jobs run offline and predictions are stored in the DB — no online inference at request time.",
      },
    ],
    highlights: [
      { label: "ml model rmse",  value: "6.39" },
      { label: "baseline rmse",  value: "6.93" },
    ],
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
  },
];
