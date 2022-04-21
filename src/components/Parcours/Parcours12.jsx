import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours12 extends Component {
    render() {
        return (
            <div id={styles["parcours12"]} className={styles.event + ' ' + styles.dev + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        depuis 2020
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-code"></i>
                            Formation autodidacte Javascript
                        </h3>
                        <div class={styles.date}>depuis 2020</div>
                        <div class={styles.place}></div>
                        <ul>
                            <li>freeCodeCamp, IOI France, codecademy,
                                codewars, exercism, udemy</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}