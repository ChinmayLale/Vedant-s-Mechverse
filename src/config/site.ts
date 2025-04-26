import p1 from '../assets/images/Screen Shots/benchWise .png';
import p2 from '../assets/images/Screen Shots/plumer.png';
import p3 from '../assets/images/Screen Shots/ScrueJack.jpg';
import p4 from '../assets/images/Screen Shots/pullySupport.jpg';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vedant",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/Vedant-s-Mechverse/",
    },
    {
      label: "About",
      href: "/Vedant-s-Mechverse/about",
    },
    {
      label: "Projects",
      href: "/Vedant-s-Mechverse/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/Vedant-s-Mechverse/",
    },
    {
      label: "About",
      href: "/Vedant-s-Mechverse/about",
    },
    {
      label: "Projects",
      href: "/Vedant-s-Mechverse/projects",
    },
    {
      label: "Blog",
      href: "/Vedant-s-Mechverse/blog",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "mailto:vedantlale11@gmail.com",
  },

  aboutMeInfo: "I'm a Mechanical Engineering student at PES Modern College of Engineering, Pune, passionate about design and innovation. Skilled in AutoCAD, SolidWorks, Fusion 360, and 2D/3D modeling, I love bringing ideas to life. Exploring Python to blend tech with mechanics. Keen on robotics, I enjoy working on automation, motion control, and intelligent systems to push the boundaries of engineering",


  ModelInfo: [
    {
      title: "Benchwise Assembly",
      desc: "A precision bench vise designed for holding workpieces securely during machining and assembly.",
      img: p1
    },
    {
      title: "Plummer Block",
      desc: "A mechanical component used to support rotating shafts, ensuring smooth operation and alignment.",
      img: p2
    },

    {
      title: "Screw Jack",
      desc: "A flow control device used to regulate liquids and gases, featuring a rotating disc mechanism.",
      img: p3
    },
    {
      title: "Flange & Coupling",
      desc: "A mechanical component used to connect two shafts, ensuring secure and efficient transmission of power.",
      img: p4
    },
    {
      title: "Plummer Block",
      desc: "A housing unit used to support rotating shafts, ensuring smooth motion and minimal friction in mechanical systems."
    }
  ],


  eduInfo: [
    {
      id: "1",
      title: "PES Modern College of Engineering, Pune",
      description: "Pursuing Bachelor's in Mechanical Engineering.",
      date: "2026",
      icon: "mdi:graduation-cap",
      status: "in-progress",
      user: {
        name: "Vedant",
        avatar: "https://ui-avatars.com/api/?name=Vedant"
      }
    },
    {
      id: "2",
      title: "SR Chandak Junior College of Engineering",
      description: "Completed 11th & 12th (HSC).",
      date: "2021",
      icon: "mdi:book-open-variant",
      status: "completed",
      user: {
        name: "Vedant",
        avatar: "https://ui-avatars.com/api/?name=Vedant"
      }
    },
    {
      id: "3",
      title: "Jnana Prabodhini Solapur",
      description: "Completed SSC with 87%.",
      date: "2019",
      icon: "mdi:school", // Iconify school icon
      status: "completed",
      user: {
        name: "Vedant",
        avatar: "https://ui-avatars.com/api/?name=Vedant" // Replace with actual image
      }
    }
  ],


  skillCategories: [
    {
      title: "Engineering",
      skills: [
        { name: "CAD Design", proficiency: 90, image: 'https://img.icons8.com/color/450/solidworks.png' },
        { name: "FEA Analysis 1D", proficiency: 85, image: 'https://img.icons8.com/cute-clipart/500/fine-print.png' },
        { name: "Motion Optimization", proficiency: 95, image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/450/external-aerodynamic-engineering-flaticons-lineal-color-flat-icons.png' },
        { name: "Mechanical Systems", proficiency: 90, image: 'https://img.icons8.com/bubbles/450/services.png' }
      ]
    },
    {
      title: "Software",
      skills: [
        { name: "AutoCAD", proficiency: 90, image: "https://img.icons8.com/emoji/400/a-button-blood-type-emoji.png" },
        { name: "ANSYS", proficiency: 70, image: 'https://img.icons8.com/windows/512/Ansys.png' },
        { name: "CATIA", proficiency: 60, image: 'https://img.icons8.com/color/480/catia.png' },
        { name: "SolidWorks", proficiency: 98, image: 'https://img.icons8.com/color/450/solidworks.png' }
      ]
    },
    {
      title: "Coding",
      skills: [
        { name: "Python", proficiency: 70 }
      ]
    }
  ]
};
