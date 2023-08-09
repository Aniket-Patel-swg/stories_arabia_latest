import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

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
        <Link href="/">
          <img src="/Images/logo.png" alt="" />
        </Link>

        <section className={styles.service_navbar}>
          <Link href="/ourservices">Services</Link>
        </section>
        <section className={styles.navbar_items}>
          <Link href="/">Home </Link>
          <Link href="/AboutUs">About</Link>
          <Link href="/">Career</Link>
          <Link href="/">Contact</Link>
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
                  <Link href="/">Home</Link>
                </span>
                <span className={styles.hamburger_links}>
                  <Link href="/">Services</Link>
                </span>
                <span className={styles.hamburger_links}>
                  <Link href="/">Team</Link>
                </span>
                <span className={styles.hamburger_links}>
                  <Link href="/">Career</Link>
                </span>
                <span className={styles.hamburger_links}>
                  <Link href="/AboutUs">About </Link>
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
