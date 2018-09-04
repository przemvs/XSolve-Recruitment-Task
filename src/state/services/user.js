import api from './api'

class UserService {
  fetchUser = async id => {
    return api.get(`users/${id}`)
  }

  updateUserPartial = async data => {
    return api.patch(`users/${data.id}`, data)
  }
}

export default new UserService()
