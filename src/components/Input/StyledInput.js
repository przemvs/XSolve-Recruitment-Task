import styled from 'styled-components'

const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid #dbe0e8;
  color: #8298b9;
  font-size: 1.125rem;
  padding: 0.25em 0;
  width: 100%;

  &:placeholder {
    color: #8298b9;
    font-family: 'Montserrat', sans-serif;
  }

  &::-webkit-input-placeholder {
    color: #8298b9;
    font-family: 'Montserrat', sans-serif;
  }

  &::-moz-placeholder {
    color: #8298b9;
    font-family: 'Montserrat', sans-serif;
  }

  &:-ms-input-placeholder {
    color: #8298b9;
    font-family: 'Montserrat', sans-serif;
  }

  &:-moz-placeholder {
    color: #8298b9;
    font-family: 'Montserrat', sans-serif;
  }
`

export default StyledInput
