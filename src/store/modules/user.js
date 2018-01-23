import * as type from '../mutation-type'

const state = {
  user: {
    user_id: null,
    nickname: null,
    email: null,
    head_url: null,
    is_admin: null,
    introduce: null,
    gender: null,
    bg_url: null
  }
}

const getters = {
  user: state => state.user
}
const mutations = {
  [type.UPDATE_USER](state, user) {
    state.user = user
    console.log(user)
  }
}

export default {
  state,
  mutations,
  getters
}
