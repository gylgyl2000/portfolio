import React, { Component, } from "react";

import styles from './CompetencesBack.module.css';

export default class CompetencesBack extends Component {
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
            <div className={styles.skill + ' ' + styles.center + ' fadeInRight animated'} id="back-end">
                <div
                    className={styles.cItem + ' ' + styles.icon + ' ' + styles.back + ' ' + divSkillItemIcon}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}><i className="fas fa-database"></i>
                </div>

                <div className={styles.cItem + ' ' + styles.content}>
                    <h4 className={styles.back}>Back-end</h4>
                    
                    <div className={styles.item + ' ' + styles.desc}>
                        Développement de sites web et applications, création et gestion de bases de données, programmation orientée objet et modèle 3 tiers, mise en ligne.
                    </div>

                    <div className={styles.spaceBetween}>
                        <div className={styles.item + ' ' + styles.el}>
                            <div className={styles.spaceBetween}>
                                <div className={styles.item + ' ' + styles.names}>
                                    PHP7<br />
                                    MySQL<br />
                                    CRON<br />
                                    cURL
                                </div>
                                <div className={styles.item + ' ' + styles.stars}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><br />
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><br />
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><br />
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item + ' ' + styles.el}>
                            <div className={styles.spaceBetween}>
                                <div className={styles.item + ' ' + styles.names}>
                                    Client SSH<br />
                                    Connexion FTP <br />
                                    SEO<br />
                                    API REST
                                </div>
                                <div className={styles.item + ' ' + styles.stars}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><br />
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><br />
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><br />
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}