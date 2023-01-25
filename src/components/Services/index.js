import React, { useEffect } from 'react';
import './style.scss';
import icon01 from '../../assets/img/icon-party.png';
import icon02 from '../../assets/img/icon-cake.png';
import icon03 from '../../assets/img/icon-menu.png';
import instagram from '../../assets/img/instagram.png';
import $ from 'jquery';


const Services = () => {


    const sendMessage = (e) => {
        console.log(e);
    }
    

    return  (
        <section className="services" id='services'>
            <div className='container'>
                <h2 className='default-title'>Cardápio</h2>
            </div>
            <div className="container">
                <a href='/' className='services__modal'>
                    <h4>Kit Festas</h4>
                    <img src={icon01}  alt=''/>
                    <a href='/exemple-bakery/kit-festa' onClick={sendMessage()} className='services__modal__action'>Ver Mais!</a>
                </a>
                <a href='/' className='services__modal'>
                    <h4>Tortas</h4>
                    <img src={icon02}  alt=''/>
                    <a href='/exemple-bakery/tortas' onClick={sendMessage()} className='services__modal__action'>Ver Mais!</a>
                </a>
                <a href='/' className='services__modal'>
                    <h4>Lanchonete</h4>
                    <img src={icon03}  alt=''/>
                    <a href='/exemple-bakery/menu' onClick={sendMessage()} className='services__modal__action'>Ver Mais!</a>
                </a>
            </div>
        </section>
    )
}

export default Services;