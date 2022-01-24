import React, { Component, } from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import styles from './Projets.module.css';

import Navbar from "../Navbar/Navbar";
import ScrollButton from "../ScrollButton/ScrollButton";

import ProjetsCWA from "./ProjetsCWA";
import ProjetsBFE from "./ProjetsBFE";
import ProjetsVDD from "./ProjetsVDD";
import ProjetsDBE from "./ProjetsDBE";

export default class Projets extends Component {
    render() {
        return (
            <>
            <div id={styles["navbar"]} className={styles.nav}>
                <Navbar />
            </div>

                <div id={styles["projets"]} className="projects-section">
                    <h2 className={styles.sectionTitle}>Quelques-uns de mes projets</h2>
                    <Tabs defaultActiveKey="profile" id="noanim-tab-example" className={styles.tabs + ' mb-3'}>
                        <Tab eventKey="profile" title="Conception Web adaptative">
                            <ProjetsCWA />
                        </Tab>
                        <Tab eventKey="home" title="Bibliothèques front-end">
                            <ProjetsBFE />
                        </Tab>
                        <Tab eventKey="contact" title="Visualisation de données">
                            <ProjetsVDD />
                        </Tab>
                        <Tab eventKey="DBE" title="Développement back-end et API">
                            <ProjetsDBE />
                        </Tab>
                    </Tabs>
                </div>
            

            <ScrollButton />
            </>
        )
    }
}