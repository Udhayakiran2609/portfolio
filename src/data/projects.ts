export type Project = {
  slug: string
  title: string
  description: string
  highlights: string[]
  tech: string[]
  repoUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'ctrlify',
    title: 'CTRLify',
    description:
      'Desktop application for profile-based IP configuration and internet control.',
    highlights: [
      'Built with Electron.js for cross-platform desktop delivery',
      'Implemented DNS-based website blocking',
      'Integrated Lua scripts for access restriction rules',
    ],
    tech: ['Electron.js', 'JavaScript', 'DNS filtering', 'Lua'],
    liveUrl: 'https://apps.microsoft.com/detail/xpfd1x5k6d8l9l?hl=en-US&gl=IN',
  },
  {
    slug: 'autotextify',
    title: 'Autotextify',
    description:
      'Chrome Extension for dynamic text expansion to improve typing speed with reusable templates.',
    highlights: [
      'Shortcut-based inputs for fast text expansion',
      'Template system for reusable snippets',
      'Editor experience built with Quill.js',
    ],
    tech: ['Chrome Extension', 'JavaScript', 'Quill.js'],
    liveUrl: 'https://chromewebstore.google.com/detail/autotextify/lapkecidankkaahioamnekanckbbjiod',
  },
  {
    slug: 'sitespedia',
    title: 'Sitespedia',
    description:
      'Multi-feature Chrome Extension with bookmarks, screen capture, tab manager, and Pomodoro timer modules.',
    highlights: [
      'Modular extension features in one product',
      'Screen capture and content-script based workflows',
      'Productivity tools: tab manager + Pomodoro timer',
    ],
    tech: ['Chrome Extension', 'Browser APIs', 'Content Scripts', 'JavaScript'],
    liveUrl: 'https://chromewebstore.google.com/search/sitespedia',
  },
  {
    slug: 'editor-projects',
    title: 'Editor Projects',
    description:
      'Advanced editor features including HTML5 Canvas tools and video rendering, with audio visualization support.',
    highlights: [
      'Custom drawing tools using HTML5 Canvas',
      'Video rendering feature integration',
      'Audio visualization with WaveSurfer.js',
    ],
    tech: ['HTML5 Canvas', 'JavaScript', 'WaveSurfer.js'],
  },
  {
    slug: 'gomeetify',
    title: 'GoMeetify',
    description:
      'Meeting platform built with AngularJS and Laravel, with Firebase notifications and Jitsi Meet video conferencing.',
    highlights: [
      'Frontend in AngularJS with backend services in Laravel',
      'Firebase-based notifications',
      'Jitsi Meet integration for video conferencing',
    ],
    tech: ['AngularJS', 'Laravel', 'Firebase', 'Jitsi Meet'],
    liveUrl: 'https://gomeetify.com/',
  },
  {
    slug: 'toast-message',
    title: 'Toast Message',
    description:
      'A lightweight, customizable toast notification library for JavaScript and React with multiple toast types and positions.',
    highlights: [
      'Lightweight and zero-dependency toast notifications',
      'Support for success, error, warning, and info types',
      'Customizable positions and durations',
      'Published on npm as @udhayakiran/toast-message',
    ],
    tech: ['React', 'TypeScript', 'JavaScript', 'npm'],
    liveUrl: 'https://www.npmjs.com/package/@udhayakiran/toast-message',
    repoUrl: 'https://github.com/Udhayakiran2609/toast-message',
  },
  {
    slug: 'messenger-app',
    title: 'Messenger App',
    description:
      'Desktop messaging application built with Electron.js, Angular frontend, and Firebase backend for real-time communication.',
    highlights: [
      'Cross-platform desktop app with Electron.js',
      'Real-time messaging using Firebase',
      'Responsive UI built with Angular',
      'User authentication and presence tracking',
    ],
    tech: ['Electron.js', 'Angular', 'Firebase', 'TypeScript'],
    liveUrl: '/MyChat.exe',
  },
  {
    slug: 'utility-tools',
    title: 'Utility Tools',
    description:
      'Desktop utility applications for screen recording and image resizing, built with Electron.js and Angular for seamless desktop experience.',
    highlights: [
      'Screen Recorder: Capture screen with audio and export as video',
      'Image Resizer: Batch resize and optimize images with multiple formats',
      'Cross-platform desktop delivery with Electron.js',
      'Intuitive UI powered by Angular',
    ],
    tech: ['Electron.js', 'Angular', 'JavaScript', 'Desktop APIs'],
    liveUrl: '/Isify.exe',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

