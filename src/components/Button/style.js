import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const NextSteps = styled(Button)`
  background-color: ${props => props.disabled ? '#666766' : props.colorbutton} !important;
  text-transform: capitalize !important;
  border: none !important;
  box-shadow: none !important;
  height: 59px;
  span{ 
    color: #ffffff !important;
    font-family: 'AvenirBold';
    font-size: 16px;
  }
  &:hover{
    background-color: #0FBB00;
    opacity: 0.8;
  }
  &:visited{
    background-color: #0FBB00;
  }
`;

export const LinkButtom = styled.a`
  background-color: ${props => props.colorbutton} !important;
  text-transform: capitalize !important;
  border: none !important;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none !important;
  height: 59px;
  span{ 
    color: #ffffff !important;
    font-family: 'AvenirBold';
    font-size: 16px;
  }
  &:hover{
    text-decoration: none;
    color: #ffffff;
    opacity: 0.8;
  }
`;

export const BtRadio = styled(Button)`
  
`;