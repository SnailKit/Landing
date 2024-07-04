'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './style.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathName = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add(classes.no__scroll);
        } else {
            document.body.classList.remove(classes.no__scroll);
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}>
            <div className={classes.header__content}>
                <div className={classes.logo}>
                    <Image src="/images/logo.svg" alt="Logo Cuberium" width={265} height={34} />
                </div>
                <ul className={classes.navigation}>
                    <Link href="/" className={`${classes.navigation__link} ${pathName.startsWith('/referrals') && classes.navigation__link__active}`}>
                        Referrals
                    </Link>
                    <Link href="/" className={`${classes.navigation__link} ${pathName.startsWith('/litepaper') && classes.navigation__link__active}`}>
                        Litepaper
                    </Link>
                </ul>
                <div className={classes.burger} onClick={toggleMenu}>
                    <span className={`${classes.burger__line} ${isMenuOpen ? classes.burger__cross : ''}`} />
                    <span className={`${classes.burger__line} ${isMenuOpen ? classes.burger__cross : ''}`} />
                    <span className={`${classes.burger__line} ${isMenuOpen ? classes.burger__cross : ''}`} />
                </div>
                <div className={`${classes.mobile__menu} ${isMenuOpen && classes.mobile__menu__opened}`}>
                    <ul className={classes.mobile__items}>
                        <Link href="/" className={classes.link}>
                            Referrals
                        </Link>
                        <Link href="/" className={classes.link}>
                            Litepaper
                        </Link>
                    </ul>
                </div>
            </div>
        </header>
    );
};
export default Header;
