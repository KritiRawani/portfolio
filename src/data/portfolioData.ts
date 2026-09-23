import { Skill, Experience, Project, StatMetric, SocialLink } from "@/types";

export const PERSONAL_INFO = {
  name: "Kriti Rawani",
  title: "Full Stack Developer | AI Engineer",
  taglines: [
    "Full Stack Developer",
    "AI Systems Engineer",
    "FastAPI & React Specialist",
    "Real-Time Voice & WebSocket Builder",
    "Cloud Solutions Architect"
  ],
  bio: "Full-Stack Developer with deep expertise in architecting scalable backend systems and AI-powered real-time applications using Python, FastAPI, React, Node.js, and modern cloud infrastructure. Passionate about building low-latency intelligent systems, robust microservices, and sleek user experiences.",
  email: "rawanikriti03@gmail.com",
  phone: "+91 9713390754",
  location: "Bangalore, Karnataka, India",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Sagar Institute of Research and Technology, Bhopal",
    period: "2021 – 2025",
    cgpa: "8.1 / 10.0",
    highlights: ["Algorithms & Data Structures", "Distributed Systems", "Cloud Computing", "Software Engineering"]
  },
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent / Native" }
  ],
  availability: "Available for High-Impact Roles & AI Engineering Projects",
  yearsExperience: "1+",
  completedProjectsCount: "15+",
  techMasteryCount: "20+"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/KritiRawani",
    icon: "Github",
    handle: "@KritiRawani"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kriti-rawani-b5b29a24b/",
    icon: "Linkedin",
    handle: "kriti-rawani"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Kriti_Rawani/",
    icon: "Code2",
    handle: "Kriti_Rawani"
  },
  {
    name: "Email",
    url: "mailto:rawanikriti03@gmail.com",
    icon: "Mail",
    handle: "rawanikriti03@gmail.com"
  }
];

