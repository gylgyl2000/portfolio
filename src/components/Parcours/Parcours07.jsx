import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours07 extends Component {
    render() {
        return (
            <div id={styles["parcours07"]} className={styles.event + ' ' + styles.exp + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        2004 à 2007
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-users"></i>
                            Papa à la maison
                        </h3>
                        <div class={styles.date}>2004 à 2007</div>
                        <div class={styles.place}></div>
                    </div>
                </div>
            </div>
        )
    }
}