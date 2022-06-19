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
        <section className={' flex'}>
            <p className={styles['drop-down-paragraph-top']}>



                <p  >
                    <img className={styles['drop-down-picture']} style={{float:'left'}}  src={GCPic} alt=""/>
                    I'm from Salt Lake City, Utah.
                    I love to be outside. Skiing, hiking, playing volleyball, basketball, golf, rock climbing,
                    and most recently going on white water rafting trips with my girlfriend.
                    I also love to play video games and board games with my family and friends.
                </p>
            </p>
        </section>

        <section className={'flex'}>
            <div className={styles['drop-down-paragraph-bottom']}>

                <p >
                    <img className={styles['drop-down-picture']}
                         src={AuriPic} alt=""
                         style={{float:'right'}}
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur cupiditate
                        distinctio dolorem eaque earum fugit hic illo impedit labore laudantium nisi nostrum officia,
                        pariatur placeat porro quam reiciendis repudiandae!
                    </p>


                </p>
               </div>
        </section>
    </div>
</div>
        </div>
        </Fragment>
    )
}

export default DropDownAboutMe;