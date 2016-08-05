'use strict';

module.exports = {
	app: {
		title: 'Code Snapp',
		description: 'A mean way to share code snippets',
		keywords: 'code, snippets, hints, meanjs'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/styles/github.min.css',
				'public/lib/highlightjs/styles/monokai.css'
			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-animate/angular-animate.js', 
				'public/lib/angular-touch/angular-touch.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				// AGGIUNGO LE LIBRERIE CHE NON TROVO NEI FILE INSTALLATI DAL GENERATORE
				'//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js',
				'http://pc035860.github.io/angular-highlightjs/angular-highlightjs.min.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
