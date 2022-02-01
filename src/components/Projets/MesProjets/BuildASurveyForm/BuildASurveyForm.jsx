import React, { Component } from "react";
import { motion } from "framer-motion";

import Navbar from "../../../Navbar/Navbar";

import styles from '../../Projets.module.css'
import './style.css';

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2
    }
}

const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};

export default class BuildASurveyForm extends Component {
    render() {
        return (
            <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <div id={styles["navbar"]} className={styles.nav}>
                    <Navbar />
                </div>
                <div id="BuildASurveyForm" className="body html">

                    <div class="container">
                        <header class="header">
                            <h1 id="title" class="text-center">Survey form programming language</h1>
                            <p id="description" class="description text-center">What is your favorite programming language?</p>
                        </header>
                        <form id="survey-form">
                            <div class="form-group">
                                <label id="name-label" for="name">Name</label>
                                <div class="ico-label">
                                    <i class="fa fa-user"></i>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    class="form-control"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label id="email-label" for="email">Email</label>
                                <div class="ico-label">
                                    <i class="fa fa-envelope"></i>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="email@domaine.com"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label id="number-label" for="number">Age</label>
                                <div class="ico-label">
                                    <i class="fa fa-birthday-cake"></i>
                                </div>
                                <input
                                    type="number"
                                    name="age"
                                    id="number"
                                    min="10"
                                    max="99"
                                    class="form-control"
                                    placeholder="Your age"
                                />
                            </div>
                            <div class="form-group">
                                <label id="activity-label" for="activity">What is your activity as a developer?</label>
                                <div class="ico-label">
                                    <i class="fa fa-coffee"></i>
                                </div>
                                <select id="dropdown" name="role" class="form-control" required>
                                    <option disabled selected value>Select your activity</option>
                                    <option value="student">Non-professional</option>
                                    <option value="student">Student</option>
                                    <option value="job">Junior developer</option>
                                    <option value="learner">Senior developer</option>
                                    <option value="preferNo">That does not concern you</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label id="time-label" for="time">How much time do you code per day?</label>
                                <container class="radio">
                                    <div class="ico-label">
                                        <i class="fa fa-hourglass-half"></i>
                                    </div>
                                    <div class="radio-input">
                                        <label>
                                            <input
                                                name="how-much-time"
                                                value="0to1hour"
                                                type="radio"
                                                class="input-radio"
                                            />0 to 1 hour
                                        </label>
                                        <label>
                                            <input
                                                name="how-much-time"
                                                value="1to4hours"
                                                type="radio"
                                                class="input-radio"
                                            />1 to 4 hours
                                        </label>
                                        <label>
                                            <input
                                                name="how-much-time"
                                                value="5to8hours"
                                                type="radio"
                                                class="input-radio"
                                            />5 to 8 hours
                                        </label>
                                        <label>
                                            <input
                                                name="how-much-time"
                                                value="8+hours"
                                                type="radio"
                                                class="input-radio"
                                            />more than 8 hours
                                        </label>
                                    </div>
                                </container>
                            </div>
                            <div class="form-group">
                                <label id="favorite-label" for="time">Your favorite programming language(s)</label>
                                <container class="checkbox">
                                    <div class="ico-label">
                                        <i class="fa fa-code"></i>
                                    </div>
                                    <div class="checkbox-input">
                                        <label>
                                            <input
                                                name="favorite"
                                                value="java"
                                                type="checkbox"
                                                class="input-checkbox"
                                            />Java
                                        </label>
                                        <label>
                                            <input
                                                name="favorite"
                                                value="javascript"
                                                type="checkbox"
                                                class="input-checkbox"
                                            />JavaScript
                                        </label>
                                        <label>
                                            <input
                                                name="favorite"
                                                value="php"
                                                type="checkbox"
                                                class="input-checkbox"
                                            />PHP
                                        </label>
                                        <label>
                                            <input
                                                name="favorite"
                                                value="python"
                                                type="checkbox"
                                                class="input-checkbox"
                                            />Python
                                        </label>
                                        <label>
                                            <input
                                                name="favorite"
                                                value="ruby"
                                                type="checkbox"
                                                class="input-checkbox"
                                            />Ruby
                                        </label>
                                        <label>
                                            <input
                                                name="favorite"
                                                value="c++"
                                                type="checkbox"
                                                class="input-checkbox"
                                            />C++
                                        </label>
                                        <label>
                                            <input
                                                name="favorite"
                                                value="C#"
                                                type="checkbox"
                                                class="input-checkbox"
                                            />C#
                                        </label>
                                        <label>
                                            <input
                                                name="favorite"
                                                value="perl"
                                                type="checkbox"
                                                class="input-checkbox"
                                            />Perl
                                        </label>
                                    </div>
                                </container>
                            </div>
                            <div class="form-group">
                                <label id="favorite-label" for="time">Comments and suggestions?</label>
                                <textarea
                                    id="comments"
                                    class="input-textarea"
                                    name="comment"
                                    placeholder="Enter your comment here..."
                                >
                                </textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" id="submit" class="submit-button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        )
    }
}