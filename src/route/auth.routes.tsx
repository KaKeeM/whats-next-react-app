import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import LazyShow from '../components/LazyShow/LazyShow';
import LayoutLoginRegister from '../components/LayoutLoginRegister';
import SigninContent from '../Pages/Login';
import RegisterContent from '../Pages/Register';

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route element={<LazyShow><LayoutLoginRegister /></LazyShow>}>
            <Route path='/' element={<SigninContent />} />
            <Route path='/register' element={<RegisterContent />} />
        </Route>
    </Routes>
);

export default AuthRoutes;