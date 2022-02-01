import React, { Component } from "react";
import { motion } from "framer-motion";

import 'https://kit.fontawesome.com/5ae5fdf9eb.js';

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

export default class BuildAProductLandingPage extends Component {
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
                <div id="BuildAProductLandingPage" className="body html">

                <div id="wrapper">
                    <header id="header">
                        <div class="logo">
                            <img id="header-img" src="https://cdn.shopify.com/s/files/1/1899/2399/files/Diapering-menu-icon.png?v=16484532118755702325" alt="baby diapers logo" />
                            <p>Baby diapers</p>
                        </div>
                        <nav id="nav" class="nav-bar">
                            <ul>
                            <li><a class="nav-link" href="#full-description">Full Description</a></li>
                            <li><a class="nav-link" href="#materials-&-ingredients">Materials & Ingredients</a></li>
                            <li><a class="nav-link" href="#care-instructions">Care Instructions</a></li>
                            <li><a class="nav-link" href="#awards">Awards</a></li>
                            <li><a class="nav-link" href="#easy-to-use">Easy to use</a></li>
                            <li><a class="nav-link" href="#pricing">Pricing</a></li>
                            </ul>
                        </nav>
                    </header>
                    <main>
                        <div class="container">
                            <div class="diaper-img">
                            <img class="diaper" alt="" src="https://www.babybasicshk.com/images/thumbs/0005494_cb-diaper-2-insects-sophie-coco-blue-one-size-hybrid-aio.jpeg" />
                            </div>
                            <div class="product-container">
                                <h1 id="title" class="text-center">Reusable Cloth Diaper:<br />
                                    One-Size with Organic Cotton & Hemp</h1>
                            <section id="product">
                                <h2>Softness. All the Protection. None of the Waste.</h2>
                                <p>Our reusable cloth diapers with organic cotton and hemp, come with 
                                    Charlie Banana's signature softness, help protect your baby's delicate 
                                    skin, and care for our planet. All Charlie Banana products are Climate 
                                    Neutral Certified, and we are proud members of 1% For The Planet, so 
                                    every purchase is a tiny investment in a greener, kinder world for 
                                    your baby.</p>
                            </section>
                            </div>
                        </div>
                        <div class="container-after">
                            <section id="full-description">
                                <div class="container-flex">
                                    <div class="icon">
                                        <i class="fas fa-baby"></i>
                                    </div>
                                    <div class="description">
                                        <h2>Full Description</h2>
                                        <p><strong>Soft -</strong> Charlie Banana’s ‘Signature’ softness comes 
                                            from premium organic cotton lining, edge-to-edge, to keep baby bundled 
                                            in comfort and dryness.</p>

                                        <p><strong>Simple -</strong> Our One-Size (OS) system grows with your baby, 
                                            thanks to our patented adjustable sizing straps and snug fit snaps. 
                                            Choose between reusable or disposable inserts, for a system that works 
                                            for every occasion: at play, overnight, or on-the-go. Learn more…</p>

                                        <p><strong>Safe -</strong> All Charlie Banana products are crafted with 
                                            carefully selected materials and rigorously tested by leading independent 
                                            laboratories.</p>

                                        <p><strong>Sustainable -</strong> All Charlie Banana products are Climate 
                                            Neutral Certified. We commit 1% of our sales to tackle climate change 
                                            and support environmental causes through 1% For The Planet.</p>

                                        <p><strong>Protection -</strong> Maximum absorbency, day or night, is 
                                            delivered by multi-layered reusable inserts made with hemp, cotton & 
                                            terry. All Charlie Banana diapers are expertly designed to protect 
                                            against leaks and blowouts. Super-wide back elastics and adjustable 
                                            leg casings deliver a snug and comfortable fit for your baby.</p>
                                    </div>
                                </div>
                            </section>

