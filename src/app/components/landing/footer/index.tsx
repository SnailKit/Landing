'use client';

import classes from './style.module.scss';
import Link from "next/link";
import Button, {ButtonFont, ButtonSize, ButtonType, ButtonVariant} from "@/app/components/landing/button";
import React from "react";
import {Icon} from "@/app/utils/icons";

export const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__buttons__desktop}>
                <Button type={ButtonType.PRIMARY} variant={ButtonVariant.BLACK} size={ButtonSize.MEDIUM} title="Twitter"
                        onClick={() => {
                        }} icon={Icon.TWITTER} font={ButtonFont.DEFAULT}/>
                <Button type={ButtonType.PRIMARY} variant={ButtonVariant.RED} size={ButtonSize.MEDIUM} title="Reddit"
                        onClick={() => {
                        }} icon={Icon.REDDIT} font={ButtonFont.DEFAULT}/>
                <Button type={ButtonType.PRIMARY} variant={ButtonVariant.DARK_BLUE} size={ButtonSize.MEDIUM}
                        title="Discord"
                        onClick={() => {
                        }} icon={Icon.DISCORD} font={ButtonFont.DEFAULT}/>
                <Button type={ButtonType.PRIMARY} variant={ButtonVariant.BLUE} size={ButtonSize.MEDIUM}
                        onClick={() => {
                        }} icon={Icon.TELEGRAM} font={ButtonFont.DEFAULT} title="Telegram"/>

            </div>
            <div className={classes.footer__buttons__mobile}>
                <Button type={ButtonType.PRIMARY} variant={ButtonVariant.BLACK} size={ButtonSize.ICON}
                        onClick={() => {
                        }} icon={Icon.TWITTER} font={ButtonFont.DEFAULT}/>
                <Button type={ButtonType.PRIMARY} variant={ButtonVariant.RED} size={ButtonSize.ICON}
                        onClick={() => {
                        }} icon={Icon.REDDIT} font={ButtonFont.DEFAULT}/>
                <Button type={ButtonType.PRIMARY} variant={ButtonVariant.DARK_BLUE} size={ButtonSize.ICON}
                        onClick={() => {
                        }} icon={Icon.DISCORD} font={ButtonFont.DEFAULT}/>
                <Button type={ButtonType.PRIMARY} variant={ButtonVariant.BLUE} size={ButtonSize.ICON}
                        onClick={() => {
                        }} icon={Icon.TELEGRAM} font={ButtonFont.DEFAULT}/>

            </div>
            <div className={classes.terms}>
                <Link href="/">
                    Privacy policy
                </Link>
                <Link href="/">
                    Terms of use
                </Link>
                <Link href="/">
                    Disclaimer
                </Link>
            </div>
            <p className={classes.footer__copyright}>Cuberium. All rights reserved.</p>

            <div className={classes.clouds}></div>
        </div>
    )
}

export default Footer;
