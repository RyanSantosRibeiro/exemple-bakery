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
                </div>
                <div className='footer__menu'>
                    <h4>Contato</h4>
                    <a href='https://api.whatsapp.com/send?phone=5521964716626&text=Ol%C3%A1%20Padaria%20Lady%20Dai,%20Gostaria%20de%20fazer%20um%20pedido!'>Whatsapp: <b>(21) 9 6471-6626</b></a>
                    <p>Telefone: <b>(21)2639-0154</b></p>
                    <a href='https://www.instagram.com/ladyday_ita/'>Instagram: <b>@ladyday_ita</b></a>
                </div>
                <div className='footer__menu'>
                    <h4>Cardápio</h4>
                    <a href='/'>Kit Festas</a>
                    <a href='/'>Tortas</a>
                    <a href='/'>Lanchonete</a>
                </div>
            </div>
            <div className="develop">
                <p>Develop by: <a href='https://github.com/RyanSantosRibeiro'>Ryan Santos & Ramom Rangel</a></p>
            </div>
        </section>
    )
}

export default Footer;
