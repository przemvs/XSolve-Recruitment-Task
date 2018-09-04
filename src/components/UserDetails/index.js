import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {getUser, updateUser} from 'actions/user.actions'
import {Container} from 'components'
import {UserImage} from 'images'
import Content from './Content'

import {PersonalInfo, UserCity, UserName} from './PersonalInfo'
import Follow from './Follow'
import {Counter, Counters} from './Counters'
import UserPhoto from './UserPhoto'
import Like from './Like'
import ShareUser from './ShareUser'
import UserInformations from './UserInformations'

const UserDetails = ({user, updateUser}) => {
  return (
    <Container>
      <ShareUser />
      <Content>
        <PersonalInfo>
          <UserPhoto photo={UserImage} />
          <UserInformations>
            <UserName>
              {user.name} <Like user={user} updateUser={updateUser} />
            </UserName>
            <UserCity>
              {user.city}, {user.state}
            </UserCity>
          </UserInformations>
        </PersonalInfo>

        <Counters>
          <Counter>
            <span>{user.likes}</span> Likes
          </Counter>
          <Counter className="following">
            <span>{user.following}</span> Following
          </Counter>
          <Counter className="followers">
            <span>{user.followers}</span> Followers
          </Counter>
          <Follow
            onClick={() =>
              updateUser(user.id, {
                follow: !user.follow,
                followers: user.follow ? user.followers - 1 : user.followers + 1
              })
            }
            followed={user.follow}
          >
            <span>{user.follow ? 'Following' : 'Follow'}</span>
          </Follow>
        </Counters>
      </Content>
    </Container>
  )
}

UserDetails.propTypes = {
  user: PropTypes.object,
  updateUser: PropTypes.func
}

function mapStateToProps({user}) {
  return {
    user: user.user.data,
    isLoading: user.user.isLoading,
    isEmpty: user.user.isEmpty
  }
}

export default connect(
  mapStateToProps,
  {getUser, updateUser}
)(withRouter(UserDetails))
