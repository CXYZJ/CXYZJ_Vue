import * as type from '../mutation-type'

const state = {
  user: {
    id: null,
    nick_name: null,
    e_mail: null
  }
}

const getters = {
  user: state => state.user
}
const mutations = {
  [type.UPDATE_USER](state, user) {
    state.user.id = user.id
    state.user.nick_name = user.nick_name
    state.user.e_mail = user.e_mail

  }
}

export default {
  state,
  mutations,
  getters
}
