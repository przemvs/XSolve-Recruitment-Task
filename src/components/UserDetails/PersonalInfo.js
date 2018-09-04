import styled from 'styled-components'

const PersonalInfo = styled.div`
  position: relative;

  @media screen and (min-width: 468px) {
    display: flex;
    align-items: center;
  }
`

const UserName = styled.div`
  color: #002c71;
  font-size: 1.125rem;
  font-weight: 500;

  display: flex;
  align-items: center;

  @media screen and (max-width: 467px) {
    justify-content: center;
  }
`

const UserCity = styled.div`
  font-size: 0.75rem;
  color: #8298b9;
`

export {PersonalInfo, UserName, UserCity}
