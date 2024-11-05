import React from "react";
import { Routes, Route } from 'react-router-dom';
import Layout from "../components/Layout";
import Dashboard from '../Pages/Dashboard/Index';
import List from '../Pages/List/Index';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/list/:type' element={<List />} />
        </Routes>
    </Layout>
  
)

export default AppRoutes;
