const { get, post, put, remove } = require('simple-protocol-http').options
const { merge } = require('./util')

function httpGet ({url, headers, options}) {
  const o1 = merge(options, {headers})
  return get(o1, url)
}

function httpPost ({url, payload, headers, options}) {
  const o1 = merge(options, {headers})
  return post(o1, url, payload)
}

function httpPut ({url, payload, headers, options}) {
  const o1 = merge(options, {headers})
  return put(o1, url, payload)
}

function httpDelete ({url, headers, options}) {
  const o1 = merge(options, {headers})
  return remove(o1, url)
}

module.exports = {
  httpPost,
  httpPut,
  httpGet,
  httpDelete
}
