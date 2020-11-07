import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Alert, Modal, ModalBody } from 'reactstrap';
import { LinearProgress } from '@material-ui/core'
import axios from 'axios'
import { phoneMask, cpfMask } from '../../../components/Mask'
import { Container } from './styles';

function Editors() {
  var baseUrl = 'https://lamusic-platform-backend.herokuapp.com';
  const [ form, setForm ] = useState({
    email: '',
    nome: '',
    nome_empresa: '',
    cpf: '',
    telefone: '',
    senha: '',
    papel: 'pro',
    repeat_senha: ''
  })
  const [ error, setError ] = useState()
  const [ modalMessage, setModalMessage ] = useState('Estamos criando sua conta e logo você será redirecionado para a plataforma')
  const [open, setOpen] = useState(false);
  const [focusAfterClose] = useState(true);


  const handleForm = async (e) => {
    let { name, value } = e.target
    value = name === 'telefone' ? phoneMask(e.target.value) : value
    value = name === 'cpf' ? cpfMask(e.target.value) : value
    
    await setForm({...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    delete form.repeat_senha
    try {
      setOpen(true)
      setModalMessage('Estamos criando sua conta e logo você será redirecionado para a plataforma.')
      axios.post(`${baseUrl}/registrar`,{
        ...form
      })
      .then( res => {
          if (res.statusText ===  "OK") {
            setModalMessage('Estamos realizando o seu login.')
            axios.post(`${baseUrl}/autentificar`, {
              email: form.email,
              senha: form.senha
            }).then( res => {
              console.log(res)
              window.location.href = 'https://app.lamusic.com.br/pro/';
              document.cookie = "lamusic-Token="+res.data.token+";path=/"
              document.cookie = "lamusic-Papel="+res.data.papel+";path=/"
              setOpen(false)
            }).catch(error => {
              setError(error.response.data.message)
            })
          }
        }
        ).catch(error => {
          setOpen(false)
          setError(error.response.data.message)
        })
      }catch(error) {
        console.error(error)
        setOpen(false)
        setError(error)
    }
  }

  return (
    <Container>
      { error && <Alert color="danger">{error}</Alert> }
      <h1>Criar uma conta</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Endereço de e-mail: </Label>
          <Input type="email" name="email" id="exampleEmail" value={form.email} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Seu nome completo: </Label>
          <Input type="text" name="nome" value={form.nome} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Nome da empresa: </Label>
          <Input type="text" name="nome_empresa" value={form.nome_empresa} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>CPF/CNPJ: </Label>
          <Input type="text" name="cpf" value={form.cpf} onChange={handleForm} placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label>Número de telefone: </Label>
          <Input type="text" name="telefone" value={form.telefone} onChange={handleForm} placeholder="(00) 0 0000-0000" />
        </FormGroup>
        <FormGroup>
          <Label>Senha: </Label>
          <Input 
            type="password" 
            autocomplete="new-password" 
            invalid={form.senha !== form.repeat_senha} 
            valid={form.senha === form.repeat_senha && form.senha !== ''} 
            name="senha" 
            value={form.senha} 
            onChange={handleForm} 
            placeholder="*******" />
        </FormGroup>
        <FormGroup>
          <Label>Confirmar senha: </Label>
          <Input 
            type="password" 
            autocomplete="new-password" 
            invalid={form.senha !== form.repeat_senha} 
            valid={form.senha === form.repeat_senha && form.repeat_senha !== '' } 
            name="repeat_senha" 
            value={form.repeat_senha} 
            onChange={handleForm} 
            placeholder="*******" />
        </FormGroup>
        { error && <Alert color="danger">{error}</Alert> }
        <Button disabled={((form.senha !== form.repeat_senha) || (form.repeat_senha === '' && form.senha === '')) ? true : false}>Criar conta</Button>
      </Form>
      <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} className="modalLoad">
          <ModalBody>
            <p style={{color: 'black'}}>
              {modalMessage}
            </p>
            <LinearProgress className="mt-5" style={{color: '#FFC107'}}/>
          </ModalBody>
      </Modal>
    </Container>
  );
}

export default Editors;