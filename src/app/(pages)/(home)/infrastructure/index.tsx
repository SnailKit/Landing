import classes from './style.module.scss';
import Image from "next/image";
import React from "react";

const Infrastructure = () => {
    return (
        <div className={classes.container}>
            <div className={classes.infra}>
                <div className={classes.infra__left}>
                    <h2 className={classes.infra__title}>
                        <span>Cuberium</span> is an infrastructure for communities, meme tokens and holders
                    </h2>
                    <p className={classes.infra__description}>
                        A dedicated game for each meme token, Web3 or Web2 community is a next step in evolution of interaction with audience, community engagement, building and activation.
                    </p>
                </div>
                <div className={classes.infra__right}>
                    <div className={classes.infra__image}>
                        <div className={classes.cloud__first}>
                            <Image
                                src="/images/cloud.png"
                                alt="Cloud left"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className={classes.cloud__second}>
                            <Image
                                src="/images/cloud.png"
                                alt="Cloud left"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <Image
                            src="/images/person.png"
                            alt="Cloud left"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Infrastructure;
