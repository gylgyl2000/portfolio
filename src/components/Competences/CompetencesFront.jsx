import React, { Component, } from "react";

import styles from './CompetencesFront.module.css';

export default class CompetencesFront extends Component {
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
      <div className={styles.skill + ' ' + styles.center + ' fadeInLeft animated'} id="front-end">
        <div className={styles.cItem + ' ' + styles.content}>
          <h4 className={styles.front}>Front-end</h4>
            
          <div className={styles.item + ' ' + styles.desc}>
            Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.
          </div>

          <div className={styles.spaceBetween}>
            <div className={styles.item + ' ' + styles.el}>
              <div className={styles.spaceBetween}>
                <div className={styles.item + ' ' + styles.names}>
                  HTML5<br />
                  CSS3<br />
                  JavaScript<br />
                  jQuery<br />
                  JSON<br />
                  Ajax
                </div>
                <div className={styles.item + ' ' + styles.stars}>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                </div>
              </div>
            </div>
            <div className={styles.item + ' ' + styles.el}>
              <div className={styles.spaceBetween}>
                <div className={styles.item + ' ' + styles.names}>
                  ReactJS<br />
                  VueJS<br />
                  Bootstrap<br />
                  SASS<br />
                  less
                </div>
                <div className={styles.item + ' ' + styles.stars}>
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><br />
                  <i className="fas fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>

      </div>
        <div 
          className={styles.cItem + ' ' + styles.icon + ' ' + styles.front + ' ' + divSkillItemIcon}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}><i className="fas fa-code"></i>
        </div>
      </div>
    )
  }
}