import React, { useEffect, useState } from 'react';
import './style.scss';

import bg from '../../assets/img/background.jpg';
import logo from './../../assets/img/LogoLadyDay.png';
import { Link } from 'react-router-dom';

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
    
                <p className='banner__services__title'>Lady Day</p>
                <p className='banner__services__text'>Padaria - Confeitaria - Lanchonete</p>
                
                <div className='banner__services__box'>

                    <p className='banner__services__box__title'>Missão e Lore</p>
                    <p className='banner__services__box__text'>A Lady Day tem como missão colocar à disposição produtos 
                                de alta qualidade e ótima relação custo/benefício.</p>
                                <img alt='' className='banner__services__image' src={logo} />
                </div>
                
                <div className='banner__services__buttons'>
                    <Link to='/exemple-bakery/menu'>Cardápio</Link>
                    <a href='#contact'>ou entre em contato</a>
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