/**
 * Created by lhy95 on 2016/12/2.
 */

// let baseUrl = 'http://115.159.184.76:23333/'
let baseUrl = process.env.baseUrl
const requestConfig = {
  postEvent: baseUrl + 'events/',
  getEvent: baseUrl + 'events/',
  isLogin: baseUrl + 'auth/islogin/',
  auth: baseUrl + 'auth/auth/',
  goYibanOauth: ''
}

module.exports = requestConfig
