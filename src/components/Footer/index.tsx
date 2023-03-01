import { FooterContainer } from './styles'

import doctorCareLogo from '../../assets/doctor-care-logo.svg'
import { FacebookLogo, InstagramLogo, YoutubeLogo } from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <section>
        <img src={doctorCareLogo} alt="" />
        <span>©2022 - DoctorCare.</span>
        <span>Todos os direitos reservados</span>
      </section>
      <div>
        <InstagramLogo size={28} />
        <FacebookLogo size={28} />
        <YoutubeLogo size={28} />
      </div>
    </FooterContainer>
  )
}
