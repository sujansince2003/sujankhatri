import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sujan Khatri",
  initials: "SK",
  url: "https://khatrisujan.com.np",
  location: "Butwal,Nepal",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Builder of things on the web & Server. Breaking, learning, shipping.",
  summary:
    "I&apos;m 22, a builder driven by curiosity and execution. I thrive on breaking things, learning fast, and pushing code to production. My focus is on full-stack engineering, AI, and system design, but I'm open to anything that stretches my limits. Still chasing mastery.Love the beauty of NextJS & TS",
  avatarUrl: "https://i.postimg.cc/c1kh4G2L/sujankhatri-2.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Redux",
    "Zustand",
    "Node.js",
    "Express",
    "MongoDB",
    "Postgres",
    "Docker",
    "Tailwind",
    "AWS(EC2 & s3)",
    "Git",
    "Cloudflare Workers",
    "Prisma",
    "HonoJs",
    "Langchain",
    "Vector Databases",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sujansince2059@gmail.com",
    tel: "+977-9843409076",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sujansince2003",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sujansince2003",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/sujansince2003",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sada Creatives",
      href: "https://sadacreatives.com.au",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer (Part-time),Remote",
      logoUrl: "/atomic.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Contributing to the design and development of full-stack applications using Laravel, React, TypeScript, Node.js, and Express. Working with PostgreSQL and Prisma for database management, and deploying scalable applications leveraging AWS and Coolify.",
    },

    {
      company: "LancemeUp",
      href: "https://lancemeup.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer Intern,Remote",
      logoUrl: "/lancemeup.png",
      start: "Dec 2023",
      end: "Feb 2024",
      description:
        "Developed responsive user interfaces with React, Next.js, TypeScript, Tailwind CSS, and Material UI. Collaborated with backend engineers to integrate REST APIs into frontend applications, improving performance and user experience.",
    },
  ],

  communityWork: [
    {
      company: "CSIT Association of BMC",
      href: "https://csitabmc.com", // (replace with actual if available)
      badges: [],
      location: "Butwal, Nepal",
      title: "Senior Advisor · Ex-Vice President · Ex-Tech Lead",
      logoUrl: "/atomic.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Actively mentoring juniors and guiding technical initiatives at CSIT Association of BMC. As Ex-Vice President and Tech Lead, I organized coding events, led workshops on full-stack development and AI, and helped build a collaborative learning culture within the CSIT community.",
    },

    {
      company: "BMC InnovateX",
      href: "https://innovatex.csitabmc.com/",
      badges: [],
      location: "Butwal, Nepal",
      title: "Event Co-Lead",
      logoUrl: "/lancemeup.png",
      start: "Dec 2023",
      end: "Feb 2024",
      description:
        "Co-led the flagship InnovateX hackathon at BMC, bringing together students to build innovative tech projects. Coordinated event logistics, managed participants, and facilitated workshops, helping create an environment where teams could learn, collaborate, and ship their ideas within tight deadlines.",
    },
  ],
  education: [
    {
      school: "Butwal Multiple Campus",
      href: "",
      degree: "Bsc.CSIT",
      logoUrl: "/waterloo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Kumudini HSS",
      href: "",
      degree: "+2 Science",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Holy Care School",
      href: "",
      degree: "SEE",
      logoUrl: "/ib.png",
      start: "start",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "SynkSpace",
      href: "https://synkspace.khatrisujan.com.np",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A Notion-inspired collaborative workspace powered by Next.js ,Cloudflare Workers, and AI. Features real-time editing, collaboration, authentication,generative AI features like chat-to-doc and multi-language summaries and seamless UI using Shadcn and Tailwind.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "Liveblocks",
        "TailwindCSS",
        "Clerk",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://synkspace.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sujansince2003/SynkSpace-Collaborative-Docs_AI-Translations_Live-Editing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/sujansince2003/syncspace-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/jdk1rV6z/Screenshot-2025-09-05-at-1-12-52-PM.png",
      video: "",
    },
    {
      title: "CSITABMC",
      href: "https://csitabmc.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed the official website for the CSIT Association of Butwal Multiple Campus. Built with a modern stack and CMS integration, enabling content management, event updates, and streamlined communication for the student community.",
      technologies: [
        "Next.js",
        "Typescript",
        "Strapi",
        "Prisma",
        "TailwindCSS",
        "zod",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://csitabmc.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sujansince2003/csitabmcweb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/7LSt7fFV/Screenshot-2025-09-05-at-1-13-35-PM.png",
      video: "",
    },
    {
      title: "Docuchat-chat with your document",
      href: "https://docuchat.khatrisujan.com.np",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "An open-source generative AI app that lets users chat with their PDF documents. Powered by LangChain, embeddings, and vector databases, with support for question answering, contextual retrieval, and Google Gemini integration.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Nodejs",
        "Express",
        "Langchain",
        " Gemini",
        "Qdrant",
        "Vectors",
      ],
      links: [
        {
          type: "Website",
          href: "https:docuchat.khatrisujan.com.np",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/sujansince2003/SynkSpace-Collaborative-Docs_AI-Translations_Live-Editing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/sujansince2003/PDF_RAG_Backend-Express_LANGCHAIN_QDRANT_GOOGLEAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/j23MKNfs/Screenshot-2025-09-05-at-1-15-34-PM.png",
      video: "",
    },
    {
      title: "BMC InnovateX",
      href: "https://innovatex.csitabmc.com",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Designed and built the official platform for BMC InnovateX, a national-level hackathon. Delivered a responsive website for event details, registrations, and live updates, improving visibility and engagement for participants nationwide.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://innovatex.csitabmc.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/sujansince2003/BMC-InnovateX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/XqPktWMq/Screenshot-2025-09-05-at-1-15-58-PM.png",
      video: "",
    },
    {
      title: "PayNest",
      href: "#",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A monorepo fintech project built with Turborepo. Includes two Next.js applications and a shared Express backend with centralized ORM, authentication, and CI/CD pipelines for efficient scaling and maintainability.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Turborepo(monorepo",
        "zod",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/sujansince2003/payNest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/7ZHSXbJ9/Screenshot-2025-09-05-at-1-26-39-PM.png",
      video: "",
    },
    {
      title: "Gracathon web",
      href: "#",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Landing page for Gracathon 2024, a flagship hackathon organized by the CSIT Association. Crafted with smooth animations, responsive design, and a modern UI to attract participants and sponsors.",
      technologies: [
        "Next.js",
        "Typescript",

        "TailwindCSS",
        "shadcn ui",
        "aos",
      ],
      links: [
        {
          type: "Website",
          href: "https://gracathon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/sujansince2003/GracathonWeb",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/T1KrVsy6/Screenshot-2025-09-05-at-1-16-44-PM.png",
      video: "",
    },
    {
      title: "Epic Events-Movie booking platform",
      href: "#",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A ticket booking web application with seat reservations, event management, and PDF ticket generation. Built with React and optimized for performance and usability.",
      technologies: [
        "React",
        "React Router",
        "Netlify",
        "TailwindCSS",
        "React Hook Form",
        "Context API",
        "React-PDF",
      ],
      links: [
        {
          type: "Website",
          href: "https://epicevents-suzancodes.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/sujansince2003/EpicEvents-A-Event-Booking-site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/fbMm2y35/Screenshot-2025-09-05-at-1-18-27-PM.png",
      video: "",
    },
    {
      title: "Forkify-Recipe app",
      href: "#",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A recipe web app built with vanilla JavaScript, featuring search, bookmarking, and recipe management. Lightweight, responsive, and deployed on Vercel for fast access.",
      technologies: ["CSS", "Javascript", "Babel", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://forkify-suzancodes.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/sujansince2003/Forkify-Recipe_WebApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://i.postimg.cc/cLBX4Vw9/Screenshot-2025-09-05-at-1-19-05-PM.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
