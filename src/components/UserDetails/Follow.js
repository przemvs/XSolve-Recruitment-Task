import styled from 'styled-components'

const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => (props.followed ? '#fff' : '#ffa640')};
  border: ${props => (props.followed ? '1px solid #ffa640' : 'none')};
  border-radius: 100px;
  cursor: pointer;
  padding: 0.875em 0;
  max-width: 100%;
  width: 134px;

  > span {
    color: ${props => (props.followed ? '#ffa640' : '#fff')};
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4.2px;
  }
`

export default Follow
