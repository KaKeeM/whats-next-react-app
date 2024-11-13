import React from 'react';
import { Documento } from './types';
import { DocumentoItemContainer, Avatar, Content, Timestamp } from './styled';
import { useNavigate } from 'react-router-dom';

interface DocumentoItemProps {
  doc: Documento;
}
const isValidUrl = (string: string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

const DocumentoItem: React.FC<DocumentoItemProps> = ({ doc }) => {
    const timestamp = doc.timestamp ? new Date(doc.timestamp.seconds * 1000) : null;
    const timeString = timestamp ? timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
    const navigate = useNavigate();

    const handleNameClick = () => {
      navigate(`/chats/${doc.id}`);
    };
    
    return (
      <DocumentoItemContainer className="documento-item">
        <Avatar className='Avatar'> 
        {isValidUrl(doc.avatar) ? (
          <img src={doc.avatar} alt={`${doc.name}'s avatar`} />
        ) : (
          <img src='https://www.shutterstock.com/image-vector/error-500-page-empty-symbol-260nw-1711106146.jpg' alt='imagem nao encontrAada'/>
        )}
        </Avatar>
        <Content className='Content'>
          <h3 onClick={handleNameClick} style={{ cursor: 'pointer' }}>{doc.name}</h3>
          <p>{doc.message}</p>
        </Content>
        <Timestamp className='Timestamp'>
          <p> {timeString}</p>
        </Timestamp>
      </DocumentoItemContainer>
    );
  };
  
export default DocumentoItem;