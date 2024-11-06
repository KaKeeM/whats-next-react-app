import React from 'react';
import { Documento } from './types';
import { DocumentoItemContainer, Avatar, Content, Timestamp } from './styled';

interface DocumentoItemProps {
  doc: Documento;
}

const DocumentoItem: React.FC<DocumentoItemProps> = ({ doc }) => {
    const timestamp = doc.timestamp ? new Date(doc.timestamp.seconds * 1000) : null;
    const timeString = timestamp ? timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

    return (
      <DocumentoItemContainer className="documento-item">
        <Avatar className='Avatar'> 
          <img src={doc.avatar} alt={`${doc.name}'s avatar`} />
        </Avatar>
        <Content className='Content'>
          <h3>{doc.name}</h3>
          <p>{doc.message}</p>
        </Content>
        <Timestamp className='Timestamp'>
          <p> {timeString}</p>
        </Timestamp>
      </DocumentoItemContainer>
    );
  };
  
export default DocumentoItem;