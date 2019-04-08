const { writeFileSync } = require('fs')
const path = require('path')
const workboxBuild = require('workbox-build')
const uglifyJS = require('uglify-js')
const logger = require('@parcel/logger')

module.exports = bundle => {
  const { outDir, minify } = bundle.options

  bundle.on('bundled', () => {
    const options = {
      globDirectory: outDir,
      globPatterns: [
        '**/*.{js,css,html,png}'
      ],
      swDest: path.resolve(outDir, '/sw.js')
    }

    logger.log('🛠️', 'Workbox')
    workboxBuild.generateSWString(options).then(swString => {
      logger.success('Service worker generated')
      if (minify) {
        swString = uglifyJS.minify(swString).code
        logger.success('Service worker minified')
      }
      writeFileSync(options.swDest, swString)
      logger.success('Service worker written : ' + options.wDest)
    }).catch(err => {
      logger.error(err)
    })
  })
}
