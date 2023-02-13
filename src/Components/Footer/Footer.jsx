import React from 'react';
import "./Footer.scss"

import linkedin from "../../Assets/Images/linkedin.svg"
import twitter from "../../Assets/Images/twitter.svg"
import facebook from "../../Assets/Images/facebook.svg"
import instagram from "../../Assets/Images/instagram.svg"
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-top'>
                <div className="container footer-top__container">
                    <ul className='footer-top__list'>
                        <li className='footer-top__item'>
                            <NavLink
                                to="/contact"
                                className='footer-top__link'>
                                О нас
                            </NavLink>
                        </li>
                        <li className='footer-top__item'>
                            <NavLink
                                to="/product"
                                className='footer-top__link' >
                                Продукты
                            </NavLink>
                        </li>
                        <li className='footer-top__item'>
                            <NavLink
                                to="/portfolio"
                                className='footer-top__link'>
                                Портфолио
                            </NavLink>
                        </li>
                        <li className='footer-top__item'>
                            <NavLink
                                to="/article"
                                className='footer-top__link'>
                                Статья
                            </NavLink>
                        </li>
                        <li className='footer-top__item'>
                            <NavLink
                                to="/contact"
                                className='footer-top__link'>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>

                    <ul className='footer-top__networks__list'>
                        <li className='footer-top__networks__item'>
                            <a className='footer-top__networks__link footer-top__networks-tell' href="tel:+998951224472">
                                +998 95 122 44 72
                            </a>
                        </li>
                        <li className='footer-top__networks__item'>
                            <a className='footer-top__networks__link'
                                href="https://www.linkedin.com/in/tohir-doniyorov-1b7540231/#experience"
                                target="_blank">

                                <img src={linkedin} alt="Linkedin logo img" />
                            </a>
                        </li>
                        <li className='footer-top__networks__item'>
                            <a className='footer-top__networks__link' href="https://twitter.com"
                                target="_blank">

                                <img src={twitter} alt="Linkedin logo img" />
                            </a>
                        </li>
                        <li className='footer-top__networks__item'>
                            <a className='footer-top__networks__link' href="https://facebook.com"
                                target="_blank">
                                <img src={facebook} alt="Linkedin logo img" />
                            </a>
                        </li>
                        <li className='footer-top__networks__item'>
                            <a className='footer-top__networks__link' href="https://instagram.com"
                                target="_blank">
                                <img src={instagram} alt="Linkedin logo img" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className="container footer-bottom__container">
                    <div className='footer-bottom__wrapper'>
                        <p className='footer-bottom__title'>
                            Copyright: 2022
                        </p>
                        <ul className='footer-bottom__list'>
                            <li className='footer-bottom__item'>
                                <a className='footer-bottom__link' href="#">
                                    Условия использование
                                </a>
                            </li>
                            <li className='footer-bottom__item'>
                                <a className='footer-bottom__link' href="#">
                                    Политика конфиденциальности
                                </a>
                            </li>
                        </ul>
                    </div>

                    <p className='footer-bottom__logos'>
                        Design by:

                        <NavLink
                            to="/"
                            className='footer-bottom__logo'>
                            Getter
                        </NavLink>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
