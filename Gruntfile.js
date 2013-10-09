/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    markdown: {
      all: {
        files: [
          {
            expand: true,
            src: 'src/markdown/*.md',
            dest: 'src/html/',
            ext: '.html'
          }
        ],
        options: {
          /*template: 'myTemplate.jst',
          preCompile: function(src, context) {},
          postCompile: function(src, context) {},
          templateContext: {},*/
          markdownOptions: {
            gfm: true/*,
            highlight: manual,
            codeLines: {
              before: '<span>',
              after: '</span>'
            }*/
          }
        }
      }
    },
    watch: {
      /*gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }*/
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-markdown');

  // Default task.
  grunt.registerTask('default', ['markdown']);

};
