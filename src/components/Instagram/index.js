import React, { useEffect } from 'react';
import './style.scss';
import background from '../../assets/img/background-insta.jpg';
import insta01 from '../../assets/img/insta01.jpg';
import insta02 from '../../assets/img/insta02.jpg';
import insta03 from '../../assets/img/insta03.jpg';
import insta04 from '../../assets/img/insta04.jpg';
import insta05 from '../../assets/img/insta05.jpg';
import insta06 from '../../assets/img/insta06.jpg';
import insta07 from '../../assets/img/insta07.jpg';

import $ from 'jquery';


const Instagram = () => {

    return  (
        <section className="instagram" id='instagram' style={{ backgroundImage: `url(${background})`}}>
            <div className='container'>
                <h2 className='default-title'>Instagram <a href='https://www.instagram.com/ladyday_ita/'>@Lady Day</a></h2>
            </div>
            <div className="container">
                <div className='instagram__bloco-esquerda'>
                    <img  src={insta01} alt='' />
                    <div className='instagram__text'>
                        <p className='instagram__name'>Colomba Pavê Natalino</p>
                        <p className='instagram__description'>Esse delicioso doce nos sabores chocolate, chocolate com creme branco e limão</p>

                    </div>
                </div>
                <div className='instagram__bloco-direita'>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta02} alt='' />
                    <div className='instagram__text'>
                        <p className='instagram__name'>Lady Cupcakes</p>
                        <p className='instagram__description'>É um pequeno e delicioso bolo com fantástico de sabor, já encomendou o seu ?</p>

                    </div>
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta03} alt='' />
                    <div className='instagram__text'>
                        <p className='instagram__name'>Bauru</p>
                        <p className='instagram__description'>Um maravilhoso salgado recheado de carne, queijo e presunto.</p>

                    </div>
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta04} alt='' />
                    <div className='instagram__text'>
                        <p className='instagram__name'>Torta de Chocolate</p>
                        <p className='instagram__description'>Esta é a fantastistica torta de chocolate com cereja.</p>

                    </div>
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta05} alt='' />
                    <div className='instagram__text'>
                        <p className='instagram__name'>Cake de Chocolate com Côco</p>
                        <p className='instagram__description'>A mistura perfeita, Chocolate com côco</p>

                    </div>
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta06} alt='' />
                    <div className='instagram__text'>
                        <p className='instagram__name'>Torta de Creme</p>
                        <p className='instagram__description'>A mais indicada</p>

                    </div>
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta07} alt='' />
                    <div className='instagram__text'>
                        <p className='instagram__name'>Ballerine</p>
                        <p className='instagram__description'>Ballerine de Churros e de redvelvet.</p>

                    </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instagram;