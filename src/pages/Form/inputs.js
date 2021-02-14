import React, { useEffect, useState } from 'react';
import { Form, Modal } from 'react-bootstrap'
import { Radio, RadioGroup, Checkbox, FormControl, InputAdornment, IconButton } from '@material-ui/core'
import { phoneMask, cpfMask } from '../../components/Mask'
import Button from 'components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from 'pages/Layout/actions'
import AddCircle from '../../assets/img/addCircle.svg'

import { FieldSet, Input, RadioInput, Label, TextStep3, TagLabel, InputButtom, CloseTag, Span, ModalFinally, LinkNavegate, ButtonNavigate } from './style'


export const Fields = {
  
  email: function ({name, required, value, placeholder, dispatch}) {
    const form = value

    return (
      <Form.Group>
        <Label className="">Endereço de e-mail:</Label>
          <Input 
            required={required}
            type="email"
            name={name}
            isInvalid={!/^[^\s@]+@[^\s.]+\.[\w.]+$/.test(form[name])}
            value={form[name]} 
            onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, [name]: e.target.value}})} 
            placeholder={placeholder} />
      </Form.Group>
    )
  },
 

  nomeCompleto: function({name, required, value, placeholder, dispatch}) {
    const form = value

    return (
      <Form.Group>
        <Form.Label className="">Seu nome completo:</Form.Label>
          <Input 
            required={required}
            type="text" 
            name={name}
            value={form[name]} 
            onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, [name]: e.target.value}})} 
            placeholder={placeholder} />
      </Form.Group>
    )
  },


  cpf: function({name, required, value, placeholder, dispatch}) {
    const form = value
    console.log(value)
    return (
      <Form.Group>
        <Form.Label className="">CPF:</Form.Label>
        <Input
          required={required} 
          type="text" 
          name={name}
          value={form[name]} 
          onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, [name]: cpfMask(e.target.value)}})} 
          placeholder={placeholder} />
        <Span>Facultativo, mas ajuda para evitar homônimo</Span>
      </Form.Group>
    )
  },

  telefone: function ({name, required, value, placeholder, dispatch}) {
    const form = value

    return (
      <Form.Group>
        <Form.Label className="">Número de telefone:</Form.Label>
        <Input 
          required={required}
          type="text" 
          name={name}
          value={form[name]} 
          onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, [name]: phoneMask(e.target.value)}})} 
          placeholder={placeholder} />
      </Form.Group>
    )
  },

  nome: function({name, required, value, placeholder, dispatch}) {
    const form = value

    return (
      <Form.Group>
        <Form.Label className="">Nome:</Form.Label>
        <Input
          required={required} 
          type="text" 
          name={name}
          value={form[name]} 
          onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, [name]: e.target.value}})} 
          placeholder={placeholder} />
      </Form.Group>
    )
  },

  nomeArtistico: function ({name, required, value, placeholder, dispatch}) {
    const {state_form, data } = value

    return (
      <Form.Group className="w-100 mb-3" variant="filled">
        <Form.Label className="">Nome Artístico, Banda ou Coletivo:</Form.Label>
       
        <InputButtom
          value={state_form[name]}
          onChange={ e => dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, [name]: e.target.value}})}
          placeholder={placeholder}
          className="w-100"
          endAdornment={
          <InputAdornment position="end" >
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={ () => { 
                state_form[name] && dispatch({type: 'ADD_FORM', payload: {...data, [name]: [...data[name], state_form[name]]}}) 
                state_form[name] && dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, [name]:''}})
              }} 
            >
              <img src={AddCircle} alt="add" />
            </IconButton>
          </InputAdornment>
          }
        />
        <div className="w-100 d-flex row mx-auto">
          {data[name].map( (r, key) => 
            <TagLabel className="my-3 mr-3" key={key}>
              {r}<CloseTag 
                  onClick={e => remove.artista(r, data, dispatch)}
                  title="Remover">x</CloseTag>
            </TagLabel>
          )}
        </div>
      </Form.Group>
    )
  },

  associacao: function({name, value, placeholder, dispatch}) {
    return (
      <Form.Group>
        <FieldSet>
          <Form.Label className="">Já é filiado a alguma Associação do Ecad?</Form.Label>
          <select>
            {['ABRAMUS', 'UBC', 'SOCIMPRO', 'SICAM', 'AMAR', 'ASSIM', 'SBACEM', 'Não tenho certeza', 'Ainda não sou filiado']
            .map((ass) => (
              <option value={ass} key={ass}>{ass}</option>
            ))}
          </select>
        </FieldSet>
      </Form.Group>
    )
  },

  redeSocial: function({name, value, placeholder, dispatch}) {
    const {state_form, data } = value
    
    return (
      <Form.Group>
        <FieldSet className="w-100 mb-3" variant="filled">
          <Form.Label className="">Redes sociais</Form.Label>
            <InputButtom
              name={name}
              value={state_form[name]}
              onChange={ e => dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, [name]: e.target.value}})}
              placeholder={placeholder}
              endAdornment={
                <InputAdornment position="end" >
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={ () => {
                      state_form[name] && dispatch({type: 'ADD_FORM', payload: {...data, [name]: [...data[name], state_form[name]]}}) 
                      state_form[name] && dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, [name]: ''}})
                    }} 
                  >
                    <img src={AddCircle} alt="add" />
                  </IconButton>
                </InputAdornment>
              }
            />
            <div className="w-100 d-flex row mx-auto">
              {data[name].map( (r, key) => 
                <TagLabel className="my-3 mr-3" key={key}>
                  {r}<CloseTag 
                      onClick={e => remove.sociais(r, data, dispatch)} 
                      title="Remover">x</CloseTag>
                </TagLabel>
              )}
            </div>
        </FieldSet>
      </Form.Group>
    )
  },

  musicas: function({name, value, placeholder, dispatch}) {
    const { state_form, data} = value

    return (
      <Form.Group>
        <FieldSet className="w-100 mb-3" variant="filled">
          <Form.Label className="">Lista de Músicas</Form.Label>
          <Form.Text className=" mb-3">Inserir nome das músicas e links para identificação (youtube, spotify, deezer, etc) Ex.: "Nome da Música" - [inserir link do youtube]</Form.Text>
          <InputButtom
            name={name}
            value={state_form[name]}
            onChange={ e => dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, [name]: e.target.value}})}
            placeholder={placeholder}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={ () => {
                    state_form[name] && dispatch({type: 'ADD_FORM', payload: {...data, [name]: [...data[name], state_form[name]]}}) 
                    state_form[name] && dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, [name]: ''}})
                  }}
                >
                  <img src={AddCircle} alt="add" />
                </IconButton>
              </InputAdornment>
            }
          />
          <div className="w-100 d-flex row mx-auto">
            {data[name].map( (r, key) => 
              <TagLabel className="my-3 mr-3" key={key}>
                {r} <CloseTag 
                      onClick={e => remove.music(r, data, dispatch)} 
                      title="Remover">x</CloseTag>
              </TagLabel>
            )}
          </div>
        </FieldSet>
      </Form.Group>
    )
  },

  button: function ({value, submit}) {
    
    return (
      <Button 
        className="w-100"
        type="submit"
        // onClick={() => submit()} 
        colorbutton={`var(--green)`} 
        text={value} />
    )
  },

  newsletter: function ({ value, dispatch }) {
    const { data } = value

    return (
      <RadioInput 
        control={ <Checkbox 
            checked={data.newsletter} 
            onChange={ e => dispatch({type: 'ADD_FORM', payload: {...data, newsletter: !data.newsletter}})} 
            color="default" 
            name="newsletter"/>} 
        label={'Aceito receber novidades e contato da LA Music por e-mail'} />
    )
  }, 

  termos: function ({value, dispatch}) {
    const { data } = value

    return (
      <RadioInput 
        control={ <Checkbox 
            checked={data.termos} 
            color="default" 
            onChange={ e => dispatch({type: 'TERMOS', payload: {...data, termos: !data.termos}})} 
            name="termos"/>} 
        label={'Autorizo a consulta e estou ciente das condições para realização da busca de Créditos Retidos e confirmo que li e concordo com os Termos de Uso e Política de Privacidade.'} />
    )
  }
}


