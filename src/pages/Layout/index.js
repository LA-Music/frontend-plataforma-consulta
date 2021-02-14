import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import '../../App.css';

import { ArrowRightAlt } from '@material-ui/icons'
import { Modal } from 'react-bootstrap';

// import Button, { Link } from 'components/Button'
import ModalDados from 'components/ModalConfirm'
import ModalContact from 'components/ModalContact'


// import { Step, Step2, Step3 } from '../Form'
import { Fields } from '../Form/inputs'

import Who from '../Who'

import Load from 'components/Load'

import { check, attrFields, remove } from './actions';


import { Container, Body, Steps, ListFields } from './styles'

function Index() {
  const dispatch = useDispatch()
  const store = useSelector(state => state)
  
  const [ step, setStep ] = useState(0)
  const [ button ] = useState([{context: 'Próximo', color: '#0FBB00'},{context:'Confirmar Dados', color: '#0FBB00'}, {context: 'Ir para site LA Music', color: '#3F3F3F'}])
  const [ loading, setLoading ] = useState(false)
  // const [ form, setForm ] = useState(store.data)
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

  async function submit(e){
    e.preventDefault();
    const { data, state_form } = store
    
    let payload = data

    payload.nome_artistico = check.check(payload.nome_artistico, state_form.nome_artistico) 
    payload.redes_sociais = check.check(payload.redes_sociais, state_form.redes_sociais) 
    payload.lista_musicas = check.check(payload.lista_musicas, state_form.lista_musicas) 

    console.log(payload)
    setLoading(true)
    setModalConfirm(false)

    setStep(step + 1)
    setLoading(false)
    
    // try {
    //   axios.post('https://lamusic-platform-backend.herokuapp.com/credito-retido',{
    //     ...payload
    //   })
    //   .then( res => {
    //       res.data.msg === 'ok' && setStep(step + 1);
    //       setLoading(false);
    //     }
    //   )
    //   .catch(function(err){
    //     if(err.response.status === 500 || err.response.status === 400 ){
    //       setResp(`${err.response.data.message} `)
    //       setShow(true)
    //       setLoading(false);
    //     }
    //   })
    // } catch(error) {
    //   console.error(error.response)
    //     setLoading(false);
    // }
  }

  function getValue(value) {
    dispatch(value)
  }

  const papel = [
    { typePerson: 'artist',
      steps: [
        {
          inputs: [
            { 
              ...attrFields.nomeCompleto,
              required: false,
              value: store.data, 
              dispatch: getValue 
            },
            { 
              ...attrFields.email,
              required: false,
              value: store.data, 
              dispatch: getValue 
            },
            { 
              ...attrFields.telefone,
              value: store.data, 
              dispatch: getValue 
            },
            {
              id: 'newsletter',
              required: false,
              value: store,
              dispatch: getValue
            },
            { 
              id: 'button', 
              value:"Próxima", 
              placeholder: "Próxima", 
              submit: submit
            }
          ]
        },
        {
          inputs: [
            { 
              ...attrFields.nomeArtistico,
              value: store, 
              dispatch: getValue
            },
            { 
              ...attrFields.associacao, 
              value: store.data, 
              dispatch: getValue 
            },
            { 
              id: 'button', 
              value:"Próxima", 
              placeholder: "Próxima", 
              submit: submit
            }
          ]
        },
        {
          inputs: [
            { 
              ...attrFields.cpf, 
              value: store.data, 
              dispatch: getValue 
            },
            { 
              ...attrFields.musicas, 
              value: store, 
              dispatch: getValue 
            },
            {
              id: 'termos',
              name: 'termos',
              value: store,
              dispatch: getValue
            },
            { 
              id: 'button', 
              value:"Próxima", 
              placeholder: "Próxima", 
              submit: submit
            }
          ]
        }
      ]
    },
    {
      typePerson: 'producer',
      steps: [
        {
          inputs: [
            { 
              ...attrFields.nomeCompleto,
              name: 'nome_produtor', 
              value: store.data,  
              dispatch: getValue 
            },
            { 
              ...attrFields.email,
              value: store.data, 
              dispatch: getValue 
            },
            { 
              ...attrFields.telefone,
              value: store.data,  
              dispatch: getValue 
            },
            {
              id: 'newsletter',
              required: false,
              value: store,
              dispatch: getValue
            },

            { 
              id: 'button', 
              value:"Próxima", 
              placeholder: "Próxima", 
              submit: submit
            }
          ]
        },
        {
          inputs: [
            { 
              ...attrFields.nome,
              value: store.data, 
              dispatch: getValue
            },
            { 
              ...attrFields.cpf,
              value: store.data, 
              dispatch: getValue 
            },
            { 
              ...attrFields.nomeArtistico,
              value: store, 
              dispatch: getValue
            },
            { 
              ...attrFields.associacao,
              value: store.data, 
              dispatch: getValue 
            },
            { 
              id: 'button', 
              value:"Próxima", 
              placeholder: "Próxima", 
              submit: submit
            }
          ]
        },
        {
          inputs: [
            { 
              ...attrFields.cpf,
              value: store.data, 
              dispatch: getValue 
            },            
            { 
              ...attrFields.musicas,
              value: store, 
              dispatch: getValue 
            },
            {
              id: 'termos',
              name: 'termos',
              value: store,
              dispatch: getValue
            },
            { 
              id: 'button', 
              value:"Próxima", 
              placeholder: "Próxima", 
              submit: submit
            }
          ]
        },
        
      ]
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
      
            <ListFields onSubmit={submit}>
              {papel
                .filter( form => form.typePerson === store.data.who)
                .map( ({steps}) => 
                  steps[step].inputs.map(input => 
                    Fields[input.id](input)
                  )
                )
              }
            </ListFields>
          </>
        )
      }
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
