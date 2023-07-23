import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.css";
import Tagline from "../Components/Tagline";
import Services from "../Components/Services";

export default function Home() {
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
            {/* <section className={styles.scroll_down}>Scroll to Explore</section> */}
          </section>
        </section>
      </div>
      <Tagline />
      <Services />
    </>
  );
}
