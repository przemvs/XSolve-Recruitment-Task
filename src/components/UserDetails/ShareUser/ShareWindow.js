import styled from 'styled-components'

const ShareWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => (props.visible ? '9' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};

  background: rgba(0, 0, 0, 0.5);
`

export default ShareWindow
