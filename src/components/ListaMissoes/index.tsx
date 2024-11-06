import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { Documento } from '../Missoes/types';
import DocumentoItem from '../Missoes/index';
import { subTitle } from './style';
const ListaMissoes: React.FC = () => {
  const [documentos, setDocumentos] = useState<Documento[]>([]);

  useEffect(() => {
    if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const colecaoRef = collection(db, `users/${userId}/MyMissions`);
  
        const unsubscribe = onSnapshot(colecaoRef, (snapshot) => {
          const listaDocs = snapshot.docs.map((doc) => {
            const data = doc.data() as Omit<Documento, 'id'>; // Omite o campo 'id' temporariamente
            return { id: doc.id, ...data } as Documento; // Adiciona o campo 'id' de volta
          });
          setDocumentos(listaDocs);
        });

        return () => unsubscribe();
      }
    }, []);

  return (
    <div>
      <h2> Missões </h2>

      <div className="MenuItemLink">
        {documentos.map((doc) => (
          <DocumentoItem key={doc.id} doc={doc} />
        ))}
      </div>
      
    </div>
  );
};

export default ListaMissoes;