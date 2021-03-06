import React, { Component, } from "react";
import { motion } from "framer-motion";

import Navbar from "../Navbar/Navbar";

import CompetencesBack from "./CompetencesBack";
import CompetencesFront from './CompetencesFront';
import CompetencesCMS from './CompetencesCMS';
import CompetencesDesign from "./CompetencesDesign";
import CompetencesEnv from "./CompetencesEnv";
import ScrollButton from "../ScrollButton/ScrollButton";

import styles from './Competences.module.css';
import '../../animate.css'

export default class Competences extends Component {
    render() {
        return (
            <motion.div
                key="APropos"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1 }}
            >
            <div id={styles["navbar"]} className={styles.nav}>
                <Navbar />
            </div>
            <div id={styles["skills"]} className="grey">
                <div className={styles.outerContainer}>
                    <h2 className={styles.sectionTitle}>Compétences</h2>
                    <div className="under-title"></div>
                    <CompetencesFront />
                    <CompetencesBack />
                    <CompetencesCMS />
                    <CompetencesDesign />
                    <CompetencesEnv />
                </div>
                <ScrollButton />
            </div>
            </motion.div>
        )
    }
}