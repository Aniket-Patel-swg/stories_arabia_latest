import styles from '../styles/AboutUs.module.css';
import Navbar from '../Components/Navbar.js';

const AboutUs = () => {
    return ( 
        <>
            <Navbar />
            <div className={styles.aboutUs}>
                <h1>We are <br /> Stories Arabia</h1>
                <hr />
            </div>
            <div className={styles.aboutus_text}>
                <p>We are Uniuqe</p>
                <section className={styles.abouttext_section}>
                    <p>
                        Crafting Compelling Stories through Innovative Digital Marketing & Dynamic Video Production. 
                        Elevate Your Brand with our Creative Excellence.
                    </p>
                    <a href="/services"><button>Our Services</button></a>  
                </section>
            </div>
        </>
     );
}
 
export default AboutUs;