                            <section id="materials-&-ingredients">
                                <div class="container-flex">
                                    <div class="icon"><i class="fas fa-pump-soap"></i></div>
                                    <div class="description">
                                        <h2>Materials & Ingredients</h2>
                                        <p>Shell-Face : 100% Polyester / Back : Polyurethane / Lining : 100% 
                                            Organically Grown Cotton / Insert : Top : 55% Hemp 45% Cotton / Bottom : 
                                            88% Biconstituent Fiber (80% Polyester 20% Nylon) 12% Polyester</p>
                                        <p>Made in China</p>
                                    </div>
                                </div>
                            </section>

                            <section id="care-instructions">
                                <div class="container-flex">
                                    <div class="icon"><i class="fas fa-water"></i></div>
                                    <div class="description">
                                        <h2>Care Instructions</h2>
                                        <p>Machine wash cold or warm wash to a maximum of 40℃. Use cloth-friendly 
                                            detergent with proper amount needed. Do not use fabric softener or bleach. 
                                            Do not iron. Tumble dry low or hang dry.</p>
                                    </div>
                                </div>
                            </section>

                            <section id="awards">
                                <div class="container-flex">
                                    <div class="icon"><i class="fas fa-award"></i></div>
                                    <div class="description">
                                        <h2>Awards</h2>
                                        <p>Mother & Baby Awards 2017, Eco Excellence Awards 2016, Babylist Best 2016, 
                                            Eco Excellence Awards 2015, Mother and baby Bronze Awards 2010, The Kiwi Awards 2011</p>
                                    </div>
                                </div>
                            </section>

                            <section id="easy-to-use">
                                <div dangerouslySetInnerHTML={{ __html: "<iframe id='video' width='688' height='387' src='https://www.youtube.com/embed/Oa69BE20xaU' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />"}} />;
                            </section>
                            <section id="pricing">
                                <div class="container-pricing">
                                    <div class="product-pricing">
                                        <img src="https://static.figure8moms.com/images/photos/category/2215700-category.jpg?v=60958E" alt="" />
                                        <p>Diaper 2 Inserts Organic Florida Pink One Size</p>
                                        <h3>€ 29.00</h3>
                                        <button class="btn">Add to Wishlist</button>
                                    </div>
                                    <div class="product-pricing">
                                        <img src="https://static.figure8moms.com/images/photos/category/2215703-category.jpg?v=958734" alt="" />
                                        <p>Diaper 2 Inserts Organic Soccer One Size</p>
                                        <h3>€ 29.00</h3>
                                        <button class="btn">Add to Wishlist</button>
                                    </div>
                                    <div class="product-pricing">
                                        <img src="https://static.figure8moms.com/images/photos/category/2215001-category.jpg?v=3875BC" alt="" />
                                        <p>Diaper 2 Inserts Organic Sophie Coco Blue One Size</p>
                                        <h3>€ 29.88</h3>
                                        <button class="btn">Add to Wishlist</button>
                                    </div>
                                    <div class="product-pricing">
                                        <img src="https://static.figure8moms.com/images/photos/category/2215002-category.jpg?v=A1B14C" alt="" />
                                        <p>Diaper 2 Inserts Organic Sophie Coco Pink One Size</p>
                                        <h3>€ 29.88</h3>
                                        <button class="btn">Add to Wishlist</button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                    <div id="footer">
                        <div class="contact-email">
                            <div id="form" action="https://www.freecodecamp.com/email-submit">
                                <img id="footer-img" src="https://cdn.shopify.com/s/files/1/1899/2399/files/Diapering-menu-icon.png?v=16484532118755702325" alt="baby diapers logo" />
                                <label class="form-label" for="review_email_4500060536913">Become a Insider</label>
                                <input
                                    class="input-email "
                                    id="email"
                                    type="email"
                                    name="email"
                                    value=""
                                    placeholder="john.smith@example.com" />
                                <input
                                    id="submit"
                                    type="submit"
                                    class="btn-submit"
                                    value="Submit" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </motion.div>
        )
    }
}