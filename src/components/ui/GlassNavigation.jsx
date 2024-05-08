import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef(null);

  const handleMouseMove = ({ offsetX, offsetY, target }) => {
    // @ts-ignore
    const isNavElement = [...target.classList].includes("glass-nav");

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + "px";
      const left = offsetX + "px";

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener("mousemove", handleMouseMove);

    return () =>
      navRef.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
    //   style={{
    //     cursor: hovered ? "none" : "auto",
    //   }}
      className="glass-nav fixed left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur dark:background-brightness-100 backdrop-brightness-75 md:left-6 md:right-6 md:top-6 md:rounded-2xl"
      initial={{ opacity: 0, scale: 0.95, y: -120 }} // initial state
      animate={{ opacity: 1, scale: 1, y: 0 }} // animate to
      transition={{ duration: 0.8, delay: 1, ease: "circInOut" }} // transition settings
    >
      <div className="z-50 flex items-center justify-between px-5 py-5 glass-nav">
        {/* <Cursor hovered={hovered} scope={scope} /> */}

        <Links />

        {/* <Logo /> */}

        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} className='z-50'/>
    </motion.nav>
  );
};

// const Cursor = ({ hovered, scope }) => {
//   return (
//     <motion.span
//       initial={false}
//       animate={{
//         opacity: hovered ? 1 : 0,
//         transform: `scale(${
//           hovered ? 1 : 0
//         }) translateX(-50%) translateY(-50%)`,
//       }}
//       transition={{ duration: 0.15 }}
//       ref={scope}
//       className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
//     >
//       <FiArrowUpRight className="text-white" />
//     </motion.span>
//   );
// };

const Logo = () => (
  <span className="pointer-events-none relative left-0 top-[50%] z-10 text-4xl font-black text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
    logo.
  </span>
);

const Links = () => (
  <div className="items-center hidden gap-2 md:flex">
    <TopLink text="Home" />
    <GlassLink text="About" />
    <GlassLink text="Projects" />
    {/* <GlassLink text="Contact" /> */}
  </div>
);

const GlassLink = ({ text }) => {
    const textLowercase = text.toLowerCase();
  return (
    <Link
      href="#"
      className="relative px-4 py-2 overflow-hidden transition-transform scale-100 rounded-lg group hover:scale-105 active:scale-95"
      to={textLowercase} spy={true} smooth={true} offset={0} duration={1000}
    >
      <span className="relative z-10 transition-colors text-white/90 group-hover:text-black dark:group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 transition-opacity opacity-0 bg-gradient-to-br from-white/20 to-white/5 group-hover:opacity-100" />
    </Link>
  );
};

const TextLink = ({ text }) => {
  return (
    <a href="#" className="transition-colors text-white/90 hover:text-white">
      {text}
    </a>
  );
};

const TopLink = ({ text }) => {
    return (
        <Link
            href="#home"
            className="relative px-4 py-2 overflow-hidden transition-transform scale-100 rounded-lg group hover:scale-105 active:scale-95"
            onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
        >
            <span className="relative z-10 transition-colors text-white/90 group-hover:text-black dark:group-hover:text-white">
                {text}
            </span>
            <span className="absolute inset-0 z-0 transition-opacity opacity-0 bg-gradient-to-br from-white/20 to-white/5 group-hover:opacity-100" />
        </Link>
    );
};

const Buttons = ({ menuOpen, setMenuOpen }) => (
  <div className="flex items-center gap-4">
    {/* <div className="hidden md:block">
      <SignInButton />
    </div>

    <button className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95">
      Try free
    </button> */}

    <button
      onClick={() => setMenuOpen((prev) => !prev)}
      className="block ml-2 text-3xl transition-all scale-100 text-white/60 hover:scale-105 hover:text-white active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

// const SignInButton = () => {
//   return (
//     <button className="relative px-4 py-2 overflow-hidden transition-transform scale-100 rounded-lg group hover:scale-105 active:scale-95">
//       <span className="relative z-10 transition-colors text-white/90 group-hover:text-white">
//         Sign in
//       </span>
//       <span className="absolute inset-0 z-0 transition-opacity opacity-0 bg-gradient-to-br from-white/20 to-white/5 group-hover:opacity-100" />
//     </button>
//   );
// };

const MobileMenu = ({ menuOpen }) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? "fit-content" : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div className={(menuOpen ? "hidden" : "") + " menu"}>
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center gap-4">
            <TopLink text="Home" />
            <GlassLink text="About" />
            <GlassLink text="Projects" />
            {/* <TextLink text="Contact" /> */}
          </div>
          {/* <SignInButton /> */}
        </div>
      </div>
    </motion.div>
  );
};