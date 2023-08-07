import { useState } from "react";
import styles from "../styles/Footer.module.css";
import { Email, Call } from "@mui/icons-material";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import emailjs from 'emailjs-com';  

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);
  const [successfull, setSuccessFull] = useState(false);
 
  const [data, setData] = useState({
    name: "",
    email: "",
    Number: "",
    message: "",
  });

  const handleNumberChange = (e) => {
    setPhoneNumber(e); 
    setTyping(true);
  };

  console.log(typing);
  const handleSubmit = (e) => {
    // console.log()

    e.preventDefault();
    const newData = { name, email, Number, message };
    setData(newData);
    console.log(newData);

    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setTyping(false);
    setSuccessFull(true);
  };
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.flex_wrapper}>
          <section className={styles.overflow_text}>
            <span>Do you've any question for us?</span>
          </section>
        </div>
        <div className={styles.contact_flex}>
          <section className={styles.contact_info}>
            <h3>Stories Arabia</h3>
            <h2>
              We help our clients achieve <br /> their goals.
            </h2>
            <hr />
            <div className={styles.contact_details}>
              <p>
                <Email style={{ fontSize: 24, color: "gray" }} />
                <a href="mailto:info@storiesarabia.com" target="_blank">
                  info@storiesarabia.com
                </a>
              </p>
              <p>
                <Call style={{ fontSize: 24, color: "gray" }} />
                <a href="tel:+971-55-555-4836" target="_blank">
                  +971-55-555-4836
                </a>
              </p>
            </div>
          </section>
          <section className={styles.contact}>
            <form className={styles.contact_form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <PhoneInput
                placeholder="Country code first"
                value={Number}
                onChange={(e) => handleNumberChange(e)}
                className={styles.phone_input}
              />
              {/* {isValidPhoneNumber(Number) && typing ? <p style={{color: "green"}}>Valid Number</p> : typing ? <p style={{color: "red"}}>Invalid Number</p> : ""} */}
              {Number !== null &&
                (isValidPhoneNumber(String(Number)) && typing ? (
                  <p style={{ color: "green" }}>Valid Number</p>
                ) : typing ? (
                  <p style={{ color: "red" }}>Invalid Number</p>
                ) : (
                  ""
                ))}
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button type="submit" className={styles.contact_submit}> 
                Submit 
              </button>
            </form>
            {successfull ? (
              <p style={{ color: "green", marginTop : "1.5vw" }}>Message Sent Successfully</p>
            ) : (
              ""
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
