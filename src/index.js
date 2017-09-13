const Promise = require('bluebird')
const request = Promise.promisifyAll(require('request'))
const fs = Promise.promisifyAll(require('fs'))

const url = 'https://www.student.cs.uwaterloo.ca/~se212/george/ask-george/cgi-bin/george.cgi/check'

module.exports = function (file) {
  fs.readFileAsync(file, 'utf8')
    .then((contents) => {
      return request.postAsync({
        uri: url,
        headers: {
          'Content-Type': 'text/plain'
        },
        body: contents
      })
    })
    .then((res) => {
      console.log(res.body)
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
}
