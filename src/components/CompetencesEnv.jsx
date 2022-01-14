import React, { Component, } from "react";

import styles from './CompetencesEnv.module.css';

export default class CompetencesEnv extends Component {
    constructor(){
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
        const divSkillItemIcon = this.state.isHovered ? "animated bounce" : "";
        return (
            <div className={styles.skill + ' ' + styles.center + ' fadeInLeft animated'} id="environnement">
                <div className={styles.cItem + ' ' + styles.content}>
                    <h4 className={styles.env}>Environnement de travail</h4>
                    
                    <div className={styles.item + ' ' + styles.desc + ' ' + styles.end}>
                        <i className="fas fa-desktop"></i> <b>Systèmes d'exploitation :</b> Windows 10, Mac OS<br />
                        <i className="fas fa-terminal"></i> <b>Workflow :</b> Git, MAMP, Chrome, FileZilla, Postman, Slack, Sequel Pro, Gulp, CLI, Cordova, NPM<br />
                        <i className="fas fa-code"></i> <b>IDE :</b> Visual Studio Code, Atom<br />
                        <i className="fas fa-pen-alt"></i> <b>Autres compétences :</b> maîtrise de l'anglais, traduction anglais/français, rédaction<br />
                        <i className="fas fa-user-tie"></i> <b>Savoir-être :</b> capacité d'adaptation, travail en équipe, organisation, rigueur, force de proposition
                    </div>
                </div>
                
                <div 
                    className={styles.cItem + ' ' + styles.icon + ' ' + styles.env + ' ' + divSkillItemIcon}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}><i className="fas fa-mug-hot"></i>
                </div>
            </div>
        )
    }
}