module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
        //  outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'static/scss/app.scss'
        }
      }
    },

    purifycss: {
      options: {},
      target: {
        src: ['_site/*.html', '_site/static/*.js', '_site/**/201*/**/*.html'],
        css: ['css/app.css'],
        dest: 'static/app.css'
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/*.scss',
        tasks: ['sass', 'purifycss']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-purifycss');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
