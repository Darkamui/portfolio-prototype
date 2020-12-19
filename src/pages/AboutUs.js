import React from 'react'
//Page Components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSections';
//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

export default function AboutUs() {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <AboutSection></AboutSection>
            <ServicesSection/>
            <FaqSection/>
        </motion.div>
    )
}

