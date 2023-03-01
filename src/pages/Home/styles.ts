import styled from 'styled-components'

export const HomeConainer = styled.div``

export const PresentationSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 3.5rem;

  padding: 0 7.75rem;

  img {
    margin-top: 0.75rem;
    height: 33.75rem;
  }
`

export const TextPresentation = styled.div`
  max-width: 38.8125rem;
  padding-top: 5rem;
`

export const WelcomeMessage = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme['brand-green']};
  padding-bottom: 1rem;
`
export const WelcomeTitle = styled.div`
  font-size: 3.25rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-headline']};

  padding-bottom: 1.25rem;
`
export const WelcomeSubtitle = styled.div`
  font-size: 1.125rem;
  color: ${(props) => props.theme['gray-paragraph']};

  padding-bottom: 2rem;
`

export const ScheduleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 16.5rem;
  height: 3.25rem;

  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['brand-green']};

  border: transparent;
  border-radius: 9999px;

  transition: background-color 150ms;
  &:hover {
    background: ${(props) => props.theme['brand-green-hover']};
  }
`
export const ServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7.75rem;
  padding-bottom: 10rem;

  background: ${(props) => props.theme['brand-green-light-02']};
`

export const DashboardInformation = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 3.75rem 7.5rem;
  height: 13.125rem;
  margin-top: -6.75rem;
  background: ${(props) => props.theme['brand-beige']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['brand-green-light']};
`
export const InformationComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;

  color: ${(props) => props.theme['brand-green']};

  span {
    font-size: 3rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-headline']};
  }
`
export const VerticalLine = styled.div`
  border-left: 1px solid ${(props) => props.theme['brand-green']};
  height: 5.25rem;
  opacity: 0.2;
`

export const ServiceTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 10rem;
  padding-bottom: 4rem;

  width: 31rem;

  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme['brand-green']};

  span {
    padding-top: 1rem;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-headline']};
  }
`

export const CardsDiv = styled.div`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
`

export const CardsServices = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  width: 21.75rem;
  height: 13rem;

  color: ${(props) => props.theme['gray-paragraph']};

  border: 1px solid ${(props) => props.theme['brand-green-light']};
  border-radius: 6px;
  background: ${(props) => props.theme.white};

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray-headline']};
  }
  svg {
    color: ${(props) => props.theme['brand-green']};
  }
`
export const AboutSection = styled.div`
  padding: 10rem 0;
  background: ${(props) => props.theme['brand-beige']};
`
