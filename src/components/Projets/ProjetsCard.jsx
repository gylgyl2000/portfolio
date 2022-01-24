import React from "react";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styles from './Projets.module.css';

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const ProjetsCard = (props) => {

    const {id, name, description, image, tags, demo, github} = props.data;
    return (
        <motion.li key={id} variants={Item}>
            <h2>{name}</h2>
            <h4>{description}</h4>
            <img src={image} alt={name}/>
            <div className={styles.tags}>
                {
                    tags.map((t,id) => {
                        return <span className={styles.tag} key={id}>#{t}</span>
                    })
                }
            </div>
            <div className={styles.footer}>
                <a className={styles.link} href={demo} target="_blank" rel="noreferrer">
                    Visiter
                </a>
                <NavLink className={styles.git} to={{pathname: `${github}`}} target="_blank">
                    <i className='fab fa-github'></i>
                </NavLink>
            </div>
        </motion.li>
    )
}

export default ProjetsCard;