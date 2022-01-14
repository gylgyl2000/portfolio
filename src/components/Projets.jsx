import React, { Component } from "react";

export default class Projets extends Component {
    render() {
        return (
            <div id="projects" className="projects-section">
                <h1><i className="fas fa-laptop-code"></i> Some of my projects</h1>
                <div className="container">
                    <a className="project-tile" href="https://codepen.io/gylgyl2000/full/eYZwBqW" target="-blank">
                        <img className="project-image" src="https://gitlab.com/gylgyl2000/gylgyl2000-personal-portfolio/-/raw/master/personal-portfolio/src/components/assets/tribute-page.png" alt="tribute-page" />
                        <div className="project-image-overlay">
                            <h3>Stepen Hawking: A tribute page</h3>
                        </div>
                    </a>
                    <a className="project-tile" href="https://codepen.io/gylgyl2000/full/ZEWgoyj" target="-blank">
                        <img className="project-image" src="https://gitlab.com/gylgyl2000/gylgyl2000-personal-portfolio/-/raw/master/personal-portfolio/src/components/assets/survey-form.png" alt="survey-form" />
                        <div className="project-image-overlay">
                            <h3>Survey form programming language</h3>
                        </div>
                    </a>
                    <a className="project-tile" href="https://codepen.io/gylgyl2000/full/MWeWMqa" target="-blank">
                        <img className="project-image" src="https://gitlab.com/gylgyl2000/gylgyl2000-personal-portfolio/-/raw/master/personal-portfolio/src/components/assets/product-landing-page.png" alt="product-landing-page" />
                        <div className="project-image-overlay">
                            <h3>Product landing page</h3>
                        </div>
                    </a>
                    <a className="project-tile" href="https://codepen.io/gylgyl2000/full/VwjLoEG" target="-blank">
                        <img className="project-image" src="https://gitlab.com/gylgyl2000/gylgyl2000-personal-portfolio/-/raw/master/personal-portfolio/src/components/assets/technical-documentation-page.png" alt="technical-documentation-page" />
                        <div className="project-image-overlay">
                            <h3>Technical documentation page</h3>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}