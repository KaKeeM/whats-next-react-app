import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Container, Form, Logo } from "./style";
import FilledInput from "@mui/material/FilledInput";
import { Button, InputAdornment } from "@mui/material";
import { HiOutlineUser } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { useAuth } from "../../hooks/auth";

const SigninContent: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { signIn } = useAuth();

    function onSubmit (event: { preventDefault: () => void; }){
      event.preventDefault();
      
      try {
          signIn(email, password);
      } catch (error) {
      }
  }

    console.log('SigninContent montado');

    return (
        <Container>
            <div className="container">
                <div className="container2">
                    <Form onSubmit={onSubmit}>
                        <Logo>
                            <p>Login</p>
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
                            <Button variant="contained" type="submit" onClick= {onSubmit}className="buttom">
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
                                Ainda não tem conta? <NavLink to='/register'>Cadastre-se.</NavLink> 
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default SigninContent;
