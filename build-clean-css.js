const CleanCSS = require('clean-css')
const path = require('path')
const fs = require('fs')

const sources = [path.join(__dirname, 'src', 'css', 'custom.css')]

new CleanCSS({ inline: ['all'] }).minify(sources, function (error, output) {
  console.log(error)
  const parentDir = './dist'
  if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir)
  const dir = parentDir + '/css'
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  fs.writeFileSync('./dist/css/custom.css', output.styles, {
    encoding: 'utf-8',
  })
})
