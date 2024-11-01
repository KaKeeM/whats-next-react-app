import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { Container, Form, Logo } from "./style";
import FilledInput from "@mui/material/FilledInput";
import { Button, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { auth } from '../../firebase';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';

const RegisterContent: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/login")
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
      });


  }

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
              placeholder="Login"
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
            <div className="bottom">
              <Button variant="contained" type="submit"onClick={onSubmit} className="buttom">
                Login
              </Button>
              <div className="checkbox">
                <span>
                  <input type="checkbox" className="input-checkbox" />
                </span>
                <p>Lembrar senha.</p>
              </div>
            </div>
            <div className="cad">
              <p>
                Já tem uma conta? <a><NavLink to='/login'>Faça login.</NavLink></a> 
              </p>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default RegisterContent;