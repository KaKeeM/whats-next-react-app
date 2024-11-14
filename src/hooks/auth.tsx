import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { auth } from '../firebase'; // Importando a configuração do Firebase
import {  signInWithEmailAndPassword  } from 'firebase/auth';


interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(false);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLogged(!!user);
        });

        return () => unsubscribe();
    }, []);

    const signIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setLogged(true);
        } catch (error) {
            alert('Senha ou usuário inválidos!');
        }
    }

    const signOut = async () => {
        
        try {
            await auth.signOut();
            
            setLogged(false);
        } catch (error) {
            console.error('Erro ao sair:', error);
        }
        
    }

    return (
        <AuthContext.Provider value={{ logged, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
