import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { phoneMask, cpfMask } from '../../../components/Mask'
import { Container } from './styles';

function Editors() {
  const [ form, setForm ] = useState({
    email: '',
    name: '',
    nome_empresa: '',
    telefone: '',
    senha: '',
    papel: 'pro',
    error: ''
  })

  const handleForm = async (e) => {
    let { name, value } = e.target
    value = name === 'telefone' ? phoneMask(e.target.value) : value
    value = name === 'cpf_cnpj' ? cpfMask(e.target.value) : value
    
    await setForm({...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form)

    // const { email, senha, nome, telefone } = form;
    // if (!email || !senha || !nome || !telefone ) {
    //   setForm({...form, error: "Por favor, preencha os dados corretamente!" });
    //   return false
    // } else {
    //   try {
    //       await apiRegister({ ...form })
    //       .then(r => {
    //         if (r.statusText.toLowerCase() === 'ok') {
              
    //         }
    //       })
    //       .catch(function(err){
    //         if(err.response.status === 500){
    //           setForm({...form, error:err.response.data.message})
    //         }
    //       })
    //     } catch (err) {
    //       setForm({...form,
    //       error:
    //           "Houve um problema com o login, verifique suas credenciais. T.T"
    //       });
    //   }
    // }
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
          <Label>Nome do responsável de contato: </Label>
          <Input type="text" name="name" value={form.name} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Nome da Editora: </Label>
          <Input type="text" name="nome_empresa" value={form.nome_empresa} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Telefone do contato: </Label>
          <Input type="text" name="telefone" value={form.telefone} onChange={handleForm} placeholder="(00) 0 0000-0000" />
        </FormGroup>
        <FormGroup>
          <Label>Senha: </Label>
          <Input type="password" autoComplete="new-password" name="senha" value={form.senha} onChange={handleForm} placeholder="" />
        </FormGroup>
        <Button>Criar conta</Button>
      </Form>
    </Container>
  );
}

export default Editors;