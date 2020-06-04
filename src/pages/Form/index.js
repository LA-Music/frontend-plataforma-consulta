import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap'
import { Radio, RadioGroup, FormControl, FilledInput, InputAdornment, IconButton } from '@material-ui/core'
import { Input, RadioInput, Label, TextStep3, TagLabel } from './style'
import { phoneMask, cpfMask } from '../../components/Mask'
import { useSelector, useDispatch } from 'react-redux'
import { AddCircle } from '@material-ui/icons'

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
  const [ sociais, setSociais ] = useState()
  const [ musicas, setMusicas ] = useState()
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
      {/* <Form.Group>
        <InputGroup>
          <Input type="text" value={form.redes_sociais} onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, redes_sociais: [e.target.value]}})} placeholder="@exemplo123_" />
        </InputGroup>
      </Form.Group> */}
      <FormControl className="w-100 mb-3" variant="filled">
        <Form.Label className="text-white">Redes sociais</Form.Label>
          <FilledInput
            value={sociais}
            onChange={ async e => setSociais(e.target.value)}
            style={{height: '59px', border: '1px solid #949494',borderRadius: '4px', color: '#A5A5A5'}}
            placeholder="@exemplo123_"
            id="filled-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <AddCircle onClick={ () => dispatch({type: 'ADD_FORM', payload: {...form, redes_sociais: [...form.redes_sociais, sociais]}}) } />
                </IconButton>
              </InputAdornment>
            }
          />
          <div className="w-100 d-flex">
          {form.redes_sociais.map( r => (<TagLabel className="my-3 mr-3">{r}</TagLabel>))}
          </div>
        </FormControl>
      <FormControl className="w-100 mb-3" variant="filled">
          <Form.Label className="text-white">Lista de Músicas</Form.Label>
          <Form.Text className="text-white mb-3">Inserir nome das músicas e links para identificação (youtube, spotify, deezer, etc) Ex.: "Nome da Música" - [inserir link do youtube]</Form.Text>
          <FilledInput
            value={musicas}
            onChange={ async e => setMusicas(e.target.value)}
            style={{height: '59px', border: '1px solid #949494',borderRadius: '4px', color: '#A5A5A5'}}
            placeholder="Nome da música"
            id="filled-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <AddCircle onClick={ () => dispatch({type: 'ADD_FORM', payload: {...form, lista_musicas: [...form.lista_musicas, musicas]}}) } />
                </IconButton>
              </InputAdornment>
            }
          />
          <div className="w-100 d-flex">
          {form.lista_musicas.map( r => (<TagLabel className="my-3 mr-3">{r}</TagLabel>))}
          </div>
        </FormControl>
      {/* <Form.Group>
        <Form.Label className="text-white">Lista de Músicas</Form.Label>
        <Form.Text className="text-white mb-3">Inserir nome das músicas e links para identificação (youtube, spotify, deezer, etc) Ex.: "Nome da Música" - [inserir link do youtube]</Form.Text>
        <Input type="text" value={form.lista_musicas} onChange={e => dispatch({type: 'ADD_FORM', payload:{...form, lista_musicas: [e.target.value]}})} placeholder="Nome da música" />
      </Form.Group> */}
    </Form>
  );
}
export function Step3 () {
  return <TextStep3 className="text-white text-center my-5">Seus dados foram enviados para análise, em algumas horas vamos retornar via e-mail ou ligação</TextStep3>;
}
