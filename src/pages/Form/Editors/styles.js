import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;

  width: 587px;
  /* height: 728px; */
  padding: 3rem;

  h1 {
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;

    color: #0B0B0B;
  }

  label {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    
    color: #0B0B0B;
  }

  input {
    height: 59px;
  }

  button {
    width: 100%;
    height: 59px;
    padding: 0.5rem 0;

    background: #0FBB00;
    border-radius: 4px;
    border: none;
    
    &:hover {
      border: none;
      background: #0FBB00;

      opacity: 0.8;
    }
  }
`;