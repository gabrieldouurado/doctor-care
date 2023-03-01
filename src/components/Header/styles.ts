import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4.5rem;
  padding: 0 7.75rem;

  background: ${(props) => props.theme['brand-green']};

  img {
    width: 11rem;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  height: 100%;

  gap: 2rem;
`

export const HeaderButtonNavegarion = styled.button`
  padding: 0 0.5rem;

  color: ${(props) => props.theme['brand-green-light-02']};
  background: transparent;

  border: 3px solid transparent;

  transition: border 150ms font-weight 150ms;

  &:hover {
    font-weight: bold;
    border-bottom: 3px solid ${(props) => props.theme['brand-green-light-02']};
  }
`

export const ScheduleAppointmentButton = styled.button`
  width: 11.875rem;
  height: 2.375rem;

  border: 2px solid ${(props) => props.theme.white};
  border-radius: 9999px;

  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme.white};

  background: transparent;

  transition: background-color 150ms;
  &:hover {
    color: ${(props) => props.theme['brand-green']};
    background: ${(props) => props.theme.white};
  }
`
