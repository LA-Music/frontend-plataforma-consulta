import styled from 'styled-components';
import { Form, Modal } from 'react-bootstrap'
import { FormControlLabel, FilledInput, Link } from '@material-ui/core'

export const Label = styled(Form.Label)`
  font-family: 'AvenirRegular-600';
`;

export const Span = styled.span`
  color: #A5A5A5;
  font-family: 'AvenirRegular';
`;

export const Input = styled(Form.Control)`
  background-color: #2C2C2C !important;
  border: 1px solid #949494 !important;
  box-sizing: border-box;
  border-radius: 4px;
  color: #A5A5A5 !important;
  height: 59px;
  box-shadow: none;
  &:active{
    border-color: 1px solid #949494 !important;
  }`;

export const RadioInput = styled(FormControlLabel)`
  width: 100%;
  color: #A5A5A5;
  .MuiButtonBase-root{
    color: #A5A5A5 !important;
  }
`;

export const TextStep3 = styled.h2`
  font-size: 1.9rem;
  line-height: 31px;
  font-family: 'AvenirRegular';
`;

export const TagLabel = styled.span`
  height: 30px;
  color: #A5A5A5;
  background: #2C2C2C;
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
`;

export const InputButtom = styled(FilledInput)`
  background-color: #2C2C2C !important;
  height: 59px;
  border: 1px solid #949494;
  border-radius: 4px;
  input{
    height: 100%;
    font-family: 'AvenirRegular';
    color: #A5A5A5;
    padding: 0rem 1rem;
  }
`;

export const CloseTag = styled.span`
  cursor: pointer;
  color: #ffffff;
  margin-left: 1rem;
`;

export const ModalFinally = styled(Modal)`
  h3{
    font-size: 1.37rem;
  }
  .modal-content{
    width: 35rem !important;
    @media(max-width: 1024px){
      width: 100% !important;
    }
    background-color: #fff !important;
  }

  .modal-content .modal-header{
    border-bottom: none;
  }

  .modal-content .modal-title{
    color: #595959;
    border-bottom: none;
  }

  .modal-content .modal-body{
    border-top: none;
    color: #595959;
    text-align: left;
  }
`;

export const LinkNavegate = styled(Link)`
  color: ${props => props.type === 'termos' ? '#9C9C9C' : '#0FBB00' } !important;
  font-weight: 600 !important;
  text-decoration:underline !important;
  font-size: 1rem !important;
`;

export const ButtonNavigate = styled(Link)`
  background-color: #0FBB00;
  color: #fff !important;
  text-align: center;
  
  padding: 1rem 0 1rem 0;
  border-radius: 4px;

  &:hover{
    background-color: #0fbb0094;
    text-decoration: none !important;
  }
`;