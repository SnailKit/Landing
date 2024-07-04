import React from 'react';
import clsx from 'clsx';
import classes from './style.module.scss';
import Image from "next/image";
import Button, {ButtonFont, ButtonSize, ButtonType, ButtonVariant} from "../../../../components/landing/button/index";
import {IProtocol} from "../types";

export interface ProtocolCardProps {
    card: IProtocol;
}

const ProtocolCard = ({ card }: ProtocolCardProps) => {
    return (
            <div
                className={clsx(
                    classes.card,
                    { [classes.card__active]: card.isActive }
                )}
                onClick={card.onClick}
            >
                <h3  className={clsx(
                    classes.card__title,
                    { [classes.card__title__active]: card.isActive }
                )} >{card.title}</h3>
                <div className={classes.card__image}>
                    {card.isActive ? (
                        <Image
                            src="/images/button-active.png"
                            alt="Cloud left"
                            layout="fill"
                            objectFit="cover"
                        />
                    ) : (
                        <Image
                            src="/images/button-disabled.png"
                            alt="Cloud left"
                            layout="fill"
                            objectFit="cover"
                        />
                    )}
                </div>
                <h4  className={clsx(
                    classes.card__subtitle,
                    { [classes.card__subtitle__active]: card.isActive }
                )}>{card.subtitle}</h4>
                <p  className={clsx(
                    classes.card__description,
                    { [classes.card__description__active]: card.isActive }
                )}>{card.description}</p>
                <Button type={ButtonType.PRIMARY} variant={card.isActive ? ButtonVariant.PURPLE : ButtonVariant.GREY} size={ButtonSize.SMALL} title={card.buttonTitle.toUpperCase()}
                        onClick={card.onClick} font={ButtonFont.SPECIAL}/>
            </div>
    );
}

export default ProtocolCard;
