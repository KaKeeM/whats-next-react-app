import React from "react";
import { Grid } from './styles';
import MainHeader from "../MainHeader";
import Content from "../Content";
import AsideRight from "../AsideRight";
import AsideLeft from "../AsideLeft";

// FC é functional component (componente funcional)
const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Grid>
            <MainHeader /> 
            <AsideLeft />
            <AsideRight />
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

export default Layout;
