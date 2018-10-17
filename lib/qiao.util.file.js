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
 * dirs
 * 	for mkdir()
 */
exports.dirs = [];

/**
 * mkdir
 * 	folder : folder
 */
exports.mkdir = function(folder){
	try{
		// check dir
		checkdir(folder);
		
		// mkdirs
		if(exports.dirs.length){
			exports.dirs.reverse();
			console.log(exports.dirs);
			
			for(var i=0; i<exports.dirs.length; i++){
				fs.mkdirSync(exports.dirs[i]);
			}
			
			exports.dirs = [];
		}
		
		return true;
	}catch(e){
		exports.dirs = [];

		return false;
	}
};

// checkdir
function checkdir(dir){
	var pdir = path.dirname(dir);
	
	if(!exports.isExists(pdir)){
		exports.dirs.push(pdir);
		checkdir(pdir);
	}
}