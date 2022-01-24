import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
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
                            <img src="bitmoji-profil.png" width="100%" alt="Gilles au format graffiti"/>
                            <img src="profil.jpg" className={styles.imgOverlay} width="100%" alt="Gilles au format profil"/>
                        </div>
                        <p><b>Nom :</b> Gilles CHASSIGNET<br />
                            <b>Age :</b> 53 ans<br />
                            <b>Ville actuelle :</b> Saint-Jean-de-Luz (64)<br />
                            <b>Hobbies : </b>jeux-vidéo, randonnées dans les Pyrénées, cuisine en plein air, cabanes en forêt,
                            arts créatifs, web-design</p>
                    </div>
                    <div className={styles.item + ' ' + styles.box2}>
                        <div className={styles.imgContainer + ' ' + styles.box3}>
                            <img src="graffiti.jpg" width="100%" alt="Gilles au format graffiti" />
                            <img src="profil.jpg" className={styles.imgOverlay} width="100%" alt="Gilles au format profil" />
                        </div>
                        <div className={styles.aboutList + ' ' + styles.box3}>
                            <b>Nom :</b> Gilles CHASSIGNET<br />
                            <b>Age :</b> 53 ans<br />
                            <b>Ville actuelle :</b> Saint-Jean-de-Luz (64)<br />
                            <b>Hobbies : </b>jeux-vidéo, randonnées dans les Pyrénées, cuisine en plein air, cabanes en forêt, arts créatifs, web-design
                        </div>
                        <h2>À propos de moi</h2>
                        <div class="under-title"></div>
                        <p>Développeur web front et back-end, je recherche un emploi après avoir passé 6 mois en formation à distance.
                            Cette expérience m’a apporté autonomie et confiance, malgré la reconversion professionnelle. J’ai ainsi pu
                            renforcer ce que j’ai appris lors de mon expérience passée, et étoffer mon panel de compétences.</p>
                        <p>Après une longue pratique de PHP avec Wordpress, je profite du temps dont je dispose pour continuer d’apprendre
                            de nouvelles technologies et enrichir mes connaissances en développement web, notamment avec javascript.</p>
                        <p>Après plusieurs dizaines d'années comme formateur professionnel, j’ai choisi de me reconvertir dans le métier
                            de développeur web. Touche à tout, je m’intéresse également au web design et aux arts graphiques en général,
                            ce qui me permet d’aborder le développement front-end avec sérénité, même lorsque je ne dispose pas de maquette
                            ou de directives précises.</p>
                        <p>Autonome de nature, je peux travailler seul ou en groupe, étant également capable de m’adapter à un environnement
                            que je ne connais pas. Initié à la méthode agile, rompu au télétravail, je suis force de proposition lorsque
                            l’on m’en donne la liberté, cherchant toujours à améliorer et optimiser les projets au maximum pour satisfaire au
                            mieux la demande. L’optimisation du code fait partie de mes priorités.</p>
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