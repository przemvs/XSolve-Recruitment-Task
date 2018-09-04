import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Message from './Message'
import DateAdded from './DateAdded'
import {Author, AuthorPhoto} from './Author'
import CommentStyle from './CommentStyle'

import {UserImage} from 'images'
import Content from './Content'

const Comment = ({data}) => {
  const daysAgo = moment.duration(moment().diff(moment(data.date))).asDays()

  return (
    <CommentStyle>
      <AuthorPhoto photo={UserImage} />
      <Content>
        <Author>
          {data.author}
          <DateAdded>{daysAgo > 1 ? `${Math.floor(daysAgo)}d` : 'today'}</DateAdded>
        </Author>
        <Message>{data.message}</Message>
      </Content>
    </CommentStyle>
  )
}

Comment.propTypes = {
  data: PropTypes.object
}

export default Comment
