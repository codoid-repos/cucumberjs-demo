module.exports = function (grunt) {

    grunt.initConfig({
        cucumberjs: {
            options: {
                require: ["features/step_definitions"],
                format: 'html',
                output: 'reports/my_report.html',
                theme: 'bootstrap'
            },
            features: []
        }
    })

    grunt.loadNpmTasks('grunt-cucumberjs');

    grunt.registerTask('default', ['cucumberjs']);

};