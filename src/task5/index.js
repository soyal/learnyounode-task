/**
 * LS过滤器
 */
const fs = require('fs')

// const args = process.argv.slice(1)

// const dirPath = args[0]
// // the suffix to be filtered
// const pat = args[1]

function readDir(path, filter) {
  fs.readdir(path, (err, files) => {
    if (err) {
      throw err
    }
    console.log(files)
  })
}

readDir('./test', null)
