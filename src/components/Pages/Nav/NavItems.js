import {useState} from "react";
import styles from "./Nav.module.css";
import hamburger from "../../UI/Images/hamburger.png"
import Pdf from "../../UI/Jacek\'s Portfolio Resume.pdf";

const NavItems = () => {

    const tabs = ['Projects', 'About', 'Skills'];
    const [navVisibility, setNavVisibility] = useState(false);

    const renderNavDropdown = () => {
        setNavVisibility(current => !current);
    }

    return (
        < >
            <button
                onClick={renderNavDropdown}
                className={styles['toggle-dropdown']}>
                {navVisibility === false ? 'hide' :
                    <img style={{height: '30px', width: '50px'}} src={hamburger} alt=""/>}
            </button>

            <ul className={`${styles['primary-navigation']}`}
                style={{
                    visibility: navVisibility ? "hidden" : "visible"
                }}>
                {tabs.map(tab => (
                    <li className={`${styles['nav-item']} ff-cursive`} key={tab}>
                        <a href={'#' + tab.toLocaleLowerCase()}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
                <li className={`${styles['nav-item']} ff-cursive`}
                    style={{
                        visibility: navVisibility ? "hidden" : "visible"
                    }}>

                    <a
                        href={Pdf}
                        target="_blank"
                        rel="noreferrer"
                        style={{}}> Resume</a>
                </li>
            </ul>
        </>
    )
}
export default NavItems;