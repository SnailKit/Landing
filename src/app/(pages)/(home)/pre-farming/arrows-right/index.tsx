import React, { useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classes from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

const ArrowsRight = () => {
    useEffect(() => {
        gsap.fromTo(
            '.arrow',
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.arrows-container',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <div className={`arrows-container ${classes.arrows}`}>
            <Image src='/images/arrows/right/first.svg' alt="Arrow 1" className={`arrow ${classes.arrows__first}`} width={100} height={100} />
            <Image src='/images/arrows/right/second.svg' alt="Arrow 2" className={`arrow ${classes.arrows__second}`} width={100} height={100} />
            <Image src='/images/arrows/right/third.svg' alt="Arrow 3" className={`arrow ${classes.arrows__third}`} width={100} height={100} />
        </div>
    );
};

export default ArrowsRight;
