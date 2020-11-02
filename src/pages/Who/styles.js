import styled from 'styled-components';
import { Button } from '@material-ui/core'


export const Container = styled.div``;

export const Budget = styled.div`
  margin: -2.5% 0 0 1.5rem;
  width: 206px;
  height: 30px;

  background: #FFC107;
  border-radius: 19px;

  display: flex;
  align-items: center;
  
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #FFFFFF;
`;

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
  background: ${props => props.bg} !important;
  color: #fff !important;
  border-radius: 4px !important;
  box-sizing: border-box !important;
  font-family: 'AvenirBold' !important;
  font-size: 1rem !important;

  &:hover{
    opacity: 0.8;
  }
`;

export const Value = styled.h5`
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  color: ${props => props.color}
`;