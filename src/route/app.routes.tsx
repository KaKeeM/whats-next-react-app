import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "../components/Layout";
import Dashboard from '../Pages/Dashboard/Index';
import List from '../Pages/List/Index';
import Chats from '../Pages/Chats/Index';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/chats/:type' element={<Chats />} />
        </Routes>
    </Layout>
)

export default AppRoutes;
