import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Container, Form, Logo } from "./style";
import FilledInput from "@mui/material/FilledInput";
import { Button, FormControlLabel, FormLabel, InputAdornment, Radio, RadioGroup } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { auth, db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore"
import {  createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';

const RegisterContent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Criar documento no Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        registerDate: new Date(),
        name: name,
        gender: gender,
        birth_date: date,
        // Adicione outros campos necessários
      });

      // Atualizar o nome de exibição do usuário
      await updateProfile(userCredential.user, {
        displayName: name
      });

      // Navegar para a página de login
      alert("Usuário registrado com sucesso")
      console.log("Usuário registrado e documento criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  };
  
  // Formulário aqui
  

  console.log('REGISTER montado');

  return (
    <Container>
      <div className="container">
        <div className="container2">
          <Form>
            <Logo>
              <p>Crie sua conta</p>
            </Logo>
            <FilledInput
              id="filled-adornment-weight"
              className="input"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <HiOutlineUser
                    style={{
                      color: "#dda200",
                      fontSize: "1.3rem",
                    }}
                  />
                </InputAdornment>
              }
            />
            <FilledInput
              id="filled-adornment-weight"
              className="input"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <HiOutlineUser
                    style={{
                      color: "#dda200",
                      fontSize: "1.3rem",
                    }}
                  />
                </InputAdornment>
              }
            />
            <FilledInput 
              id="filled-adornment-weight-se"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              endAdornment={
                <InputAdornment position="end">
                  <SlLock
                    style={{
                      color: "#dda200",
                      fontSize: "1.3rem",
                    }}
                  />
                </InputAdornment>
              }
            />
             <FilledInput
                id="filled-adornment-date"
                className="input"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Data de Nascimento"
                sx={{color: '#768281'}}
              />
                <RadioGroup
                  row
                  className="input"
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel value="F" control={<Radio sx={{ color: '#768281', '&.Mui-checked': { color: '#dda200' } }}/>} label="Feminino" sx={{ color: '#bdc9c8' }} />
                  <FormControlLabel value="M" control={<Radio sx={{ color: '#768281', '&.Mui-checked': { color: '#dda200' } }} />} label="Masculino" sx={{ color: '#bdc9c8' }}  />
                  <FormControlLabel value="O" control={<Radio sx={{ color: '#768281', '&.Mui-checked': { color: '#dda200' } }}/>} label="Outro" sx={{ color: '#bdc9c8' }} />
                </RadioGroup>


            <div className="bottom">
              <Button variant="contained" type="submit"onClick={onSubmit} className="buttom">
                Registrar
              </Button>
            </div>
            <div className="cad">
              <p>
                Já tem uma conta? <NavLink to='/'>Faça login.</NavLink> 
              </p>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterContent;
