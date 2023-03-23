'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '@/styles/styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
    const [active, setActive] = useState('world-2');
    const staggerChildren = 0.2;
    const delayChildren = 0.1;

    return (
        <section className={`${styles.paddings}`} id="explore">
            <motion.div
                variants={staggerContainer(staggerChildren, delayChildren)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| My Experience" textStyles="text-center" />
                <TitleText
                    title={<>My <br className="md:block hidden" /> Project</>}
                    textStyles="text-center"
                />
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            des={world.des}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Explore;
