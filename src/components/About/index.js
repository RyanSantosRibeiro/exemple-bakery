import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets//img/fundoAbout.png';
import $ from 'jquery';


const About = () => {

    return  (
        <section className="about" id='about'>
            <div className="container">
                <div className='about__left'>
                    <div className='about__left__text'>
                        <h2 className='default-title'>Sobre</h2>
                        <p className='about__left__text--p'>A “Lady Day” é uma empresa no ramo de panificações que assumiu o desafio de atuar 
                            numa área ocupada por grandes empresas, prestando um serviço voltado a qualidade e excelência no atendimento ao cliente, trazendo ao 
                            mercado um modelo de atuação diferenciado, prático e objetivo, com base em resultados com 
                            profissionalismo e comprometimento.</p>
                                <p className='about__left__text--p'>a Lady Day tem como missão colocar à disposição produtos 
                                de alta qualidade e ótima relação custo/benefício. Unindo tradição e juventude, nos preocupamos
                                com qualidade e inovação, respeitando nossos clientes e procurando atende-los da melhor maneira possível.
                                                                                         
                            </p>
                        <p className='about__left__text--highlight'><b>CIA Lady Day</b></p>
                    </div>
                </div>
                <div className='about__right'>
                    <img  src={image} alt='' />
                </div>
            </div>
        </section>
    )
}

export default About;