export const STATS: StatMetric[] = [
  {
    value: 1,
    suffix: "+ Yrs",
    label: "Professional Experience",
    sublabel: "Scalable Full-Stack & AI Systems",
    icon: "Briefcase"
  },
  {
    value: 15,
    suffix: "+",
    label: "Projects Completed",
    sublabel: "Full Stack & Real-Time AI Apps",
    icon: "FolderGit2"
  },
  {
    value: 20,
    suffix: "+",
    label: "Technologies Mastered",
    sublabel: "Languages, Frameworks & Cloud Tools",
    icon: "Cpu"
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Reliability & Uptime",
    sublabel: "Production-grade microservices",
    icon: "Sparkles"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Innodata India Pvt Ltd",
    role: "Senior Associate",
    period: "Apr 2026 – Present",
    location: "Bangalore, Karnataka",
    type: "Full-Time",
    current: true,
    description: [
      "Engineered high-throughput Python pipelines for enterprise data processing, structured scripting, and automated data workflows.",
      "Utilized LaTeX and automated formatting toolchains to structure, validate, and generate high-precision technical and scientific documentation at scale.",
      "Optimized data transformation pipelines to ensure zero data anomalies and high compliance with enterprise quality standards."
    ],
    skills: ["Python", "Data Processing", "LaTeX", "Scripting", "Automation", "Workflow Optimization"],
    logoPlaceholder: "IN"
  },
  {
    company: "Pitavya Pvt Ltd",
    role: "Full-Stack Developer",
    period: "Feb 2025 – Mar 2026",
    location: "Bangalore, Karnataka",
    type: "Full-Time",
    description: [
      "Architected and deployed Kamai-Kharcha, a comprehensive end-to-end financial management platform utilizing React.js, Node.js, Express.js, and MongoDB.",
      "Designed and optimized RESTful APIs for high-volume income tracking and group-based expense splitting with secure JWT authentication and role-based access control.",
      "Provisioned and maintained scalable backend infrastructure on AWS (EC2, S3, SES), integrating robust automated validations, circuit breakers, and telemetry to maintain 99.9% uptime."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2", "AWS S3", "AWS SES", "JWT", "REST APIs"],
    logoPlaceholder: "PV"
  },
  {
    company: "White Circle Group",
    role: "Associate Software Trainee (Internship)",
    period: "Oct 2024 – Jan 2025",
    location: "Remote / Hybrid",
    type: "Internship",
    description: [
      "Engineered modular and responsive React.js UI component libraries for an interactive education and assessment platform with dynamic routing and client-side validation.",
      "Collaborated in Agile sprints with cross-functional product, QA, and backend engineering teams using Jira, Git, and GitHub for continuous integration.",
      "Improved frontend performance by 35% through component memoization, bundle splitting, and streamlined state management."
    ],
    skills: ["React.js", "JavaScript", "Responsive UI", "REST Integration", "Git", "GitHub", "Jira", "Agile"],
    logoPlaceholder: "WC"
  },
  {
    company: "Ultraxpert Technologies Pvt Ltd",
    role: "Python Developer Intern",
    period: "Jun 2024 – Sept 2024",
    location: "Hybrid",
    type: "Internship",
    description: [
      "Built low-latency FastAPI backend microservices integrating Large Language Models (LLMs) with OpenAI Whisper (Speech-to-Text) and Microsoft Azure TTS for live AI voice interactions.",
      "Implemented bi-directional WebSocket streaming for sub-second audio chunk processing and conversational turn-taking.",
      "Containerized microservices with Docker and created automated deployment pipelines ensuring consistent test and staging environments."
    ],
    skills: ["Python", "FastAPI", "OpenAI Whisper STT", "Microsoft TTS", "LLM Integration", "WebSockets", "Docker"],
    logoPlaceholder: "UX"
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React.js", level: 95, iconName: "Atom", category: "Frontend", featured: true },
  { name: "Next.js 15", level: 90, iconName: "Globe", category: "Frontend", featured: true },
  { name: "TypeScript", level: 90, iconName: "FileCode", category: "Frontend", featured: true },
  { name: "Tailwind CSS", level: 95, iconName: "Palette", category: "Frontend", featured: true },
  { name: "JavaScript (ES6+)", level: 95, iconName: "Code", category: "Frontend", featured: true },
  { name: "HTML5 / CSS3", level: 95, iconName: "Layout", category: "Frontend" },

  // Backend
  { name: "Python", level: 92, iconName: "Terminal", category: "Backend", featured: true },
  { name: "FastAPI", level: 94, iconName: "Zap", category: "Backend", featured: true },
  { name: "Node.js", level: 90, iconName: "Server", category: "Backend", featured: true },
  { name: "Express.js", level: 90, iconName: "Layers", category: "Backend" },
  { name: "RESTful APIs", level: 95, iconName: "Workflow", category: "Backend", featured: true },
  { name: "WebSockets & Streaming", level: 88, iconName: "Radio", category: "Backend", featured: true },
  { name: "JWT Auth & RBAC", level: 92, iconName: "ShieldCheck", category: "Backend" },
  { name: "Java", level: 75, iconName: "Coffee", category: "Backend" },

  // AI/ML
  { name: "LLM Orchestration (GPT-4/o)", level: 90, iconName: "Bot", category: "AI/ML", featured: true },
  { name: "Whisper STT (Speech-to-Text)", level: 92, iconName: "Mic", category: "AI/ML", featured: true },
  { name: "Microsoft Azure TTS", level: 90, iconName: "Volume2", category: "AI/ML", featured: true },
  { name: "RAG & Vector Retrieval", level: 88, iconName: "Sparkles", category: "AI/ML", featured: true },
  { name: "LangChain & AI Agents", level: 85, iconName: "Network", category: "AI/ML" },

  // Database
  { name: "MongoDB & Mongoose", level: 92, iconName: "Database", category: "Database", featured: true },
  { name: "SQL (PostgreSQL / MySQL)", level: 86, iconName: "Table", category: "Database", featured: true },
  { name: "Vector Databases (Pinecone/Chroma)", level: 82, iconName: "Boxes", category: "Database" },

  // Cloud & DevOps
  { name: "AWS EC2 & Elastic Cloud", level: 88, iconName: "Cloud", category: "Cloud & DevOps", featured: true },
  { name: "AWS S3 & Cloud Storage", level: 90, iconName: "HardDrive", category: "Cloud & DevOps" },
  { name: "AWS SES & Email Services", level: 85, iconName: "Send", category: "Cloud & DevOps" },
  { name: "Docker Containerization", level: 86, iconName: "Container", category: "Cloud & DevOps", featured: true },
  { name: "Git & GitHub Workflows", level: 95, iconName: "GitBranch", category: "Cloud & DevOps" },
  { name: "Postman & Swagger UI", level: 92, iconName: "FileCheck", category: "Cloud & DevOps" },
  { name: "LaTeX Document Engine", level: 85, iconName: "FileText", category: "Cloud & DevOps" }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-voice-agent",
    title: "AI Real-Time Voice Agent",
    tagline: "Ultra-low latency conversational AI engine with bi-directional streaming audio",
    category: "AI / ML",
    description: "High-performance FastAPI microservice integrating Large Language Models (LLMs) with OpenAI Whisper STT and Microsoft Neural TTS over bi-directional WebSockets for realistic speech interactions.",
    detailedDescription: [
      "Engineered an asynchronous voice processing pipeline that captures streaming audio chunks and performs live transcription via OpenAI Whisper with under 200ms latency.",
      "Integrated streaming GPT-4 token generation routed directly to Microsoft Azure Neural Text-to-Speech synthesis for natural, uninterrupted conversational pacing.",
      "Implemented WebSocket connection pooling, audio buffering, noise gating, and Dockerized orchestration for high concurrent capacity."
    ],
    techStack: ["FastAPI", "Python", "Whisper STT", "Microsoft Azure TTS", "GPT-4o", "WebSockets", "Docker", "AsyncIO"],
    features: [
      "Real-time bi-directional audio streaming via WebSockets",
      "Sub-second voice turn-around with streaming TTS audio buffers",
      "Dynamic acoustic noise filtering and speech segment detection",
      "Modular LLM prompt routing and customizable AI voice personalities",
      "Dockerized microservice deployment with health telemetry"
    ],
    architectureHighlights: [
      "Client Audio Streaming -> WebSocket Ingestion -> VAD (Voice Activity Detection) -> Whisper STT",
      "Transcribed Text -> LLM Streaming Generator -> Chunk-to-Sentence Parser",
      "Sentence Chunks -> Azure Neural TTS -> Binary Audio Streaming Back to Client"
    ],
    metrics: "220ms Avg Latency • 50+ Concurrent Streams",
    githubUrl: "https://github.com/KritiRawani",
    liveUrl: "https://github.com/KritiRawani",
    image: "/projects/voice-agent.webp",
    featured: true
  },
  {
    id: "kamai-kharcha",
    title: "Kamai-Kharcha Expense Management",
    tagline: "Comprehensive full-stack financial tracking & collaborative group expense platform",
    category: "Full Stack",
    description: "Production-ready enterprise-style financial application built with React.js, Node.js, Express, MongoDB, and AWS cloud services for tracking multi-currency income, budgets, and automated group bill splitting.",
    detailedDescription: [
      "Built a secure, scalable RESTful API backend handling multi-tenant user accounts, financial categories, recurring expense schedules, and shared group ledgers.",
      "Implemented military-grade JWT authentication, bcrypt password hashing, input sanitization, and role-based permissions.",
      "Deployed on AWS EC2 with automated SSL certificates, AWS S3 for financial receipt storage, and AWS SES for monthly automated expense summaries and threshold alert notifications."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2", "AWS S3", "AWS SES", "JWT", "Tailwind CSS"],
    features: [
      "Interactive analytics dashboards with monthly spending charts and category breakdowns",
      "Group expense splitting with automated debt simplification algorithms",
      "Automated receipt upload to AWS S3 with secure signed URLs",
      "Instant email alerts via AWS SES when budgets cross user-defined thresholds",
      "Responsive glassmorphism dashboard optimized for mobile and desktop"
    ],
    architectureHighlights: [
      "React Frontend (Vite/SPA) -> Express REST Gateway with JWT Middleware",
      "MongoDB Aggregation Pipelines for instant financial metrics & charts",
      "AWS S3 bucket with strict IAM policies for receipt attachments",
      "Cron-based background workers on EC2 triggering AWS SES email summaries"
    ],
    metrics: "100% Type-Safe APIs • 99.9% Uptime on AWS",
    githubUrl: "https://github.com/KritiRawani",
    liveUrl: "https://github.com/KritiRawani",
    image: "/projects/kamai-kharcha.webp",
    featured: true
  },
  {
    id: "skill-eval",
    title: "Skill Eval Education Platform",
    tagline: "Modular interactive assessment engine with dynamic test workflows & real-time analytics",
    category: "Frontend",
    description: "High-performance educational assessment platform engineered with React.js, featuring timed assessment workflows, client-side validation, interactive question engines, and immediate scoring insights.",
    detailedDescription: [
      "Created reusable, accessible React components supporting multiple question formats (multiple choice, code snippets, interactive puzzles, and file uploads).",
      "Designed resilient test-state preservation using local storage fallbacks and optimistic UI sync to prevent exam submission loss on network drops.",
      "Integrated full client-side validation, responsive interfaces across screen sizes, and seamless API communication adhering to strict REST standards."
    ],
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs", "State Management", "Jira", "GitHub"],
    features: [
      "Interactive timed test interface with anti-tamper tab-switch tracking",
      "Dynamic question rendering engine supporting code snippets with syntax highlighting",
      "Instant performance breakdown with visual percentile charts",
      "Accessible keyboard navigation and WCAG 2.1 compliance",
      "Cross-browser and mobile responsive touch controls"
    ],
    architectureHighlights: [
      "Atomic UI Component architecture for question widgets",
      "Robust state machine handling test progression, timers, and submission locks",
      "Asynchronous answer payload batching with retry resilience"
    ],
    metrics: "35% Faster Load Time • 100% Test State Reliability",
    githubUrl: "https://github.com/KritiRawani",
    liveUrl: "https://github.com/KritiRawani",
    image: "/projects/skill-eval.webp",
    featured: true
  },
  {
    id: "documind-rag",
    title: "DocuMind - Intelligent RAG Assistant",
    tagline: "Conversational document AI & semantic vector knowledge retriever",
    category: "AI / ML",
    description: "Enterprise knowledge assistant utilizing FastAPI, LangChain, vector embeddings, and Next.js to provide grounded, citation-backed answers from complex multi-page PDF documents and technical manuals.",
    detailedDescription: [
      "Implemented document chunking, metadata extraction, and vector embedding indexing using ChromaDB/Pinecone.",
      "Built hybrid retrieval blending dense semantic search with keyword matching to eliminate hallucinations in technical queries.",
      "Crafted an interactive chat interface with source snippet inspection, confidence ratings, and markdown LaTeX formula rendering."
    ],
    techStack: ["FastAPI", "LangChain", "Next.js", "Python", "Vector DB", "OpenAI API", "Tailwind CSS"],
    features: [
      "Instant PDF ingestion and vector indexing",
      "Citation highlights with exact page and section references",
      "Conversational memory buffer with context window pruning",
      "Interactive query playground with temperature and top-k controls"
    ],
    architectureHighlights: [
      "PDF Ingestion -> Recursive Text Splitter -> Vector Embeddings",
      "Hybrid Similarity Search -> Context Re-ranking -> LLM Answer Synthesis with Citations"
    ],
    metrics: "95%+ Retrieval Accuracy • Sub-second Semantic Search",
    githubUrl: "https://github.com/KritiRawani",
    liveUrl: "https://github.com/KritiRawani",
    image: "/projects/documind.webp",
    featured: false
  }
];

export const TESTIMONIALS_HIGHLIGHTS = [
  {
    quote: "Kriti is an exceptional developer who bridges the gap between deep backend systems and cutting-edge AI pipelines with remarkable speed and code quality.",
    author: "Engineering Lead",
    company: "Pitavya Technologies",
    role: "Senior Staff Engineer"
  },
  {
    quote: "Her work on our real-time voice streaming architecture cut our latency by half and established rock-solid WebSocket stability.",
    author: "Project Mentor",
    company: "Ultraxpert",
    role: "AI Architecture Lead"
  }
];
