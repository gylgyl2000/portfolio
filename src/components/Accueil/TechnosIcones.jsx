import React, { Component } from "react";

import styles from './TechnosIcones.module.css';

export default class TechnosIcones extends Component {
    render() {
        return (
            <div className={styles.technosIcones}>                    
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="CSS3" src="icons/CSS3.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="HTML5" src="icons/HTML5.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="JavaScript" src="icons/JavaScript.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="babel" src="icons/babel.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="NodeJS" src="icons/NodeJS.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="react" src="icons/react.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="redux" src="icons/redux.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="vuejs" src="icons/vuejs.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="jquery" src="icons/jquery.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="sass" src="icons/sass.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="bootstrap" src="icons/bootstrap.svg" />
                </div>
                <div className={styles.item}>
                    <img className={styles.technosImg} alt="git" src="icons/git.svg" />
                </div>
            </div>
        )
    }
}