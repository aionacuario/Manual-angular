module.exports = function(grunt){
	grunt.initConfig({
		jshint:{
			all:['js/main.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default',['jshint']);
}