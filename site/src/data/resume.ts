// Transcribed directly from "Ng Jun Hao Darren.pdf". Do not add facts, metrics,
// or employers that are not present in the source resume.

export const profile = {
  name: "Ng Jun Hao Darren",
  title: "Frontend / Full-Stack Engineer",
  phone: "9474 9449",
  email: "ng.jh.darren@outlook.com",
  summary:
    "Building things that need to work",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "Grafana", "C# WPF"],
  },
  {
    category: "Backend",
    items: ["Node.js", "C# .NET"],
  },
  {
    category: "Tools & DevOps",
    items: ["Docker", "Git", "Kubernetes"],
  },
  {
    category: "Design",
    items: ["Photoshop"],
  },
] as const;

export type SubProject = {
  name: string;
  role: string;
  team?: string;
  duration?: string;
  description: string;
  tags: string[];
  note?: string;
};

export type Employer = {
  name: string;
  duration: string;
  status: "ongoing" | "complete";
  projects: SubProject[];
};

export const experience: Employer[] = [
  {
    name: "ST Engineering Cloud & Data Centre Solutions",
    duration: "10/2012 – Current",
    status: "ongoing",
    projects: [
      {
        name: "Monitoring Platform",
        role: "UI/UX Manager",
        // team: "2x Frontend, 4x Backend",
        duration: "2020 – Ongoing",
        description:
          "Led frontend development of a monitoring platform tracking equipment and network statuses across multiple locations.",
        tags: [
          // "React",
          // "React Admin",
          // "Grafana",
          // "HTML/CSS",
          // "SQL",
          // "TypeScript",
          // "Scrum",
          // "Agile",
          // "JSON",
          // "REST",
          // "Feathers.js",
          // "Kubernetes",
          // "Message Queue",
          // "NATS",
          // "Docker",
          // "Git",
        ],
      },
      {
        name: "Analytics Dashboard",
        role: "Frontend Lead",
        // team: "1x Frontend, 7x Backend",
        duration: "2019 – 2020 (1 year)",
        description:
          "Designed and implemented a dashboard to display various interesting metrics.",
        tags: [],
      },
      {
        name: "Various Video Wall Projects",
        role: "Full Stack Engineer",
        // team: "Just me",
        duration: "2012 – 2019 (7 years)",
        description:
          "Sole engineer developing multiple video wall solutions for various enterprises.",
        tags: [],
      },
      {
        name: "Littoral Mission Vessel",
        role: "Software Manager",
        // team: "2x Frontend, 7x Backend",
        duration: "2013 – 2020 (7 years)",
        description:
          "Involved from the start to the end.",
        tags: [],
        note: "Notable applications delivered under this programme:",
      },
    ],
  },
];

export type MissionApp = {
  name: string;
  description: string;
  tags: string[];
};

export const missionApps: MissionApp[] = [
  {
    name: "Command Console",
    description:
      "Providing situation awareness to the CO.",
    tags: [],
  },
  {
    name: "Water Cannon",
    description:
      "Controlling and enabling precise targeting.",
    tags: [],
  },
  {
    name: "Communications",
    description:
      "A platform to exchange messages and other files.",
    tags: [],
  },
];

export type PersonalProject = {
  name: string;
  period: string;
  description: string;
  tags: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    name: "Stock Thesis Monitor Bot",
    period: "Since 2026",
    description:
      "Vibe coded a bot using Claude Code that monitors for stock thesis updates (regarding my stocks) from Yahoo News daily and sends a daily summary to me via Telegram. [13/Aug/2026: changed to using GPT's Luna model via OpenRouter cos budget :(]",
    tags: ["NodeJS", "OpenRouter API", "Claude Code"],
  },
  {
    name: "Cryptocurrency Trading Bot",
    period: "Since 2021",
    description:
      "Developed a fully automated trading system in C# integrating the Gemini Exchange API for real-time order execution using custom indicator-based logic. Added automated daily summary Telegram reports and achieved sustained profitability since 2022.",
    tags: ["C#", ".NET"],
  },  
  {
    name: "Music Folder Player",
    period: "Since 2016",
    description:
      "Built a lightweight C# folder-based music player to simplify playlist management on Windows.",
    tags: ["C#", "WPF", ".NET"],
  },
  {
    name: "Movie Catalogue Software",
    period: "Since 2012",
    description:
      "Built a lightweight C# desktop app that automatically scrapes and catalogues movie details from OMDB for local movie video files.",
    tags: ["C#", "WPF", ".NET"],
  },
];

export const hobbies = [
  {
    name: "Photography",
    period: "Since 2012",
    description: "Some of the ones that didn't get deleted.",
  },
  {
    name: "Build / Overclock Computers",
    period: "2009 – 2017",
    description:
      "Built more than 100 desktops for various churches and people. Overclocking was once a personal passion project.",
  },
  {
    name: "Watching Movies",
    period: "Since 2007",
    description:
      "After more than 800 movies, here are some of my absolute favourites.",
  },
  {
    name: "AI Filmmaking with ComfyUI",
    period: "Since 2025",
    description:
      "Still getting nowhere with this mode of storytelling after spending thousands of hours training LoRAs and generating videos. A slipper will be going through my monitor screen soon.",
  },
  {
    name: "Generative Art with ComfyUI",
    period: "Since 2025",
    description:
      "Creating fantasy scenes of my dreams with ComfyUI. Results vary; dreams don't.",
  },
];

export const certifications = [
  { name: "Certified Kubernetes Application Developer (CKAD)", year: "2025" },
  { name: "Certified Couchbase Capella Associate Administrator", year: "2025" },
  { name: "Certified ScrumMaster", year: "2022" },
];

export const education = [
  {
    school: "University of Wollongong",
    subtitle: "Singapore Institute of Management",
    program: "Bachelor of Computer Science",
    duration: "2009 – 2012",
    details: [
      "Major in Digital Systems Security",
      "Salutatorian, Rank 2nd in Cohort",
      "CSIT Silver Award",
      "Dean's Merit List",
    ],
  },
  {
    school: "Singapore Polytechnic",
    program: "Diploma in Electronics, Electrical and Computer Engineering",
    duration: "2004 – 2007",
    details: [],
  },
];
