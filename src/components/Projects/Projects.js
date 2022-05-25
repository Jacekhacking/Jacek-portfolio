import React, {Fragment} from "react";
import styles from "./Projects.module.css"
import {projectData} from "../data";



const  Projects = () => {

let data = projectData[0]

    return (
        <Fragment>
                <h2 className={`fs-700 ff-cursive text-dark`} style={{textAlign: 'center'}}>Projects</h2>




            <div className={`${styles['project-container']}`}>

                <div className={`${styles['project-div']} `}>
                    <h2 className={`${styles['project-header']} ff-cursive text-light`}>{data.Name}</h2>
                    <p className={`${styles['project-paragraph']} text-light`}>{data.Description} </p>
                    <a href={data.Link} target="_blank" rel="noreferrer"><img className={styles['project-image']} src={data.Image} alt="website screenshot"/></a>
                </div>


            </div>


        </Fragment>
    )
}

export default Projects