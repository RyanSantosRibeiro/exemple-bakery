import './App.css';
import './scss/reset.scss';
import './scss/all.scss';

import itemsMenu from './data/menu.json';
import itemsFestas from './data/kit-festa.json';
import itemsTortas from './data/torta.json';

import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from './pages/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu data={itemsMenu}/>} />
        <Route path="/kit-festas" element={<Menu data={itemsFestas}/>} />
        <Route path="/tortas" element={<Menu data={itemsTortas}/>} />

        {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
