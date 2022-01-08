import React from 'react';
import { Routes, Route } from "react-router-dom";
import { IntroPage } from './components/IntroPage/introPage';
import { PrivateRoute } from './components/services/private-route';
import { Home } from './components/home/homepage';
import { Wood, Beam, Board, Pole } from './components/wood-furniture-Page/woodpage';
import { Furniture, DoublePanel, SinglePanel } from './components/wood-furniture-Page/furniturePage';
import { Admin, NewFurniture, NewWood } from './components/admin/admin';
import './App.css';

const App = () => {
    return(
        <div>
            <Routes>
                <Route path={'/'} element={<IntroPage/>}/>
                <Route path={'/homepage'} element={<PrivateRoute><Home/></PrivateRoute>}/>
                <Route path={'/homepage/wood'} element={<PrivateRoute><Wood/></PrivateRoute>}/>
                <Route path={'/homepage/wood/beam'} element={<PrivateRoute><Beam/></PrivateRoute>}/>
                <Route path={'/homepage/wood/board'} element={<PrivateRoute><Board/></PrivateRoute>}/>
                <Route path={'/homepage/wood/pole'} element={<PrivateRoute><Pole/></PrivateRoute>}/>
                <Route path={'/homepage/furniture'} element={<PrivateRoute><Furniture/></PrivateRoute>}/>
                <Route path={'/homepage/furniture/singlepanel'} element={<PrivateRoute><SinglePanel/></PrivateRoute>}/>
                <Route path={'/homepage/furniture/doublepanel'} element={<PrivateRoute><DoublePanel/></PrivateRoute>}/>
                <Route path={'/admin'} element={<PrivateRoute><Admin/></PrivateRoute>}/>
                <Route path={'/admin/addwood'} element={<PrivateRoute><NewWood/></PrivateRoute>}/>
                <Route path={'/admin/addfurniture'} element={<PrivateRoute><NewFurniture/></PrivateRoute>}/>
            </Routes>
        </div>
    )
}   

export default App;