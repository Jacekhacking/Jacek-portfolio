import LandingPage from "./components/Landing Page/LandingPage";
import './App.css';
import React, {Fragment, useState} from "react";
import Navigation from "./components/Nav/Nav"
import AboutMe from "./components/About Me/AboutMe";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import FooterComponent from "./components/Footer/Footer"

function App() {



    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case '/':
                return ''

            case 'Resume':
                return< Resume/>

            case  'Projects':
                 return<Projects/>

            default :
                return  ''

        }
    }

    return (
        <Fragment className="App">
            <header><Navigation LandingPage currentPage={currentPage} handlePageChange = {handlePageChange}/></header>
            <main>
                <LandingPage currentPage={currentPage} handlPageChange={handlePageChange}/>
                {renderPage(currentPage)}
                <AboutMe/>
                <Projects/>
                <Resume/>
            </main>
            <FooterComponent/>


        </Fragment>
    );
}

export default App;
