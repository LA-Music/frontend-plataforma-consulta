import React from 'react';
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector } from 'react-redux'

import { Container, Box } from './styles'

const Index = ({modalConfirm, setModalConfirm, submit}) => {

    const state = useSelector(state => state);


  return (
    
      <Container isOpen={modalConfirm} toggle={setModalConfirm} >
        <ModalHeader toggle={setModalConfirm}>Confirme os dados Preenchidos</ModalHeader>
        <ModalBody>
            <Box>
                <div>
                    <h5>Endereço de e-mail</h5>
                    <p>{state.data.email}</p>
                </div>
                <div>
                    <h5>Seu nome completo:</h5>
                    <p>{state.data.who === 'producer' ? state.data.nome_produtor : state.data.nome}</p>
                </div>
                <div>
                    <h5>CPF:</h5>
                    <p>{state.data.cpf}</p>
                </div>
                <div>
                    <h5>Número de telefone:</h5>
                    <p>{state.data.telefone}</p>
                </div>
            </Box>
            <Box>
                {state.data.who === 'producer' && 
                <div>
                    <h5>Seu nome completo:</h5>
                    <p>{state.data.nome }</p>
                </div>
                }
                <div>
                    <h5>Nome Artistico, Banda ou Coletivo:</h5>
                    <p>{state.data.nome_artistico}</p>
                </div>
                <div>
                    <h5>É vinculado a alguma associação do ECAD(Abramus, UBC, etc)?</h5>
                    <p>{state.data.associacao}</p>
                </div>
                <div>
                    <h5>Redes sociais</h5>
                    <p>{state.data.redes_sociais.join(',')}</p>
                </div>
                <div>
                    <h5>Lista de Músicas</h5>
                    <p>{state.data.lista_musicas.join(',')}</p>
                </div>
            </Box>
        </ModalBody>
        <ModalFooter>
          <Button className="cancel" onClick={setModalConfirm}>Cancelar</Button>{' '}
          <Button className="submit" onClick={submit}>Finalizar</Button>
        </ModalFooter>
      </Container>
  );
}

export default Index;