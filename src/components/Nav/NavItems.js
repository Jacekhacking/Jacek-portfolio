import React, {Fragment, useState} from "react";
import styles from "./Nav.module.css";
import hamburger from "../UI/Images/hamburger.png"


const NavItems = () => {

    const tabs = [ 'Projects', 'Resume', 'About', 'Skills'];



    const [navVisibility, setNavVisibility] = useState(false);



    const renderNavDropdown = () => {
        setNavVisibility(current=> !current);
    }

    return (
        <Fragment >

            <button
                onClick={renderNavDropdown}
                className={styles['toggle-dropdown']}>
                {navVisibility=== false?  'hide' :<img style={{height: '30px', width:'50px'}} src={hamburger} alt=""/> }
            </button>

            <ul className={`${styles['primary-navigation']}`}
                style={{
                    visibility: navVisibility ? "hidden" : "visible"
                }}>
                {tabs.map(tab => (
                    <li className={styles['nav-item']} key = {tab}>
                        <a href={'#' + tab.toLocaleLowerCase()}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}
export default NavItems;