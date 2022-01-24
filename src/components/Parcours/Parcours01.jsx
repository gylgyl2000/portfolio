import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours01 extends Component {
    render() {
        return (
            <div id={styles["parcours01"]} className={styles.event + ' ' + styles.school + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        1985 à 1988
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-graduation-cap"></i>
                                Diplôme : BACCALAURÉAT PROFESSIONNEL (niv. IV)
                        </h3>
                        <div class={styles.date}>1988</div>
                        <div class={styles.place}>Lycée professionnel, Dijon (21)</div>
                        <ul>
                            <li>Maintenance des systèmes mécaniques automatisés (MSMA)</li>
                        </ul>
                        <h3>
                            <i class="fas fa-graduation-cap"></i>
                                Mention complémentaire au BEP
                        </h3>
                        <div class={styles.date}>1986</div>
                        <div class={styles.place}>Lycée professionnel, Dijon (21)</div>
                        <ul>
                            <li>Maintenance et Automatisation des Équipements Industriels</li>
                        </ul>
                        <h3>
                            <i class="fas fa-graduation-cap"></i>
                                Diplôme : BEP (niv. III)
                        </h3>
                        <div class={styles.date}>1985</div>
                        <div class={styles.place}>Lycée professionnel, Dijon (21)</div>
                        <ul>
                            <li>Électrotechnique</li>
                        </ul>
                        <h3>
                            <i class="fas fa-graduation-cap"></i>
                                Diplôme : CAP (niv. III)
                        </h3>
                        <div class={styles.date}>1985</div>
                        <div class={styles.place}>Lycée professionnel, Dijon (21)</div>
                        <ul>
                            <li>Électromécanique</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}