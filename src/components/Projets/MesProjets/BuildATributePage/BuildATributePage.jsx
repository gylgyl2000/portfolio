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

export default class BuildATributePage extends Component {
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
                <div id="BuildATributePage" className="">
                    <div id="main">
                        <h1 id="title">Stephen Hawking</h1>
                        <p>The timeless cosmologist</p>
                        <figure id="img-div">
                            <img
                            id="image"
                            src="https://iluminasi.com/img/thumb/banner-9-fakta-menarik-tentang-genius-bernama-stephen-hawking-yang-rama-tidak-tahu-5600.jpg"
                            alt="Stephen Hawking"
                            />
                            <figcaption id="img-caption">
                                Stephen William Hawking is a 21st century British physicist, cosmologist, scientist and professor.
                            </figcaption>
                        </figure>
                        <section id="tribute-info">
                            <h3 id="headline">Who was Stephen Hawking?</h3>
                            <ul>
                                <li>
                                    <strong>Stephen Hawking</strong>, in full <strong>Stephen William Hawking</strong>, 
                                    (born January 8, <strong>1942</strong>, Oxford, Oxfordshire, England—died March 14, 
                                    <strong>2018</strong>, Cambridge, Cambridgeshire), English theoretical physicist 
                                    whose theory of exploding black holes drew upon both relativity theory and quantum 
                                    mechanics. He also worked with space-time singularities.
                                </li>
                                <li>
                                    Hawking studied physics at University College, Oxford (B.A., <strong>1962</strong>), and Trinity 
                                    Hall, Cambridge (Ph.D., <strong>1966</strong>). He was elected a research fellow at Gonville and 
                                    Caius College at Cambridge.
                                </li>
                                <li>
                                    In the early <strong>1960s</strong> Hawking contracted amyotrophic 
                                    lateral sclerosis, an incurable degenerative neuromuscular disease. He continued 
                                    to work despite the disease’s progressively disabling effects.
                                </li>
                                <li>
                                    Hawking worked primarily in the field of general relativity and particularly on 
                                    the physics of black holes. In <strong>1971</strong> he suggested the formation, following the 
                                    big bang, of numerous objects containing as much as one billion tons of mass but 
                                    occupying only the space of a proton. These objects, called mini black holes, 
                                    are unique in that their immense mass and gravity require that they be ruled by 
                                    the laws of relativity, while their minute size requires that the laws of quantum 
                                    mechanics apply to them also.
                                </li>
                                <li>
                                    In <strong>1974</strong> Hawking proposed that, in accordance with 
                                    the predictions of quantum theory, black holes emit subatomic particles until 
                                    they exhaust their energy and finally explode. Hawking’s work greatly spurred 
                                    efforts to theoretically delineate the properties of black holes, objects about 
                                    which it was previously thought that nothing could be known. His work was also 
                                    important because it showed these properties’ relationship to the laws of 
                                    classical thermodynamics and quantum mechanics.
                                </li>
                                <li>
                                    Hawking’s contributions to physics earned him many exceptional honours. 
                                    In <strong>1974</strong> the Royal Society elected him one of its youngest fellows. He became 
                                    professor of gravitational physics at Cambridge in <strong>1977</strong>, and in <strong>1979</strong> he was 
                                    appointed to Cambridge’s Lucasian professorship of mathematics, a post once held 
                                    by Isaac Newton.
                                </li>
                                <li>
                                    Hawking was made a Commander of the British Empire (CBE) in 
                                    <strong>1982</strong> and a Companion of Honour in <strong>1989</strong>. He also received the Copley Medal from 
                                    the Royal Society in <strong>2006</strong> and the U.S. Presidential Medal of Freedom in <strong>2009</strong>. 
                                    In <strong>2008</strong> he accepted a visiting research chair at the Perimeter Institute for 
                                    Theoretical Physics in Waterloo, Ontario, Canada.
                                </li>
                                <li>
                                    His publications include <em>The Large Scale Structure of Space-Time</em> (1973; 
                                    coauthored with G.F.R. Ellis), <em>Superspace and Supergravity</em> (1981), <em>The Very 
                                    Early Universe</em> (1983), and the best sellers <em>A Brief History of Time: From the 
                                    Big Bang to Black Holes</em> (1988), <em>The Universe in a Nutshell</em> (2001), <em>A Briefer 
                                    History of Time</em> (2005), and <em>The Grand Design</em> (2010; coauthored with Leonard 
                                    Mlodinow).
                                </li>
                            </ul>

                            <blockquote>
                                <p>"The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge "</p>
                                <cite>Paralympics Speech, 2012</cite>
                            </blockquote>
                            <blockquote cite="https://www.imperial.ac.uk/news/175337/stephen-hawking-talks-black-holes-quantum/">
                                <p>"It is said that fact is sometimes stranger than fiction, 
                                    and nowhere is that more true than in the case of black holes. 
                                    Black holes are stranger than anything dreamed up by science fiction writers, 
                                    but they are firmly matters of science fact."</p>
                                <cite>Imperial College Public Speech, 2016</cite>
                            </blockquote>
                        </section>
                        <footer id="footer">
                            <p>You love discovering the world of Stephen Hawking and you want to know more :</p>
                            <p><a id="tribute-link"
                                href="https://www.hawking.org.uk/"
                                target="_blank"
                                rel="noreferrer">Stephen Hawking</a></p>
                            <p><a id="tribute-link"
                                href="https://www.britannica.com/biography/Stephen-Hawking"
                                target="_blank"
                                rel="noreferrer">Encyclopaedia Britannica</a></p>
                            <p><a id="tribute-link"
                                href="https://www.biography.com/scientist/stephen-hawking"
                                target="_blank"
                                rel="noreferrer">Biography</a></p>
                            <p><a id="tribute-link"
                                href="https://en.wikipedia.org/wiki/Stephen_Hawking"
                                target="_blank"
                                rel="noreferrer">Wikipedia</a></p>
                        </footer>
                    </div>
                </div>
            </motion.div>
        )
    }
}