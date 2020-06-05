import React from 'react'
import { Link } from '@material-ui/core'
import { Footer } from './style';
import Logo from '../../assets/img/logo.svg'
import Linkedin from '../../assets/img/linkedin.svg'
import Facebook from '../../assets/img/facebook.svg'
import Instagram from '../../assets/img/instagram.svg'
import WhatsApp from '../../assets/img/whatsapp.svg'


function index(props) {
  return (
    <>
    <Footer className="d-none d-sm-flex flex-row justify-content-center align-items-center ">
      <div className="d-flex flex-column mr-5">
        <img src={Logo} style={{width:'10rem'}} className="img-fluid" alt="Logo"/>
        <p className="mb-0">Todos os direitos reservados</p>
      </div>
      <div className="d-flex align-item-center justify-content-center">
        <Link href="#"> 
          <img src={Linkedin} className="img-fluid mx-3" alt="Linkedin"/>
        </Link>
        <Link href="#">
          <img src={Facebook} className="img-fluid mx-3" alt="Facebook"/>
        </Link>
        <Link href="#">
          <img src={Instagram} className="img-fluid mx-3" alt="Instagram"/>
        </Link>
        <Link href="#">
          <img src={WhatsApp} className="img-fluid mx-3" alt="WhatsApp"/>
        </Link>
      </div>
    </Footer>
    <Footer className="d-flex d-sm-none flex-row justify-content-center align-items-center row w-100 mx-auto">
      <div className="d-flex justify-content-center align-items-center flex-column mr-5 col-12 mx-auto mt-5">
        <img src={Logo} style={{width:'10rem'}} className="img-fluid" alt="Logo"/>
        <p className="mb-0">Todos os direitos reservados</p>
      </div>
      <div className="d-flex align-item-center justify-content-center col-12 my-5">
        <Link href="#">
          <img src={Linkedin} className="img-fluid mx-3" alt="Linkedin"/>
        </Link>
        <Link href="#">
          <img src={Facebook} className="img-fluid mx-3" alt="Facebook"/>
        </Link>
        <Link href="#">
          <img src={Instagram} className="img-fluid mx-3" alt="Instagram"/>
        </Link>
        <Link href="#">
          <img src={WhatsApp} className="img-fluid mx-3" alt="WhatsApp"/>
        </Link>
      </div>
    </Footer>
    </>
  )
}

export default index

