import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from 'actions/user.actions'
import {getComments} from 'actions/comments.actions'

import {UserDetails, Comments} from 'components'
import Wrapper from './Wrapper'

class User extends Component {
  componentDidMount() {
    const {match, getUser, getComments} = this.props
    const userId = match.params.id
    getUser(userId)
    getComments(userId)
  }

  render() {
    const {userComments, currentUser, match} = this.props
    const userId = match.params.id
    const currentUserLoaded = !currentUser.isLoading && !currentUser.isEmpty
    const userCommentsLoaded = !userComments.isLoading && !userComments.isEmpty

    return (
      <Wrapper>
        {currentUserLoaded && <UserDetails user={currentUser} />}
        {userCommentsLoaded && <Comments comments={userComments.comments} userId={userId} />}
      </Wrapper>
    )
  }
}

function mapStateToProps({comments: {comments}, user: {user}}) {
  return {
    userComments: {
      comments: comments.data,
      isLoading: comments.isLoading,
      isEmpty: comments.isEmpty
    },
    currentUser: {
      user: user.data,
      isLoading: user.isLoading,
      isEmpty: user.isEmpty
    }
  }
}

User.propTypes = {
  match: PropTypes.object,
  getUser: PropTypes.func,
  getComments: PropTypes.func,
  userComments: PropTypes.object,
  currentUser: PropTypes.object
}

export default connect(
  mapStateToProps,
  {getUser, getComments}
)(withRouter(User))
