'use client';

import clsx from 'clsx';
import classes from './style.module.scss';
import { Icon } from '../../../utils/icons';

export enum ButtonType {
    PRIMARY = 'primary',
}
export enum ButtonVariant {
    PURPLE = 'purple',
    GREY = 'grey',
    BLACK = 'black',
    RED = 'red',
    DARK_BLUE = 'dark-blue',
    BLUE = 'light-blue',
}

export enum ButtonSize {
    LARGE = 'large',
    MEDIUM = 'medium',
    SMALL = 'small',
    ICON = 'icon'
}

export enum ButtonFont {
    DEFAULT = 'default',
    SPECIAL = 'special',
}

interface ButtonProps {
    type: ButtonType;
    variant: ButtonVariant;
    size: ButtonSize;
    title?: string;
    icon?: Icon;
    onClick: () => void;
    font: ButtonFont;
}

const Button = ({ type, variant, size, title, icon, onClick, font }: ButtonProps) => {
    return (
        <button
            className={clsx(
                classes.button,
                classes[`button-${type}`],
                classes[`button-${variant}`],
                classes[`button-${size}`],
                classes[`button-font-${font}`]
            )}
            onClick={onClick}
        >
            {icon && <i className={`${classes.button__icon} icon-${icon}`} />}
            {title && <span>{title}</span>}
        </button>
    );
};

export default Button;
