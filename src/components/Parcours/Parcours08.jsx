import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours08 extends Component {
    render() {
        return (
            <div id={styles["parcours08"]} className={styles.event + ' ' + styles.work + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        2007 à 2009
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-briefcase"></i>
                                Développeur web
                        </h3>
                        <div class={styles.date}>2007 à 2009</div>
                        <div class={styles.place}>CEMÉA, Paris (75)</div>
                        <ul>
                            <li>Chargé d'études outils numériques</li>
                            <li>Webmestre</li>
                            <li>Création de ressources documentaires numériques</li>
                            <li>Numérisation</li>
                            <li>Traitement de l'image</li>
                            <li>Développement application</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}