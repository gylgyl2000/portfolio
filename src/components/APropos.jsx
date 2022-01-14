import React, { Component } from "react";
import Navbar from "./Navbar";
import Contact from './Contact';

import styles from './APropos.module.css';

export default class APropos extends Component {
    render() {
        return (
            <div className={styles.apropos}>
                <div id={styles["navbar"]} className={styles.nav}>
                    <Navbar />
                </div>
                <div className={styles.spaceBetween}>
                    <div className={styles.item + ' ' + styles.box1}>
                        <div className={styles.imgContainer}>
                            <img src="graffiti.jpg" width="100%" alt="Gilles au format graffiti"/>
                            <img src="profil.jpg" className={styles.imgOverlay} width="100%" alt="Gilles au format profil"/>
                        </div>
                        <p><b>Nom :</b> Gilles CHASSIGNET<br />
                            <b>Age :</b> 53 ans<br />
                            <b>Ville actuelle :</b> Saint-Jean-de-Luz (64)<br />
                            <b>Hobbies :</b> jeux-vidéo, cuisine, arts créatifs, web-design</p>
                    </div>
                    <div className={styles.item + ' ' + styles.box2}>
                        <div className={styles.imgContainer + ' ' + styles.box3}>
                            <img src="graffiti.jpg" width="100%" alt="Gilles au format graffiti" />
                            <img src="profil.jpg" className={styles.imgOverlay} width="100%" alt="Gilles au format profil" />
                        </div>

                        <h2>À propos de moi</h2>

                        <div className={styles.aboutList + ' ' + styles.box3}>
                            <b>Nom :</b> Gilles CHASSIGNET<br />
                            <b>Age :</b> 53 ans<br />
                            <b>Ville actuelle :</b> Saint-Jean-de-Luz (64)<br />
                            <b>Hobbies :</b> jeux-vidéo, cuisine, arts créatifs, web-design<p></p>
                        </div>

                        <p>Développeur web front et back-end, initié à la méthodologie Agile et rompu
                            au télétravail, avec de l’expérience dans le milieu associatif.</p>
                        <p>Mordu d’informatique, j’ai appris à coder dès mon plus jeune âge dans divers
                            langages informatiques (Python, Javascript, PHP...).</p>
                        <p>J'ai créé des dizaines de projets professionnels et personnels.</p>
                        <p>Polyvalent, je maîtrise les différentes étapes techniques de la création d’un
                            site ou d’une application web ; de la compréhension des besoins utilisateurs,
                            au développement front-end et back-end en passant par la maintenance.</p>
                    </div>
                </div>
                <Contact />
                <div className={styles.buttonsContainer}>
                    <a href="#contact"><button className={styles.cont}>
                        Me contacter
                    </button></a>
                    <button className={styles.cv} type="submit" onclick="window.open('files/CV.pdf')">
                        Télécharger mon CV
                    </button>
                </div>
            </div>
        )
    }
}