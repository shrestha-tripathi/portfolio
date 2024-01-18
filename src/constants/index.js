import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    carrent,
    webrtcproj,
    wasmsec,
    aiToolkit,
    threejs,
    aws,
    bash,
    cpp,
    golang,
    helm,
    jenkins,
    kali,
    kubernetes,
    lua,
    postgres,
    powershell,
    python,
    webrtc,
    websocket,
    tf1,
    ge,
    ge1,
    oscp,
    wes,
    thmop,
    thmrt,
    netflixClone,
    discordClone,
  } from "../assets";

  export const homeLink = "/portfolio/";

  export const terminalFrameLink = "https://terminal-portfolio-delta.vercel.app/"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
      link: "https://drive.google.com/file/d/1rrvd3p8-Q5-XLwrQqvWdHiYXB5XJDeUV/view?usp=sharing",
    },
    {
      id: "github",
      title: "Github",
      link: "https://github.com/shrestha-tripathi",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/shrestha-tripathi/",
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Cyber Security Ethusiast",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "aws",
    //   icon: aws,
    // },
    // {
    //   name: "bash",
    //   icon: bash,
    // },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "golang",
      icon: golang,
    },
    // {
    //   name: "helm",
    //   icon: helm,
    // },
    // {
    //   name: "jenkins",
    //   icon: jenkins,
    // },
    {
      name: "kali",
      icon: kali,
    },
    {
      name: "kuberenetes",
      icon: kubernetes,
    },
    // {
    //   name: "lua",
    //   icon: lua,
    // },
    // {
    //   name: "postgres",
    //   icon: postgres,
    // },
    // {
    //   name: "powershell",
    //   icon: powershell,
    // },
    {
      name: "python",
      icon: python,
    },
    {
      name: "websocket",
      icon: websocket,
    },
    {
      name: "webrtc",
      icon: webrtc,
    },
  ];
  
  const experiences = [
    {
      title: "EID Intern",
      company_name: "GE Renewable Energy",
      icon: ge,
      iconBg: "#383E56",
      date: "Dec 2019 - Jul 2020",
      points: [
        "Developed intuitive UI frontend components with React.js and Highcharts allowing users to easily configure wind scada system and gain insights from collected data.",
        "Maintained and developed various CI/CD pipelines of various ongoing project modules."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "TeamF1 Networks",
      icon: tf1,
      iconBg: "#383E56",
      date: "Jul 2020 - Apr 2021",
      points: [
        "Developed high-performance firmware for next-gen network security products like Routers and Wireless Switches using C and Lua.",
        "Identified & resolved over 50+ bugs from OS kernel components & device application layer on 4+ devices, improving system stablity by 20%."
      ],
    },
    {
      title: "Software Engineering Specialist",
      company_name: "GE Renewable Energy",
      icon: ge1,
      iconBg: "#383E56",
      date: "Apr 2021 - Jul 2022",
      points: [
        "Delivered highly complex, full stack application utilizing React.js, Node.js & Go to enable automated monitoring for 50,000 node SCADA system.",
        "Developed On-Prem VM setup of services with docker & kubernetes, eliminating manual deployments by 80% ,reducing deployment time from 1 hour to 5 minutes."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "GE Renewable Energy",
      icon: ge1,
      iconBg: "#383E56",
      date: "Jul 2022 - Present",
      points: [
        "Led the rollout of upgraded On-Premise enterprise SCADA System for GE Remote Operations Center(ROC) in Schenectady, New York in an expeditious manner,resulting in a 100% successful installation rate.",
        "Installed and maintained GE Renewables AWS Enterprise Cloud application stack On-Premise to optimize the product development cycle by 50%.",
      ],
    },
  ];
  
  const certifications = [
    {
      certificate: "OffSec Certified Professionsal (OSCP)",
      issuer: "OffSec",
      date: "Jun 2023",
      credId: "796128",
      image: oscp,
      verifyLink: "https://www.credential.net/c677c9ee-630a-4a17-a5d9-5a1b12a1b2ef#gs.3qb3n1",
    },
    {
      certificate: "Verified International Academic Qualifications",
      issuer: "World Education Services",
      date: "Mar 2023",
      credId: "5932645IMM",
      image: wes,
      verifyLink: "https://badges.wes.org/Evidence?i=6c23006e-5cd7-4e27-bd60-6608187f4c95&type=ca",
    },
    {
      certificate: "Red Teaming",
      issuer: "TryHackMe",
      date: "Feb 2023",
      credId: "THM-KXD3I12IFX",
      image: thmrt,
      verifyLink: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-KXD3I12IFX.png",
    },
    {
      certificate: "Offensive Pentesting",
      issuer: "TryHackMe",
      date: "Jan 2023",
      credId: "THM-FCXKPLXCNL",
      image: thmop,
      verifyLink: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-FCXKPLXCNL.png",
    },
  ];
  
  const projects = [
    {
      name: "FullStack Discord Clone",
      description:
        "A Next.js 14 based fullstack discord clone application supporting audio, video, and text channels with realtime updates using web sockets.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "websockets",
          color: "pink-text-gradient",
        },
      ],
      image: discordClone,
      source_code_link: "https://github.com/shrestha-tripathi/discord-clone",
      project_link: "https://discord-clone-production-a4c6.up.railway.app"
    },
    {
      name: "AI Toolkit Genie",
      description:
        "A Next.js based AI toolkit web application supporting multiple features like LLM Chats, Code generation, Music generation, Video generation & Image generation.",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "SSR",
          color: "pink-text-gradient",
        },
      ],
      image: aiToolkit,
      source_code_link: "https://github.com/shrestha-tripathi/ai-toolkit",
      project_link: "https://ai-toolkit-ochre.vercel.app"
    },
    {
      name: "WASM Security Toolkit",
      description:
        "A WASM (WebAssembly) based useful security toolkit webapp for hackers or pen-testers",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "WASM",
          color: "green-text-gradient",
        },
        {
          name: "Rust",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: wasmsec,
      source_code_link: "https://github.com/shrestha-tripathi/wasm_sec_toolkit",
      project_link: "https://shrestha-tripathi.github.io/wasm_sec_toolkit/"
    },
    {
      name: "Peer2Peer Video App",
      description:
        "WebRTC based video calling application with support for video conferences as well. This need NodeJS based signalling server!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "WebRTC",
          color: "green-text-gradient",
        },
        {
          name: "websocket",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: webrtcproj,
      source_code_link: "https://github.com/shrestha-tripathi/WebRTC-App",
    },
    {
      name: "Portfolio WebApp",
      description:
        "Personal Portfolio ReactJS based website showcasing my skills and experiences",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/shrestha-tripathi/portfolio",
      project_link: "https://shrestha-tripathi.github.io/portfolio/"
    },
    {
      name: "Netflix Clone with HTML & CSS",
      description:
        "Pure HTML and CSS Netflix Clone HTML page, TODO: add responsiveness",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: netflixClone,
      source_code_link: "https://github.com/shrestha-tripathi/netflix-html-clone",
      project_link: "https://shrestha-tripathi.github.io/netflix-html-clone/"
    },
  ];
  
  export { services, technologies, experiences, certifications, projects };
  
