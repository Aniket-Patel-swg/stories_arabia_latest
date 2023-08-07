import styles from "../styles/AlternateProjects.module.css";

const AlternateProjects = () => {
  return (
    <>
      <div className={styles.alternateprojects}>
        <hr />
        <h2 className={styles.project_heading}>Our Projects</h2>
        <h3>
          We Have Worked On Several Projects Since Our Inception In March 2021.{" "}
        </h3>
        <hr />
        <div className={styles.projects}>
          <section className={styles.projects_image}>
            <img src="../Images/Projects/project1.png" alt="" />
          </section>
          <section className={styles.projects_info}>
            <h1>St Regis Dubai The Palm</h1>
            <h2>Project for Hotel in Dubai</h2>
          </section>
        </div>
        <div className={styles.projects}>
          <section className={styles.projects_image}>
            <img src="../Images/Projects/project4.png" alt="" />
          </section>
          <section className={styles.projects_info}>
            <h1>Circle Mall</h1>
            <h2>Project for famous mall in Dubai</h2>
          </section>
        </div>
        <div className={styles.projects}>
          <section className={styles.projects_image}>
            <img src="../Images/Projects/project2.png" alt="" />
          </section>
          <section className={styles.projects_info}>
            <h1>Centara CDD</h1>
            <h2>Project for Beach Resort</h2>
          </section>
        </div>
      </div>
    </>
  );
};

export default AlternateProjects;
