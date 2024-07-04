'use client';

import classes from './style.module.scss';
import Image from "next/image";
import Button, {ButtonFont, ButtonSize, ButtonType, ButtonVariant} from "../../../components/landing/button/index";
import React from "react";
import Link from "next/link";
import ArrowsLeft from "./arrows-left/index";
import ArrowsRight from "./arrows-right/index";

const PreFarming = () => {
        return (
            <div className={classes.container}>
                <div className={classes.mobile__phones}>
                    <Image
                        src="/images/phones.png"
                        alt="Centered Image"
                        layout="responsive"
                        width={800}
                        height={800}
                    />
                </div>
                <div className={classes.image__wrapper}>
                    <Image src="/images/phone_tower.png" alt="Left Image" width={280} height={500} />
                </div>
                <div className={classes.content}>
                    <ArrowsLeft />
                    <h3 className={classes.content__title}>
                        Start
                        <span>Pre-farming</span>
                    </h3>
                    <Button type={ButtonType.PRIMARY} variant={ButtonVariant.PURPLE} size={ButtonSize.LARGE} title='START PRE-FARMING' onClick={() => {}} font={ButtonFont.SPECIAL}/>
                    <p className={classes.content__subtitle}>Boost your social activity rewards by joining on pre-launch</p>
                    <div className={classes.referral}>
                        <Link href="/">
                            Referrals
                        </Link>
                    </div>
                    <ArrowsRight />
                </div>
                <div className={classes.image__wrapper}>
                    <div className={classes.image__right}>
                        <Image src="/images/phone_placeholder.png" alt="Right Image" width={280} height={500} />
                    </div>
                </div>
            </div>
        );
}

export default PreFarming;
