import LandingPage from "./components/Pages/Landing Page/LandingPage";
import GlobalStyles from "./components/UI/Styles/Global.styles";
import Navigation from "./components/Pages/Nav/Nav"
import AboutMe from "./components/Pages/About Me/AboutMe";
import Projects from "./components/Pages/Projects";
import Resume from "./components/Pages/Resume";
import FooterComponent from "./components/Pages/Footer/Footer"

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
