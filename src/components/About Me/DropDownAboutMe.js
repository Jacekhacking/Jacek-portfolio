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

    <div className={'flex wrap'}>
        <section className={' flex wrap'}>
            <p className={styles['drop-down-paragraph-top']}>

                <img className={styles['drop-down-picture']}  src={GCPic} alt=""/>
                I'm from Salt Lake City, Utah.
                I love to be outside. Skiing, hiking, playing volleyball, basketball, golf, rock climbing,
                and most recently going on white water rafting trips with my girlfriend.
                I also love to play video games and board games with my family and friends. I'm a very competitive person and I'm a dog person.
                I raised and trained a deaf puppy which is hands down the hardest thing I've ever done.
            </p>
        </section>

        <section className={'flex wrap'}>
            <div className={styles['drop-down-paragraph-bottom']}><img className={styles['drop-down-picture']}  src={AuriPic} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, iste, repellat. Aspernatur,
                    cumque ducimus eius eum fugiat laboriosam nam nemo odio officiis vitae! Debitis eaque laborum
                    necessitatibus porro temporibus velit.</p></div>
        </section>
    </div>
</div>
        </div>
        </Fragment>
    )
}

export default DropDownAboutMe;