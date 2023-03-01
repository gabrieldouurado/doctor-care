import { Header } from '../../components/Header'
import {
  CheckCircle,
  EnvelopeSimple,
  MapPin,
  WhatsappLogo,
} from 'phosphor-react'
import {
  AboutInformations,
  AboutSection,
  CardsDiv,
  CardsServices,
  ContactInfos,
  ContactSection,
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
import familyDoctorImage from '../../assets/family-doctor-image.png'
import manOnPhone from '../../assets/man-on-phone.png'
import { Footer } from '../../components/Footer'

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
        <AboutSection>
          <img src={familyDoctorImage} alt="" />
          <AboutInformations>
            <div>SOBRE NÓS</div>
            <span>Entenda quem somos e por que existimos</span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </AboutInformations>
        </AboutSection>
        <ContactSection>
          <ContactInfos>
            <span>Entre em contato com a gente</span>
            <section>
              <div>
                <MapPin size={24} />
                R. Amauri Souza, 346
              </div>
              <div>
                <EnvelopeSimple size={24} />
                contato@doctorcare.com
              </div>
            </section>
            <ScheduleButton>
              <WhatsappLogo size={22} /> AGENDE SUA CONSULTA
            </ScheduleButton>
          </ContactInfos>
          <img src={manOnPhone} alt="" />
        </ContactSection>
      </HomeConainer>
      <Footer />
    </>
  )
}
