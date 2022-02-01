import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

import styles from './Navbar.module.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.welcomeHeader}>
                    <img className={styles.avatar} src="https://avatars2.githubusercontent.com/u/61700419?v=4" alt="" />
                    <div>
                        <p className={styles.alias}>gylgyl2000</p>
                        <p className={styles.subalias}>La loutre du sud-ouest</p>
                    </div>
                    <img className={styles.icone} src="./river-otter-silhouette.svg" alt="" />
                </div>
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
                        <li>
                            <Link to="/parcours">Parcours</Link>
                        </li>
                        <li>
                            <Link to="/projets">Projets</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Outlet />
            </div>
        )
    }
}