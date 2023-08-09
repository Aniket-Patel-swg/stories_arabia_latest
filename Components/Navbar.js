import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showHamburgerItems, setShowHamburgerItems] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const handleHamburgerClick = () => {
    setShowHamburger(!showHamburger);
    setShowHamburgerItems(!showHamburgerItems);
  };

  return (
    <>
      <div className={styles.navbar}>
        <a href="/">
          <img src="/Images/logo.png" alt="" />
        </a>

        <section className={styles.service_navbar}>
          <a href="/ourservices">Services</a>
        </section>
        <section className={styles.navbar_items}>
          <a href="/">Home </a>
          <a href="/AboutUs">About</a>
          <a href="/">Career</a>
          <a href="/">Contact</a>
        </section>

        {/* Hamburger Menu */}
        <div className={styles.hamburger_menu}>
          <a onClick={(e) => handleHamburgerClick(e)}>
            {showHamburger ? <IoMdClose /> : <FaBars />}
          </a>
          {showHamburgerItems ? (
            <>
              <section className={styles.hamburger_items}>
                <span className={styles.hamburger_links}>
                  <a href="">Home</a>
                </span>
                <span className={styles.hamburger_links}>
                  <a href="">Services</a>
                </span>
                <span className={styles.hamburger_links}>
                  <a href="">Team</a>
                </span>
                <span className={styles.hamburger_links}>
                  <a href="">Career</a>
                </span>
                <span className={styles.hamburger_links}>
                  <a href="">About </a>
                </span>
              </section>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
