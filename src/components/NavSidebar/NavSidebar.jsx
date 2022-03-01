import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from './NavSidebar.module.css'

export default class NavSidebar extends Component {
    render() {
        return (
            <div className={styles.navSidebar}>
                <div id="navigation" className={styles.navbar}>
                    <ul className={styles.navList}>
                        <li>
                            <Link to="/apropos"><i className={styles.faSolid + ' ' + styles.mobile +  ' fa-solid fa-angle-right'}></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}