import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Photo = styled.div`
  background-image: url(${props => props.img && props.img});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  height: 4.375em;
  width: 4.375em;
  margin-right: 1.125em;

  @media screen and (max-width: 467px) {
    position: absolute;
    top: -3.25em;
    left: 50%;
    transform: translateX(-50%);
  }
`

const UserPhoto = ({photo}) => <Photo img={photo} />

UserPhoto.propTypes = {
  photo: PropTypes.string
}

export default UserPhoto
