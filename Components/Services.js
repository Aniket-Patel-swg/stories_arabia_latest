import styles from "../styles/Services.module.css";

const Services = () => {
  return (
    <>
      <div className={styles.Services}>
        <div className={styles.service_container}>
          <hr />
          <h4>Our Services</h4>
          <h1>A ONE-STOP SITE FOR ALL YOUR DIGITAL MARKETING NEEDS.</h1>
        </div>
        <section className={styles.services_list}>
          <section className={styles.services_quote}>
            <hr />
            <h4>Your Perfect Brand</h4>
          </section>
          <section className={styles.services_list1}>
            <hr />
            <ul>
              <li>
                {" "}
                <p>video Production</p>{" "}
              </li>
              <li>
                <hr />
                <p>Public Relations</p>{" "}
              </li>
              <li>
                <hr />
                <p>Website Design</p>
              </li>
            </ul>
          </section>
          <section className={styles.services_list2}>
            <hr />
            <ul>
              <li>
                {" "}
                <p>Digital Marketing</p>{" "}
              </li>
              <li>
                {" "}
                <hr />
                <p>Publicity</p>{" "}
              </li>
              <li>
                <hr />
                <p>Website Management</p>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </>
  );
};

export default Services;
