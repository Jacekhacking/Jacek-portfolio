import React, {Fragment} from "react";
import styles from "./Projects.module.css"
const  Projects = () => {
    return (
        <Fragment>
                <h2>Projects</h2>
                <div>
                    <p>
                        Below you will find a small sample of my work. <section>Github Account if you want to see more.</section>
                    </p>
                </div>



            <div className={`${styles['project-container']}`}>

                <div className={`${styles['project-div']}`}>
                    <h2 className={`${styles['project-header']}`}>Project Name</h2>
                    <p className={`${styles['project-paragraph']}`}>description of project   </p>
                    <img src="#" alt="website screenshot"/>
                </div>

                <div className={`${styles['project-div']}`}>
                    <h2 className={`${styles['project-header']}`}>Project Name</h2>
                    <p className={`${styles['project-paragraph']}`}>description of project   </p>
                    <img src="#" alt="website screenshot"/>
                </div>

                <div className={`${styles['project-div']}`}>
                    <h2 className={`${styles['project-header']}`}>Project Name</h2>
                    <p className={`${styles['project-paragraph']}`}>description of project   </p>
                    <img src="#" alt="website screenshot"/>
                    <p>visit site</p>
                </div>

            </div>


        </Fragment>
    )
}

export default Projects