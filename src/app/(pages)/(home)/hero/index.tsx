/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";
import classes from "./style.module.scss";
import Button, {
  ButtonFont,
  ButtonSize,
  ButtonType,
  ButtonVariant,
} from "../../../components/landing/button/index";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".title span",
      { y: 50, opacity: 0, rotate: 10 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      ".subdescription",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power4.out" }
    );
    gsap.fromTo(
      ".description",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.3, ease: "power4.out" }
    );
  }, []);

  return (
    <section className={classes.hero}>
      <div className={classes.hero__content}>
        <h1 className={`${classes.hero__title} title`}>
          <span>COMMUNITY GAMES</span>
          <p className="subdescription">MEME TOKENS INFRASTRUCTURE</p>
        </h1>
        <p className={`${classes.hero__description} description`}>
          It's time to build a new world, to unite meme tokens, communities and
          projects.
        </p>
        <Button
          type={ButtonType.PRIMARY}
          variant={ButtonVariant.PURPLE}
          size={ButtonSize.LARGE}
          title="START PRE-FARMING"
          onClick={() => {}}
          font={ButtonFont.SPECIAL}
        />
      </div>
      <div className={classes.supper} />
      <div className={`${classes.cloud__first} cloud`}>
        <Image
          src="/images/cloud.png"
          alt="Cloud left"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`${classes.cloud__second} cloud`}>
        <Image
          src="/images/cloud.png"
          alt="Cloud left"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`${classes.cloud__third} cloud`}>
        <Image
          src="/images/cloud.png"
          alt="Cloud left"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`${classes.cloud__fourth} cloud`}>
        <Image
          src="/images/cloud.png"
          alt="Cloud left"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={`${classes.cloud__fifth} cloud`}>
        <Image
          src="/images/cloud.png"
          alt="Cloud left"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Hero;
