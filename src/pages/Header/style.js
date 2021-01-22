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

  padding-top: 100px;
  
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  
  height: 500px;

  > div{
    width: 70vw;
    
    @media (min-width: 360px){
      width: 90vw;
    }
    
    h1{
      font-family: 'AvenirBold';
    }
  
    p{
      font-family: 'AvenirRegular-500';
      margin: auto;
    }
  }
  
  
`;

export const NavBar = styled.div`
  position: fixed;
  z-index: 2;
  background: var(--secondary);

  padding: 0 3rem;

  width: 100%;
  display: flex;
  align-items: center;
  
  .logo {
    width: 200px;
    margin: 1.5rem 0;

    @media(min-width:1000px) {
      width: initial;
    }
  }

  ul {
    display: none;
    
    list-style: none;
    margin-left: auto;
    margin-right: 100px;
  
    @media(min-width:1000px) {
      display: flex;
    }
    
    li {
      margin: 0 1.5rem;

      a {
        cursor: pointer;

        font-size: 14px;
        font-weight: 700;
        color: var(--white);
  
        &:hover {
          color: var(--white);
          opacity: 0.8;
          
        }
      }

      ul {
        display: none;
        position: absolute; 
      
        width: 300px; 
        background: var(--white); 
        padding: 1.5rem !important;
      
        border-radius: 4px;

        li {
          margin: 0.5rem 0 !important;
          a {
            color: var(--primary);
          }
        }
      }

      &:hover {
        ul {
          display: flex;
        }
      }
    }
  }

 .menu {
    margin-left: auto;


    @media(min-width: 1000px) {
      display: none;
    }
  }
`;

export const MenuMobile = styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    display: ${props => props.toggle ? 'flex' : 'none'};
    background: var(--secondary);
    
    list-style: none;
    padding-top: 100px;
    z-index: 3;

    @media(min-width: 1000px) {
      display: none;
    }
    
    li {
      margin: 0 1.5rem;
      text-align: center;

      a {
        cursor: pointer;

        font-size: 14px;
        font-weight: 700;
        color: var(--white);

        &:hover {
          color: var(--white);
          opacity: 0.8;
        }
      }

      ul {
        display: none;
        list-style: none;

        width: 300px; 
      
        border-radius: 4px;

        li {
          &:nth-child(n+1) {
            padding: 0.5rem 0 !important;
          }

          a {
            color: var(--white);
          }

        }
      }

      &:hover {
        ul {
          display: flex;
        }
      }
    }
`;