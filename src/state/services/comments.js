import api from './api'
import moment from 'moment'

class CommentService {
  fetchComments = async userId => {
    return api.get(`comments?_sort=date&userid_like=${userId}`)
  }

  addComment = async comment => {
    const message = {
      author: 'Test autor',
      message: comment.message,
      date: moment(),
      userid: comment.userid
    }

    return api.post(`comments`, message)
  }
}

export default new CommentService()
