module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        uglify: {
            options: {
                banner: '/*!\n' +
                        ' * <%= pkg.name %> <%= pkg.version %>\n' +
                        ' * https://github.com/humantech/bootree\n ' +
                        ' *\n ' +
                        ' * Copyright <%= grunt.template.today("yyyy") %>\n ' +
                        ' * Released under the MIT license \n ' +
                        ' * https://github.com/humantech/bootree/blob/master/LICENSE \n ' +
                        ' *\n ' +
                        ' * Build: <%= grunt.template.today("dd-mm-yyyy") %>\n ' +
                        ' */\n'
            },
            dist: {
                files: {
                    'dist/js/bootree.min.js': ['src/js/bootree.js']
                }
            }
        },

        qunit: {
            all: ['test/index.html']
        },

        less: {
            development: {
                files: {
                    'dist/css/bootree.css': 'src/less/bootree.less'
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/unit/*.js'],
            options: {
                jshintrc: true,
                globals: {
                    console: true,
                    module: true,
                    document: true,
                    jquery: true
                }
            }
        }

  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-qunit')
  grunt.loadNpmTasks('grunt-contrib-less')

  grunt.registerTask('test', ['jshint', 'qunit'])
  grunt.registerTask('default', ['test', 'uglify', 'less'])

}