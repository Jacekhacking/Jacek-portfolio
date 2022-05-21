import React from 'react';
import styles from "./Nav.module.css"
import logo from "../UI/Images/logo.png"
const Navigation = (props) => {


    const tabs = [ 'Projects', 'Resume']

    return (


            <nav className={`${styles['primary-header']} + flex`}>
                <div className={styles.logo}>
                    <img src={logo} alt="" onClick={()=> props.handlePageChange('/')}/>
                </div>
            <ul className={`${styles['primary-navigation']} + flex`}>

                {tabs.map(tab => (
                    <li className={styles['nav-item']} key = {tab}>
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