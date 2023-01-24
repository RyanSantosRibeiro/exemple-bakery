import React, { useEffect } from 'react';
import './style.scss';
import image from '../../assets/img/about.jpg';
import $ from 'jquery';


const Instagram = () => {

    return  (
        <section className="instagram" id='instagram'>
            <div className="container">
                <div className='instagram__bloco-esquerda'></div>
                <div className='instagram__bloco-direita'>
                    <div className='instagram__bloco-direita__item'></div>
                    <div className='instagram__bloco-direita__item'></div>
                    <div className='instagram__bloco-direita__item'></div>
                    <div className='instagram__bloco-direita__item'></div>
                    <div className='instagram__bloco-direita__item'></div>
                </div>
            </div>
        </section>
    )
}

export default Instagram;