import styled from 'styled-components';
import { Form } from 'react-bootstrap'
import { FormControlLabel } from '@material-ui/core'

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