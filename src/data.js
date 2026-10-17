// Links Configuration
export const LINKS = {
  email: "mailto:ashaktirao@gmail.com",
  emailPlain: "ashaktirao@gmail.com",
  github: "https://github.com/ashaktirao",
  linkedin: "https://www.linkedin.com/in/ashaktirao",
  leetcode: "https://leetcode.com/u/ashaktirao/",
  musicifyLive: "https://musicify-iota.vercel.app/",
  musicifyGit: "https://github.com/ashaktirao",
  expenseGit: "https://github.com/ashaktirao",
  resume: "/Resume_Template.pdf",
};

export const PERSONAL_INFO = {
  name: "A Shakti Rao",
  role: "Full-Stack Developer",
  status: "Available for Software Engineering Roles & Internships",
  batch: "MCA (2025 – 2027)",
  college: "Lovely Professional University",
  location: "India",
  bio: "MCA student building reliable, scalable full-stack applications with React, Node.js, and MongoDB. Driven by clean architecture, resilient auth flows, database indexing, and solving tough algorithmic problems.",
  stats: [
    { label: "Full-Stack Apps", value: "2", sub: "Production-style Architecture" },
    { label: "LeetCode Solved", value: "107+", sub: "Arrays, Recursion, Binary Search" },
    { label: "REST Endpoints", value: "30+", sub: "Secured with Zod & JWT" },
    { label: "Graduation", value: "2027", sub: "MCA Full-Stack Specialization" },
  ],
};

export const skillCategories = [
  {
    category: "Languages",
    icon: "Code2",
    description: "Core programming languages for frontend & backend",
    skills: ["JavaScript (ES6+)", "TypeScript", "Core Java", "SQL"],
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Interactive, accessible & responsive user interfaces",
    skills: ["React.js", "Vite", "Tailwind CSS", "TanStack React Query", "shadcn/ui", "Bootstrap", "Responsive Design", "State Management"],
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    description: "Robust REST services, authentication & data security",
    skills: ["Node.js", "Express.js", "REST API Design", "JWT Auth & Refresh", "bcrypt", "Zod Validation", "Multer", "Nodemailer", "Rate Limiting"],
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    description: "High-performance schemas, indexes & queries",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Aggregation Pipelines", "TTL & Compound Indexes", "Cloudinary"],
  },
  {
    category: "DevOps & Tooling",
    icon: "Wrench",
    description: "Containerization, version control & deployment",
    skills: ["Docker", "Docker Compose", "Git & GitHub", "Postman", "Vercel", "VS Code"],
  },
  {
    category: "Core Computer Science",
    icon: "Cpu",
    description: "Foundational principles that ensure scalable design",
    skills: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Object-Oriented Programming (OOP)"],
  },
];

export const fresherStrengths = [
  {
    title: "Production-First Auth & Security",
    icon: "ShieldCheck",
    desc: "Not basic tutorial auth: built dual-token JWT access/refresh rotation, httpOnly SameSite=Strict cookies, bcrypt hashing, and MongoDB TTL auto-expiring OTPs.",
  },
  {
    title: "Strong Database Indexing",
    icon: "Database",
    desc: "Designed compound indexing (user + date, user + category) and aggregation pipelines to eliminate slow unindexed collection scans.",
  },
  {
    title: "Real Problem Solving & DSA",
    icon: "Brain",
    desc: "107+ LeetCode algorithmic challenges solved with focus on optimal time & space complexity across arrays, strings, binary search, and recursion.",
  },
  {
    title: "Modern Containerized Tooling",
    icon: "Container",
    desc: "Containerized multi-service apps using Docker Compose, automated asset pipelines with Multer & Cloudinary, and state caching with TanStack Query.",
  },
];

export const projects = [
  {
    title: "Expense Tracker",
    tag: "In active dev",
    statusBadge: "⚡ Full-Stack MERN",
    subtitle: "Enterprise-grade personal finance app with scoped permissions",
    stack: ["React", "Node.js", "Express", "MongoDB", "Docker", "Tailwind", "React Query", "Zod"],
    git: LINKS.expenseGit,
    metrics: ["20+ REST Endpoints", "Docker Compose Ready", "TTL OTP Expiry"],
    points: [
      "20+ REST endpoints with every single query strictly scoped to the logged-in user, combined with shared Zod validation schemas.",
      "JWT access & refresh auth with httpOnly SameSite=Strict cookies, bcrypt password hashing, and email OTP verification with auto-expiring MongoDB TTL index.",
      "Optimized server-side pagination, sorting, and multi-field filtering backed by compound indexes on user + date and user + category.",
      "Resolved a tricky infinite retry loop in the token-refresh flow by isolating the refreshing Axios instance from the response interceptor instance.",
      "Modern React Query frontend caching with custom expense category icons, bulk delete actions, and a full Docker Compose container setup.",
    ],
  },
  {
    title: "Musicify",
    tag: "Live in Production",
    statusBadge: "🟢 Live Demo Available",
    subtitle: "High-performance full-stack music streaming platform",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "Cloudinary", "Context API"],
    git: LINKS.musicifyGit,
    live: LINKS.musicifyLive,
    metrics: ["50 MB Cloud Uploads", "Rate Limited (100 req/15m)", "Vercel Deployed"],
    points: [
      "Modular three-tier architecture: seamless React audio player, dedicated React admin portal, and an Express + MongoDB REST API.",
      "Song & album media uploads via Multer with strict MIME-type filtering, 50 MB payload limits, Cloudinary CDN streaming, and temp-file garbage cleanup.",
      "Secured API perimeter using Helmet HTTP headers, CORS allowlist, centralized error handling middleware, and rate limiting (100 req/15m).",
      "Real-time audio player controls (play, pause, skip, seek, volume) orchestrated via React Context with zero audio stuttering.",
    ],
  },
];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    place: "Lovely Professional University, Phagwara",
    period: "Jan 2025 – Jan 2027",
    specialization: "Full Stack Development Specialization",
    coursework: "Operating Systems, Data Structures & Algorithms, Analysis of Algorithms, Advanced DBMS, Computer Networks.",
  },
  {
    title: "BSc Computer Application",
    place: "University of Calcutta, Kolkata",
    period: "Jul 2021 – Jul 2024",
    specialization: "Computer Science & Application",
    coursework: "Core Java, Object-Oriented Programming, Database Management Systems, Software Engineering.",
  },
];

export const certs = [
  { title: "ReactJS for Beginners", date: "Dec 2024", issuer: "Frontend Certification" },
  { title: "JavaScript Intermediate", date: "Feb 2025", issuer: "HackerRank Verified" },
  { title: "GenAI Essentials", date: "Oct 2026", issuer: "AI Systems & Tooling" },
  { title: "LeetCode: 107 Problems Solved", date: "Consistent Coding", issuer: "Arrays, Strings, Recursion, Binary Search" },
];

export const academicCompetencies = [
  {
    area: "DSA & OOP",
    points: "Arrays, strings, recursion, searching & sorting | Java & JavaScript: classes, inheritance, abstraction, modular design",
  },
  {
    area: "Web & Database",
    points: "Frontend–backend integration, RESTful APIs, client–server architecture | MongoDB, CRUD operations, relational concepts, data modeling",
  },
  {
    area: "Systems & Engineering",
    points: "Process management, server-side execution, memory concepts | SDLC, version control, debugging, testing, requirement analysis",
  },
];

