import styled from 'styled-components'

const Wrapper = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  overflow-y: scroll;
  max-height: calc(100vh - 27em);
`

export default Wrapper
