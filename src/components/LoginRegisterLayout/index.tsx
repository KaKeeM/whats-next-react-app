import React from "react";
import { Grid } from './styles';
import MainHeader from "../MainHeader";
import Content from "../Content";
import Aside from "../Aside";
import SigninContent from '../Login';

// FC é functional component (componente funcional)
const LoginRegisterLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Grid>
            <Aside/>
            <SigninContent>
                {children}
            </SigninContent>
        </Grid>
    );
}

export default LoginRegisterLayout;
