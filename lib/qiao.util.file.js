'use strict';

var fs = require('fs');

/**
 * isExists
 * 	path : file or folder path
 */
exports.isExists = function(path){
	try{
		fs.accessSync(path);
		
		return true;
	}catch(e){
		return false;
	}
};

var path = 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
var s = exports.isExists(path);
console.log(s);