const { httpGet, httpDelete, httpPost, httpPut } = require('./actions')
const { deepEqual } = require('assert')

describe('actions', () => {
  describe('httpGet', () => {
    it('should return an httpGet object', () => {
      const actual = httpGet('http://www.example.com')
      const expected = {
        type: 'httpGet',
        url: 'http://www.example.com',
        headers: {},
        options: {}
      }
      deepEqual(actual, expected)
    })

    it('should return an httpGet ', () => {
      const actual = httpGet('http://www.example.com', {
        'Content-type': 'application/json'
      }, {
        credentials: 'include'
      })

      const expected = {
        type: 'httpGet',
        url: 'http://www.example.com',
        headers: {
          'Content-type': 'application/json'
        },
        options: {
          credentials: 'include'
        }
      }

      deepEqual(actual, expected)
    })
  })

  describe('httpDelete', () => {
    it('should return an httpDelete object', () => {
      const actual = httpDelete('http://www.example.com')
      const expected = {
        type: 'httpDelete',
        url: 'http://www.example.com',
        headers: {},
        options: {}
      }
      deepEqual(actual, expected)
    })

    it('should return an httpDelete ', () => {
      const actual = httpDelete('http://www.example.com', {
        'Content-type': 'application/json'
      }, {
        credentials: 'include'
      })

      const expected = {
        type: 'httpDelete',
        url: 'http://www.example.com',
        headers: {
          'Content-type': 'application/json'
        },
        options: {
          credentials: 'include'
        }
      }

      deepEqual(actual, expected)
    })
  })

  describe('httpPost', () => {
    it('should return an httpPost object', () => {
      const actual = httpPost('http://www.example.com', {foo: 'bar'})
      const expected = {
        type: 'httpPost',
        url: 'http://www.example.com',
        payload: {foo: 'bar'},
        headers: {},
        options: {}
      }
      deepEqual(actual, expected)
    })

    it('should return an httpPost ', () => {
      const actual = httpPost('http://www.example.com', {foo: 'bar'}, {
        'Content-type': 'application/json'
      }, {
        credentials: 'include'
      })

      const expected = {
        type: 'httpPost',
        url: 'http://www.example.com',
        payload: {foo: 'bar'},
        headers: {
          'Content-type': 'application/json'
        },
        options: {
          credentials: 'include'
        }
      }

      deepEqual(actual, expected)
    })
  })

  describe('httpPut', () => {
    it('should return an httpPut object', () => {
      const actual = httpPut('http://www.example.com', {foo: 'bar'})
      const expected = {
        type: 'httpPut',
        url: 'http://www.example.com',
        payload: {foo: 'bar'},
        headers: {},
        options: {}
      }
      deepEqual(actual, expected)
    })

    it('should return an httpPut ', () => {
      const actual = httpPut('http://www.example.com', {foo: 'bar'}, {
        'Content-type': 'application/json'
      }, {
        credentials: 'include'
      })

      const expected = {
        type: 'httpPut',
        url: 'http://www.example.com',
        payload: {foo: 'bar'},
        headers: {
          'Content-type': 'application/json'
        },
        options: {
          credentials: 'include'
        }
      }

      deepEqual(actual, expected)
    })
  })
})
