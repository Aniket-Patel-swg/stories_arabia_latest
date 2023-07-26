import styles from "../styles/ChooseUs.module.css";

const ChooseUs = () => {
  return (
    <>
      <div className={styles.choose}>
        <h1>
          Why Choose <br /> <em>Us?</em>{" "}
        </h1>
        <section className={styles.unique_section}>
          <ul>
            <li>
              <hr />
            <p>Influencer Marketing{" "}</p>  
            </li>
            <li>
              <hr />
            <p>Marketing Automation</p>  
            </li>
            <li>
              <hr />
            <p>Brand Storytelling</p>  
            </li>
            <li>
              <hr />
            <p>Localized PR Campaigns</p>  
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default ChooseUs;
