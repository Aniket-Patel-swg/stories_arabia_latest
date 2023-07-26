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
        <section className={styles.call_to_action}>
        <section className={styles.how_it_works}>
        {" "}
        <div class={styles.flex_container}>
          <div class={styles.flex_item_left}>
            <h1>Let's Make your perfect brand </h1>

            <img src="https://images.pexels.com/photos/3861957/pexels-photo-3861957.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
          </div>
          <div class={styles.flex_item_right}>
            <h2>3 Simple Steps</h2>
            <p>To create your idea into visible brand</p>
            <hr />
            <h2>Book A Call</h2>
            <p>
            Unlock your brand's true potential today! Schedule a call with our expert
             digital marketing and public relations team to discuss your goals and discover
             the tailored strategies that will drive your business to new heights.
       
            </p>
            <hr />
            <h2>Let us know your requirements</h2>
            <p>
            Ready to elevate your brand's presence? Share your vision and requirements 
            with us, and our skilled digital marketing and public relations specialists 
            will craft a results-driven plan, perfectly aligned with your business objectives.
            </p>
            <hr />
            <h2>We'll deliver your perfect brand</h2>
            <p>
            Leave a lasting impression with your audience. Our 
            dedicated digital marketing and public relations 
            company will work tirelessly to create your ideal brand, 
            complete with captivating strategies that ensure your success in the 
            digital landscape. Get ready to make your mark!
            </p>
            <hr />
          </div>
        </div>
      </section>
        </section>
      </div>
    </>
  );
};

export default ChooseUs;
