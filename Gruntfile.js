'use strict'
const sass = require('node-sass')

module.exports = function (grunt) {
  require('time-grunt')(grunt)
  require('load-grunt-tasks')(grunt)
  require('jit-grunt')(grunt)

  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
      },
      dist: {
        files: {
          'src/css/custom.css': 'src/sass/custom.scss',
        },
      },
    },
    watch: {
      files: 'src/sass/*.scss',
      tasks: ['sass'],
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['src/sass/*.scss', 'src/*.html', 'src/js/*.js'],
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './',
          },
        },
      },
    },
  })

  grunt.registerTask('css', ['scss'])
  grunt.registerTask('default', ['browserSync', 'watch'])
}
