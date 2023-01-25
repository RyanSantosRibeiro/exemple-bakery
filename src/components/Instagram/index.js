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
                <h2 className='default-title'>Instagram <a href='/'>@Lady Dai</a></h2>
            </div>
            <div className="container">
                <div className='instagram__bloco-esquerda'>
                    <img  src={insta01} alt='' />
                </div>
                <div className='instagram__bloco-direita'>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta02} alt='' />
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta03} alt='' />
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta04} alt='' />
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta05} alt='' />
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta06} alt='' />
                        
                    </div>
                    <div className='instagram__bloco-direita__item'>
                    <img  src={insta07} alt='' />
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instagram;