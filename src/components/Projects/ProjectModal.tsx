import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  code?: string;
  projectLink: string;
  tech: string[];
  modalContent: JSX.Element;
}

export const ProjectModal = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div
      className="fixed inset-0 z-50 px-4 py-12 bg-zinc-950/50 backdrop-blur overflow-y-scroll flex justify-center cursor-pointer"
      onClick={() => setIsOpen(false)}
    >
      <button className="absolute top-4 md:top-6 text-xl right-4">
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl h-fit rounded-lg overflow-hidden dark:bg-cyan-950 bg-teal-300 bg-opacity-80 shadow-lg cursor-auto"
      >
        <img
          className="w-full"
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className="p-8">
          <h4 className="text-3xl font-bold mb-2 dark:text-text-50">{title}</h4>
          <div className="flex flex-wrap gap-2 text-sm dark:text-text-300 text-text-600">
            {tech.join(" - ")}
          </div>

          <div className="space-y-4 my-6 leading-relaxed text-sm dark:text-zinc-300 text-zinc-950">
            {modalContent}
          </div>

          <div>
            <p className="font-bold mb-2 text-xl dark:text-text-50">
              Project Links<span className="text-indigo-500">.</span>
            </p>
            <div className="flex items-center gap-4 text-sm">
            {code && (
              <a
                target="_blank"
                rel="nofollow"
                className="dark:text-zinc-300 dark:hover:text-accent-300 hover:text-accent-500 transition-all flex items-center gap-1"
                href={code}
              >
                <AiFillGithub /> Source Code
              </a>
            )}
              <a
                target="_blank"
                rel="nofollow"
                className="dark:text-zinc-300 dark:hover:text-accent-300 hover:text-accent-500 transition-all flex items-center gap-1"
                href={projectLink}
              >
                <AiOutlineExport /> Live Project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  // @ts-ignore
  return ReactDOM.createPortal(content, document.getElementById("root"));
};
