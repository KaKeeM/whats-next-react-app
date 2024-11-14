import React, {  useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content } from './styles';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { Documento } from '../../components/Missoes/types';
import { auth, db } from '../../firebase';
import 'react-chat-elements/dist/main.css';


const Chats: React.FC = () => {
    const { type } = useParams<{ type: string }>();

    const [documentos, setDocumentos] = useState<Documento[]>([]);

    useEffect(() => {
      if (auth.currentUser) {
          const userId = auth.currentUser.uid;
          const docRef = doc(db, `users/${userId}/MyMissions/${type}`);
          const colecaoRef = collection(docRef, 'mensagem');
          
          const unsubscribe = onSnapshot(colecaoRef, (snapshot) => {
              const listaDocs = snapshot.docs.map((doc) => {
                  const data = doc.data() as Omit<Documento, 'id'>;
                  return { id: doc.id, ...data } as Documento;
              });
              
              setDocumentos(listaDocs);
          });
          
          return () => unsubscribe();
      } else {
          console.error("Usuário não autenticado");
      }
  }, [type]);
    

    return (
       

        <Container>
            <Content> 

                {documentos.map(item => (
                  <p>anotação: {item.message}</p>
                ))}
            </Content>
        </Container>
    );
};

export default Chats;
