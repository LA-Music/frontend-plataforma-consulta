import React from 'react'

import Logo from 'assets/img/logo.svg'
import { Header, NavBar, MenuMobile } from './style';

function Index(props) {

  const listMenu = [
    { label: 'Inicial'   , url: 'https://www.lamusic.com.br' },
    { label: 'Quem somos', url: 'https://www.lamusic.com.br/quem-somos/' },
    { label: 'Soluções'  , url: '#' , 
      submenu: [
        {label: 'Liberação de Créditos Retidos', url: 'https://www.lamusic.com.br/creditos-retidos/'},
        {label: 'Registro de Marcas Artísticas', url: 'https://www.lamusic.com.br/registro-de-marca/'},
        {label: 'Contratos e Consultoria Jurídica', url: 'https://www.lamusic.com.br/contratos-e-consultoria/'},
        {label: 'Cadastro de Músicas no ECAD', url: 'https://www.lamusic.com.br/direitos-autorais/'},
    ]},
    { label: 'Clientes', url: 'https://www.lamusic.com.br/clientes/' },
    { label: 'Blog', url: 'https://www.lamusic.com.br/blog/' }
  ] 

  return (
    <>
      <NavBar >
        <a href="https://lamusic.com.br">
          <img src={Logo} className="logo" alt="LA Music" />
        </a>
        <ul>
          {listMenu.map( list => 
            <li style={{position: 'relative'}}>
              <a href={list.url}>{list.label}</a>

              {list.submenu && (
                <ul className="flex-column m-0 p-0">
                  {list.submenu.map( ls => 
                    <li className="m-0 p-0">
                      <a href={ls.url}>{ls.label}</a>
                    </li>
                  )}
                </ul>
              )}
            </li>
          )}
        </ul>
      </NavBar>

      <MenuMobile className="menu-mobile">
        <a href="https://lamusic.com.br">
          <img src={Logo} className="logo" alt="LA Music" />
        </a>

        <input type="checkbox" id="hamburguer" style={{display: 'none'}}/>

        <label for="hamburguer">
          <div className="hamburguer"></div>
        </label>
        
        <div className="collapse">
          <div className="menu-menu-topo-container">
            <ul id="top-nav">
              {listMenu.map( list => 
                <li style={{position: 'relative'}}>
                  <a href={list.url}>{list.label}</a>

                  {list.submenu && (
                    <ul className="flex-column m-0 p-0">
                      {list.submenu.map( ls => 
                        <li className="m-0 p-0">
                          <a href={ls.url}>{ls.label}</a>
                        </li>
                      )}
                    </ul>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </MenuMobile>

      <Header className='pb-5'>
        <div>
          <h1 className="mb-3">Consulta de Créditos Retidos</h1>
          <p>Formulário para identificação do artista e de seu catálogo, verificação de sua situação perante o ECAD e pesquisa de créditos retidos</p>
        </div>
      </Header>
    </>
  )
}

export default Index

