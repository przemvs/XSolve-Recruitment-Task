import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {iconFavourite} from 'images'
import {Svg} from 'components'

const StyledLike = styled.div`
  cursor: pointer;
  margin-left: 0.5em;
`

const Like = ({user, updateUser}) => {
  return (
    <StyledLike
      onClick={() =>
        updateUser(user.id, {
          like: !user.like,
          likes: user.like ? user.likes - 1 : user.likes + 1
        })
      }
    >
      <Svg icon={iconFavourite} fill={user.like ? '#D75A4A' : 'transparent'} />
    </StyledLike>
  )
}

Like.propTypes = {
  user: PropTypes.object,
  updateUser: PropTypes.func
}

export default Like
