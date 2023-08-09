import styles from '../styles/AboutUs.module.css';
import Navbar from '../components/Navbar';

const AboutUs = () => {
    return ( 
        <>
            <Navbar />
            <div className={styles.aboutUs}>
                <h1>We're <br /> Stories Arabia</h1>
                <hr />
            </div>
            <div className={styles.aboutus_text}>
                <p>We're Uniuqe</p>
                <section className={styles.abouttext_section}>
                    <p>
                        Crafting Compelling Stories through Innovative Digital Marketing & Dynamic Video Production. 
                        Elevate Your Brand with Stories Arabia's Creative Excellence.
                    </p>
                    <a href="/services"><button>Our Services</button></a>  
                </section>
            </div>
        </>
     );
}
 
export default AboutUs;