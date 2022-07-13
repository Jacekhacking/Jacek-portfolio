
import selfie from "../UI/Images/Selfie_large.jpeg"
import {Container, FlexContainer} from "../UI/Styles/Global.styles";
import {SelfieImg, AboutText, LandingPageContainer} from "../UI/Styles/LandingPage.styles";

const LandingPage = () => {

    return (
        <>
                <LandingPageContainer>
                    <div>
                        <SelfieImg
                            src={selfie}
                            alt="selfie"
                        />
                    </div>

                        <AboutText>
                            <p>
                                Hello!
                            </p>
                             My name is Jacek Hacking. I am a Front-End Web Developer
                        </AboutText>

                </LandingPageContainer>
        </>
    )
}
export default LandingPage