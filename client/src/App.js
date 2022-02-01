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
                <Route path={'/homepage'} element={<PrivateRoute><Home/></PrivateRoute>}/>
                <Route path={'/homepage/wood'} element={<PrivateRoute><Wood/></PrivateRoute>}/>
                <Route path={'/homepage/checkout'} element={<PrivateRoute><CheckoutPage/></PrivateRoute>}/>
                <Route path={'/homepage/wood/beam'} element={<PrivateRoute><Beam/></PrivateRoute>}/>
                <Route path={'/homepage/wood/board'} element={<PrivateRoute><Board/></PrivateRoute>}/>
                <Route path={'/homepage/wood/pole'} element={<PrivateRoute><Pole/></PrivateRoute>}/>
                <Route path={'/homepage/furniture'} element={<PrivateRoute><Furniture/></PrivateRoute>}/>
                <Route path={'/homepage/furniture/singlepanel'} element={<PrivateRoute><SinglePanel/></PrivateRoute>}/>
                <Route path={'/homepage/furniture/doublepanel'} element={<PrivateRoute><DoublePanel/></PrivateRoute>}/>
            </Routes>
        </div>
    )
}   

export default App;