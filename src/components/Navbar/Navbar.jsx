import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import styles from './Navbar.module.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div id="navigation" className={'collapse ' + styles.navbarCollapse}>
                    <ul className={styles.navList}>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/apropos">À propos</Link>
                        </li>
                        <li>
                            <Link to="/competences">Compétences</Link>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div>
        )
    }
}