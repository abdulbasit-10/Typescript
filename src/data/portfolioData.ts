export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const portfolioData = {
  name: "John Developer",
  title: "Full Stack Developer & UI/UX Enthusiast",
  email: "john.developer@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  bio: "I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating intuitive user experiences and writing clean, maintainable code.",
  
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:john.developer@email.com"
  },

  about: `I'm a full-stack developer passionate about creating innovative digital solutions. With expertise in modern web technologies, I've successfully delivered projects ranging from startups to enterprise applications. When I'm not coding, you can find me contributing to open-source projects or sharing knowledge with the developer community.`,

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1460925895917-adf4198c838d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"],
      link: "https://example-ecommerce.com",
      github: "https://github.com/user/ecommerce"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Redux"],
      link: "https://example-taskmanager.com",
      github: "https://github.com/user/taskmanager"
    },
    {
      id: 3,
      title: "AI Chat Application",
      description: "Modern chat application powered by AI with natural language processing, real-time messaging, and user authentication.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      technologies: ["React", "Python", "FastAPI", "TensorFlow", "WebSocket"],
      link: "https://example-aichat.com",
      github: "https://github.com/user/aichat"
    },
    {
      id: 4,
      title: "Portfolio Website Generator",
      description: "Automated portfolio website generator that creates stunning portfolios from JSON configuration files.",
      image: "https://images.unsplash.com/photo-1460925895917-adf4198c838d?w=500&h=300&fit=crop",
      technologies: ["React", "Next.js", "TypeScript", "DynamoDB", "AWS"],
      link: "https://example-portfolio-generator.com",
      github: "https://github.com/user/portfolio-generator"
    }
  ] as Project[],

  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "Vue.js", "Tailwind CSS", "HTML5", "CSS3", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "Firebase", "REST APIs", "GraphQL"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "AWS", "GitHub Actions", "Vite", "Webpack", "CI/CD", "Linux"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Leadership", "Communication", "Project Management", "Agile/Scrum", "Code Review"]
    }
  ] as Skill[],

  experience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      period: "2021 - Present",
      description: "Led development of microservices architecture, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      description: "Built and maintained multiple React and Node.js applications serving 10K+ users daily."
    },
    {
      company: "StartUp Co.",
      position: "Junior Developer",
      period: "2018 - 2019",
      description: "Developed features for mobile web app, fixed bugs, and participated in code reviews."
    }
  ]
};
