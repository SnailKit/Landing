'use client';

import React, { useEffect } from 'react';
import classes from './style.module.scss';
import ProtocolCard from "./protocol-card/index";
import { IProtocol } from './types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Protocol: React.FC = () => {

    const cards: Array<IProtocol> = [
        {
            title: 'Phase 1',
            subtitle: 'Pre-farming',
            description: 'Instantly earn points with social activity on pre-launch (x2)',
            buttonTitle: 'Join pre-launch',
            isActive: true,
            onClick: () => {}
        },
        {
            title: 'Phase 2',
            subtitle: 'In-app farming',
            description: 'Earn point with your community folks. Cooperate to increase',
            buttonTitle: 'points farming',
            isActive: false,
            onClick: () => {}
        },
        {
            title: 'Phase 3',
            subtitle: 'In-game farming',
            description: 'Unlock points flow in the first cross-meme cooperative game.',
            buttonTitle: 'origins game',
            isActive: false,
            onClick: () => {}
        }
    ];

    useEffect(() => {
        // Title animation
        gsap.fromTo(`.${classes.protocol__title}`,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.2, ease: 'power4.out',
                scrollTrigger: {
                    trigger: `.${classes.protocol__title}`,
                    start: 'top 80%', // Adjust this value as needed
                }
            }
        );

        // Cards animation
        gsap.fromTo(`.${classes.card}`,
            { y: 50, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${classes.cards__desktop}`, // Adjust the trigger element if necessary
                    start: 'top 80%', // Adjust this value as needed
                }
            }
        );
    }, []);

    return (
        <div className={classes.protocol}>
            <h2 className={classes.protocol__title}>
                Cuberium protocol simplifies creating, deploying and publishing projects games
            </h2>

            <div className={classes.cards__desktop}>
                {cards.map((card: IProtocol) => {
                    return <ProtocolCard card={card} key={card.title} />
                })}
            </div>
            <div className={classes.cards__scrollable}>
                {cards.map((card: IProtocol) => {
                    return <ProtocolCard card={card} key={card.title} />
                })}
            </div>
        </div>
    );
};

export default Protocol;
