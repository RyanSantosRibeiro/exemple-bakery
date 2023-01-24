import React, { useEffect, useState } from 'react';
import './style.scss';

import bg from '../../assets/img/background.jpg';

const Banner = () => {
    /*const [active,setActive] = useState(0);
    const [background,setBackground] = useState([
        bg,
        bg2
    ]);


    function prevBanner(){
        if(active === 0) return;

        setActive(active - 1);
    }

    function nextBanner(){
        console.log(background)
        if(active + 1 >= background.length) return;

        setActive(active + 1);
    }*/
    
    useEffect(() => {

    },[]);
    return  (
        <section className="banner active1" id='banner'>
            <img alt='' className='banner__image' src={bg} />
            <div className='banner__services'>
                <p className='banner__services__title'>Logistica</p>
                <p className='banner__services__title'>Serviços</p>
                <p className='banner__services__title'>Comercio</p>
                <p className='banner__services__text'>A “Imperium Serviços, Logística e Comércio” é uma empresa que assumiu o desafio de atuar 
                    numa área ocupada por grandes empresas, trazendo ao 
                    mercado um modelo de atuação diferenciado.</p>
                <div className='banner__services__buttons'>
                    <a href='/'>Serviços</a>
                    <a href='/'>ou entre em contato</a>
                </div>
            </div>
            {/* <div className='banner__button'>
                <a href='#about'>
                    <span>
                        Make a book
                    </span> 
                </a>
            </div> */}
            {/* <div className='banner__arrow'>
                <img onClick={prevBanner} src={arrowLeft} className='banner__arrow--left' alt='' />
                <p>{active + 1}</p>
                <img onClick={nextBanner} src={arrowRight} className='banner__arrow--right' alt='' />
            </div> */}
        </section>
    )
}

export default Banner;