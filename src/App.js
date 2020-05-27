import React, { useState } from 'react';
import './App.css';
import Header from './pages/Header'
import { ArrowRightAlt } from '@material-ui/icons'
import { Step, Step2, Step3 } from './pages/Form'
import Footer from './pages/Footer'
import Button from './components/Button'

function App() {
  const [ step, setStep ] = useState(0)
  const [ button, setButton ] = useState([{context: 'Próximo', color: '#0FBB00'},{context:'Finalizar', color: '#0FBB00'}, {context: 'Ir para site LA Music', color: '#3F3F3F'}])

  return (
    <div className="App" style={{backgroundColor: '#262626', minHeight: '100vh'}}>
      <Header />
        <body className="my-5 d-flex jutify-content-center mx-auto" style={{backgroundColor: '#262626', minHeight: '42vh'}}>
          <div style={{width: '30vw'}}></div>
          <div style={{width: '40vw'}}>
          {step === 0 && (
            <div id="step-1" className="step-1" active={step === 1}>
              <h2 className="text-white">Dados Pessoais</h2>
              <Step />
            </div>
          )}
          {step === 1 && (
            <div id="step-2" className="step-2" active={step === 2}>
              <Step2 />
            </div>
          )}
          {step === 2 && (
            <div id="step-3" className="step-3" active={step === 3}>
              <Step3 />
            </div>
          )}
          <Button 
            color={button[step].color}
            className="w-100"
            onClick={e => step < 2 ? setStep(step + 1) : setStep(0)} 
            text={button[step].context}
            endIcon={step === 0 && <ArrowRightAlt />} />
          </div>
          <div style={{width: '30vw'}} className="d-flex ml-5 flex-column justify-content-center">
            <span className={`num-Steps ${step === 0 && 'active'}`}>1</span>
            <span className={`num-Steps ${step === 1 && 'active'}`}>2</span>
            <span className={`num-Steps ${step === 2 && 'active'}`}>3</span>
          </div>
        </body>
      <Footer />
    </div>
  );
}

export default App;
