import React from "react";
import { Grid } from './styles';
import LoginAside from "../LoginAside";
import LoginContent from '../LoginContent';
import { Outlet } from 'react-router-dom';

// FC é functional component (componente funcional)
const LoginRegisterLayout: React.FC = () => {
    return (
        <Grid>
            <LoginAside/>
            <LoginContent>
                <Outlet/>
            </LoginContent>
        </Grid>
    );
}

export default LoginRegisterLayout;
