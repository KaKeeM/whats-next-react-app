import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import lightTheme from './styles/themes/light';
import Routes from './route';

const App: React.FC  = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;