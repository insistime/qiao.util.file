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
 * 	fpath : file or folder path
 */
exports.isExists = function(fpath){
	try{
		fs.accessSync(fpath);
		
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