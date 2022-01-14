import React, { Component } from "react";

import styles from './CompetencesIcones.module.css';

export default class CompetencesIcones extends Component {
    render() {
        return (
            <div className={styles.competencesIcons}>                    
                <div className={styles.item}>
                    <i className={styles.fas + ' ' + styles.code + ' fas fa-code'}></i>
                    front-end
                </div>
                <div className={styles.item}>
                    <i className={styles.fas + ' ' + styles.database + ' fas fa-database'}></i>
                    back-end
                </div>
                <div className={styles.item}>
                    <i className={styles.fas + ' ' + styles.mobile +  ' fas fa-mobile-alt'}></i>
                    mobile
                </div>
                <div className={styles.item}>
                    <i className={styles.fas + ' ' + styles.pencil + ' fas fa-pencil-ruler'}></i>
                    web-design
                </div>
            </div>
        )
    }
}