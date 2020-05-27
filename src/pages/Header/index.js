import React from 'react'
import { Header } from './style';
import BgHeader from '../../assets/img/bg-header.svg'
import Logo from '../../assets/img/logo.svg'

function index(props) {
  return (
    <Header className='pt-5' background={BgHeader}>
      <div style={{width: '70vw'}} className="px-5">
        <img src={Logo} alt="Logo" />
        <h1>Consulta de Créditos Retidos</h1>
        <p>Formulário para identificação do artista e de seu catálogo, verificação de sua situação perante o ECAD e pesquisa de créditos retidos</p>
      </div>
    </Header>
  )
}

export default index

