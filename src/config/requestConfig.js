/**
 * Created by lhy95 on 2016/12/2.
 */

let baseUrl = 'http://115.159.184.76:23333/'
const requestConfig = {
  postEvent: baseUrl + 'events/',
  getEvent: baseUrl + 'events/',
  isLogin: baseUrl + 'auth/islogin'
}

module.exports = requestConfig
