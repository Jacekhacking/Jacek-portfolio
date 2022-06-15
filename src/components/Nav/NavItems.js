import React, {useState} from "react";
import styles from "./Nav.module.css"


const NavItems = () => {

    const tabs = [ 'Projects', 'Resume', 'About', 'Skills'];



    const [navVisibility, setNavVisibility] = useState(false);



    const renderNavDropdown = () => {
        setNavVisibility(current=> !current);
    }

    return (
        <div className={styles['nav-responsive-container']}>
            <button onClick={renderNavDropdown}  className={styles['toggle-dropdown']}> {navVisibility=== false? 'dropdown' :'hide'}</button>
            <ul className={`${styles['primary-navigation']} + flex`}
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
        </div>
    )
}
export default NavItems;