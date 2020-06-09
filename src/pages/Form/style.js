import styled from 'styled-components';
import { Form } from 'react-bootstrap'
import { FormControlLabel, FilledInput } from '@material-ui/core'

export const Label = styled(Form.Label)`
  font-family: 'AvenirRegular-600';
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