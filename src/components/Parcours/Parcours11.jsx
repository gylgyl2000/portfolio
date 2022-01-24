import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours11 extends Component {
    render() {
        return (
            <div id={styles["parcours11"]} className={styles.event + ' ' + styles.dev + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        2020
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-code"></i>
                            Formation développeur web et web mobile
                        </h3>
                        <div class={styles.date}>2020</div>
                        <div class={styles.place}>Wild Code School, Biarritz (64)</div>
                        <ul>
                            <li>Développement backend et frontend de sites et applications web.</li>
                            <li>Compréhension des besoins utilisateurs et création d’un cahier des charges.</li>
                            <li>Orchestration du déploiement d’applications via des outils de déploiement continu.</li>
                            <li>Maintenance, correctif de bugs et amélioration des sites ou applications web.</li>
                            <li>Excellente gestion du temps, respect scrupuleux des délais.</li>
                            <li>Adaptabilité, capacité à travailler sur des sujets/univers divers.</li>
                            <li>Maîtrise de toutes les étapes du développement d’un site ou d’une application web.</li>
                            <li>Créativité et prise d’initiative : développement d’un intranet pour 20+ employés.</li>
                            <li>Formé à la méthodologie agile.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}