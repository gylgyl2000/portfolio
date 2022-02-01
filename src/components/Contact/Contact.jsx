import React, { Component } from "react";
import { motion } from "framer-motion";

import Navbar from "../Navbar/Navbar";
import ContactIcons from './ContactIcons';

import styles from './Contact.module.css';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
}

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

export default class Contact extends Component {
    render() {
        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
            <div className={styles.contact}>
                <div id={styles["navbar"]} className={styles.nav}>
                    <Navbar />
                </div>
                <div id={styles["contact"]} className="">
                    <div className={styles.outerContainer}>
                        <h2 className={styles.sectionTitle}>Contactez-moi !</h2>
                        <div className="under-title"></div>
                        <div className={styles.contactSubtitle}>
                            Je suis intéressé par les postes de :<br />
                            <div className="jobs">
                                <b>Développeur full-stack • Développeur front-end • Intégrateur web</b>
                            </div>
                        </div>
                        <ContactIcons />
                        <div className={styles.spaceBetween}>
                            <div className={styles.item + ' ' + styles.contactBox + ' ' + styles.phone}>
                                <i className="fas fa-mobile-alt"></i>
                                <div className={styles.text}>+33 6 87 53 88 01</div>
                            </div>
                            <div className={styles.item + ' ' + styles.contactBox + ' ' + styles.email}>
                                <i className="fas fa-paper-plane"></i>
                                <div className={styles.text}>gilles.chassignet@pm.me</div>
                            </div>
                            <div className={styles.item + ' ' + styles.contactBox + ' ' + styles.meet}>
                                <div className={styles.text}>Vous souhaitez<br /> me rencontrer ?</div>
                                <p>Je suis disponible à<br /> <b>Saint-Jean-de-Luz</b> et ses alentours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div>
        )
    }
}