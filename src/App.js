import LandingPage from "./components/Landing Page/LandingPage";
import './App.css';
import React, {Fragment, useState} from "react";
import Navigation from "./components/Nav/Nav"
import AboutMe from "./components/About Me/AboutMe";

function App() {


    const [currentPage, handlePageChange] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            default :
                return <LandingPage currentPage={currentPage} handlPageChange={handlePageChange}/>

        }
    }

    return (
        <Fragment className="App">
            <header><Navigation/></header>
            <main>
                {renderPage(currentPage)}
                <AboutMe/>
            </main>


        </Fragment>
    );
}

export default App;
