import React, {Fragment} from "react";
import styles from "./Projects.module.css"
const  Projects = () => {
    return (
        <Fragment>
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