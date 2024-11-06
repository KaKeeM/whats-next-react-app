import styled from 'styled-components';

export const DocumentoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px; /* 5px vertical, 10px horizontal */
  border-top: 1px solid #ccc;
  color: ${props => props.theme.colors.white};
`;

export const Avatar = styled.div`
  margin-right: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  h3 {
    font-size: 16px;
  }
  
  p {
    font-size: 14px;
  }

  flex-grow: 1;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Timestamp = styled.div`
  white-space: nowrap;
  font-size: 14px;
`;
