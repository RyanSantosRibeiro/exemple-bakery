import React, { useEffect } from 'react';
import './style.scss';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import $ from 'jquery';


const Services = () => {


    const sendMessage = (e) => {
        console.log(e);
    }
    

    return  (
        <section className="services" id='services'>
            <div className='container'>
                <h2 className='default-title'>Atuamos</h2>
            </div>
            <div className="container">
                <div className='services__modal'>
                    <h4>Serviços</h4>
                    <div className='services__social'>
                    </div>
                    <a href='/' onClick={sendMessage()} className='services__modal__action'>Ver Mais!</a>
                </div>
                <div className='services__modal'>
                    <h4>Logística</h4>
                    <p>Send me an email: <br></br><br></br> <b> lorem.ipsum@ipsum.com</b></p>
                    <a href='/' onClick={sendMessage()} className='services__modal__action'>Ver Mais!</a>
                </div>
                <div className='services__modal'>
                    <h4>Comércio</h4>
                    <p>Send me an email: <br></br><br></br> <b> lorem.ipsum@ipsum.com</b></p>
                    <a href='/' onClick={sendMessage()} className='services__modal__action'>Ver Mais!</a>
                </div>
            </div>
        </section>
    )
}

export default Services;