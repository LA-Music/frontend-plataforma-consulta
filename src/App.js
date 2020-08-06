import React, { useState } from 'react';
import './App.css';
import Header from './pages/Header'
import { CircularProgress } from '@material-ui/core'
import { ArrowRightAlt } from '@material-ui/icons'
import { Step, Step2, Step3 } from './pages/Form'
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
// import store from './store';
import Footer from './pages/Footer'
import Button, { Link } from './components/Button'
import Who from './pages/Who'
import axios from 'axios'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-143795586-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  const store = useSelector(state => state)
  
  const [ step, setStep ] = useState(0)
  const [ button ] = useState([{context: 'Próximo', color: '#0FBB00'},{context:'Finalizar', color: '#0FBB00'}, {context: 'Ir para site LA Music', color: '#3F3F3F'}])
  const [ disabled, setDisabled ] = useState(false);
  const [ form, setForm ] = useState(store.data)
  const [ show, setShow ] = useState()
  const [ resp, setResp ] = useState('')
  
  const handleClose = () => {
    setShow(false)
  };
  
  async function submit(){
    const { data } = store
    setDisabled(true)
    try {
      axios.post('https://lamusic-platform-backend.herokuapp.com/credito-retido',{
        nome: data.nome,
        email: data.email,
        cpf: data.cpf,
        associacao: data.associacao,
        nome_artistico: data.nome_artistico,
        redes_sociais: data.redes_sociais,
        telefone: data.telefone,
        lista_musicas: data.lista_musicas
      })
      .then( res => {
          res.data.msg === 'ok' && setStep(step + 1);
          setDisabled(false);
        }
      )
      .catch(function(err){
        if(err.response.status === 500){
          setResp(err.response.data.message)
          setShow(true)
          setDisabled(false);
        }
      })
    } catch(error) {
        console.error(error.response)
        setDisabled(false);
    }
  }


  return (
    <div className="App" style={{backgroundColor: '#262626', minHeight: '100vh'}}>
      <Header />
        <div className="my-5 d-flex jutify-content-center mx-auto flex-column align-items-center flex-sm-row" style={{backgroundColor: '#262626', minHeight: '42vh'}}>
          <div className="order-3 order-sm-1" style={{width: '30vw'}}></div>
          <div className="sessao-meio order-2 order-sm-2">
            {!store.form ? (
              <Who {...store} />
              ) : 
              <>
              {step === 0 && (
                <div id="step-1" className="step-1" active={step === 1 ? true : undefined}>
                  <h2 className="text-white AvenirBold">Dados do solicitante</h2>
                  <Step callStep={ e => setForm(e)} />
                  <Button 
                    disabled={form.requiredStep1}
                    colorbutton={button[step].color}
                    className="w-100"
                    onClick={e => step < 2 ? setStep(step + 1) : setStep(0)} 
                    text={button[step].context}
                    endIcon={step === 0 && <ArrowRightAlt />} />
                </div>
              )}
              {step === 1 && (
                <div id="step-2" className="step-2" active={step === 2 ? true : undefined}>
                  <h2 className="text-white AvenirBold">Dados do Artista</h2>
                  <Step2 />
                  <Button 
                    disabled={disabled}
                    colorbutton={button[step].color}
                    className="w-100"
                    onClick={e => submit()} 
                    text={button[step].context}
                    endIcon={step === 0 && <ArrowRightAlt />} />
                </div>
              )}
              {step === 2 && (
                <div id="step-3" className="step-3 text-center" active={step === 3 ? true : undefined}>
                  <Step3 />
                  <Link 
                    href='https://lamusic.com.br/'
                    colorbutton={button[step].color}
                    text={button[step].context}
                    className="w-100"/>
                </div>
              )}
              </>
              }
          </div>
          {store.form && (
            <div className="sessaoNum d-flex ml-sm-5 flex-row flex-sm-column justify-content-between justify-content-sm-center order-1 order-sm-3">
              <span className={`num-Steps ${step === 0 ? 'active' : ''}`}>1</span>
              <span className={`num-Steps ${step === 1 ? 'active' : ''}`}>2</span>
              <span className={`num-Steps ${step === 2 ? 'active' : ''}`}>3</span>
            </div>
          )}
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>{resp}</Modal.Body>
              <Modal.Footer className="d-flex justify-content-center">
                <button className="buttonModal" onClick={handleClose}>
                  Fechar
                </button>
              </Modal.Footer>
            </Modal>
        </div>
        {disabled && (
          <div className="d-block" style={{position: 'fixed', height: '100%', width: '100%', top: 0, padding: '50vh 0 0 50vw', backgroundColor: '#0c0c0ca8'}}>
            <CircularProgress disableShrink/>
          </div>
        )}
      <Footer /> 
    </div>
  );
}

export default App;
