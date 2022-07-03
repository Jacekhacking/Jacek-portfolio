import React from "react";
import Pdf from "../UI/Jacek's Portfolio Resume.pdf";
import styles from "./Resume.module.css";
const Resume = () => {
    return (
        <div className={'bg-blue-grey flex'} style={{justifyContent:'center', alignItems:'center'}}>
<p
    id={'resume'}
    className={`${styles['resume-link']} flex`}>

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