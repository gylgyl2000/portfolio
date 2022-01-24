import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours03 extends Component {
    render() {
        return (
            <div id={styles["parcours03"]} className={styles.event + ' ' + styles.work + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        1990 à 1992
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-briefcase"></i>
                                Animateur professionnel
                        </h3>
                        <div class={styles.date}>1990 à 1992</div>
                        <div class={styles.place}>Val Horizon, Trévoux (01)</div>
                        <ul>
                            <li>Animation en centres de loisirs et colonies de vacances</li>
                            <li>Direction de séjours</li>
                            <li>Gestion d'équipes</li>
                            <li>Organisation de séjours</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}