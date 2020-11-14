import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { phoneMask, cpfMask } from '../../../components/Mask'
import { Container } from './styles';

function Editors() {
  const [ form, setForm ] = useState({
    email: '',
    name: '',
    nome_empresa: '',
    cpf_cnpj: '',
    telefone: ''
  })

  const handleForm = async (e) => {
    let { name, value } = e.target
    value = name === 'telefone' ? phoneMask(e.target.value) : value
    value = name === 'cpf_cnpj' ? cpfMask(e.target.value) : value
    
    await setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <Container>
      <h1>Criar uma conta</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Endereço de e-mail: </Label>
          <Input type="email" name="email" id="exampleEmail" value={form.email} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Seu nome completo: </Label>
          <Input type="text" name="name" value={form.name} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Nome da empresa: </Label>
          <Input type="text" name="nome_empresa" value={form.nome_empresa} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>CPF/CNPJ: </Label>
          <Input type="text" name="cpf_cnpj" value={form.cpf_cnpj} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Número de telefone: </Label>
          <Input type="text" name="telefone" value={form.telefone} onChange={handleForm} placeholder="(00) 0 0000-0000" />
        </FormGroup>
        <Button>Criar conta</Button>
      </Form>
    </Container>
  );
}

export default Editors;