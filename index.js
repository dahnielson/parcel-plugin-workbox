const { writeFileSync } = require('fs')
const path = require('path')
const workboxBuild = require('workbox-build')
const uglifyJS = require('uglify-js')
const logger = require('parcel-bundler/src/Logger')

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

    logger.status('🛠️', 'Workbox')
    workboxBuild.generateSWString(options).then(swString => {
      logger.status('✓', 'Service worker generated')
      if (minify) {
        swString = uglifyJS.minify(swString).code
        logger.status('✓', 'Service worker minified')
      }
      writeFileSync(options.swDest, swString)
      logger.status('✓', 'Service worker written : ' + options.wDest)
    }, err => {
      logger.err(err)
      throw err
    })
  })
}
