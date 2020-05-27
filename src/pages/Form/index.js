import React from 'react';
import { Form } from 'react-bootstrap'
import { Checkbox } from '@material-ui/core'
import { Input, CheckboxInput } from './style';

export function Step () {
  return (
    <Form>
      <Form.Group>
        <Form.Label className="text-white">Endereço de e-mail:</Form.Label>
        <Input type="email" placeholder="exemplo@gmail.com" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Seu nome completo:</Form.Label>
        <Input type="text" placeholder="Fernando Santos da Cruz" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">CPF:</Form.Label>
        <Input type="text" placeholder="999.999.999-99" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Número de telefone:</Form.Label>
        <Input type="text" placeholder="(00) 0 0000-0000" />
      </Form.Group>
    </Form>
  );
}

export function Step2 () {
  return (
    <Form>
      <Form.Group>
        <Form.Label className="text-white">Nome Artístico, Banda ou Coletivo:</Form.Label>
        <Input type="text" placeholder="Nome da banda ou artista" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">É vinculado a alguma ssociação do ECAD(Abramus, UBC, etc)?</Form.Label>
        <CheckboxInput
          control={
            <Checkbox  />
          }
          label="ABRAMUS"/>
        <CheckboxInput
          control={
            <Checkbox  />
          }
          label="UBC"/>
        <CheckboxInput
          control={
            <Checkbox  />
          }
          label="Não sou filiado"/>
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Redes sociais:</Form.Label>
        <Input type="text" placeholder="@exemplo123_" />
      </Form.Group>
      <Form.Group>
        <Form.Label className="text-white">Lista de Músicas</Form.Label>
        <Form.Text className="text-white">Inserir nome das músicas e links para identificação (youtube, spotify, deezer, etc) Ex.: "Nome da Música" - [inserir link do youtube]</Form.Text>
        <Input type="text" placeholder="Nome da música" />
      </Form.Group>
    </Form>
  );
}
export function Step3 () {
  return (
    <>
      <h1 style={{fontSize:'1.9rem', lineHeight:'31px'}} className="text-white text-center my-5">Seus dados foram enviados para análise, em algumas horas vamos retornar via e-mail ou ligação</h1>
    </>
  );
}
