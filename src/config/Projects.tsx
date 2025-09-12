import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Valora-crypto',
    description:
      'Welcome to Valora Crypto Marketplace: Unleash the power of your portfolio. The ultimate platform to securely trade, manage, and master your digital assets with confidence.',
    image: '/project/valora.png',
    video:
      'https://ik.imagekit.io/n71le1pbu/Recording%202025-09-12%20164339.mp4?tr=orig&updatedAt=1757675777650',
    link: 'https://crypto-valora.netlify.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/ramxcodes/notesbuddy',
    live: 'https://notesbuddy.in',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },
  {
    title: 'Appwrite MCP Server',
    description:
      'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
    image: '/project/appwrite.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://mcp.ramx.in/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Bun', icon: <Bun key="bun" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Appwrite', icon: <Appwrite key="appwrite" /> },
    ],
    github: 'https://github.com/ramxcodes/mcp-server',
    live: 'https://crypto-valora.netlify.app/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
  },
  {
    title: 'Syncify',
    description:
      'Real-time music streaming platform with synchronized playback, live chat, and social listening features',
    image: '/project/syncify.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
    link: 'https://syncify.rocks',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/ramxcodes/syncify',
    live: 'https://syncify.rocks',
    details: true,
    projectDetailsPageSlug: '/projects/syncify',
    isWorking: false,
  },

  {
    title: 'The Quest',
    description:
      'Personal challenge tracker for completing 500 DSA problems, earning ₹300,000, and improving fitness within 6 months',
    image: '/project/quest.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/quest.mp4',
    link: 'https://quest.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/the-quest',
    live: 'https://quest.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/the-quest',
    isWorking: true,
  },
  {
    title: 'FestX',
    description:
      "Comprehensive event management platform for college festivals and hackathons built for NMIMS'24 Hackathon",
    image: '/project/festx.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/fest-x.mp4',
    link: 'https://fest-x.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/fest-x',
    live: 'https://fest-x.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/fest-x',
    isWorking: true,
  },
  {
    title: "I'm a chill guy",
    description:
      'AI-powered GitHub profile roaster with intelligent analysis, witty commentary, and social sharing features',
    image: '/project/chillguy.png',
    link: 'https://chillguy.ramx.in',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Netlify', icon: <Netlify key="netlify" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/ramxcodes/chill-guy',
    live: 'https://chillguy.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/chill-guy',
    isWorking: true,
  },
  {
    title: "Ram's Space",
    description:
      'Personal poetry and blog platform featuring emotional stories, poems, and creative writing with dark/light theme support',
    image: '/project/ramspace.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/ramspace.mp4',
    link: 'https://blog.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
    ],
    live: 'https://blog.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/poems-blog',
    isWorking: true,
  },
  {
    title: 'Intent JS',
    description:
      'Modern JavaScript library website with advanced animations, interactive playground, and comprehensive documentation',
    image: '/project/intent.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/intent.mp4',
    link: 'https://intent-js.ramx.in',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/intent-js',
    live: 'https://intent-js.ramx.in',
    details: true,
    projectDetailsPageSlug: '/projects/intent-js',
    isWorking: true,
  },
  {
    title: 'Moonstone 2K25',
    description:
      "Official website for Medicaps University's premier annual college festival with event management and registration",
    image: '/project/moonstone.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/moonstone.mp4',
    link: 'https://moonstone.ramx.in/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Motion', icon: <Motion key="motion" /> },
      { name: 'Three.js', icon: <ThreeJs key="threejs" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/ramxcodes/moonstone-fest',
    live: 'https://moonstone.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/moonstone-fest',
    isWorking: true,
  },
];
