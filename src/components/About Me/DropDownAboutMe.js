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
                    <p>
                        <h2>Fun Facts!</h2>
                        My favorite genre of books is fantasy <span className={'text-brown'}>|</span>
                        I have a licence to practice massage therapy in the state of Utah <span className={'text-brown'}>|</span>
                        My favorite childhood video game was Pokémon Puzzle <span className={'text-brown'}>|</span>
                        Favorite food is Sushi <span className={'text-brown'}>|</span>
                        Favorite book series is the Wheel of Time <span className={'text-brown'}>|</span>
                        Grew up on Blizzard games like WoW and D2
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