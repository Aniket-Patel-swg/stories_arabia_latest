import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.contact_section}>
        <div className={styles.overlay}>
          <section className={styles.about_section}>
            <section className={styles.about_flex}>
              <div className={styles.about_left}>
                <hr />
                <h1>About Us</h1>
              </div>
              <div className={styles.about_right}>
                <p>
                  Welcome to Stories Arabia, your premier digital marketing
                  partner! We craft compelling narratives that drive results.
                  Let's tell your brand's story together.
                </p>
              </div>
            </section>
          </section>
          <section className={styles.clients_number}>
            <section className={styles.empty_div}></section>
            <section className={styles.clients_detials}>
              <hr />
              <h2>30+</h2>
              <h6>Happy clients</h6>
              <p>Public Relation & Digital Marketing</p>
            </section>
          </section>
          <section className={styles.contact_card}>
            <section className={styles.contact_card_left}>
              <hr />
              <h2> 10+ </h2>
              <h6>Years</h6>
              <p>Experienced Members</p>
            </section>
            <section className={styles.contact}>
            <h1>About us</h1>
            <p>Turning ideas into creative brands <br /> since 2020</p>
          </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
