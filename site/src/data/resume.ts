// Transcribed directly from "Ng Jun Hao Darren.pdf". Do not add facts, metrics,
// or employers that are not present in the source resume.

export const profile = {
  name: "Ng Jun Hao Darren",
  title: "Frontend / Full-Stack Engineer",
  phone: "9474 9449",
  email: "ng.jh.darren@outlook.com",
  summary:
    "A 38 yrs old Singaporean and father of two. Frontend / Full-stack engineer with 13+ years of experience designing and developing mission critical systems for defence and enterprise environments.",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "Grafana", "HTML/CSS", "C# WPF"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Feathers.js", "SQL", "C# .NET"],
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
        name: "Integrated Monitoring & Management System",
        role: "Software Manager",
        team: "2x Frontend, 4x Backend",
        duration: "2020 – Ongoing",
        description:
          "Led development of a monitoring platform tracking network and equipment health across multiple SAF camps.",
        tags: [
          "React",
          "React Admin",
          "Grafana",
          "HTML/CSS",
          "SQL",
          "TypeScript",
          "Scrum",
          "Agile",
          "JSON",
          "REST",
          "Feathers.js",
          "Kubernetes",
          "Message Queue",
          "NATS",
          "Docker",
          "Git",
        ],
      },
      {
        name: "Training Dashboard",
        role: "Frontend Lead",
        team: "1x Frontend, 7x Backend",
        duration: "2019 – 2020 (1 year)",
        description:
          "Collaborated with DSTA to design and implement a data analytics dashboard visualizing Navy training performance metrics.",
        tags: ["C#", "React", "Grafana", "HTML/CSS", "WPF", "PostgreSQL", "Scrum", ".NET"],
      },
      {
        name: "Various Video Wall Projects",
        role: "Full Stack Engineer",
        team: "Just me",
        duration: "2012 – 2019 (7 years)",
        description:
          "Sole engineer developing 7 unique video wall systems, both frontend and backend, integrating Datapath hardware and API for large-scale display solutions.",
        tags: ["C#", "WPF", ".NET", "Win32 API", "Datapath API"],
      },
      {
        name: "Littoral Mission Vessel",
        role: "Software Manager",
        team: "2x Frontend, 7x Backend",
        duration: "2013 – 2020 (7 years)",
        description:
          "Involved from conceptualization to deployment of multiple mission applications for the Navy's Littoral Mission Vessel, covering command, communication, and control systems. 1 of 2 personnel representing ST Electronics Infosoft at the first LMV commissioning in 2017.",
        tags: ["C#", "WPF", ".NET"],
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
      "Independently designed and implemented a command console providing real-time situational awareness via multiple integrated data and video feeds for the Commanding Officer (CO).",
    tags: ["Full Stack", "UI/UX Designer", "C#", "WPF", ".NET", "DirectShow API"],
  },
  {
    name: "Less-Lethal Weapon Control System",
    description:
      "Part of a team of 2, developed control software for LRAD (a very loud loudspeaker) and Water Cannon systems, enabling precise targeting and activation through integrated command interfaces.",
    tags: ["Frontend", "UI/UX Designer", "C#", "WPF", ".NET", "DirectShow API"],
  },
  {
    name: "Chat and Post-It",
    description:
      "Independently built a lightweight self-discovery communication platform enabling operators to exchange messages, images, files, as well as notes via an integrated post-it companion app.",
    tags: ["Full Stack", "UI/UX Designer", "C#", "WPF", ".NET"],
  },
];

export type PersonalProject = {
  name: string;
  description: string;
  tags: string[];
};

export const personalProjects: PersonalProject[] = [
  {
    name: "Movie Catalogue Software",
    description:
      "Developed a lightweight C# desktop app that automatically scrapes and catalogues movie details from IMDB.",
    tags: ["C#", "WPF", ".NET"],
  },
  {
    name: "Music Folder Player",
    description:
      "Developed a lightweight C# folder-based music player to simplify playlist management on Windows.",
    tags: ["C#", "WPF", ".NET"],
  },
  {
    name: "Cryptocurrency Trading Bot",
    description:
      "Developed a fully automated trading system in C# integrating the Gemini Exchange API for real-time order execution using custom indicator-based logic. Added automated daily summary Telegram reports and achieved sustained profitability since 2022.",
    tags: ["C#", ".NET"],
  },
];

export const hobbies = [
  {
    name: "Photography",
    period: "Since 2012",
    description: "Various photos taken over the years.",
  },
  {
    name: "Build / Overclock Computers",
    period: "2009 – 2017",
    description:
      "Built more than 100 desktops for various churches and people. Overclocking was once a personal passion project.",
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
