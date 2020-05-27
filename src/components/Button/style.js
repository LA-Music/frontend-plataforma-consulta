import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const NextSteps = styled(Button)`
  background-color: ${props => props.color} !important;
  color: #ffffff !important;
  text-transform: capitalize !important;
  border: none !important;
  box-shadow: none !important;
  height: 59px;
  &:hover{
    background-color: #0FBB00;
    opacity: 0.8;
  }
  &:visited{
    background-color: #0FBB00;
  }
`;