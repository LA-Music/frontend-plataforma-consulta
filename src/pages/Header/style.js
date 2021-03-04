import styled from 'styled-components'


export const Header = styled.header`
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media(min-width: 1000px) {
    padding-top: 140px;
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  color: white;
  text-align: center;
 
  background-color: var(--primary);

  > div{
    width: 537px;
    max-width: 100%;
    
    h1{
      font-size: 30px;
      font-family: 'AvenirBold';
    }
  
    p{
      font-family: 'AvenirRegular-500';
      
      font-size: 16px;
      line-height: 19.2px
    }
  }
  
  
`;

export const NavBar = styled.div`
  position: fixed;
  z-index: 2;
  background: var(--primary);

  padding: 0 3rem;

  width: 100%;
  display: none;
  align-items: center;
  
  @media(min-width: 1000px) {
    display: flex;
  }

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
          li {
         
            a {
              color: var(--primary);
            }
          }
        }
      }
    }
  }
`;

export const MenuMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 1.5rem 1rem;

  width: 100%;
  margin-left: auto;

  @media(min-width: 1000px) {
    display: none;
  }


  .logo {
    width: 200px;
  }

  .collapse {
    width: 100%;
    max-height: 0px;
    opacity: 0;
    transition: .5s ease-out;
    display: block;

    .menu-menu-topo-container {
        display: flex;
        max-height: 0;
        justify-content: center;
    }
  }

  #hamburguer:checked ~ .collapse {
    max-height: 500px;
    opacity: 1;

    .menu-menu-topo-container {
        max-height: 500px !important;

        #top-nav {
            display: block;
        }
    }
  }

  .hamburguer {
    width: 40px;
    height: 40px;

    border-radius: 10%;

    position: relative;
  }

  .hamburguer:after {
    content: '';
    
    position: absolute;
    top: 30%;
    left: 15%;
    
    width: 70%;
    height: 10%;
    
    border-radius: 20px;
    transition: .7s ease;

    background-color: #fff;
  }

  .hamburguer:before {
    content: '';

    position: absolute;
    top: 50%;
    left: 45%;

    width: 40%;
    height: 10%;

    border-radius: 20px;
    transition: .7s ease;

    background-color: #fff;
  }

  #hamburguer:checked ~ label .hamburguer:after {
    transform: rotate(225deg);
    top: 45%;
    left: 15%;
  }

  #hamburguer:checked ~ label .hamburguer:before {
    transform: rotate(135deg);
    
    width: 70%;
    height: 10%;

    top: 45%;
    left: 15%;
  }
  

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    display: ${props => props.toggle ? 'flex' : 'none'};
    background: var(--primary);
    
    list-style: none;
    padding-left: 0;

    @media(min-width: 1000px) {
      display: none;
    }
    
    li {
      margin: 0 1.5rem;
      text-align: center;
      padding: .5rem 0;

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
        margin: auto !important;

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
  }
`;