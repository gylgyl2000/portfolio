import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours02 extends Component {
    render() {
        return (
            <div id={styles["parcours02"]} className={styles.event + ' ' + styles.work + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        1989 à 1990
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-briefcase"></i>
                                Employé de bureau
                        </h3>
                        <div class={styles.date}>1989 à 1990</div>
                        <div class={styles.place}>CRIJ-DDJS, Dijon (21)</div>
                        <ul>
                            <li>Saisie informatique : traitement de texte, tableur, base de données</li>
                            <li>Réseaux informatiques : câblage, serveur, formation</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}