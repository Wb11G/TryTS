'use client';

import { motion } from 'framer-motion';


import styles from '@/styles/styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const staggerChildren = 0.2;
const delayChildren = 0.1;

const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
            variants={staggerContainer(staggerChildren, delayChildren)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
                    Hi, I'm
                </motion.h1>
                <motion.div
                    variants={textVariant(1.2)}
                    className="flex flex-row justify-center items-center"
                >
                    <h1 className={styles.heroHeading}> Wahyu Abdul Rahmat</h1>
                </motion.div>
            </div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="relative w-full md:-mt-[20px] -mt-[12px]"
            >
                <div className="absolute w-full h-[374px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

                <img
                    src="/cover.png"
                    alt="hero_cover"
                    className="w-full sm:h-[510px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
                />
            </motion.div>
        </motion.div>
    </section>
);

export default Hero;
