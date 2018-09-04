import styled from 'styled-components'

const Author = styled.div`
  color: #002c71;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1em 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AuthorPhoto = styled.div`
  background-image: url(${props => props.photo && props.photo});
  background-size: cover;
  background-position: center;
  border-radius: 50%;

  flex: 1 auto;

  height: 2.5em;
  width: 2.5em;
  max-width: 2.5em;
`

export {Author, AuthorPhoto}
