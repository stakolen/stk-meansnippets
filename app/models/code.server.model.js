'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Code Schema
 */
var CodeSchema = new Schema({
	description: {
		type: String,
		default: '',
		required: 'Tell us why this code snippet is useful',
		trim: true
	},
	code: {
		type: String,
		default: '',
		required: 'Enter the code snippet here',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Code', CodeSchema);
