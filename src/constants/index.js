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
    jobit,
    tripguide,
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
  } from "../assets";
  
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
      link: "https://drive.google.com/file/d/12c7SqeBVSuDZ0PrhFQpJaM8cDvas1K80/view?usp=sharing",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, certifications, projects };
  