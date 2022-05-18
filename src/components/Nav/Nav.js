import React from 'react';
import styles from "./Nav.module.css"

const Navigation = (props) => {


    const tabs = [ 'Projects', 'Resume']

    return (


            <nav className={`${styles.primaryHeader} + flex`}>
                <div className={styles.logo}>
                    <p onClick={()=> props.handlePageChange('/')}>logo</p>
                </div>
            <ul className={`${styles.primaryNavigation} + flex`}>

                {tabs.map(tab => (
                    <li className={styles.navItem} key = {tab}>
                        <a href={'#' + tab.toLocaleLowerCase()}

                            onClick={() => props.handlePageChange(tab)}
                            className={
                            props.currentPage === tab ? 'nav-link active' : 'nav-link'
                           }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
            </nav>

    )
}
export default Navigation;