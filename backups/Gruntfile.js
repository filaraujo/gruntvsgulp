module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'dist/grunt/style.css': 'src/styles/style.scss'
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/grunt/script.js': 'src/scripts/script.js'
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/grunt/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['sass', 'uglify', 'imagemin']);
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('js', ['uglify']);
    grunt.registerTask('image', ['imagemin']);

};
