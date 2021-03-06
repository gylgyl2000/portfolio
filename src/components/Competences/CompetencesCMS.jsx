import React, { Component, } from "react";

import styles from './CompetencesCMS.module.css';

export default class CompetencesCMS extends Component {
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
            <div className={styles.skill + ' ' + styles.center + ' fadeInLeft animated'} id="cms">
                <div className={styles.cItem + ' ' + styles.content}>
                    <h4 className={styles.cms}>CMS</h4>
                    
                    <div className={styles.item + ' ' + styles.desc}>
                        Création et édition de thèmes et plugins. Mon expérience est principalement portée sur WordPress.
                    </div>

                    <div className={styles.spaceBetween}>
                        <div className={styles.item + ' ' + styles.el}>
                            <div className={styles.spaceBetween}>
                                <div className={styles.item + ' ' + styles.names}>
                                    WordPress<br />
                                    ACF<br />
                                    FlipBook
                                </div>
                                <div className={styles.item + ' ' + styles.stars}>
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item + ' ' + styles.el}>
                            <div className={styles.spaceBetween}>
                                <div className={styles.item + ' ' + styles.names}>
                                </div>
                                <div className={styles.item + ' ' + styles.stars}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div 
                    className={styles.cItem + ' ' + styles.icon + ' ' + styles.cms + ' ' + divSkillItemIcon}
                    onMouseEnter={this.handleHover}
                    onMouseLeave={this.handleHover}><i class="fas fa-user-edit"></i>
                </div>
            </div>
        )
    }
}