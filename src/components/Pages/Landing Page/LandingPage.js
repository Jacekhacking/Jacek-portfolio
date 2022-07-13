import styles from "./LandingPage.module.css";
import selfie from "../../UI/Images/Selfie_large.jpeg"
import {Container} from "../../UI/Styles/Global.styles";
import {SelfieImg, AboutText} from "../../UI/Styles/LandingPage.styles";

const LandingPage = () => {

    return (
        <>
            <Container>
                <div className={`${styles['dark-div']} text-dark fs-800 uppercase ff-cursive`}>
                    <SelfieImg
                        src={selfie}
                        alt="selfie"
                    />
                    <AboutText>
                        <p>Hello!</p>
                        My name is Jacek Hacking. I am a Front-End Web Developer.
                    </AboutText>
                </div>
            </Container>
        </>
    )
}

export default LandingPage