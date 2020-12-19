import React from 'react';
import home1 from '../img/home1.png';
//Styled
import styled from 'styled-components';
import {About,Description,Image,Hide} from '../styles';
//Framer Motion
import {motion} from 'framer-motion';
import {titleAnim,fade,photoAnim} from '../animation';
import Wave from './Wave';

export default function AboutSection() {

    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide className="hide">
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
                </motion.p>
                <button>Contact Us</button>
            </Description>   
            <Image>
                    <motion.img variants={photoAnim} src={home1} alt="Person with camera"/>
            </Image>
            <Wave/>
        </About>
    )
}
