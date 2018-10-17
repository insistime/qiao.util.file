'use strict';

var fs 		= require('fs');
var path	= require('path');

/**
 * extname
 * 	filePath : file path
 */
exports.extname = function(filePath){
	return path.extname(filePath);
};

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

/**
 * mkdir
 * 	folder : folder
 */
exports.mkdir = function(folder){
	try{
		fs.mkdirSync(folder);
	}catch(e){
		console.log(e);
	}
};