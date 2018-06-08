const { writeFileSync } = require('fs')
const path = require('path')
const workboxBuild = require('workbox-build')
const uglifyJS = require('uglify-js')

module.exports = bundle => {
  const { outDir, minify } = bundle.options

  bundle.on('bundled', () => {
    const options = {
      globDirectory: outDir,
      globPatterns: [
        '**\/*.{js,css,html,png}'
      ],
      swDest: path.resolve(outDir, '/sw.js')
    }

    workboxBuild.generateSWString(options).then(swString => {
      if (minify) {
        swString = uglifyJS.minify(swString).code
      }
      writeFileSync(options.swDest, swString)
    })
  })
}
