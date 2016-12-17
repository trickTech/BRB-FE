var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl: '"http://115.159.184.76:23334/"',
  goYibanOauth: '"https://openapi.yiban.cn/oauth/authorize?client_id=07f11a3f2773e24e&redirect_uri=http://f.yiban.cn/iapp28401&display=html"'
})
