import {
  HeaderButtonNavegarion,
  HeaderButtonsContainer,
  HeaderContainer,
  ScheduleAppointmentButton,
} from './styles'

import doctorCareLogo from '../../assets/doctor-care-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={doctorCareLogo} alt="" />

      <HeaderButtonsContainer>
        <HeaderButtonNavegarion>Início</HeaderButtonNavegarion>
        <HeaderButtonNavegarion>Sobre</HeaderButtonNavegarion>
        <HeaderButtonNavegarion>Serviços</HeaderButtonNavegarion>
        <HeaderButtonNavegarion>Depoimentos</HeaderButtonNavegarion>
      </HeaderButtonsContainer>

      <ScheduleAppointmentButton>AGENDAR CONSULTA</ScheduleAppointmentButton>
    </HeaderContainer>
  )
}
