import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.css";
import Tagline from "../Components/Tagline";
import Services from "../Components/Services";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Testimonails from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
import Gallary from "../Components/Gallary";
import ChooseUs from "../Components/ChooseUs";
import Footer from "../Components/Footer";
import AlternateProjects from "../Components/AlternateProjects";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//code.tidio.co/r5i1ps01rp43iqay4flpaqiacdo7jbyz.js";
    script.async = true;

    // Enter your public key above
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.hero_container}>
        <div className={styles.overlay}></div>
        <div className={styles.image}>
          <img src="/Images/Hero1.jpg" alt="" />
        </div>
        {/* <img src="/Images/Hero5.jpg" alt="" /> */}
        <section className={styles.text_section}>
          <h1>
            Creating Brands <br /> That actually gets <br /> attention
          </h1>
          <section className={styles.welcome_text}>
            <hr />
            <p>
              Connecting Brands with Engaging Stories. <br /> Welcome to Stories
              Arabia
            </p>
          </section>
        </section>
      </div>
      <section className={styles.whatsapp_section}>
        <a href="https://wa.me/+917990154651" target="_blank">
          <img src="/Images/whatsapp_icon.png" alt="" />
        </a>
      </section>
      <Tagline />
      <Services />
      <About />
      <AlternateProjects />
      <Testimonails />
      <Gallary />
      <ChooseUs />
      <FAQ />
      <Footer />
    </>
  );
}
