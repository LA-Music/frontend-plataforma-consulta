import styled from 'styled-components';
import { Form } from 'react-bootstrap'
import { FormControlLabel, FormControl } from '@material-ui/core'

export const Label = styled(Form.Label)`
  font-family: 'AvenirRegular-600';
`;

export const InputButton = styled(FormControl)`
  width: 100%;
  background-color: #2C2C2C !important;
  border: 1px solid #949494 !important;
  box-sizing: border-box;
  border-radius: 4px;
  height: 59px;
  box-shadow: none;
  &:active{
    border-color: 1px solid #949494 !important;
  }`;

export const Input = styled(Form.Control)`
  background-color: #2C2C2C !important;
  border: 1px solid #949494 !important;
  box-sizing: border-box;
  border-radius: 4px;
  height: 59px;
  box-shadow: none;
  &:active{
    border-color: 1px solid #949494 !important;
  }`;

export const CheckboxInput = styled(FormControlLabel)`
  width: 100%;
  color: #A5A5A5;
  .MuiCheckbox-root{
    color: #949494 !important;
  }
`;
export const RadioInput = styled(FormControlLabel)`
  width: 100%;
  color: #A5A5A5;
  .MuiButtonBase-root{
    color: #949494 !important;
  }
`;

export const TextStep3 = styled.h2`
  font-size: 1.9rem;
  line-height: 31px;
  font-family: 'AvenirRegular';
`;