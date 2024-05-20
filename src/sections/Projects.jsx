"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
 
export function Projects() {
  return (
    <div id='projects' className="w-full h-screen py-20 dark:bg-background-950 bg-primary-50">
        <h1 className="relative z-0 pb-5 text-6xl font-bold text-center text-transparent md:text-7xl bg-clip-text bg-text-800 dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600">
          Projects
        </h1>
      <LayoutGrid cards={cards}/>
    </div>
  );
}
 
const SkeletonOne = () => {
  return (
    <div>
          <div className='aspect-video flex items-center justify-center h-full py-1' >
              <iframe
                  className='top-0 sm:w-3/5 sm:h-3/5 aspect-video md:w-full md:h-full w-full h-full self-center items-center justify-center rounded-lg '
                  src="https://www.youtube.com/embed/Inb-tN56uiA?si=hcjzAoLPRcwyXik3"
                  width="100%"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen">
              </iframe>
          </div>
      <p className="text-2xl font-bold text-text-50">Made with Carbon 2023 Submission</p>
      <p className="text-base font-light text-text-200">Song: Blinding Lights - The Weeknd</p>
      <p className="max-w-lg my-4 text-base font-normal text-text-100">
        A re-imagining of my original 2021 entry which was one of the winning submissions. A creative project that utilized the Carbon for Unreal
        plugin to create a unique outdoor show.
      </p>
    </div>
  );
};
 
const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-4xl font-bold text-white">PLACEHOLDER</p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        More Projects coming soon...
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
        <p className="text-4xl font-bold text-white">PLACEHOLDER</p>
        <p className="text-base font-normal text-white"></p>
        <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        More Projects coming soon...
        </p>
  </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
        <p className="text-4xl font-bold text-white">PLACEHOLDER</p>
        <p className="text-base font-normal text-white"></p>
        <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        More Projects coming soon...
        </p>
  </div>
  );
};
 
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://cdn.duwub.dev/assets/website/project1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.duwub.dev/assets/jellyfish.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://cdn.duwub.dev/assets/random-imgs/jellybruh.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://cdn.duwub.dev/assets/jellyfish.jpg",
  },
];