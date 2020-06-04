import React, { useEffect } from 'react';
import { Form, InputGroup } from 'react-bootstrap'
import { Radio, RadioGroup } from '@material-ui/core'
import { Input, RadioInput, Label, TextStep3 } from './style';
import { phoneMask, cpfMask } from '../../components/Mask'
import { useSelector, useDispatch } from 'react-redux'

export function Step (props) {
  const form = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    props.callStep(form)
  }, [form, props])
  
  return (
    <Form>
      <Form.Group>
        <Label className="text-white">Endereço de e-mail:</Label>
        <Input  type="email"
                isInvalid={!/^[^\s@]+@[^\s.]+\.[\w.]+$/.test(form.email)} 
                value={form.email} 
                onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, email: e.target.value}})} 
                placeholder="exemplo@gmail.com" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Seu nome completo:</Form.Label>
        <Input type="text" value={form.nome} onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, nome: e.target.value}})} placeholder="Fernando Santos da Cruz" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">CPF:</Form.Label>
        <Input type="text" value={form.cpf} onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, cpf: cpfMask(e.target.value)}})} placeholder="999.999.999-99" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Número de telefone:</Form.Label>
        <Input type="text" value={form.telefone} onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, telefone: phoneMask(e.target.value)}})} placeholder="(00) 0 0000-0000" />
      </Form.Group>
    </Form>
  );
}

export function Step2 () {
  const form = useSelector(state => state.data);
  const dispatch = useDispatch();

  return (
    <Form>
      <Form.Group>
        <Form.Label className="text-white">Nome Artístico, Banda ou Coletivo:</Form.Label>
        <Input type="text" value={form.nome_artistico} onChange={e => dispatch({type: 'ADD_FORM', payload: { ...form, nome_artistico: e.target.value }})} placeholder="Nome da banda ou artista" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">É vinculado a alguma associação do ECAD(Abramus, UBC, etc)?</Form.Label>
        <RadioGroup name="associado" value={form.associacao} onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, associacao: e.target.value}})} >
          <RadioInput value="ABRAMUS" control={<Radio color="default"/>} label="ABRAMUS" />
          <RadioInput value="UBC" control={<Radio color="default"/>} label="UBC" />
          <RadioInput value="Não sou filiado" control={<Radio color="default"/>} label="Não sou filiado" />
        </RadioGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Redes sociais</Form.Label>
        <InputGroup>
          <Input type="text" value={form.redes_sociais} onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, redes_sociais: [e.target.value]}})} placeholder="@exemplo123_" />
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Lista de Músicas</Form.Label>
        <Form.Text className="text-white mb-3">Inserir nome das músicas e links para identificação (youtube, spotify, deezer, etc) Ex.: "Nome da Música" - [inserir link do youtube]</Form.Text>
        <Input type="text" value={form.lista_musicas} onChange={e => dispatch({type: 'ADD_FORM', payload:{...form, lista_musicas: [e.target.value]}})} placeholder="Nome da música" />
      </Form.Group>
    </Form>
  );
}
export function Step3 () {
  return <TextStep3 className="text-white text-center my-5">Seus dados foram enviados para análise, em algumas horas vamos retornar via e-mail ou ligação</TextStep3>;
}
