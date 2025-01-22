import { Icons } from '@/components/icons';
import { HomeIcon, DownloadIcon } from 'lucide-react';

export const DATA = {
  name: 'Bryan Moon',
  initials: 'BM',
  url: 'https://nokcha.me',
  location: 'Los Angeles, CA',
  locationLink: 'https://www.google.com/maps/place/losangeles',
  description: 'Restauranteur turned Fullstack Developer!',
  summary:
    'Recent LA transplant with a passion for outdoor activities and martial arts. Having grown up in a martial arts school, I have a deep understanding for the discipline and focus required to master a craft. As a self-taught developer with a background in hospitality and entrepreneurship, I strive to build projects that deliver real value, while continuously focusing on personal growth and education.',
  avatarUrl: '/me2.png',
  skills: [
    'React',
    'Next.js',
    'Solid.js',
    'Vue',
    'Typescript',
    'Node.js',
    'Ruby on Rails',
    'Python',
    'Flask',
    'Postgres',
    'Supabase',
    'Docker',
    'AWS',
    'Git',
    'Vim',
    'Bash/Zsh'
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: "/bryanmoon_resume2025.pdf", icon: DownloadIcon, label: "Resume" },
  ],
  contact: {
    email: 'nokcha389@gmail.com',
    tel: '+19179912319',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/bryanmoon1991',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bryan-m-1196991b0/',
        icon: Icons.linkedin,

        navbar: true,
      },
      // email: {
      //   name: 'Send Email',
      //   url: '#',
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: 'Hypno',
      href: 'https://app.hypno.com',
      badges: [],
      location: 'Los Angeles',
      title: 'Full Stack Developer',
      logoUrl: '/hypno.png',
      start: 'June 2021',
      end: 'Present',
      description:
        'Created new APIs for our iOS app, led the development of a modern client facing dashboard using React, and implemented a subscription billing system using Stripe.',
    },
    {
      company: 'Art By City',
      href: 'https://artby.city',
      badges: [],
      location: 'Queens, NY',
      title: 'Associate Frontend Developer',
      logoUrl: '/abclogo.png',
      start: 'March 2021',
      end: 'June 2021',
      description:
        'Wrote unit tests for the frontend using Jest Testing Library, and helped build reusable frontend components in Vue.',
    },
    {
      company: 'Kichin',
      href: 'https://www.nytimes.com/2016/02/17/dining/hungry-city-kichin-williamsburg-brooklyn.html',
      badges: [],
      location: 'Brooklyn, NY',
      title: 'Owner / General Manager',
      logoUrl: '/kichin.png',
      start: 'January 2015',
      end: 'April 2020',
      description:
        'Conceptualized and operated a Korean restaurant with a modern take on traditional cuisine. Managed a team of ~15 employees and oversaw all aspects of the business.',
    },
  ],
  education: [
    {
      school: 'Flatiron School',
      href: 'https://flatironschool.com/',
      degree: 'Fullstack Certification',
      logoUrl: '/flatiron.png',
      start: '2020',
      end: '2021',
    },
    {
      school: 'SUNY New Paltz',
      href: 'https://www.newpaltz.edu/',
      degree: "Bachelor's Degree",
      logoUrl: '/sunynp.png',
      start: '2010',
      end: '2014',
    },
  ],
  projects: [
    {
      title: 'Mr. Print',
      href: 'https://mrprint.app',
      dates: 'Nov 2022 - present',
      active: true,
      description:
        'A subscription based service that enables ceramics studios to implement a ticket printing system in order to better manage their kiln workflow and track revenue generated from their kiln firing services.',
      technologies: [
        'Next.js',
        'Typescript',
        'Python',
        'Supabase',
        'Stripe',
        'TailwindCSS',
        'Redis',
        'Render',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://mrprint.app',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/mrprintsc.png',
      video:
        '',
    },
    {
      title: 'Hypno Pro',
      href: 'https://app.hypno.com',
      dates: 'June 2020 - Present',
      active: true,
      description:
        'Client dashboard that allows users to create and edit new activation pages, customize visual effects for their stylized content, and manage data and content collected from events.',
      technologies: [
        'Next.js',
        'Typescript',
        'Zustand',
        'PostgreSQL',
        'Ruby on Rails',
        'TailwindCSS',
        'Stripe',
        'App Store Connect',
        'ReplicateAI'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://app.hypno.com',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/hypno.mp4',
    },
    {
      title: 'Brian You - Portfolio',
      href: 'https://brianyou.design',
      dates: 'April 2023 - present',
      active: true,
      description: 'Design portfolio for artist and designer, Brian You.',
      technologies: ['Solid.js', 'Typescript', 'TailwindCSS', 'Fly.io'],
      links: [
        {
          type: 'Website',
          href: 'https://brianyou.design',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/bryanmoon1991/brian-portfolio',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/brian.mp4',
    },
  ]
} as const;
