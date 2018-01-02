let axios = require('axios')
let root = '/api'

function apiAxios(method, url, params, success, failure) {

  axios({
    method: method,//提交方式GET,POST,DELETE....
    url: url,
    data: method === ('POST' || 'PUT' || 'PATCH') ? params : null,//`data`是要作为请求主体发送的数据，仅适用于请求方法“PUT”，“POST”和“PATCH”
    params: method === ('GET' || 'DELETE') ? params : null,
    baseURL: root,
    withCredentials: false
  }).then(function (res) {
    console.log(res);
    if (res.data.status === 0) {
      console.log("进入success");
      if (success) {//判断success函数是否存在
        console.log("执行success");
        success(res.data)
      }
    } else {
      console.log("进入failure");
      if (failure) {
        failure(res.data)
      } else {
        window.alert(`err: ${JSON.stringify(res.data)}`)
      }
    }
  }).catch(function (err) {

    console.log(`err: ${err}`)
  })

}

export default {
  get(url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post(url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put(url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete(url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  },
  patch(url, params, success, failure) {
    return apiAxios('PATCH', url, params, success, failure)
  }
}

