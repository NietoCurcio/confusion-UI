const { minify } = require('terser')
const fs = require('fs')
const path = require('path')

const code = {
  'file1.js': fs.readFileSync(
    path.join(__dirname, 'src', 'js', 'script.js'),
    'utf8'
  ),
}
minify(code, { compress: true, mangle: true }).then(({ code }) => {
  const parentDir = './dist'
  if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir)
  const dir = parentDir + '/js'
  if (!fs.existsSync(dir)) fs.mkdirSync(dir)
  fs.writeFileSync('./dist/js/script.js', code, { encoding: 'utf-8' })
})
