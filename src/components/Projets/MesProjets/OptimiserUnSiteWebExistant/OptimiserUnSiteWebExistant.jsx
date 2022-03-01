import React, { Component } from "react";
import { motion } from "framer-motion";

import Navbar from "../../../Navbar/Navbar";

import styles from '../../Projets.module.css';

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

export default class OptimiserUnSiteWebExistant extends Component {
    render() {
        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div id={styles["navbar"]} className={styles.nav}>
                    <Navbar />
                </div>
                <div className={styles.OptimiserUnSiteWebExistant}>
                    <iframe title="Embeds Page" className="" src="https://gylgyl2000.github.io/GillesChassignet_4_01072021/" allowfullscreen></iframe>
                </div>
            </motion.div>
        )
    }
}