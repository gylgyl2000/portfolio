import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours10 extends Component {
    render() {
        return (
            <div id={styles["parcours10"]} className={styles.event + ' ' + styles.work + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        2010 à 2019
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-briefcase"></i>
                                Développeur web et webmestre<br />
                                Formateur professionnel animation
                        </h3>
                        <div class={styles.date}>2010 à 2019</div>
                        <div class={styles.place}>CEMÉA, Bordeaux (33)</div>
                        <ul>
                            <li>Chargé de mission numérique et communication</li>
                            <li>Webmestre</li>
                            <li>Administrateur systèmes et réseaux informatiques</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}