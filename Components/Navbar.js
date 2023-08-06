import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  
  return (
    <>
      <div className={styles.navbar}>
        <a href="/">
          <img src="/Images/logo.png" alt="" />
        </a>

        <section className={styles.service_navbar}>
          <a>Services</a>
        </section>
        <section className={styles.navbar_items}>
          <a href="/">Home </a>
          <a>About</a>
          <a>Contact</a>
        </section>
      </div>
    </>
  );
};

export default Navbar;
