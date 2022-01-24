import React, { Component, } from "react";

import Navbar from "../Navbar/Navbar";
import ScrollButton from "../ScrollButton/ScrollButton";

import styles from './Parcours.module.css';
import '../../animate.css'
import Parcours01 from "./Parcours01";
import Parcours02 from "./Parcours02";
import Parcours03 from "./Parcours03";
import Parcours04 from "./Parcours04";
import Parcours05 from "./Parcours05";
import Parcours06 from "./Parcours06";
import Parcours07 from "./Parcours07";
import Parcours08 from "./Parcours08";
import Parcours09 from "./Parcours09";
import Parcours10 from "./Parcours10";
import Parcours11 from "./Parcours11";
import Parcours12 from "./Parcours12";
import Parcours13 from "./Parcours13";

export default class Parcours extends Component {
    render() {
        return (
            <>
            <div id={styles["navbar"]} className={styles.nav}>
                <Navbar />
            </div>
            <div id={styles["parcours"]}>
                <div className={styles.outerContainer}>
                    <h2 className={styles.sectionTitle}>Parcours</h2>
                    <div className="under-title"></div>
                    <div className={styles.timeline}>
                        <Parcours13 />
                        <Parcours12 />
                        <Parcours11 />
                        <Parcours10 />
                        <Parcours09 />
                        <Parcours08 />
                        <Parcours07 />
                        <Parcours06 />
                        <Parcours05 />
                        <Parcours04 />
                        <Parcours03 />
                        <Parcours02 />
                        <Parcours01 />
                    </div>
                </div>
                <ScrollButton />
            </div>
            </>
        )
    }
}