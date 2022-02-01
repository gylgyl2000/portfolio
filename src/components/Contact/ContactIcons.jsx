import React, { Component } from "react";

import styles from './ContactIcons.module.css';

export default class ContactIcons extends Component {
    render() {
        return (
            <div className={styles.colSocialIcons}>
                <div id="content" className={styles.socialIconsTop}>
                    {/* <a href="https://gitlab.com/" target="_blank" className={styles.btn + ' ' + styles.gitlab} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fagitlab + ' fab fa-gitlab'}></i>
                    </a> */}
                    {/* <a href="https://github.com/gylgyl2000" target="_blank" className={styles.btn + ' ' + styles.github} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fagithub + ' fab fa-github'}></i>
                    </a> */}
                    {/* <a href="https://twitter.com/" target="_blank" className={styles.btn + ' ' + styles.twitter} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fatwitter + ' fab fa-twitter'}></i>
                    </a> */}
                   {/*  <a href="https://www.youtube.com/" target="_blank" className={styles.btn + ' ' + styles.youtube} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fayoutube + ' fab fa-youtube'}></i>
                    </a> */}
                    {/* <a href="https://www.facebook.com/" target="_blank" className={styles.btn + ' ' + styles.facebook} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fafacebook + ' fab fa-facebook-f'}></i>
                    </a> */}
                    {/* <a id="profile-link" href="https://www.freecodecamp.org/gylgyl2000" target="_blank" className={styles.btn + ' ' + styles.freecodecamp}  rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fafreecodecamp + ' fab fa-free-code-camp'}></i>
                    </a> */}
                    {/* <a href="https://codepen.io/gylgyl2000" target="_blank" className={styles.btn + ' ' + styles.codepen} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.facodepen + ' fab fa-codepen'}></i>
                    </a> */}
                    <a href="tel:+33687538801" target="_blank" className={styles.btn + ' ' + styles.mobilealt} rel="noreferrer" title="Joignez-moi sur mon mobile">
                        <i className={styles.fas + ' ' + styles.famobilealt + ' fas fa-mobile-alt'}></i>
                    </a>
                    <a href="mailto:gilles.chassignet@pm.me" target="_blank" className={styles.btn + ' ' + styles.paperplane} rel="noreferrer" title="Envoyez-moi un courriel">
                        <i className={styles.fas + ' ' + styles.fapaperplane + ' fas fa-paper-plane'}></i>
                    </a>
                    <a href="https://www.linkedin.com/in/gilles-chassignet-7965341a3/" target="_blank" className={styles.btn + ' ' + styles.linkedin} rel="noreferrer" title="Contactez-moi sur LinkedIn">
                        <i className={styles.fab + ' ' + styles.falinkedin + ' fab fa-linkedin'}></i>
                    </a>
                    {/* <a href="https://github.com/" target="_blank" className={styles.btn + ' ' + styles.globe} rel="noreferrer">
                        <i className={styles.fas + ' ' + styles.faglobe + ' fas fa-globe'}></i>
                    </a> */}
                </div>
            </div>
        )
    }
}