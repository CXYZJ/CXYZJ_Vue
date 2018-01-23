import {mapMutations} from 'vuex'

import api from '../../../api/index'

mapMutations(['update_user'])
let url = '/v1.0/front/users/'
let login = (user, success, failure) => {
  console.log("api")
  api.post(url + 'login', user, success, failure)
}
let register = (user, success, failure) => {
  api.post(url + 'register', user, success, failure)
}
export default {
  login, register
}
