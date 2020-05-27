import styled from 'styled-components'

export const Header = styled.header`
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;