import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from '../../utils/Reveal';

interface Props {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code?: string;
  category: string;
}

export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
  category,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75, ease: "circInOut" }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-gradient-to-br from-secondary-500 to-purple-500/25 cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "100%" : "85%",
              rotate: hovered ? "8deg" : "0deg",
              opacity: hovered ? 1 : 0.6,
              boxShadow: hovered ? "0 0 200px rgba(13, 255, 206,1)" : "0 0 0px rgba(0,0,0,0.0)",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all duration-300 rounded-xl ease-in-out"
          />
        </div>
        <div className="mt-6">
          <Reveal>
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold text-lg dark:text-text-50 text-text-950 shrink-0 max-w-[calc(100%_-_150px)]">
                {title}
              </h4>
              <div className="w-full h-[1px] dark:bg-background-100 bg-background-900" />

              {code && (
                <a href={code} target="_blank" rel="nofollow">
                <AiFillGithub className="text-xl dark:text-zinc-300 dark:hover:text-accent-300 hover:text-accent-500 transition-all hover:scale-125" />
                </a>
                )}

              <a href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport className="text-xl dark:text-zinc-300 dark:hover:text-accent-300 hover:text-accent-500 transition-all hover:scale-125" />
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 text-sm dark:text-accent-200 text-accent-600 my-2">
              {category}
            </div>
          </Reveal>
          {/* <Reveal>
            <p className="text-text-100 leading-relaxed">
              {description}{" "}
              <span
                className="inline-block text-sm text-text-300 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal> */}
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
