import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

import '../../App.css';

import { ArrowRightAlt } from '@material-ui/icons'
import { Modal } from 'react-bootstrap';

import Button, { Link } from 'components/Button'
import ModalDados from 'components/ModalConfirm'
import ModalContact from 'components/ModalContact'


import { Step, Step2, Step3 } from '../Form'
import { Fields } from '../Form/inputs'

import Footer from '../Footer'

import Who from '../Who'

import Load from 'components/Load'

import { typeForm } from './actions';


import { Container, Body, Steps, ListFields } from './styles'

function Index() {
  const dispatch = useDispatch()
  const store = useSelector(state => state)
  
  const [ step, setStep ] = useState(0)
  const [ button ] = useState([{context: 'Próximo', color: '#0FBB00'},{context:'Confirmar Dados', color: '#0FBB00'}, {context: 'Ir para site LA Music', color: '#3F3F3F'}])
  const [ loading, setLoading ] = useState(false)
  const [ form, setForm ] = useState(store.data)
  const [ show, setShow ] = useState()
  const [ linkContact, setLinkContact ]  = useState(false)
  const [ resp, setResp ] = useState('')
  const [ modalConfirm, setModalConfirm ] = useState(false)
  const [ pathname ] = useState(window.location.pathname)

  useEffect(() => {
    settings()
      async function settings() {
        await dispatch({type: 'SET_PATHNAME', payload: window.location.pathname })
      }
  },[]) //eslint-disable-line

  const handleClose = () => {
    setShow(false)
  };
  const showContact = () => {
    setLinkContact(true)
    setShow(false)
  }

  function checkArtista(state, nomeArtistico) {

    let nome_artistico = state.nome_artistico
  
    let filter =  state.nome_artistico.filter( name => name.indexOf(nomeArtistico) !== -1)
  
        filter.length === 0 && nome_artistico.push(nomeArtistico)
  
    return nome_artistico
  }

  function checkMusic(state, musicas) {

    let lista_musicas = state.lista_musicas
  
    let filter = state.lista_musicas.filter( name => name.indexOf(musicas) !== -1)
  
        filter.length === 0 && lista_musicas.push(musicas)
  
     return lista_musicas
  }
  
  function checkRedeSocial(state, sociais) {
  
    let redes_sociais = state.redes_sociais
  
    let filter = state.redes_sociais.filter( name => name.indexOf(sociais) !== -1)
  
        filter.length === 0 && redes_sociais.push(sociais)
  
     return redes_sociais
  }

  async function submit(){
    const { data, state_form } = store
    
    let payload = data
    
    payload.nome_artistico = checkArtista(payload, state_form.nome_artistico) 
    payload.redes_sociais = checkRedeSocial(payload, state_form.redes_sociais) 
    payload.lista_musicas = checkMusic(payload, state_form.lista_musicas) 

    setLoading(true)
    setModalConfirm(false)

    
    try {
      axios.post('https://lamusic-platform-backend.herokuapp.com/credito-retido',{
        ...payload
      })
      .then( res => {
          res.data.msg === 'ok' && setStep(step + 1);
          setLoading(false);
        }
      )
      .catch(function(err){
        if(err.response.status === 500 || err.response.status === 400 ){
          setResp(`${err.response.data.message} `)
          setShow(true)
          setLoading(false);
        }
      })
    } catch(error) {
      console.error(error.response)
        setLoading(false);
    }
  }

  function getValue(value) {
    dispatch(value)
  }

  console.log(store)

  const papel = [
    { typePerson: 'artist',
      steps: [
        {
          inputs: [
            { id: 'nomeCompleto', name: 'nome', value: store.data, placeholder: 'Fernando Santos da Cruz', dispatch: getValue },
            { id: 'email', name: 'email', value: store.data, placeholder: 'exemplo@gmail.com', dispatch: getValue },
            { id: 'telefone', name: 'telefone', value: store.data, placeholder: '(00) 0 0000-0000', dispatch: getValue },
          ]
        },
        {
          inputs: [
            { id: 'nomeArtistico', name: 'nome_artistico', value: store.data, placeholder: 'Nome da banda ou artista', dispatch: getValue},
            { id: 'associacao', name: 'associacao', value: store.data, placeholder: '', dispatch: getValue }
          ]
        },
        {
          inputs: [
            { id: 'cpf', name: 'cpf', value: store.data, placeholder: '999.999.999-99', dispatch: getValue },
            { id: 'musicas', name: 'lista_musicas', value: store.data, placeholder: 'Nome da música', dispatch: getValue }
          ]
        }
      ]
    },
    {
      typePerson: 'producer',
    }
  ]

  return (
    <Container className="App">
      {!store.form && pathname !== '/artista' ?
          <Who {...store} />
        :(
          <>
            <Steps className="order-1 order-lg-2" active={store.form}>
              <span onClick={() => step > 0 && setStep(0)} className={`num-Steps ${step === 0 ? 'active' : ''}`}>1</span>
              <span onClick={() => step > 1 && setStep(1)} className={`num-Steps ${step === 1 ? 'active' : ''}`}>2</span>
              <span onClick={() => step >= 2 && setStep(2)} className={`num-Steps ${step === 2 ? 'active' : ''}`}>3</span>
            </Steps>
      
            <ListFields>
              {papel
                .filter( form => form.typePerson === 'artist')
                .map( ({steps}) => 
                  steps[0].inputs.map(input => 
                    Fields[input.id](input)
                  )
                )
              }
            </ListFields>
          </>
        )}
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              {resp}
              <div>
                <span style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={showContact}><b>Entrar em contato</b></span>
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <button className="buttonModal" onClick={handleClose}>
                Fechar
              </button>
            </Modal.Footer>
          </Modal>
          <ModalContact showContact={linkContact} setShowContact={() => setLinkContact(!linkContact)} />

        <ModalDados modalConfirm={modalConfirm} submit={() => submit()} setModalConfirm={() => setModalConfirm(!modalConfirm)} />
        
      {loading && <Load /> } 

      
    </Container>
  );
}

export default Index;
