import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "../components/Layout";
import Dashboard from '../Pages/Dashboard/Index';
import List from '../Pages/List/Index';
import SignIn from '../Pages/LogIn/index';
import LazyShow from '../components/LazyShow/LazyShow';
import LoginRegisterLayout from '../components/LoginRegisterLayout/index';
import SigninContent from '../components/Login/index';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/list/:type' element={<List />} />
            </Route>
            <Route>
                <Route path='/login' element={<LazyShow><SignIn /></LazyShow>} />
            </Route>
            <Route element={<LoginRegisterLayout/>}>
                <Route path='/login_teste' element={<SigninContent/>}/> 
            </Route>
        </Routes>
    
    );
}

export default AppRoutes;
