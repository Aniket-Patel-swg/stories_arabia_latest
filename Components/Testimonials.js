import styles from "../styles/Testimonial.module.css";

const Testimonails = () => {
  const testimonials = [
    {
      Client_name: "Lisa Anderson",
      testimonial:
        "Stories Arabia has been a game-changer for our brand's growth. Their expertise in content marketing and influencer outreach helped us connect with our audience effectively. Grateful for their support!",
    },
    {
      Client_name: "Jane Smith",
      testimonial:
        "As a startup, Stories Arabia's PR team did an excellent job in getting us media coverage and increasing our brand visibility. They truly understand the power of storytelling.",
    },
    {
      Client_name: "David Williams",
      testimonial:
        "Outsourcing to Stories Arabia was a fantastic decision. Their team is responsive, creative, and data-driven. Our online performance has never been better.",
    },
    {
      Client_name: "Sarah Johnson",
      testimonial:
        "Stories Arabia has been instrumental in helping us build a strong social media presence. Their content strategy and community management skills are top-notch.",
    },
    {
      Client_name: "Michael Brown",
      testimonial:
        "The team at Stories Arabia is not only knowledgeable but also passionate about what they do. Their enthusiasm and dedication have made them a valuable partner in our digital marketing efforts.",
    },
    {
      Client_name: "Emily Davis",
      testimonial:
        "After partnering with Stories Arabia, our website traffic and leads have skyrocketed. Their deep understanding of SEO and paid advertising has been spot on. Highly recommended!",
    },
  ];

  return (
    <>
      <div className={styles.testimonails}>
        <hr />
        <p className={styles.clients_quote}>Our Clients talk about us</p>
        <h1>We work closely with all our clients to create visible results</h1>
        <section className={styles.testimonials_carousel}>
          {testimonials.map((item, id) => {
            return (
              <>
                <div key={id} className={styles.testimonials_card}>
                  <h1>{item.Client_name}</h1>
                  <p>{item.testimonial}</p>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Testimonails;
