export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vedant",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
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
      desc: "A precision bench vise designed for holding workpieces securely during machining and assembly."
    },
    {
      title: "Screw Jack",
      desc: "A mechanical device used to lift heavy loads, commonly seen in automotive and industrial applications."
    },
    {
      title: "Butterfly Valve",
      desc: "A flow control device used to regulate liquids and gases, featuring a rotating disc mechanism."
    },
    {
      title: "Engine Assembly",
      desc: "A detailed 3D model of an internal combustion engine, showcasing components like pistons, crankshaft, and valves."
    },
    {
      title: "Plummer Block",
      desc: "A housing unit used to support rotating shafts, ensuring smooth motion and minimal friction in mechanical systems."
    }
  ],


  eduInfo: [
    {
      id: "1",
      title: "Modern College of Engineering, Pune",
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
      title: "Jñana Prabodhini Solapur",
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


};
