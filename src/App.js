import LandingPage from "./components/Landing Page/LandingPage";
import GlobalStyles from "./components/UI/Styles/Global.styles";
import Navigation from "./components/Nav/Nav"
import AboutMe from "./components/About Me/AboutMe";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import FooterComponent from "./components/Footer/Footer"

function App() {





    return (
        <>
            <GlobalStyles/>
            <header><Navigation /></header>
            <main>
                <LandingPage />
                <AboutMe/>
                <Projects/>
                <Resume/>
            </main>
            <FooterComponent/>
        </>
    );
}

export default App;
