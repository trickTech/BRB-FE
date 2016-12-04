/**
 * Created by lhy95 on 2016/12/4.
 */

function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  // console.log(window.location.hash.substr(3))
  var r = window.location.hash.substr(3).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

module.exports = getQueryString
