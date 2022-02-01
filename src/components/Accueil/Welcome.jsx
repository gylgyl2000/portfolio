import React, { Component } from "react";
import CompetencesIcones from './CompetencesIcones';
import TechnosIcones from "./TechnosIcones";

import styles from './Welcome.module.css';

export default class Welcome extends Component {
    render() {
        return (
            <div id="welcome-section" className={styles.pageHeader} filter-color="green">
                <div className={styles.pageHeaderImage} data-parallax="true"></div>
                <div className={styles.container}>
                    <div className={styles.welcomeSection}>
                        <img className={styles.icone} src="./bitmoji.png" alt="" />
                        <p className={styles.suptitleHey}>Salut ! 👋</p>
                        <p className={styles.suptitle}>Je m'appelle <span>Gilles</span> et je suis</p>
                        <h1 className={styles.title}>Développeur web full-stack</h1>
                        <CompetencesIcones />
                        <TechnosIcones />
                    </div>
                </div>
            </div>
        )
    }
}