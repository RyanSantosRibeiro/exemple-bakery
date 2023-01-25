import React, { useEffect } from 'react';
import './style.scss';
import whatsapp from '../../assets/img/whatsapp.png';
import instagram from '../../assets/img/instagram.png';
import phone from '../../assets/img/phone.png';
import $ from 'jquery';


const Contact = () => {

    const active = (e) => {
        if($("#contact").offset().top - $(window).scrollTop() < 450 && !$(".contact").hasClass("animate")) {
            $(".contact").addClass("animate");
        }
    }

    const sendMessage = (e) => {
        console.log(e);
    }
    
    useEffect(() => {
        // $(window).on('scroll',()=>active());
    },[]);

    return  (
        <section className="contact" id='contact'>
            <div className='container'>
                <h2 className='default-title'>Faça Seu Pedido</h2>
            </div>
            <div className="container">
                <div className='contact__modal'>
                    <h4>Telefone</h4>
                    <div className='contact__social'>
                        <a href='https://api.whatsapp.com/send?phone=5521964716626&text=Ol%C3%A1%20Padaria%20Lady%20Dai,%20Gostaria%20de%20fazer%20um%20pedido!'>
                            <img src={whatsapp} alt=''/>
                            <span>(21) 9 6471-6626</span>
                        </a>
                        <a href='/'>
                            <img src={phone} alt=''/>
                            <span>(21)2639-0154</span>
                        </a>
                    </div>
                    <a href='https://api.whatsapp.com/send?phone=5521964716626&text=Ol%C3%A1%20Padaria%20Lady%20Dai,%20Gostaria%20de%20fazer%20um%20pedido!' className='contact__modal__action'>Ligue!</a>
                </div>
                <div className='contact__modal'>
                    <h4>Instagram</h4>
                    <div className='contact__social'>
                        <a href='https://www.instagram.com/ladyday_ita/'>
                            <img src={instagram} alt=''/>
                            <span>@ladyday_ita</span>
                        </a>
                    </div>
                    <a href='https://www.instagram.com/ladyday_ita/' onClick={sendMessage()} className='contact__modal__action'>Acessar!</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;