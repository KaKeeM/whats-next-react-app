import React, { useMemo, useEffect, useState } from "react";
import { Container, Profile, Welcome, UserName } from './styles';
import emojis from '../../util/emojis';
import Toggle from '../Toggle';
import { auth } from '../../firebase';
import { useTheme } from '../../hooks/theme';

const MainHeader: React.FC = () => {
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'Usuário');
    }
  }, []);
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
}

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    const emo = emojis[index];
    return emo;
  }, []);

  return (
    <Container>
         <Toggle
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>{userName}</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;
