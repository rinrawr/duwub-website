import React, {useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiLinkedin, SiLastdotfm, SiTwitter, SiYoutube } from "react-icons/si";
import { Footer } from '../components/Footer';

export const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} id='about' className="bottom-0 h-full px-4 py-52 top-2 bg-secondary-100 dark:bg-secondary-900 text-zinc-50">
      <motion.div
      variants={{
        hidden: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        visible: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
        initial="hidden"
        animate={mainControls}
        transition={{
          staggerChildren: 0.1,
          duration: 0.5
        }}
        className="grid max-w-4xl grid-cols-12 gap-4 mx-auto grid-flow-dense"
      >
        <HeaderBlock/>
        <SocialsBlock/>
        <AboutBlock/>
        <LocationBlock/>
        <EmailListBlock/>
      </motion.div>
      {/* <Footer /> */}
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
      <motion.div
        variants={{
          hidden: {
            scale: 1,
            y: 50,
            opacity: 0,
          },
          visible: {
            scale: 1,
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          mass: 3,
          stiffness: 400,
          damping: 50,
        }}
        className={twMerge(
          "col-span-4 rounded-lg border border-zinc-700 bg-secondary-200 dark:bg-background-900 p-6",
          className
        )}
        {...rest}
      />
  );
};

const HeaderBlock = () => (
  <Block  className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://cdn.duwub.dev/assets/jellyfish.jpg"
      alt="avatar"
      className="object-cover mb-4 rounded-full size-14"
    />
    <h1 className="mb-12 text-4xl text-black dark:text-white font-medium leading-tight">
      Hi, I'm Dawson.{" "}
      <span className="dark:text-zinc-400 text-zinc-500">
      A junior full-stack developer and web designer from Canada.
      </span>
    </h1>
    <a
      href="mailto:dawson@duwub.dev"
      className="flex items-center gap-1 dark:text-red-300 text-red-600 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-red-500 md:col-span-3"
    >
      <a
        href="https://www.youtube.com/@drawrb"
        target="_blank"
        className="grid h-full text-3xl text-white place-content-center"
      >
        <SiYoutube />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-teal-500 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/dwsnb"
        target="_blank"
        className="grid h-full text-3xl text-white place-content-center"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="https://www.last.fm/user/duwub"
        target="_blank"
        className="grid h-full text-3xl text-text-50 place-content-center"
      >
        <SiLastdotfm />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-500 md:col-span-3"
    >
      <a
        href="https://twitter.com/DUWUBrawr"
        target="_blank"
        className="grid h-full text-3xl text-white place-content-center"
      >
        <SiTwitter />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug text-black dark:text-white">
    <p>
      Embracing the journey of becoming a versatile developer. {" "}
      <span className="dark:text-zinc-400 text-zinc-500">
        Currently pursing a Bachelor of Science in Computer Science and working as a Q/A Engineer and Community Manager at {" "}
      </span>
      <a href="https://imaginary-labs.com" target="_blank" className="dark:text-secondary-300 text-secondary-600 hover:underline cursor-pointer">Imaginary Labs</a>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="flex flex-col items-center col-span-12 gap-4 md:col-span-3">
    <FiMapPin className="text-3xl dark:text-white text-black" />
    <p className="text-lg text-center dark:text-zinc-400 text-zinc-500">Calgary, AB</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg dark:text-white text-black">Skills:</p>
    <p className="flex flex-wrap gap-2 text-md dark:text-text-100 text-text-800">Python, Java, HTML, CSS, JavaScript, React, ZenDesk, Unreal Engine</p>
    {/* <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded whitespace-nowrap bg-zinc-50 text-zinc-900 hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form> */}
  </Block>
);

const FooterBlock = () => (
  <Block className="col-span-12">
    <Footer />
  </Block>
);



// const Foot = () => {
//   return (
//     <Footer />
//   );
// };