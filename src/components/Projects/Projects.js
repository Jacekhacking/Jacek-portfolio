import React, {Fragment} from "react";
import styles from "./Projects.module.css"
import {projectData} from "../data";



const  Projects = () => {

let data = projectData[0]
let data2 = projectData[1]
    return (
        <Fragment>
                <h2 id={'projects'} className={`header-style ff-cursive text-dark`} style={{textAlign: 'center'}}>Projects</h2>

            <div className={`${styles['project-container']}`}>
                <div className={`${styles['project-div']} `}>
                    <h2 className={`${styles['project-header']} ff-cursive text-light`}>{data.Name}</h2>
                    <p className={`${styles['project-paragraph']} text-light`}>{data.Description} </p>
                    <a href={data.Link} target="_blank" rel="noreferrer"><img className={styles['project-image']} src={data.Image} alt="website screenshot"/></a>
                </div>
                <div className={`${styles['project-div']} `}>
                    <h2 className={`${styles['project-header']} ff-cursive text-light`}>{data2.Name}</h2>
                    <p className={`${styles['project-paragraph']} text-light`}>{data2.Description} </p>
                    <a href={'data2.Link'} target="_blank" rel="noreferrer"><img className={styles['project-image']} src={data2.Image} alt="website screenshot"/></a>
                </div>
            </div>





        </Fragment>
    )
}

export default Projects