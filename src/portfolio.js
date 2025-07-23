

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import sslcLogo from "./assets/images/sslc-logo.jpg";
import hscLogo from "./assets/images/hsc-logo.jpeg";



// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Honeyhpd",
  title: "I'm Honey Priya Dharshini V",
  subTitle: emoji(
    "A security-driven developer with a strong foundation in designing intelligent, data-informed, and user-focused digital solutions. I specialize in building secure, scalable systems that integrate both robust backend logic and seamless user experiences. Passionate about purposeful coding, continuous learning, and creating impactful software that blends innovation with real-world value. My core interests lie at the intersection of secure architecture, intelligent automation, and human-centered design."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xXWLV6R_DHngD3APMZ_CaTYw_NNm_kLz/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Honeyhpd",
  linkedin: "https://www.linkedin.com/in/honey-priya-dharshini-v-590372268",
  gmail: "honeypriyadharshini2004@gmail.com",
  instagram:"https://www.instagram.com/honey.hpd",
  kaggle:"https://www.kaggle.com/cutekitty1",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Building intelligent, secure, and scalable digital experiences- where design meets data and code meets creativity",
  skills: [
    emoji(
      "⚡ Develop Full-stack web application with AI-driven features" 
      ),
    emoji("⚡ Design secure systems with core Cybersecurity practices"),
    emoji("⚡ Create user=centric UI/UX with clean, responsive design"),
    emoji(
      "⚡ Analyze, visualize data using Data science techniques"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fab fa-code"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MS-Excel",
      fontAwesomeClassname: "fab fa-table"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "express.js",
      fontAwesomeClassname: "fab fa-code "
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fab fa-code"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-mobile-alt"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fa-brands fa-git-alt"
    },
    
     {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Anna University Regional Campus, Coimbatore",
      logo: require("./assets/images/univ.jpeg"),
      subHeader: "B.Tech - Artificial Intelligence And Data Science",
      duration: "October 2022 - July 2026",
      desc: "CGPA: 8.2",
      descBullets: [
        "Honours in Cybersecurity and Data Privacy"
      ]
    },
    {
      schoolName: "St.Stella's Matriculation Higher Secondary School, Anjugramam, Kanyakumari",
      logo: hscLogo,
      subHeader: "Higher Sceondary HSC",
      duration: " 2021 - 2022",
      desc: "92.5%",
      descBullets: ["Mathematics - Biology"]
    },
    {
      schoolName: "St.Stella's Matriculation Higher Secondary School, Anjugramam Kanyakumari",
      logo: sslcLogo,
      subHeader: "Secondary SSLC",
      duration: " 2019 - 2020",
      desc: "90.2%",
      descBullets: []
      }
  ]
};

