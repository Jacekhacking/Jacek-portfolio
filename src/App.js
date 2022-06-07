import LandingPage from "./components/Landing Page/LandingPage";
import './App.css';
import React, {Fragment} from "react";
import Navigation from "./components/Nav/Nav"
import AboutMe from "./components/About Me/AboutMe";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import FooterComponent from "./components/Footer/Footer"

function App() {





    return (
        <Fragment className="App">
            <header><Navigation /></header>
            <main>
                <LandingPage />
                <AboutMe/>
                <Projects/>
                <Resume/>
            </main>
            <FooterComponent/>
        </Fragment>
    );
}

export default App;
