import React, { Component } from "react";

import styles from './Parcours.module.css';

export default class Parcours13 extends Component {
    render() {
        return (
            <div id={styles["parcours13"]} className={styles.event + ' ' + styles.school + ' fadeInUp animated'}>
                <div className={styles.left}>
                    <p><br />
                        2021 et 2022
                    </p>
                </div>
                <div className={styles.right}>
                    <div className={styles.content}>
                        <h3>
                            <i class="fas fa-graduation-cap"></i>
                                Diplôme : Développeur intégrateur web (niv. V)
                        </h3>
                        <div class={styles.date}>2021 et 2022</div>
                        <div class={styles.place}>OpenClassrooms | Certification professionnelle de niveau V (RNCP36076)</div>
                        <ul>
                            <li>Mener une veille technologique sur le domaine du développement informatique grâce à des
                                outils et des médias en ligne afin de se tenir à jour sur les avancées technologiques et les
                                tendances du domaine.</li>
                            <li>Organiser son travail dans l'équipe technique via une méthodologie de gestion de projet
                                imposée (agile, cascade, etc.) afin d'optimiser l'efficacité et la qualité du travail rendu, et de
                                respecter les demandes du chef de projet.</li>
                            <li>Formaliser les besoins du projet de développement en analysant les spécifications
                                fonctionnelles et en prévoyant les outils et les éléments techniques à mettre en place afin de
                                démarrer l'intégration efficacement.</li>
                            <li>Mettre en place un environnement de travail informatique complet et adapté aux besoins de
                                l'équipe et du projet grâce à l'ensemble des logiciels de mise en place de site web et de
                                gestion de versions, afin de travailler efficacement sur le code du site web.</li>
                            <li>Appliquer un système de suivi collaboratif du code du site grâce à Git ou à un plugin de
                                gestion de versions, ainsi qu'une plateforme adaptée afin de garantir la qualité du code.</li>
                            <li>Implémenter les modules visuels de l'interface (le front-end) et ses effets graphiques grâce
                                aux langages HTML et CSS et à un préprocesseur CSS, afin de garantir la cohérence
                                visuelle et respecter la maquette du site.</li>
                            <li>Programmer la manipulation du DOM et des formulaires grâce à JavaScript et à un
                                framework front-end afin de permettre l'interaction de l'utilisateur avec le site.</li>
                            <li>Mettre en place l'échange des informations sécurisé entre l'interface utilisateur et les données
                                du serveur en utilisant les langages et les outils adaptés, afin d'assurer le bon fonctionnement
                                d'un site.</li>
                            <li>Exécuter des tests de validation fonctionnels pour vérifier manuellement le fonctionnement
                                d'un site web afin de s'assurer que chaque fonctionnalité remplit son rôle, et de valider la
                                qualité du site.</li>
                            <li>Corriger le code dysfonctionnel d'un site web grâce aux outils de debug du navigateur et au
                                rapport de tests afin que le code soit fonctionnel, et valide tous les tests.</li>
                            <li>Adapter le contenu, les balises sémantiques ainsi que la mise en forme grâce aux
                                recommandations des outils de webmaster, afin d'améliorer le référencement et la
                                performance du site.</li>
                            <li>Publier un site sur le Web grâce à des outils de déploiement et d'hébergement afin de rendre
                                le site disponible aux visiteurs.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}