"use client";

import { useState } from "react";
// import { motion } from "framer-motion";
import style from "./Header.module.css";
// import { Nav } from "../Nav";

const Header = () => {
  const [navOpen, setnavOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setnavOpen(!navOpen);
  };

  return (
    <nav className={style.nav}>
      <button className={style.toggleButton} onClick={toggleHamburger}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </button>
      nav
      {/* {!navOpen ? (
        <nav className={style.navbar}>
          <Nav />
        </nav>
      ) : (
        <motion.nav
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <Nav />
        </motion.nav>
      )} */}
    </nav>
  );
};

export default Header;
