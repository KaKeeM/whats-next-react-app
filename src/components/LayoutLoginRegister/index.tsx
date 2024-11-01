import React from "react";
import { Grid } from './styles';
import LoginAside from "../LoginAside";
import Content from '../Content';
import { Outlet } from 'react-router-dom';

// FC é functional component (componente funcional)
const LoginRegisterLayout: React.FC = () => {
    return (
        <Grid>
            <LoginAside/>
            <Content>
                <Outlet/>
            </Content>
        </Grid>
    );
}

export default LoginRegisterLayout;
