/**
 * LS过滤器
 */
const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)

const dirPath = args[0]
// the suffix to be filtered
const pat = args[1]

function readDir(_path, filter) {
  fs.readdir(_path, (err, files) => {
    if (err) {
      throw err
    }
    if (filter) {
      files = files.filter(file => {
        return path.extname(file) === '.' + filter
      })
    }
    console.log(files.join('\n'))
  })
}

// readDir('./test', 'txt')
readDir(dirPath, pat)
