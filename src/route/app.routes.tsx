import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "../components/Layout";
import Dashboard from '../Pages/Dashboard/Index';
import List from '../Pages/List/Index';
// import SignIn from '../Pages/LogIn/index';
import LazyShow from '../components/LazyShow/LazyShow';
import LayoutLoginRegister from '../components/LayoutLoginRegister/index';
import SigninContent from '../Pages/Login_teste/index';
import RegisterContent from "../Pages/Register/index";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/list/:type' element={<List />} />
            </Route>
            {/* <Route>
                <Route path='/login' element={<LazyShow><SignIn /></LazyShow>} />
            </Route> */}
            <Route element={<LayoutLoginRegister />}>
                    <Route path='/login' element={<SigninContent />} />
                    <Route path='/register' element={<RegisterContent />} />
            </Route>
            
            
        </Routes>
    
    );
}

export default AppRoutes;
