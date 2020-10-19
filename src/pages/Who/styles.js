import styled from 'styled-components';
import { Button } from '@material-ui/core'

export const Title = styled.h1`
  color: #fff;
  font-family: 'AvenirBold';
`;

export const ButtonRadio = styled.div`
  cursor: pointer;
  color: ${props => props.selected ? '#fff' : '#A5A5A5'};
  border: 1px solid ${props => props.selected ? '#0FBB00' : '#949494'} ;
  font-family: ${props => props.selected ? 'AvenirBold' : 'AvenirRegular'};
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Next = styled(Button)`
  background: ${props => props.disabled ? '#a1a2a1' : '#0FBB00' } !important;
  color: #fff !important;
  border-radius: 4px !important;
  box-sizing: border-box !important;
  font-family: 'AvenirBold' !important;
  font-size: 1rem !important;

  &:hover{
    opacity: 0.8;
  }
`;