import React, { useEffect } from 'react';
import './style.scss';

import $ from 'jquery';

import logo from './../../assets/img/LogoLadyDay.png';
import circle from './../../assets/img/circle.png';
import bread from './../../assets/img/bread.png';


const Header = () => {

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 150) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    }
    
    useEffect(() => {
        window.onscroll = () => handleScroll()
    },[]);
    

    return  (
        <div className="header" id='header'>
            {/* <div className='header__button'>
                <img src={circle} alt="Padaria"/>
                <div className='header__button__text'>
                    <p>Faça Seu Dedido</p>
                    <img src={bread} alt="Padaria"/>
                </div>
            </div> */}
            <div className='container'>
                <div className='header__logo'>
                    <a href='/'>
                        <img src={logo} alt="Padaria"/>
                    </a>
                </div>

                <ul className='header__menu'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#wedding'>Logística</a></li>
                    <li><a href='#birthday'>Serviços</a></li>
                    <li><a href='#birthday'>Comércio</a></li>
                    <li className='highlight'><a href='#birthday'>Contato</a></li>
                    {/* <li className='highlight'><a href='#contact'>Contact</a></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;