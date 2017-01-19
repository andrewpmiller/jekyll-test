module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        shell: {
            build: {
                command: 'jekyll build',
            },
            serve: {
                command: 'jekyll serve --watch',
            },
            kill:{
                command: 'pkill -f jekyll',
            }
        },

        watch: {
            config: {
                files: ['_config.yml'],
                tasks: ['reconfig','kill','serve']
            },

            updated: {
                files: ['*','_includes/*','_layouts/*','_posts/*','css/*','js/*','!Gruntfile.js','!_config.yml'],
                tasks: ['updated','build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'Default tasks', function() {
    //   grunt.log.write('There do not appear to be any tasks configured here...').ok();
    // grunt.task.run('watch');
    });


    grunt.registerTask('serve', ['shell:serve']);

    grunt.registerTask('build', ['shell:build']);

    grunt.registerTask('kill', ['shell:kill']);

    grunt.registerTask('reconfig', 'Watching the config file', function() {
        grunt.log.write('                                              ').ok();
        grunt.log.write('                                              ').ok();
        grunt.log.write('          Config file changed!                ').ok();
        grunt.log.write('                                              ').ok();
        grunt.log.write('                                              ').ok();
    });

    grunt.registerTask('startup', 'Get things started', function() {
        grunt.log.write('                                              ').ok();
        grunt.log.write('                                              ').ok();
        grunt.log.write('          Start things up!                    ').ok();
        grunt.log.write('                                              ').ok();
        grunt.log.write('                                              ').ok();
    });

    grunt.registerTask('updated', 'Watching the other files', function() {
      grunt.log.write('Another file changed!').ok();
    });



};