export function Step2 (props) {

  
  const [ associacao ] = useState(['ABRAMUS', 'UBC', 'SOCIMPRO', 'SICAM', 'AMAR', 'ASSIM', 'SBACEM', 'Não tenho certeza', 'Ainda não sou filiado'])

  const form = useSelector(state => state.data);
  const state_form = useSelector(state => state.state_form)
  const dispatch = useDispatch();

  useEffect(() => {
    props.callStep(form)
  }, [form, props])

  function removeMusic(e){
    let index = form.lista_musicas.indexOf(`${e}`);
        index !== -1 && form.lista_musicas.splice(index,1);
        dispatch({type: 'ADD_FORM', payload: {...form, lista_musicas: form.lista_musicas}})
  }
  
  function removeSociais(e){
    let index = form.redes_sociais.indexOf(`${e}`);
        index !== -1 && form.redes_sociais.splice(index,1);
        dispatch({type: 'ADD_FORM', payload: {...form, redes_sociais: form.redes_sociais}})
  }

  function removeArtista(e){
    let index = form.nome_artistico.indexOf(`${e}`);
        index !== -1 && form.nome_artistico.splice(index,1);
        dispatch({type: 'ADD_FORM', payload: {...form, nome_artistico: form.nome_artistico}})
  }

  return (
    <Form>
      {form.who === 'producer' && (
        <>
          <Form.Group>
            <Form.Label className="">Nome:</Form.Label>
            <Input type="text" value={form.nome} onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, nome: e.target.value}})} placeholder="Nome do artista" />
          </Form.Group>

          <Form.Group>
            <Form.Label className="">CPF:</Form.Label>
            <Input type="text" value={form.cpf} onChange={e => dispatch({type: 'ADD_FORM', payload: {...form, cpf: cpfMask(e.target.value)}})} placeholder="999.999.999-99" />
            <Span>Facultativo, mas ajuda para evitar homônimo</Span>
          </Form.Group>
        </>
      )}
      <FieldSet className="w-100 mb-3" variant="filled">
        <Form.Label className="">Nome Artístico, Banda ou Coletivo:</Form.Label>
          <InputButtom
            value={state_form.nome_artistico}
            onChange={ e => dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, nome_artistico: e.target.value}})}
            placeholder="Nome da banda ou artista"
            id="filled-adornment-password"
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={ () => { 
                    state_form.nome_artistico && dispatch({type: 'ADD_FORM', payload: {...form, nome_artistico: [...form.nome_artistico, state_form.nome_artistico]}}) 
                    state_form.nome_artistico && dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, nome_artistico:''}})
                  }} 
                >
                  <img src={AddCircle} alt="add" />
                </IconButton>
              </InputAdornment>
            }
          />
          <div className="w-100 d-flex row mx-auto">
            {form.nome_artistico.map( (r, key) => (<TagLabel className="my-3 mr-3" key={key}>{r}<CloseTag onClick={e => removeArtista(r)} title="Remover">x</CloseTag></TagLabel>))}
          </div>
        </FieldSet>

        <FieldSet>
          <Form.Label className="">Já é filiado a alguma Associação do Ecad?</Form.Label>
          <select>
            {associacao.map((ass, index) => (
              <option value={ass} key={index}>{ass}</option>
            ))}
          </select>
        </FieldSet>

      <FieldSet className="w-100 mb-3" variant="filled">
        <Form.Label className="">Redes sociais</Form.Label>
          <InputButtom
            value={state_form.redes_sociais}
            onChange={ e => dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, redes_sociais: e.target.value}})}
            placeholder="@exemplo123_"
            id="filled-adornment-password"
            endAdornment={
              <InputAdornment position="end" >
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  onClick={ () => {
                    state_form.redes_sociais && dispatch({type: 'ADD_FORM', payload: {...form, redes_sociais: [...form.redes_sociais, state_form.redes_sociais]}}) 
                    state_form.redes_sociais && dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, redes_sociais: ''}})
                  }} 
                >
                  <img src={AddCircle} alt="add" />
                </IconButton>
              </InputAdornment>
            }
          />
          <div className="w-100 d-flex row mx-auto">
            {form.redes_sociais.map( (r, key) => (<TagLabel className="my-3 mr-3" key={key}>{r}<CloseTag onClick={e => removeSociais(r)} title="Remover">x</CloseTag></TagLabel>))}
          </div>
      </FieldSet>

      <FieldSet className="w-100 mb-3" variant="filled">
        <Form.Label className="">Lista de Músicas</Form.Label>
        <Form.Text className=" mb-3">Inserir nome das músicas e links para identificação (youtube, spotify, deezer, etc) Ex.: "Nome da Música" - [inserir link do youtube]</Form.Text>
        <InputButtom
          value={state_form.lista_musicas}
          onChange={ e => dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, lista_musicas: e.target.value}})}
          placeholder="Nome da música"
          id="filled-adornment-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={ () => {
                  state_form.lista_musicas && dispatch({type: 'ADD_FORM', payload: {...form, lista_musicas: [...form.lista_musicas, state_form.lista_musicas]}}) 
                  state_form.lista_musicas && dispatch({type: 'ADD_STATE_FORM', payload: {...state_form, lista_musicas: ''}})
                }}
              >
                <img src={AddCircle} alt="add" />
              </IconButton>
            </InputAdornment>
          }
        />
        <div className="w-100 d-flex row mx-auto">
          {form.lista_musicas.map( (r, key) => (<TagLabel className="my-3 mr-3" key={key}>{r} <CloseTag onClick={e => removeMusic(r)} title="Remover">x</CloseTag></TagLabel>))}
        </div>
      </FieldSet>

      <RadioInput control={<Checkbox checked={form.newsletter} onChange={ e => dispatch({type: 'TERMOS', payload: {...form, newsletter: !form.newsletter}})} color="default" name="newsletter"/>} label={'Aceito receber novidades e contato da LA Music por e-mail'} />
      <RadioInput control={<Checkbox checked={form.termos} color="default" onChange={ e => dispatch({type: 'TERMOS', payload: {...form, termos: !form.termos}})} name="termos"/>} label={'Autorizo a consulta e estou ciente das condições para realização da busca de Créditos Retidos e confirmo que li e concordo com os Termos de Uso e Política de Privacidade.'} />
    </Form>
  );
}
export function Step3 () {
  const [ show, handleShow ] = useState(true)
  return (
    <>
      <TextStep3 className=" text-center my-5">Em até 48 horas você receberá um e-mail indicando se existem créditos retidos para receber.</TextStep3>
      <ModalFinally show={show} onHide={handleShow}>
        <Modal.Header className="pb-0" closeButton>
        </Modal.Header>
        <Modal.Body className="px-5 mb-3">
          <h3 className="mb-3">Relatório solicitado com sucesso!</h3>
          <p>Você acaba de solicitar a consulta de créditos retidos no Ecad.</p>
          <p><b>Entraremos em contato com a Associação para processar sua solicitação</b></p>
          <p>Em até 2 (dois) dias úteis você receberá um e-mail indicando se existem créditos retidos para receber.</p>
          
          <div className="row d-flex justify-content-center flex-column px-5">
            <ButtonNavigate href="https://consulta.lamusic.com.br/" className="mt-3">Fazer nova pesquisa</ButtonNavigate>
          
            <div className="mt-3 d-flex justify-content-between flex-column flex-sm-row">
              <LinkNavegate type="backSite" href="https://www.lamusic.com.br/">
                Voltar para o site
              </LinkNavegate>
          
              <LinkNavegate type="termos" href="https://www.lamusic.com.br/termos-de-uso/" target="_blank">
                Ver termos de uso
              </LinkNavegate>
            </div>
          </div>
        </Modal.Body>
      </ModalFinally>
    </>
    );
}
