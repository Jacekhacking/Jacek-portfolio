
import GCPic from "../../UI/Images/gc-rafting-picture.jpeg";
import AuriPic from "../../UI/Images/AuriPic_2.jpeg";
import {
    DropDownContainer,
    DropDownPicture,
    TopParagraphDiv,
    BottomParagraphDiv,
    DropDownText
} from "../../UI/Styles/AboutMe.styles";

const DropDownAboutMe = () => {
    return (
        <>
            <DropDownContainer>
                <h2 className={`fs-700 ff-cursive text-light`}
                    style={{textAlign: 'center', borderBottom: '5px solid hsl(var(--clr-dark-gray))'}}>
                    A Little more about me
                </h2>
                <div className={'flex wrap'}>
                    <section className={' flex'}>
                        <TopParagraphDiv>
                            <DropDownText>
                                <DropDownPicture
                                    style={{float: 'left'}}
                                    src={GCPic}
                                    alt="Me in the Grand Canyon"/>
                                I'm from Salt Lake City, Utah.
                                I love to be outside. Skiing, hiking, playing volleyball, basketball, golf, rock
                                climbing,
                                and most recently going on white water rafting trips with my girlfriend.
                                I also love to play video games and board games with my family and friends.
                            </DropDownText>
                        </TopParagraphDiv>
                    </section>

                    <section className={'flex'}>
                        <BottomParagraphDiv>
                            <DropDownText>
                                <DropDownPicture
                                    style={{float: 'right'}}
                                    src={AuriPic}
                                    alt="My Cute Dog Auri"
                                />
                                <h2>Fun Facts!</h2>
                                My favorite genre of books is fantasy <span className={'text-brown'}>|</span>
                                I have a licence to practice massage therapy in the state of Utah <span
                                className={'text-brown'}>|</span>
                                My favorite childhood video game was Pokémon Puzzle <span
                                className={'text-brown'}>|</span>
                                Favorite food is Sushi <span className={'text-brown'}>|</span>
                                Favorite book series is the Wheel of Time <span className={'text-brown'}>|</span>
                                Grew up on Blizzard games like WoW and D2
                            </DropDownText>
                        </BottomParagraphDiv>
                    </section>
                </div>
            </DropDownContainer>
        </>
    )
}

export default DropDownAboutMe;