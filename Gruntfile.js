'use strict'
const sass = require('node-sass')

module.exports = function (grunt) {
  require('time-grunt')(grunt)
  require('load-grunt-tasks')(grunt)
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
  })

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
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: './src',
            src: ['*.html'],
            dest: 'dist',
            filter: 'isFile',
          },
        ],
      },
    },
    clean: {
      build: {
        src: ['dist/'],
      },
    },
    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: './src',
            src: ['img/*.{png, jpg, gif}'],
            dest: 'dist',
          },
        ],
      },
    },
    useminPrepare: {
      foo: {
        dest: 'dist',
        src: ['src/index.html'],
        // src: ['src/contactus.html', 'src/aboutus.html', 'src/index.html'],
      },
      options: {
        flow: {
          steps: {
            css: ['cssmin'],
            js: ['uglify'],
          },
          post: {
            css: [
              {
                name: 'cssmin',
                createConfig: function (context, block) {
                  var generated = context.options.generated
                  generated.options = {
                    keepSpecialComments: 0,
                    rebase: false,
                  }
                },
              },
            ],
          },
        },
      },
    },
    concat: {
      options: {
        separator: ';',
      },

      // dist configuration is provided by useminPrepare
      dist: {},
    },

    uglify: {
      dist: {},
    },

    cssmin: {
      dist: {},
    },
    filerev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 20,
      },

      release: {
        files: [
          {
            src: ['dist/js/*.js', 'dist/css/*.css'],
          },
        ],
      },
    },
    usemin: {
      html: ['dist/contactus.html', 'dist/aboutus.html', 'dist/index.html'],
      options: {
        // for finding the assts
        assetsDirs: ['dist', 'dist/css', 'dist/js'],
      },
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
        },
        files: {
          'dist/index.html': 'dist/index.html',
          'dist/contactus.html': 'dist/contactus.html',
          'dist/aboutus.html': 'dist/aboutus.html',
        },
      },
    },
  })

  grunt.registerTask('css', ['sass'])
  grunt.registerTask('default', ['browserSync', 'watch'])
  grunt.registerTask('build', [
    'clean',
    'copy',
    'imagemin',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin',
  ])
}