// Your top 3 proficient stacks/tech experience
      
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Science",
      progressPercentage: "75%"
    },
    {
      Stack: "Cybersecurity",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cybersecurity Intern",
      company: "DigiSuraksha Parhari Foundation",
      companylogo: require("./assets/images/digisurak.png"),
      date: "Apr 2025 – May 2025 | Remote",
      descBullets: [
        "Attended 15+ mentor-led, hands-on training sessions on core cybersecurity concepts.",

"Covered Ethical Hacking, Pentesting, OSINT, and Digital Forensics.",

"Collaborated with a team to solve CTFs on TryHackMe and OverTheWire.",

"Contributed to a cybersecurity project focused on real-world threat analysis and defense strategies.",

"Created detailed reports and documented findings from each training and challenge session"
      ]
    },
    {
      role: "Cybersecurity Intern",
      company: "Skypark Itech",
      companylogo: require("./assets/images/skypark.jpeg"),
      date: "Jul 2024 – Aug 2024",
      descBullets: [
        "Trained in network setup, configuration, and captured network traffic via Wireshark.",

"Gained hands-on experience in incident response and threat mitigation.",
"Practiced Red Teaming to identify vulnerabilities and test system defenses.",

"Performed vulnerability assessments using tools like RapidScan and Nessus.",

"Identified and reported 4 major security flaws in the official college website"
]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Personal and academic projects showcasing my skills",
  projects: [
    {
      image: require("./assets/images/portfolio.jpg"),
      projectName: "React-Portfolio",
      projectDesc: "Built a personal website to showcase skills and projects: React.js, HTML, CSS, JavaScript",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/Honeyhpd/React_Portfolio"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/fullstack.jpg"),
      projectName: "CRUD app",
      projectDesc: "Developed a full-stack application with create, read, update, and delete functionality:MongoDB, Express.js, React.js, Node.js",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/Honeyhpd/CRUD-application"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tls.jpg"),
      projectName: "SSL/TLS Analyzer",
      projectDesc: "Created a tool to scan and analyze SSL/TLS security layers for vulnerabilities:Python, Flask, OpenSSL",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/Honeyhpd/SSL-TLS"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/timetable.jpg"),
      projectName: "Timetable Scheduler",
      projectDesc: "Designed a smart scheduler using Genetic Algorithms and Constraint Satisfaction Problems:Flask, Python, CSP, GA",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/Honeyhpd/Timetable-Scheduler"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/newss.jpg"),
      projectName: "Kotlin News App",
      projectDesc: "Developed an Android app to display the latest headlines using REST APIs:Kotlin, Android Studio, REST APIs",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/narmatharam23/NewsHeadline"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/leaff.jpg"),
      projectName: "Plant Leaf Disease Detector",
      projectDesc: "Implemented image-based disease detection using deep learning: Python, TensorFlow, Keras, OpenCV",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/Honeyhpd/Plant-Disease"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/iot.jpg"),
      projectName: "Smart Irrigation",
      projectDesc: "– Automated IoT-based watering system using soil moisture sensors and ESP32 microcontroller: ESP32, C++, IoT Sensors",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/Honeyhpd/Iot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/senti.jpg"),
      projectName: "Sentiment Analysis",
      projectDesc: "Built an ML model to classify text sentiment from user input: Python, Scikit-learn, NLTK, Pandas",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/Honeyhpd/Sentiment-Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/pdf.jpg"),
      projectName: "Speech Tool",
      projectDesc: "Created a utility to read PDF content aloud for visually impaired users: Python, PyPDF2, pyttsx3",
      footerLink: [
        {
          name: "View",
          url: "https://github.com/Honeyhpd/PDF-Speech"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  subtitle:
    "Verified certifications from various online and offline platforms",

  achievementsCards: [
    {
      title: "Complete Python Course",
      subtitle:
        "A beginner-friendly course covering Python syntax, functions, file handling, and real-world projects to build strong coding logic.",
      image: require("./assets/images/UDEMY.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1GE0N2Hhw3HBA91KguR63bJoVYuiPAEBj/view?usp=drive_link"
        }
      ]
    },
    {
      title: "The Complete C Programming",
      subtitle:
        "Covers core C programming concepts including loops, arrays, pointers, structures, and hands-on coding exercises.",
      image: require("./assets/images/UDEMY.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1GL-Se-5mN_QqWp06q2h54q0CusO79mSe/view?usp=drive_link"
        }
      ]
    },
    {
      title: "The Complete Guide To HTML",
      subtitle:
        "Learn to structure web pages using HTML tags, forms, tables, and semantic elements essential for frontend development.",
      image: require("./assets/images/UDEMY.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1GRqneIZWoUnsc3_5XqGvpPxGUHwNcW0Z/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Complete CSS Course",
      subtitle:
        "Master CSS styling techniques, layout design, flexbox, grid, transitions, and responsive design for beautiful web pages.",
      image: require("./assets/images/UDEMY.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1GE0N2Hhw3HBA91KguR63bJoVYuiPAEBj/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Complete JavaScript Course",
      subtitle:
        "Explore JavaScript basics to advanced topics like DOM manipulation, functions, events, and dynamic web content.",
      image: require("./assets/images/UDEMY.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1GE0N2Hhw3HBA91KguR63bJoVYuiPAEBj/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Computer Network Simplified",
      subtitle:
        "Simplifies networking concepts such as IP addressing, routing, protocols, and the OSI model for practical understanding.",
      image: require("./assets/images/UDEMY.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Hf9Uh9OW8b1lOyFGAGpwSbJycjfMvFIv/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Intoduction to Cybersecurity",
      subtitle:
        "Foundational course on cybersecurity principles, common threats, best practices, and career paths in cyber defense.",
      image: require("./assets/images/CISCO.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Hf9Uh9OW8b1lOyFGAGpwSbJycjfMvFIv/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Intoduction to MongoDB",
      subtitle:
        "Covers NoSQL basics, MongoDB CRUD operations, schema design, and working with databases in real-world apps.",
      image: require("./assets/images/MONGO.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1HPe75lm96tIEBBi63blVDbBFXl0Yvyn3/view?usp=drive_link"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Achievements",
  subtitle:
    " Awards, honors, and recognitions earned",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/1Foh0Z095PIPdNKBdVwjXJN6dI26lejES/view?usp=drive_link",
      title: "Econ 101 – Call for Articles (IIM Rohtak)",
      description:
        "Secured 1st place out of 344 entries in a national-level article writing competition; received ₹300 cash prize."
    },
    {
      url: "https://drive.google.com/file/d/1Fe2z_VNL4MqTw0eOYxc6FTZfX3zH0tjz/view?usp=drive_link",
      title: "The Voice of Change – Medicaps University",
      description:
        "Participated in a national article writing contest under the theme “The Shift Has Begun” by the Advanced Studies Club."
    },
    {
      url: "https://drive.google.com/file/d/1FuGm8uekEHSYcA2rJkkYKxI2PK9feupC/view?usp=drive_link",
      title: "Pixel Palettes – MIT Jaipur",
      description:
        "Participated in an AI-powered national hackathon focusing on innovative tech solutions."
    },
    {
      url: "https://drive.google.com/file/d/1FY2i9gryxR7zTsEgQcHfho4K1-RcOWi2/view?usp=drive_link",
      title: "CodeClash – Let’s Code",
      description:
        "Competed in a logic and programming contest testing problem-solving skills."
    },
    {
      url: "https://drive.google.com/file/d/1FsMz1VZruOPTmQgxbibRoemeox5cHk0_/view?usp=drive_link",
      title: "HackOrbit 2025 – MITS Gwalior",
      description:
        "Participated in a national-level hackathon organized by Madhav Institute of Technology & Science."
    },
    {
      url: "https://drive.google.com/file/d/1G13GesIilkBNt-0xA_LU0ONk83Lxdhj_/view?usp=drive_link",
      title: "National Hackathon – PSG iTech",
      description:
        "Participated in a competitive national hackathon to develop creative tech solutions."
    },
    {
      url: "https://drive.google.com/file/d/1FdX2L-p3ef4fr3gGVZ4Hwqqm-raA2iFw/view?usp=drive_link",
      title: "AIML Quiz – Pregrad",
      description:
        "Participated in an AI/ML-focused quiz competition, testing conceptual understanding."
    },
    {
      url: "https://drive.google.com/file/d/1G1h_D1qQWt-wxBWIrUfJ3HtqqAVs7g9C/view?usp=drive_link",
      title: "EV Quiz – Karpagam College",
      description:
        "Took part in a quiz aimed at promoting awareness about electric vehicles."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Workshops",
  subtitle: emoji(
    "Hands-on experiences and technical workshops attended"
  ),

  talks: [
    {
      title: "Workshop on Cybersecurity",
      subtitle: "Online, with Google Developer Groups",
      slides_url: "https://drive.google.com/file/d/1GCbZWrXTttqwBwHbel04V7irtlKpl3pT/view?usp=drive_link",
      event_url: "https://www.linkedin.com/posts/honey-priya-dharshini-v-590372268_workshopexperience-activity-7171132136769400833-TBse?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEGMq7wB9xF57EGSrv62-DLQEP3L50JZ1L0&utm_campaign=copy_link"
    },
    {
      title: "Workshop on MERN Stack",
      subtitle: "Attended at GCT (Government College of Technology)",
      slides_url: "https://drive.google.com/file/d/1GCab-ZV47cGK2tMfM1ELHLOzVTuc9O5T/view?usp=drive_link",
      event_url: "https://www.linkedin.com/posts/honey-priya-dharshini-v-590372268_cybersecurityawareness-gdgoncampus-cybersecurity-activity-7262729843199361024-lq2Z?utm_source=share&utm_medium=member_android&rcm=ACoAAEGMq7wB9xF57EGSrv62-DLQEP3L50JZ1L0"
    },
    {
      title: "Workshop on AI",
      subtitle: "Attended at CIT (Coimbatore Institute of Technology)",
      slides_url: "https://drive.google.com/file/d/1GCab-ZV47cGK2tMfM1ELHLOzVTuc9O5T/view?usp=drive_link",
      event_url: "https://www.linkedin.com/posts/honey-priya-dharshini-v-590372268_cybersecurityawareness-gdgoncampus-cybersecurity-activity-7262729843199361024-lq2Z?utm_source=share&utm_medium=member_android&rcm=ACoAAEGMq7wB9xF57EGSrv62-DLQEP3L50JZ1L0"
    },
    {
      title: "Workshop on UI/UX",
      subtitle: "Online, with Rablo",
      slides_url: "https://drive.google.com/file/d/1G9bAuJoVaJ_B5OasjFrKvwYbBi7Fub9S/view?usp=drive_link",
      event_url: "https://www.linkedin.com/posts/honey-priya-dharshini-v-590372268_uiuxdesign-figma-designworkshop-activity-7342615662034329602-xsXh?utm_source=share&utm_medium=member_android&rcm=ACoAAEGMq7wB9xF57EGSrv62-DLQEP3L50JZ1L0"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("💼 Virtual Jobs"),
  subtitle: "Completed virtual experience programs on Forage",
  podcast: [
    {
      title: "Forage x ANZ Australia",
      subtitle:"Cybersecurity Threat Analyst",
      link: "https://www.theforage.com/simulations/anz/cybersecurity-management-szf9",
      certificate: "https://drive.google.com/file/d/1GgnIF-MJlKS6KOxcVyLjT0rniregDG2h/view?usp=drive_link"
    },
    {
      title: " Forage x Tata Group",
      subtitle:"IAM Developer",
      link: "https://www.theforage.com/simulations/tata/cybersecurity-sbda",
      certificate: "https://drive.google.com/file/d/1H58NnGcmPFjDcLHZ94JVZIc5twPj5ri1/view?usp=drive_link"
    },
    {
      title: "Forage x Mastercard",
      subtitle:"Security Awareness Analyst",
      link: "https://www.theforage.com/simulations/mastercard/cybersecurity-t8ye",
      certificate: "https://drive.google.com/file/d/1HBfYEmv-y3DnFEycQu5Lhz2Yu10PRJ73/view?usp=drive_link"
    },
    {
      title: "Forage x AIG",
      subtitle:"Information Security Analyst  ",
      link: "https://www.theforage.com/simulations/aig/cybersecurity-ku1i",
      certificate: "https://drive.google.com/file/d/1H82PGZOzYP1Ilu2m6VrPWXACj41a3TSD/view?usp=drive_link"
    },
    {
      title: "Forage x Telstra",
      subtitle:"Malware Analyst ",
      link: "https://www.theforage.com/simulations/telstra/cybersecurity-cyyo",
      certificate: "https://drive.google.com/file/d/1Gp_-wne-RPUKINh9XNsdIt7AoM9rzz5v/view?usp=drive_link"
    },
    {
      title: "Forage x DATACOM",
      subtitle:"Risk Analyst",
      link: "https://www.theforage.com/virtual-internships/prototype/XdEnW47EqAbFKPyzq/DATACOM-Risk-Analyst-Virtual-Experience",
      certificate: "https://drive.google.com/file/d/1GyAZJja0UbNUOhEE97TVSVYLjggNPzqh/view?usp=drive_link"
    }
  ],
  Display: true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8838012247",
  email_address: "honeypriyadharshini2004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  Display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
