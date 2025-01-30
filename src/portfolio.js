/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Axel Santivañez",
  title: "Hi all, I'm Axel",
  subTitle: emoji(
    "A passionate Android developer 🚀 with +4 years of experience in mobile application development using Android, Kotlin and Java. Moreover, I have solid knowledge in tools, libraries and frameworks such as Android Studio, Jetpack Compose, Coroutines, Retrofit, Hilt, Firebase, Unit Testing, Postman and Git."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1g6QIvEPGV-r-wDdeB7OSxJUg1XYD2maa/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/asantivanezg",
  linkedin: "https://www.linkedin.com/in/axel-santivanez/",
  gmail: "asantivanezg@hotmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ANDROID ENGINEER WHO WANTS TO DEVELOP A CHALLENGING APPLICATION",
  skills: [
    emoji(
      "⚡ Develop highly interactive Frontend / User Interfaces for your mobile application."
    ),
    emoji(
      "⚡ Development of offline functionalities and background services for the maximum use of the mobile application."
    ),
    emoji(
      "⚡ Integration of backend services to obtain data."
    ),
    emoji(
      "⚡ Applications with unit tests to minimize bugs."
    ),
    emoji(
      "⚡ Modularized project structuring to scale and work in an orderly fashion with other developers."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Kotlin",
      progressPercentage: "100%"
    },
    {
      Stack: "Java",
      progressPercentage: "85%"
    },
    {
      Stack: "Git",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Sr. Android developer",
      company: "Moventi",
      companylogo: require("./assets/images/moventi_group_logo.jpg"),
      date: "Oct 2023 – Dec 2024",
      desc: "Moventi is an IT company with more than 10 years of experience driving technological innovation in the main sectors through business solutions, development and maintenance of custom software, global IT outsourcing, automation and artificial intelligence, and comprehensive management of cloud services",
      techStack: "Git – Bitbucket, Gitflow, Jira, Modular architecture, Kotlin, Gradle, Clean Architecture, Hilt, Firebase, Unit Test, ProGuard, Jetpack Compose, MVI Pattern, Scrum methodology.",
      descBullets: [
        "Developed the mobile banking app for a municipal savings and credit bank.",
        "Implemented Kotlin DSL in the shared Gradle for improved dependency management, significantly reducing compilation time.",
        "Applied ProGuard for code obfuscation to enhance application security.",
        "Achieved a 20% code reduction by using recycled components.",
        "Maintenance and improvement of mobile application for an important company that produces and sells eggs.",
        "Maintenance and improvement of mobile application for a tourist and cargo train operator company.",
      ]
    },
    {
      role: "Ssr. Android developer",
      company: "Bancom",
      companylogo: require("./assets/images/banco_de_comercio_logo.jpg"),
      date: "Aug 2022 – Apr 2023",
      desc: "Bancom is a Peruvian bank, with the purpose of providing experiences focusing on the segments of personal Banking, institutional and civil agreements, corporate banking and digital business.",
      techStack: "Git – Azure DevOps, Gitflow, Kotlin, Gradle, Hilt, Firebase, Clean Architecture, Unit Test, ProGuard, Jetpack Compose, MVVM Pattern, MVI Pattern, Scrum methodology.",
      descBullets: [
        "Enhanced the main process for foreign exchange transactions.",
        "Optimized dependency management by 70% by transitioning from Groovy to Kotlin DSL.",
        "Implemented ProGuard to improve application security.",
        "Reduced code by 10% through refactoring.",
        "Decreased app size in production by 80% using ProGuard.",
      ]
    },
    {
      role: "Ssr. Android developer",
      company: "Avances tecnológicos",
      companylogo: require("./assets/images/avances_tecnologicos_srl_logo.jpg"),
      date: "Nov 2021 – Jul 2022",
      desc: "Avances tecnológico is a consulting company in systems development with the objective of offering its clients the most advanced IT solutions in the market.",
      techStack: "Git – Azure DevOps, Kotlin, Gradle, Hilt, Firebase, Clean Architecture, Unit test, MVVM Pattern, Scrum methodology.",
      descBullets: [
        "Designed, implemented, and documented the Android project architecture.",
        "Collaborated with the designer, improving screen rendering by 30% for a better user experience.",
        "Reduced testing time by 30% by implementing Firebase App Distribution with QA.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Client Projects",
  subtitle: "CLIENTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/caja-maynas.png"),
      projectName: "Mobile banking",
      projectDesc: "Development of a mobile Android application for Caja Maynas customers. The app allows users to view bank account information and request the opening of credit, debit, fixed-term deposit and insurance. Additionally, it includes features for managing usage limits, enabling and disabling accounts and performing transfers between accountsm, among others.",
      footerLink: [

        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/redrilsa.jpg"),
      projectName: "Administrative mobile app",
      projectDesc: "Development of a mobile Android application for Redrilsa office employees. The app allows users to log their check-in using geolocation, pattern password, and facial recognition. It also enables check-out registration and the management of requests for breakfast, snacks, lunch, dinner, transportation, compensatory hours, days off and vacations.",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
    "Available to be hired. My Inbox is open for all.",
  number: "+51 994898698",
  email_address: "asantivanezg@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
