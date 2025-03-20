


import { Post } from '@/types/Post';

export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    body: 'Next.js 14 introduces several groundbreaking features that revolutionize the way we build web applications. From improved performance to enhanced developer experience, this version is a game-changer.',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    comments: [
      {
        id: '1-1',
        text: 'Great introduction to Next.js 14!',
        username: 'techie123',
      },
      {
        id: '1-2',
        text: 'This helped me understand the new features better',
        username: 'webdev_pro',
      },
    ],
  },
  {
    id: '2',
    title: 'The Power of TypeScript in Modern Development',
    body: 'TypeScript has become an essential tool in modern web development. Learn how it can improve your code quality and developer experience.',
    author: 'Michael Chen',
    date: '2024-03-14',
    comments: [
      {
        id: '2-1',
        text: 'TypeScript has been a game changer for our team',
        username: 'codeMaster',
      },
    ],
  },
  {
    id: '3',
    title: 'Building Responsive UIs with Tailwind CSS',
    body: 'Discover how Tailwind CSS can streamline your styling workflow and help you create beautiful, responsive user interfaces with minimal effort.',
    author: 'Emily Rodriguez',
    date: '2024-03-13',
    comments: [
      {
        id: '3-1',
        text: 'Tailwind CSS is amazing!',
        username: 'designerPro',
      },
      {
        id: '3-2',
        text: 'Great tips for responsive design',
        username: 'ui_lover',
      },
    ],
  },
  {
    id: '4',
    title: 'React Server Components Explained',
    body: "Deep dive into React Server Components and how they can improve your application's performance and user experience.",
    author: 'David Kim',
    date: '2024-03-12',
    comments: [
      {
        id: '4-1',
        text: 'Finally a clear explanation of RSC!',
        username: 'react_enthusiast',
      },
    ],
  },
  {
    id: '5',
    title: 'Mastering Git Workflows',
    body: 'Learn essential Git workflows and best practices that will help you collaborate better with your team and maintain clean version control.',
    author: 'Alex Turner',
    date: '2024-03-11',
    comments: [
      {
        id: '5-1',
        text: 'These Git tips are gold',
        username: 'version_master',
      },
    ],
  },
  {
    id: '6',
    title: 'API Design Best Practices',
    body: 'Explore the key principles of designing clean, efficient, and developer-friendly APIs that scale well and maintain backwards compatibility.',
    author: 'Lisa Wang',
    date: '2024-03-10',
    comments: [
      {
        id: '6-1',
        text: 'Great API design principles',
        username: 'backend_dev',
      },
    ],
  },
  {
    id: '7',
    title: 'State Management with Zustand',
    body: 'Discover why Zustand is becoming a popular choice for React state management and how to implement it in your projects.',
    author: 'Tom Wilson',
    date: '2024-03-09',
    comments: [
      {
        id: '7-1',
        text: 'Zustand is so much simpler than Redux',
        username: 'state_ninja',
      },
    ],
  },
  {
    id: '8',
    title: 'Web Performance Optimization Techniques',
    body: "Learn practical techniques to optimize your web application's performance and provide a better user experience.",
    author: 'Rachel Green',
    date: '2024-03-08',
    comments: [
      {
        id: '8-1',
        text: 'These optimization tips really helped',
        username: 'speed_optimizer',
      },
    ],
  },
  {
    id: '9',
    title: 'Building Accessible Web Applications',
    body: 'Understanding web accessibility and implementing inclusive design practices for better user experience for all.',
    author: 'Chris Martinez',
    date: '2024-03-07',
    comments: [
      {
        id: '9-1',
        text: 'Accessibility is so important!',
        username: 'a11y_advocate',
      },
    ],
  },
  {
    id: '10',
    title: 'Docker for Frontend Developers',
    body: 'A practical guide to using Docker in frontend development workflows and how it can improve your development experience.',
    author: 'Nina Patel',
    date: '2024-03-06',
    comments: [
      {
        id: '10-1',
        text: 'Finally understanding Docker!',
        username: 'docker_newbie',
      },
    ],
  },
];