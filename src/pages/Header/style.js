import styled from 'styled-components'


export const Header = styled.header`
  background-image: url(${props => props.background});
  background-color: #372210;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  div{
    width: 70vw;
  }
  @media (min-width: 360px){
    div{
      width: 90vw;
    }
  }
  h1{
    font-family: 'AvenirBold';
  }

  p{
    font-family: 'AvenirRegular-500';
    margin: auto;
  }
`;