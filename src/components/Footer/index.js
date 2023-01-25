import React from 'react';
import './style.scss';

import logo from './../../assets/img/LogoLadyDay.png';

const Footer = () => {

    return  (
        <section className="footer" id='footer'>
            <div className="container ">
                <div className='footer__logo'>
                    <a href='/'>
                        <img src={logo} alt="Padaria"/>
                    </a>
                </div>
                <div className='footer__menu'>
                    <h4>Endereço</h4>
                    <p>Av. Antônio Gomes, 1770 - Nova Cidade Itaboraí - RJ 24804-171</p>
                    <p> Segunda a Sábados - De <b>7:00</b> às <b>20:00</b>.</p>
                    <p>Domingos - De <b>7:00</b> às <b>13:00</b></p>
                    <p>Lorem Ipsum</p>
                </div>
                <div className='footer__menu'>
                    <h4>Social</h4>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>
                <div className='footer__menu'>
                    <h4>Social</h4>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className="develop">
                <p>Develop by: <a href='https://github.com/RyanSantosRibeiro'>Ryan Santos & Ramom Rangel</a></p>
            </div>
        </section>
    )
}

export default Footer;