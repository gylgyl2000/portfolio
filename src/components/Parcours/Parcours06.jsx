import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours06 extends Component {
    render() {
        return (
            <div id={styles["parcours06"]} className={styles.event + ' ' + styles.work + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        1999 à 2003
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-briefcase"></i>
                                Responsable de formations
                        </h3>
                        <div class={styles.date}>1999 à 2003</div>
                        <div class={styles.place}>CEMÉA, Toulouse (31)</div>
                        <ul>
                            <li>Projet</li>
                            <li>Équipe</li>
                            <li>Gestion de groupes</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}