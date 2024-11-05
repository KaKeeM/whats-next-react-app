import React from 'react';
import { Documento } from './types';

interface DocumentoItemProps {
  doc: Documento;
}

const DocumentoItem: React.FC<DocumentoItemProps> = ({ doc }) => {
    const createdAt = doc.created_at ? new Date(doc.created_at.seconds * 1000).toLocaleString() : 'N/A';
    const timestamp = doc.timestamp ? new Date(doc.timestamp.seconds * 1000).toLocaleString() : 'N/A';
  
    return (
      <div className="documento-item">
        {/* <img src={doc.avatar} alt={`${doc.name}'s avatar`} /> */}
        <h3>{doc.name}</h3>
        <p><strong>Time:</strong> {doc.time}</p>
        <p><strong>Message:</strong> {doc.message}</p>
        <p><strong>Created At:</strong> {createdAt}</p>
        <p><strong>Timestamp:</strong> {timestamp}</p>
      </div>
    );
  };
  
export default DocumentoItem;
