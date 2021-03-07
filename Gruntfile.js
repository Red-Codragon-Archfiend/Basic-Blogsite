module.exports = function(grunt) {
    grunt.initConfig({

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: './assets/sass',
                    src: ['*.scss'],
                    dest: './public/css',
                    ext: '.css'
                }]
            }
        },

        watch: {
            css: {
                files: [
                    './assets/sass/*.scss',
                    './assets/sass/partials/*.scss',
                ],
                tasks: ['sass', 'cssmin'],
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './public/css',
                    src: ['*.css', '!*.min.css'],
                    dest: './public/css',
                    ext: '.min.css'
                }]
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    './assets/js/*.min.js' : ['./assets/js/*.js']
                }
            }
        }
        
    });

    // load tasks
    grunt.loadNpmTasks('grunt-node-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'watch');
};