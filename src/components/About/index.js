import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/about.jpg';
import $ from 'jquery';


const About = () => {

    return  (
        <section className="about" id='about'>
            <div className="container">
                <div className='about__left'>
                    <div className='about__left__text'>
                        <h2 className='default-title'>Sobre</h2>
                        <p className='about__left__text--p'>A “Imperium Serviços, Logística e Comércio” é uma empresa que assumiu o desafio de atuar 
                            numa área ocupada por grandes empresas, prestando apoio multidisciplinar às empresas, trazendo ao 
                            mercado um modelo de atuação diferenciado, prático e objetivo, com base em resultados com 
                            profissionalismo e comprometimento.</p>
                                                    <p className='about__left__text--p'>A sua atuação tem como foco aliar os conhecimentos de 
                            consultoria e assessoria administrativa, definindo as coordenadas para a eficiente gestão de processos à 
                            ferramenta gerencial dos mais diversos ramos de atuação, como comércio, indústria, prestação de 
                            serviços e etc.
                            </p>
                        <p className='about__left__text--highlight'><b>Lorem Ipsum</b></p>
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