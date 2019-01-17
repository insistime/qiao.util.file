'use strict';

var fs 		= require('fs');
var path	= require('path');

/**
 * extname
 * 	filePath : file path
 */
exports.extname = function(filePath){
	return filePath ? path.extname(filePath.toLowerCase()) : null;
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
		// check dir
		checkdir(folder);
		
		// mkdirs
		if(dirs.length){
			dirs.reverse();
			console.log(dirs);
			
			for(var i=0; i<dirs.length; i++){
				fs.mkdirSync(dirs[i]);
			}
			
			dirs = [];
		}
		
		return true;
	}catch(e){
		dirs = [];

		return false;
	}
};

// checkdir
var dirs = [];
function checkdir(dir){
	var pdir = path.dirname(dir);
	
	if(!exports.isExists(pdir)){
		dirs.push(pdir);
		checkdir(pdir);
	}
}

/**
 * getAllFiles
 * 	folder : folder, must end with /
 */
exports.getAllFiles = function(folder){
	var list = [];
	getFiles(folder, list);
	
	return list;
};

// get files
function getFiles(fpath, list){
	fs.readdirSync(fpath).forEach(function(name){
		var stat = fs.statSync(fpath + name);
		if(stat.isDirectory()){
			getFiles(fpath + name + '/', list);
		}else{
			list.push({
				path : fpath,
				name : name
			});
		}
	});
}