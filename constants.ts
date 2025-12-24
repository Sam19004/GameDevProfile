import { Project, UserProfile, Achievement } from './types';

export const USER_PROFILE: UserProfile = {
  name: "Alex Dev",
  title: "Full-Stack Developer & Quest Master",
  location: "Toronto, Ontario",
  avatar: "https://picsum.photos/id/64/200/200",
  bio: "Level-up your digital experience. I craft robust web applications with the precision of a speedrunner. Currently grinding React, Node.js, and Cloud Infrastructure. Always looking for the next epic quest to conquer.",
  level: 24,
  totalXp: "450,000 XP"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Expense Tracker RPG",
    description: "An epic RPG-style finance manager.",
    fullDescription: "Transforming personal finance into a role-playing game. Users track expenses to defeat 'Debt Monsters' and level up their savings. This project required intricate state management to handle the gamification logic alongside real-time data visualization.",
    genres: ["Web", "FinTech", "Gamification"],
    techStack: ["React", "Redux", "Node.js", "Chart.js"],
    featured: true,
    githubRepo: "https://github.com/alexdev/expense-rpg",
    liveLink: "https://expense-rpg.demo.com",
    difficulty: "Hard",
    timeToCompletion: "3 Months",
    xpEarned: [
      "Mastered Redux Toolkit for complex state",
      "Implemented JWT Authentication flow",
      "Advanced Chart.js customization"
    ],
    coreAchievements: [
      "Responsive UI",
      "REST API Design",
      "99% Lighthouse Score"
    ],
    coverImage: "https://picsum.photos/id/1/800/450",
    screenshots: [
      "https://picsum.photos/id/1/800/450",
      "https://picsum.photos/id/2/800/450",
      "https://picsum.photos/id/3/800/450"
    ]
  },
  {
    id: "2",
    title: "Neural Network Visualizer",
    description: "Interactive AI playground.",
    fullDescription: "A visual tool to understand how neural networks learn. Users can adjust learning rates, hidden layers, and activation functions to see real-time classification boundaries shift. A quest into the depths of machine learning mathematics.",
    genres: ["AI/ML", "Education", "Visualization"],
    techStack: ["Python", "TensorFlow", "React", "D3.js"],
    featured: true,
    githubRepo: "https://github.com/alexdev/nn-viz",
    difficulty: "Legendary",
    timeToCompletion: "4 Months",
    xpEarned: [
      "Deep understanding of Backpropagation",
      "WebSocket integration for real-time training data",
      "Canvas API optimization"
    ],
    coreAchievements: [
      "Real-time Inference",
      "Mathematical Modeling",
      "Interactive Graphing"
    ],
    coverImage: "https://picsum.photos/id/20/800/450",
    screenshots: [
      "https://picsum.photos/id/20/800/450",
      "https://picsum.photos/id/26/800/450"
    ]
  },
  {
    id: "3",
    title: "Cloud Inventory System",
    description: "Enterprise-grade item management.",
    fullDescription: "A scalable inventory management system designed for high-volume warehouses. Features include barcode scanning support, automated restocking alerts, and multi-tenant architecture.",
    genres: ["Backend", "SaaS", "Database"],
    techStack: ["PostgreSQL", "Express", "Docker", "AWS"],
    featured: false,
    githubRepo: "https://github.com/alexdev/inventory-cloud",
    liveLink: "https://inventory.demo.com",
    difficulty: "Medium",
    timeToCompletion: "2 Months",
    xpEarned: [
      "Docker containerization",
      "Database normalization & indexing",
      "CI/CD Pipeline setup"
    ],
    coreAchievements: [
      "Microservices",
      "Automated Testing",
      "Role-Based Access Control"
    ],
    coverImage: "https://picsum.photos/id/60/800/450",
    screenshots: [
      "https://picsum.photos/id/60/800/450",
      "https://picsum.photos/id/90/800/450"
    ]
  },
  {
    id: "4",
    title: "Portfolio V1",
    description: "My first step into the web.",
    fullDescription: "The humble beginnings. A simple HTML/CSS site that started the journey. Kept here as a relic of the past to show progression.",
    genres: ["Frontend", "Legacy"],
    techStack: ["HTML", "CSS", "Vanilla JS"],
    featured: false,
    githubRepo: "https://github.com/alexdev/old-portfolio",
    difficulty: "Easy",
    timeToCompletion: "1 Week",
    xpEarned: [
      "Flexbox layout mastery",
      "Semantic HTML5",
      "CSS Transitions"
    ],
    coreAchievements: [
      "Mobile Responsive",
      "Dark Mode Toggle"
    ],
    coverImage: "https://picsum.photos/id/180/800/450",
    screenshots: [
      "https://picsum.photos/id/180/800/450"
    ]
  }
];

export const CAREER_ACHIEVEMENTS: Achievement[] = [
  {
    id: "a1",
    title: "Data Science Intern",
    issuer: "TechCorp Inc.",
    date: "Summer 2023",
    description: "Optimized SQL queries reducing reporting time by 40%.",
    type: "Internship"
  },
  {
    id: "a2",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    description: "Validation of cloud architecture expertise.",
    type: "Certification"
  },
  {
    id: "a3",
    title: "Best Capstone Project",
    issuer: "Trent University",
    date: "April 2023",
    description: "Awarded for 'Neural Network Visualizer' project.",
    type: "Award"
  },
  {
    id: "a4",
    title: "B.Sc. Computer Science",
    issuer: "Trent University",
    date: "2019 - 2023",
    description: "Major in Software Engineering, Minor in Mathematics.",
    type: "Education"
  }
];