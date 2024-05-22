import React, {useState} from "react";
import { Project } from "./Project";
import Button from "../buttons/button";
import { ScreenFitText } from "../text/screenFitText";

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const sortedProjects = [...projects]
    .filter(project => filter === 'All' || project.category === filter)
    .sort((a, b) => a.category.localeCompare(b.category));

  return (
    <section className="section-wrapper" id="projects">
      <ScreenFitText />
      <div className="grid md:gap-12 gap-4 grid-cols-1 md:grid-cols-3 py-8">
        <Button onClick={() => setFilter('All')} >All </Button>
        <Button onClick={() => setFilter('Lighting Design')} >Lighting Design</Button>
        <Button onClick={() => setFilter('Web Development')} >Web Development</Button>
        {/* Add more buttons for each category */}
      </div>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {sortedProjects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Made with Carbon 2023 Submission",
    category: "Lighting Design",
    imgSrc: "https://cdn.duwub.dev/assets/website/project1.png",
    // code: "https://www.github.com",
    projectLink: "https://www.youtube.com/watch?v=Inb-tN56uiA",
    tech: ["Unreal Engine 5", "Carbon For Unreal", "MagicQ"],
    // description:
    //   "A real-time coaching app for students learning to paint. This app is my baby, designed and built on my own.",
    modalContent: (
      <>
        <p>
        A re-imagining of my original 2021 entry which was one of the winning submissions. A creative project that utilized the Carbon for Unreal
        plugin to create a unique outdoor show.
        </p>
        <h1 className="font-semibold text-lg dark:text-accent-100 text-accent-800">Fixture List<span className="dark:text-primary-500 text-pink-700">. </span></h1>
        <ul>
          <li>&#8226; 40x Ayrton Cobra</li>
          <li>&#8226; 48x Ayrton Domino</li>
          <li>&#8226; 60x GLP Impression X4 XL</li>
          <li>&#8226; 24x Robe Megapointe</li>
          <li>&#8226; 60x Custom Outdoor Wash</li>
        </ul>
      </>
    ),
  },
  {
    title: "duwub Portfolio Website",
    category: "Web Development",
    imgSrc: "https://cdn.duwub.dev/assets/website/project2.jpg",
    code: "https://github.com/dwsnb/duwub-website",
    projectLink: "https://duwub.dev",
    tech: ["vite.js", "Tailwind CSS", "React.js", "Typescript", "JavaScript"],
    // description:
    //   "A social community for painters to connect with others in their community. I handle everything backend (50K monthly active users).",
    modalContent: (
      <>
        <p>
          My personal portfolio website which was really just an excuse for me to start learning how to use react.
        </p>
        <p>
        The website is using Vite.js as the build tool, React.js as the frontend framework, and Tailwind CSS for styling. The website is currently hosted on Cloudflare Pages
        </p>
        <p>
        This space is used primarily as a way to find my socials, contact information, and a way to showcase my work.
        </p>
        {/* <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        <p>
          Because this isn&apos;t real, here&apos;s some gibberish to fill space{" "}
          {":)"}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p> */}
      </>
    ),
  },
  // {
  //   title: "BrushWire",
  //   category: "Other",
  //   imgSrc: "https://cdn.duwub.dev/assets/random-imgs/jellybruh.png",
  //   code: "https://www.github.com",
  //   projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   tech: ["NextJS", "Java", "Spring", "AWS Aurora"],
  //   description:
  //     "Think Zapier but for paint. Built with a team of four college friends and scaled to > 1 billion requests per day. This was a fun one.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Brush wire is essentially Zapier but for paint. Built with a team of
  //         four college friends and scaled to {">"} 1 billion requests per day.
  //         This was a fun one.
  //       </p>
  //       <p>
  //         Since &quot;Zapier for paint&quot; doesn&apos;t mean anything, be
  //         creative {":)"}
  //       </p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p>
  //     </>
  //   ),
  // },
  // {
  //   title: "Paint Reference 4",
  //   category: "Paint",
  //   imgSrc: "https://cdn.duwub.dev/assets/random-imgs/jellybruh.png",
  //   code: "https://www.github.com",
  //   projectLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   tech: ["Python", "FastAPI", "SQLAlchemy"],
  //   description:
  //     "I couldn't think of another paint reference app, so here we are. I think you get the idea, right? Use your imagination 🌈",
  //   modalContent: (
  //     <>
  //       <p>Alright, you got me. I&apos;m all out of paint references.</p>
  //       <p>
  //         Point is, use this space to explain a bit further WHAT this project
  //         is, as well as what YOU contributed to it.
  //       </p>
  //       <p>You get the idea. Now more lorem {":)"}</p>
  //       <p>
  //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
  //         quia officia odio nulla consectetur aperiam ad tempora magni magnam
  //         nesciunt.
  //       </p>
  //       <p>
  //         Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
  //         rerum dolorum. Deserunt soluta modi culpa animi.
  //       </p>
  //     </>
  //   ),
  // },
];
