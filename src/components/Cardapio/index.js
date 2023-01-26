import React, { useEffect, useState } from 'react';
import './style.scss';

import $ from 'jquery';
import bg from '../../assets/img/background.jpg';


const Cardapio = ({data}) => {

    console.log(data.category.length / 2);

    const ListItems = (item) => {


        if(!item || item === []) {
            return (<>Produto invalido</>);
        }

        return (
        <div className='cardapio__item'>
            <h2>{item.name}</h2>
            <div className='cardapio__item__product-list'>
                {
                    item.items.map((product,key) => 
                    <div className='cardapio__item__product-list__item' key={key}>
                        <p className='info'>
                            <span className='name'>{product.name}</span>
                            <span className='description'>{product.description}</span>
                        </p>
                        {
                            product.price != 0 ?
                            <p className='price'>
                            {`R$ ${(product.price / 100).toFixed(2)}`}
                            </p>
                            :
                            <></>
                        }
                    </div>
                    )
                }
            </div>
                {
                    item.total != 0 ?
                    <p className='total'>
                    {`Total: R$ ${(item.total / 100).toFixed(2)}`}
                    </p>
                    :
                    <></>
                }
        </div>
        );
    }

    return  (
        <section className="cardapio" id='cardapio' style={{ backgroundImage:`url(${bg})` }}>
            <div className="container">
                <div className='cardapio__title'>_ {data.name} _</div>
                <div className='cardapio__list'>
                    <div className='cardapio__list-col1'>
                        { data != undefined ? data.category.map((item,i) => {if(i < Math.round(data.category.length / 2)) return ListItems(item)}) : <></>}
                    </div>
                    <div className='cardapio__list-col2'>
                        { data != undefined ? data.category.map((item,i) => {if(i > Math.round(data.category.length / 2) - 1) return ListItems(item)}) : <></>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cardapio;