import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { Documento } from '../Missoes/types';
import DocumentoItem from '../Missoes/index';
import { Container, MenuItemLink, SubTitle } from './style';
import { MdAdd } from 'react-icons/md';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const ListaMissoes: React.FC = () => {
  const [documentos, setDocumentos] = useState<Documento[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <Container>
        <SubTitle>
          <h2> Missões </h2> 
        </SubTitle>
          <MenuItemLink onClick={handleClickOpen}>
            <MdAdd/>
          </MenuItemLink>
      </Container>

      <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Adicionar Missão</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Nome da missão"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            name="description"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Criar missão</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
      <div className="MenuItemLink">
        {documentos.map((doc) => (
          <DocumentoItem key={doc.id} doc={doc} />
        ))}
      </div>
      
    </div>
  );
};

export default ListaMissoes;