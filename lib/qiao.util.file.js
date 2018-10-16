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