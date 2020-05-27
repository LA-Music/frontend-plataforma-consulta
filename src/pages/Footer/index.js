import React from 'react'
import { Footer } from './style';
import Logo from '../../assets/img/logo.svg'
import Linkedin from '../../assets/img/linkedin.svg'
import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import WhatsApp from '../../assets/img/whatsapp.svg'


function index(props) {
  return (
    <Footer className="d-flex flex-row justify-content-center align-items-center">
      <div className="d-flex flex-column mr-5">
        <img src={Logo} style={{width:'10rem'}} className="img-fluid" alt="Logo"/>
        <p className="mb-0">Todos os direitos reservados</p>
      </div>
      <div className="d-flex align-item-center justify-content-center">
        <img src={Linkedin} className="img-fluid mx-3" alt="Linkedin"/>
        <img src={Facebook} className="img-fluid mx-3" alt="Facebook"/>
        <img src={Instagram} className="img-fluid mx-3" alt="Instagram"/>
        <img src={WhatsApp} className="img-fluid mx-3" alt="WhatsApp"/>
      </div>
    </Footer>
  )
}

export default index

