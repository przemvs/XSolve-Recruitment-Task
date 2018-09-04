import styled from 'styled-components'

const ShowComments = styled.div`
  color: #ffa640;
  padding: 1.25em 1.25em;
  text-align: center;

  @media screen and (min-width: 420px) {
    text-align: left;
  }

  > span {
    cursor: pointer;
    font-size: 0.875rem;
    text-decoration: underline;
  }
`

export default ShowComments
