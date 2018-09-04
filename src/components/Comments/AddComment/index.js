import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Field, reduxForm} from 'redux-form'

import {Input} from 'components'
import StyledAddComment from './StyledAddComment'

class AddComment extends Component {
  componentDidMount() {
    this.props.initialize({userid: this.props.userId})
  }

  render() {
    const {handleSubmit} = this.props

    return (
      <StyledAddComment onSubmit={handleSubmit}>
        <Field component={Input} type="text" name="message" placeholder="Add a comment" />
      </StyledAddComment>
    )
  }
}

AddComment.propTypes = {
  initialize: PropTypes.func,
  userId: PropTypes.string,
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'addComment'
})(AddComment)
