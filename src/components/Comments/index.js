import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from 'actions/comments.actions'
import {Container} from 'components'

import Content from './Content'
import Comment from './Comment'
import Wrapper from './Wrapper'
import AddComment from './AddComment'
import ShowComments from './ShowComments'

class Comments extends Component {
  state = {
    showComments: true
  }

  handleShowComments = () => {
    this.setState(prev => {
      return {showComments: !prev.showComments}
    })
  }

  renderComments = comments =>
    comments.map((comment, index) => <Comment key={index} data={comment} />)

  render() {
    const {comments, addComment, userId} = this.props

    return (
      <Container>
        <Content>
          <ShowComments>
            <span onClick={this.handleShowComments}>
              {this.state.showComments ? 'Hide comments' : 'Show comments'} ({comments.length})
            </span>
          </ShowComments>

          <Wrapper visible={this.state.showComments}>{this.renderComments(comments)}</Wrapper>

          <AddComment onSubmit={addComment} userId={userId} />
        </Content>
      </Container>
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.array,
  addComment: PropTypes.func,
  userId: PropTypes.string
}

export default connect(
  null,
  {addComment}
)(Comments)
