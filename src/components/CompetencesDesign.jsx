import React, { Component, } from "react";

import styles from './CompetencesDesign.module.css';

export default class CompetencesWeb extends Component {
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
            <div className={styles.skill + ' ' + styles.center + ' fadeInRight animated'} id="web-design">
                <div
                    className={styles.cItem + ' ' + styles.icon + ' ' + styles.design + ' ' + divSkillItemIcon}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}><i className="fas fa-pencil-ruler"></i>
                </div>

                <div className={styles.cItem + ' ' + styles.content}>
                    <h4 className={styles.design}>Web design</h4>
                    
                    <div className={styles.item + ' ' + styles.desc}>
                        Création de maquettes XD et HTML, ainsi que de prototypes fonctionnels. Conception centrée utilisateur selon les règles d'UX lors de la création d'une interface utilisateur.
                    </div>

                    <div className={styles.spaceBetween}>
                        <div className={styles.item + ' ' + styles.el}>
                            <div className={styles.spaceBetween}>
                                <div className={styles.item + ' ' + styles.names}>
                                    Adobe XD<br />
                                    Photoshop<br />
                                    inDesign
                                </div>
                                <div className={styles.item + ' ' + styles.stars}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><br />
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><br />
                                    <i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item + ' ' + styles.el}>
                            <div className={styles.spaceBetween}>
                                <div className={styles.item + ' ' + styles.names}>
                                    Maquettage<br />
                                    Prototypage
                                </div>
                                <div className={styles.item + ' ' + styles.stars}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><br />
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}