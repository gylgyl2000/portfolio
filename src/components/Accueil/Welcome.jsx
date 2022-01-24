import React, { Component } from "react";
import CompetencesIcones from './CompetencesIcones';

import styles from './Welcome.module.css';

export default class Welcome extends Component {
    render() {
        return (
            <div id="welcome-section" className={styles.pageHeader} filter-color="green">
                <div className={styles.pageHeaderImage} data-parallax="true"></div>
                <div className={styles.container}>
                    <div className={styles.welcomeSection}>
                        {/* <div className={styles.welcomeHeader}>
                            <img className={styles.avatar} src="https://avatars2.githubusercontent.com/u/61700419?v=4" alt="" />
                            <div>
                                <p className={styles.alias}>gylgyl2000</p>
                                <p className={styles.subalias}>La loutre du sud-ouest</p>
                            </div>
                            <img className={styles.icone} src="./river-otter-silhouette.svg" alt="" />
                        </div> */}
                        <img className={styles.icone} src="./bitmoji.png" alt="" />
                        <p className={styles.suptitleHey}>Salut ! 👋</p>
                        <p className={styles.suptitle}>Je m'appelle <span>Gilles</span> et je suis</p>
                        <h1 className={styles.title}>Développeur web full-stack</h1>
                        {/* <p className={styles.welcomeIcones}><i className="fab fa-css3-alt"></i> <i className="fab fa-html5"></i> <i className="fab fa-js-square"></i></p>
                        <p className={styles.subtitle}>Bienvenue sur mon portfolio !</p> */}
                        <CompetencesIcones />
                    </div>
                </div>
            </div>
        )
    }
}