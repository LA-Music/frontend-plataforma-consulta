import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: #151515;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  font-size: calc(10px + 2vmin);
  
  color: white;

  @media(min-width: 600px) {
    padding: 3rem 0;
  }
`;