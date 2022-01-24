import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours09 extends Component {
    render() {
        return (
            <div id={styles["parcours09"]} className={styles.event + ' ' + styles.dev + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        depuis 2010
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-code"></i>
                            Formation autodidacte PHP, Wordpress, SQL
                        </h3>
                        <div class={styles.date}>depuis 2010</div>
                        <div class={styles.place}></div>
                        <ul>
                            <li>Création de sites</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}