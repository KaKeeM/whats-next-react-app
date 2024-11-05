import React, { useMemo, useEffect, useState } from "react";
import { Container, Profile, Welcome, UserName } from './styles';
import emojis from '../../util/emojis';
import Toggle from '../Toggle';
import { auth } from '../../firebase';

const MainHeader: React.FC = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'Usuário');
    }
  }, []);

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    const emo = emojis[index];
    return emo;
  }, []);

  return (
    <Container>
      <Toggle/>
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>{userName}</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;
