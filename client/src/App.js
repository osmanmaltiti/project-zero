import React from 'react';
import { Routes, Route } from "react-router-dom";
import { IntroPage } from './components/introPage';
import { PrivateRoute } from './services/private-route';
import { Home } from './components/homepage';
import { Wood, Beam, Board, Pole } from './components/woodpage';
import { Furniture, DoublePanel, SinglePanel } from './components/furniturePage';
import './App.css';
import CheckoutPage from './components/checkoutPage';

const App = () => {
    return(
        <div>
            <Routes>
                <Route path={'/'} element={<IntroPage/>}/>
                <Route path={'/homepage'} element={<Home/>}/>
                <Route path={'/homepage/wood'} element={<Wood/>}/>
                <Route path={'/homepage/checkout'} element={<CheckoutPage/>}/>
                <Route path={'/homepage/wood/beam'} element={<Beam/>}/>
                <Route path={'/homepage/wood/board'} element={<Board/>}/>
                <Route path={'/homepage/wood/pole'} element={<Pole/>}/>
                <Route path={'/homepage/furniture'} element={<Furniture/>}/>
                <Route path={'/homepage/furniture/singlepanel'} element={<SinglePanel/>}/>
                <Route path={'/homepage/furniture/doublepanel'} element={<DoublePanel/>}/>
            </Routes>
        </div>
    )
}   

export default App;