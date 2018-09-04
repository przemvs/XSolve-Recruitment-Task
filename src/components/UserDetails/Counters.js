import styled from 'styled-components'

const Counters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.25em;
`

const Counter = styled.div`
  color: #343e00;
  font-size: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 33%;
  margin-bottom: 1.25em;

  @media screen and (min-width: 420px) {
    align-items: flex-start;
    flex: 1;
    margin-bottom: 0;
  }

  > span {
    color: #ffa640;
    font-size: 1.5rem;
    font-weight: 500;
  }
`

export {Counters, Counter}
