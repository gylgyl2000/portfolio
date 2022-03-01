import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';

import styles from './Projets.module.css';

import ProjetsDWData from './ProjetsDWData';
import ProjetsCard from './ProjetsCard';

// Framer-motion Configuration
const container = {
    hidden: {opacity:0},
    show: {
        opacity:1,
        transition:{
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const ProjetsDW = () => {
    const ref = useRef(null);
    useEffect(() => {
        let element = ref.current;
        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
        }
        window.addEventListener('scroll', rotate)
        return () => {
            window.removeEventListener('scroll', rotate);
        }
    }, [])
    return (
        <div id='DW' className={styles.box}>
            <motion.ul className={styles.main} ref={ref} variants={container} initial='hidden' animate='show'>
                {
                    ProjetsDWData.map( d => 
                        <ProjetsCard key={d.id} data={d} />
                    )
                }
            </motion.ul>
        </div>
    )
}

export default ProjetsDW;