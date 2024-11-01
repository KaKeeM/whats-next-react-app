import React from "react";
import { Grid } from './styles';
import LoginAside from "../LoginAside";
import SigninContent from '../Login';

// FC é functional component (componente funcional)
const LoginRegisterLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Grid>
            <LoginAside/>
            <SigninContent>
                {children}
            </SigninContent>
        </Grid>
    );
}

export default LoginRegisterLayout;
