import React, { Component } from "react";

import styles from './Contact.module.css';

export default class Contact extends Component {
    render() {
        return (
            <div className={styles.colSocialIcons}>
                <div id="content" className={styles.socialIconsTop}>
                    <a href="https://gitlab.com/" target="_blank" className={styles.btn + ' ' + styles.gitlab} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fagitlab + ' fab fa-gitlab'}></i>
                    </a>
                    <a href="https://github.com/" target="_blank" className={styles.btn + ' ' + styles.github} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fagithub + ' fab fa-github'}></i>
                    </a>
                    <a href="https://twitter.com/" target="_blank" className={styles.btn + ' ' + styles.twitter} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fatwitter + ' fab fa-twitter'}></i>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" className={styles.btn + ' ' + styles.youtube} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fayoutube + ' fab fa-youtube'}></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className={styles.btn + ' ' + styles.facebook} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fafacebook + ' fab fa-facebook-f'}></i>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" className={styles.btn + ' ' + styles.linkedin} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.falinkedin + ' fab fa-linkedin'}></i>
                    </a>
                    <a id="profile-link" href="https://www.freecodecamp.org/gylgyl2000" target="_blank" className={styles.btn + ' ' + styles.freecodecamp}  rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.fafreecodecamp + ' fab fa-free-code-camp'}></i>
                    </a>
                    <a href="https://codepen.io" target="_blank" className={styles.btn + ' ' + styles.codepen} rel="noreferrer">
                        <i className={styles.fab + ' ' + styles.facodepen + ' fab fa-codepen'}></i>
                    </a>
                    <a href="mailto:example@example.com" target="_blank" className={styles.btn + ' ' + styles.paperplane} rel="noreferrer">
                        <i className={styles.fas + ' ' + styles.fapaperplane + ' fas fa-paper-plane'}></i>
                    </a>
                    <a href="tel:+01-562-867-5309" target="_blank" className={styles.btn + ' ' + styles.mobilealt} rel="noreferrer">
                        <i className={styles.fas + ' ' + styles.famobilealt + ' fas fa-mobile-alt'}></i>
                    </a>
                    <a href="https://github.com/" target="_blank" className={styles.btn + ' ' + styles.globe} rel="noreferrer">
                        <i className={styles.fas + ' ' + styles.faglobe + ' fas fa-globe'}></i>
                    </a>
                </div>
            </div>
        )
    }
}