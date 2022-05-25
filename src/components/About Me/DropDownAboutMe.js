import React, {Fragment} from "react";
import styles from "./DropDownAboutMe.module.css";
import GCPic from "../UI/Images/gc-rafting-picture.jpeg";
import AuriPic from "../UI/Images/AuriPic_2.jpeg";

const DropDownAboutMe = () => {
    return (
        <Fragment>

        <div className={`${styles['drop-down-container']}`}>
            <h2  className={`fs-600 ff-cursive text-light`} style={{textAlign:'center',borderBottom: '5px solid hsl(var(--clr-dark-gray))'} }>
                A Little more about me
            </h2>
<div className={'text-light'}>


<section className={'flex'}>
    <p className={styles['drop-down-paragraph']}>

        <img className={styles['drop-down-picture']} style={{float:'left'}} src={GCPic} alt=""/>
        I'm from Salt Lake City, Utah.
        I love to be outside doing fun stuff. Skiing, hiking, playing volleyball, basketball, golf
        and most recently going on white water rafting trips with my girlfriend.
        I also love to play video games and board games with my family and friends. I'm a huge dog person.
        lasdfl;kjghjda;lg jkas;lkjg as;lkjasdgk lasd asdflkafds
    </p>
</section>

<section className={'flex '}>
    <p className={styles['drop-down-paragraph']}>lasd fl;k jghjda;l gjkas;lkj gas;lk jasdgklasd asdflkafds
        lasdfl;kjghjda;l gjkas;lkjgas; lkjasdgklasd asdflkafds
        lasdfl;kjghjd a;lgjkas;lkjg as;lkja sdgklasd asdflkafds
        lasdfl;kjghj da;lgjkas;lkjgas;lkja sdgklasd asdflkafds</p>
    <img className={styles['drop-down-picture']} style={{float:'right'}} src={AuriPic} alt=""/>

</section>
</div>


        </div>
        </Fragment>
    )
}

export default DropDownAboutMe;