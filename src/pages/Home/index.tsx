import { Header } from '../../components/Header'
import { CheckCircle, WhatsappLogo } from 'phosphor-react'
import {
  CardsDiv,
  CardsServices,
  DashboardInformation,
  HomeConainer,
  InformationComponent,
  PresentationSection,
  ScheduleButton,
  ServiceSection,
  ServiceTitles,
  TextPresentation,
  VerticalLine,
  WelcomeMessage,
  WelcomeSubtitle,
  WelcomeTitle,
} from './styles'

import peopleImage from '../../assets/people.png'

export function Home() {
  return (
    <>
      <Header />
      <HomeConainer>
        <PresentationSection>
          <TextPresentation>
            <WelcomeMessage>BOAS-VINDAS A DOCTORCARE 👋</WelcomeMessage>
            <WelcomeTitle>
              Assistência médica simpificada para todos
            </WelcomeTitle>
            <WelcomeSubtitle>
              Os médicos da DoctorCare vão além dos sintomas para tratar a causa
              raiz de sua doença e proporcionar uma cura a longo prazo.
            </WelcomeSubtitle>
            <ScheduleButton>
              <WhatsappLogo size={22} /> AGENDE SUA CONSULTA
            </ScheduleButton>
          </TextPresentation>
          <img src={peopleImage} alt="" />
        </PresentationSection>
        <ServiceSection>
          <DashboardInformation>
            <InformationComponent>
              <span>+3.500</span>
              Pacientes atendidos
            </InformationComponent>
            <VerticalLine />
            <InformationComponent>
              <span>+15</span>
              Especialistas disponíveis
            </InformationComponent>
            <VerticalLine />
            <InformationComponent>
              <span>+10</span>
              Anos no mercado
            </InformationComponent>
          </DashboardInformation>
          <ServiceTitles>
            SERVIÇOS
            <span>Como podemos ajudá-lo a se sentir melhor?</span>
          </ServiceTitles>
          <CardsDiv>
            <CardsServices>
              <CheckCircle size={26} weight="duotone" />
              <span>Problemas digestivos</span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </CardsServices>
            <CardsServices>
              <CheckCircle size={26} weight="duotone" />
              <span>Saúde Hormonal</span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </CardsServices>
            <CardsServices>
              <CheckCircle size={26} weight="duotone" />
              <span>Bem-estar mental</span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </CardsServices>
            <CardsServices>
              <CheckCircle size={26} weight="duotone" />
              <span>Cuidados pediátricos</span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </CardsServices>
            <CardsServices>
              <CheckCircle size={26} weight="duotone" />
              <span>Autoimune e inflamação</span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </CardsServices>
            <CardsServices>
              <CheckCircle size={26} weight="duotone" />
              <span>Saúde do Coração</span>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim.
            </CardsServices>
          </CardsDiv>
        </ServiceSection>
      </HomeConainer>
    </>
  )
}
