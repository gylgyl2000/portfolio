import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours04 extends Component {
    render() {
        return (
            <div id={styles["parcours04"]} className={styles.event + ' ' + styles.work + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        1992 à 1996
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-briefcase"></i>
                                Technicien-Réparateur petit électroménager
                        </h3>
                        <div class={styles.date}>1992 à 1996</div>
                        <div class={styles.place}>Réparation Service, Toulouse (31)<br />
                            CREE, Lyon (69)</div>
                        <ul>
                            <li>Travail d'équipe en atelier</li>
                            <li>Relations clients, fournisseurs, marques</li>
                            <li>Commande, gestion, réception</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}