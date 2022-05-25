import React from "react";
import styles from "./DropDownAboutMe.module.css";
import GCPic from "../UI/Images/gc-rafting-picture.jpeg";
import AuriPic from "../UI/Images/Auri.jpeg";

const DropDownAboutMe = () => {
    return (
        <div className={styles['drop-down-container']}>
            <section className={`fs-500 ff-cursive text-dark`} style={{textAlign:'center'} }>
                hello!
            </section>
            <p>
                <img className={styles['drop-down-picture']} style={{float:'left'}} src={GCPic} alt=""/>
                My name is Jacek Hacking 28 years old. I'm from Salt Lake City, Utah.
                I love to be outside doing fun stuff. Skiing, hiking, playing volleyball, basketball, golf
                and most recently going on white water rafting trips with my girlfriend.
                I also love to play video games and board games with my family and friends. I'm a huge dog person.
                lasdfl;kjghjda;lg jkas;lkjg as;lkjasdgk lasd asdflkafds
                lasd fl;k jghjda;l gjkas;lkj gas;lk jasdgklasd asdflkafds
                lasdfl;kjghjda;l gjkas;lkjgas; lkjasdgklasd asdflkafds
                <img className={styles['drop-down-picture']} style={{float:'right'}} src={AuriPic} alt=""/>
                lasdfl;kjghjd a;lgjkas;lkjg as;lkja sdgklasd asdflkafds
                lasdfl;kjghj da;lgjkas;lkjgas;lkja sdgklasd asdflkafds
            </p>
        </div>
    )
}

export default DropDownAboutMe;