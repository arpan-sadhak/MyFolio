/**
 * Placeholder portfolio content.
 *
 * This file stands in for a real backend. Every field here is shaped the
 * way an API response would be, so swapping to a live backend later is a
 * one-file change: see src/hooks/usePortfolioData.js — replace the
 * `return LOCAL_DATA` line with a `fetch('/api/portfolio')` call that
 * resolves to this same shape.
 */

export const LOCAL_DATA = {
  profile: {
    name: 'Arpan Sadhak',
    greeting: "Hello, I'm",
    firstName: 'Arpan',
    lastName: 'Sadhak',
    role: 'Full Stack Developer & UI/UX Enthusiast',
    tagline: 'I build beautiful, functional and user-centered digital experiences.',
    yearsLabel: '2+',
    yearsSub: 'Years of Learning',
    availability: 'Available for work',
    avatar: '/avatar.jpg',
    resumeUrl: '/resume.pdf',
    social: {
      github: 'https://github.com/',
      linkedin: 'https://linkedin.com/',
      email: 'mailto:hello@example.com',
    },
  },

  techStack: [
    { name: 'JavaScript', icon: 'js' },
    { name: 'TypeScript', icon: 'ts' },
    { name: 'React', icon: 'react' },
    { name: 'Node.js', icon: 'node' },
    { name: 'MongoDB', icon: 'leaf' },
    { name: 'Tailwind CSS', icon: 'wind' },
    { name: 'Vite', icon: 'bolt' },
  ],

  projects: [
    {
      id: 'eduportal',
      title: 'EduPortal',
      description:
        'A complete school management system with role-based access, attendance, and analytics.',
      tags: ['MERN Stack', 'Tailwind CSS'],
      image: '/projects/eduportal.jpg',
      link: '#',
    },
    {
      id: 'devconnect',
      title: 'DevConnect',
      description:
        'A developer networking platform to connect, collaborate and grow together.',
      tags: ['Next.js', 'MongoDB'],
      image: '/projects/devconnect.jpg',
      link: '#',
    },
    {
      id: 'taskflow',
      title: 'TaskFlow',
      description:
        'A smart task management app to boost productivity and team collaboration.',
      tags: ['React', 'Node.js'],
      image: '/projects/taskflow.jpg',
      link: '#',
    },
  ],

  stats: [
    { label: 'Years of Learning', value: '2+', icon: 'clock' },
    { label: 'Projects Completed', value: '20+', icon: 'layers' },
    { label: 'Happy Clients', value: '15+', icon: 'briefcase' },
    { label: 'Client Satisfaction', value: '100%', icon: 'shield' },
  ],

  about: {
    heading: 'About Me',
    body: "I'm a passionate developer who loves solving problems and building products that make an impact.",
  },

  skills: [
    { name: 'React', level: 90 },
    { name: 'JavaScript / TypeScript', level: 88 },
    { name: 'Node.js & Express', level: 80 },
    { name: 'MongoDB / SQL', level: 75 },
    { name: 'UI / UX Design', level: 82 },
    { name: 'Tailwind CSS', level: 92 },
  ],

  experience: [
    {
      id: 1,
      role: 'B.Tech, Computer Science Engineering',
      org: 'Swami Vivekananda University',
      period: '2023 — Present',
      description:
        'Coursework and independent projects in full-stack development, data structures, and systems design.',
    },
    {
      id: 2,
      role: 'Full Stack & Desktop App Projects',
      org: 'Independent / Open Source',
      period: '2024 — Present',
      description:
        'Built production-grade full-stack platforms and offline desktop applications end to end.',
    },
  ],

  blog: [
    {
      id: 1,
      title: 'Designing dashboards people actually enjoy using',
      excerpt:
        'Notes on hierarchy, motion and restraint from building admin panels for real users.',
      date: 'Coming soon',
    },
    {
      id: 2,
      title: 'From prototype to production: shipping a MERN app',
      excerpt: 'What breaks between a demo and something real users depend on.',
      date: 'Coming soon',
    },
  ],

  testimonials: [
    {
      id: 1,
      quote:
        'Arpan is an exceptional developer. He delivered our project on time with clean code and great attention to detail. Highly recommended!',
      name: 'Rohan Verma',
      title: 'CEO, TechNova',
      avatar: '/testimonials/rohan.jpg',
      rating: 5,
    },
    {
      id: 2,
      quote:
        'Great communication throughout and the final product exceeded what we asked for. Would work together again.',
      name: 'Priya Nair',
      title: 'Product Lead, Fintrace',
      avatar: '/testimonials/priya.jpg',
      rating: 5,
    },
  ],

  contact: {
    heading: "Let's build something amazing together!",
    signature: 'Arpan Sadhak',
    email: 'hello@example.com',
    location: 'Kolkata, India',
  },
};
