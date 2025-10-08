import React, { useState, useEffect } from 'react';

// Import assets
import logo from '../assets/icons/logo.svg';
import burgerIconPath from '../assets/icons/Frame 372.svg';
import closeIconPath from '../assets/icons/Frame 373.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1160) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="container header__container">
                <a href="#" className="logo">
                    <img src={logo} alt="SPARTSPRO Logo" />
                </a>

                {/* Desktop Navigation */}
                <nav className="nav" id="desktop-nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">ГЛАВНАЯ</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">КАТАЛОГ</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">О КОМПАНИИ</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">ОПЛАТА И ДОСТАВКА</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">КОНТАКТЫ</a></li>
                    </ul>
                </nav>

                {/* Mobile Burger Menu Button */}
                <button className="burger" id="burger-btn" onClick={toggleMenu}>
                    <img src={isMenuOpen ? closeIconPath : burgerIconPath} alt="Menu" id="burger-icon" />
                </button>
            </div>

            {/* Mobile Navigation Panel (hidden by default) */}
            <div className="mobile-nav" id="mobile-nav" style={{ display: isMenuOpen ? 'block' : 'none' }}>
                <ul className="mobile-nav__list">
                    <li className="mobile-nav__item"><a href="#" className="mobile-nav__link">ГЛАВНАЯ</a></li>
                    <li className="mobile-nav__item"><a href="#" className="mobile-nav__link">КАТАЛОГ</a></li>
                    <li className="mobile-nav__item"><a href="#" className="mobile-nav__link">О КОМПАНИИ</a></li>
                    <li className="mobile-nav__item"><a href="#" className="mobile-nav__link">ОПЛАТА И ДОСТАВКА</a></li>
                    <li className="mobile-nav__item"><a href="#" className="mobile-nav__link">КОНТАКТЫ</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;