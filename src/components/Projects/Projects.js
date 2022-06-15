import React, {Fragment} from "react";
import styles from "./Projects.module.css"
import {projectData} from "../data";



const  Projects = () => {


    return (
        <Fragment>
                <h2 id={'projects'} className={`header-style ff-cursive text-dark`} style={{textAlign: 'center'}}>Projects</h2>

            <div className={`${styles['project-container']}`}>
                {projectData.map(project => (
                    <div className={`${styles['project-div']}`}>
                        <h2 className={`${styles['project-header']} ff-cursive text-light`}>{project.Name}</h2>
                        <p className={`${styles['project-paragraph']} text-light`}>{project.Description} </p>
                        <a href={project.Link}
                           target="_blank"
                           rel="noreferrer">
                            <img className={styles['project-image']}
                                 src={project.Image}
                                 alt="website screenshot"/></a>
                    </div>
                ))}
            </div>


        </Fragment>
    )
}

export default Projects