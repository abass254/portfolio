import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Abass",
  lastName: "Ahmed",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/abass.jpeg",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Somali", "Swahili"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abass254",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abass-ahmed-aa695b13b/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:abass.ahmedd.254@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer Devops Engineer</>,
  subline: (
    <>
      Passionate full-stack developer specializing in scalable web solutions, seamlessly integrating modern front-end experiences with robust backend systems.
   
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Abass is a Toronto-based passionate and versatile web developer with a strong focus 
        on building scalable, high-performance applications. With experience spanning both 
        front-end and back-end development, I specialize in crafting modern solutions using 
        cutting-edge frameworks and technologies. My work emphasizes efficiency, 
        user experience, and long-term maintainability.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Doli Law Corporation ",
        timeframe: "06/2024 - Present",
        role: "ERP Developer (Consultant.)",
        achievements: [
          <>
            Develop an ERP system to streamline client registry and case management processes, enhancing operational oversight.
          </>,
          <>
            Deploy the ERP on AWS instances, managing clusters to optimize cost efficiency and system performance.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Tiberbu Healthnet Limited",
        timeframe: "2018 - 2022",
        role: "Software Developer (Consultant)",
        achievements: [
          <>
          Contributed to the development of a Universal Healthcare Unit currently in use across Kenya.
          </>,
          <>
          Conducted training sessions for doctors and healthcare workers, ensuring effective use of the system
          </>,
          <>
          Continually maintain and enhance the system with new features to meet evolving healthcare needs.
          </>,
        ],
        images: [],
      },
      {
        company: "Konvergenz Network Solutions",
        timeframe: "10/2017 - 08/2018",
        role: "System Administrator",
        achievements: [
          <>
          Contributed  to  the  design  and  deployment  of  the  organization’s  Active  Directory
infrastructure
          </>,
          <>
          Developed a streamlined system for the HR team, enabling them to add users through a portal that automatically integrates with Active Directory, eliminating the need for direct AD access. This innovation simplified and accelerated the user onboarding process.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Nairobi",
        description: <>Mathematics and Computer Science.</>,
      },
      {
        name: "Certified Oracle SQL Developer",
        description: <>Certified from oracle</>,
      },{
        name: "Certified Azure Developer",
        description: <>Certified from Microsoft</>,
      },{
        name: "AWS Cloud Practitioner",
        description: <>Certified from Amazon</>,
      },{
        name: "AWS Solution Architect Associate",
        description: <>Certified from Amazon</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
