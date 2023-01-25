import Header from '../components/Header';
import Footer from '../components/Footer';
import Cardapio from '../components/Cardapio';
import { useEffect, useState } from 'react';

function Menu(props) {
  

  return (
    <div className="Menu">
      <Header />
      <Cardapio data={props.data}/>
      <Footer />
    </div>
  );
}

export default Menu;