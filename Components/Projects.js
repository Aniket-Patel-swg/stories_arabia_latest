import styles from "../styles/Projects.module.css";

const Projects = () => {
    const data = [
        {
            name: "Soft launch for Souk Al Marfa",
            id: "1",
        },
        {
            name: "Circle Mall",
            id: "2",
        },
        {
            name: "Centara CDD",
            id: "3",
        },
        {
            name: "St Regis Dubai The Palm",
            id: "4",
        },
        {
            name: "Discovery Garden",
            id: "5",
        },
        {
            name: "Golden Mile 3",
            id: "6",
        },
        {
            name: "Jebel Ali Village",
            id: "7",
        },
        {
            name: "Souk warsan",
            id: "8",
        },
        {
            name: "International City",
            id: "9",
        },
    ];
    return (
        <>
            <div className={styles.projects_section}>
                <div className={styles.projects}>
                    <hr />
                    <h1>Our Projects</h1>
                    <h2>
                        We Have Covered Photoshoots Across Various Communities Including All
                        Their Amenities Spanning Dubai
                    </h2>
                </div>
                <div className={styles.project_lists}>
                    {data.map((item) => {
                        return (
                            <>
                                <div className={styles.project_name}>
                                    <p>{item.id}</p>
                                    <h1>{item.name}</h1>
                                    <a href="/">Explore More</a>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;
