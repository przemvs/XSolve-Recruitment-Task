import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow: 0 0 4px 0 rgba(172, 172, 172, 0.5);
  border-radius: 5px;
  max-width: 500px;
  margin: 2.25em auto 0;
  width: 100%;
  position: relative;
  padding: 0 1em;

  &::before {
    content: '';
    background: #002c71;
    height: 95px;
    width: 100%;
    position: absolute;
    top: -2.25em;
    left: 0;
  }
`

export default Wrapper
