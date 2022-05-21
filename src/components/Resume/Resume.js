import React from "react";
import Pdf from "../UI/Resume.pdf";
import styles from "./Resume.module.css";
const Resume = () => {
    return (
        <div>
<p className={`${styles['resume-link']}`}>

    <a
        href={Pdf}
        target="_blank"
        rel="noreferrer"
        style={{

            }}> Download resume here!</a>

</p>        </div>
    )
}
export default Resume;