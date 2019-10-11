'use strict';

/**
 * fs
 */
exports.fs		= require('fs');

/**
 * path
 */
exports.path  	= require('path');

/**
 * extname
 * 	filePath : file path
 */
exports.extname = function(filePath){
	return filePath ? exports.path.extname(filePath.toLowerCase()) : null;
};

/**
 * isExists
 * 	fpath : file or folder path
 */
exports.isExists = function(fpath){
	try{
		exports.fs.accessSync(fpath);
		
		return true;
	}catch(e){
		return false;
	}
};

/**
 * ls dir
 * 	dir : must end with /
 */
exports.lsdir = function(dir){
	var folders = [];
	var files	= [];
	getFoldersAndFiles(dir, folders, files);
	
	return {
		folders : folders,
		files	: files
	};
};

/**
 * mkdir
 */
exports.mkdir = function(dir){
	try{
		// check dir
		var dirs = [];
		checkDir(dir, dirs);
		
		// check dirs
		if(!dirs.length) return false;
		
		// mkdir
		dirs.reverse();
		for(var i=0; i<dirs.length; i++) exports.fs.mkdirSync(dirs[i]);
		
		return true;
	}catch(e){
		return false;
	}
};

// check dir
function checkDir(dir, list){
	var pdir = exports.path.dirname(dir);
	
	if(!exports.isExists(pdir)){
		list.push(pdir);
		checkDir(pdir, list);
	}
}

/**
 * rm
 * 	path, file or folder path, folder must end with /
 */
exports.rm = function(fpath){
	try{
		// rm file
		var pathStat = exports.fs.statSync(fpath);
		if(!pathStat.isDirectory()){
			exports.fs.unlinkSync(fpath);
			
			return true;
		}
		
		// ls dir
		var folders = [];
		var files 	= [];
		getFoldersAndFiles(fpath, folders, files);
		folders.reverse();
		
		// rm folder
		for(var i=0; i<files.length; i++) exports.fs.unlinkSync(files[i].path + files[i].name);
		for(var i=0; i<folders.length; i++) exports.fs.rmdirSync(folders[i].path + folders[i].name);
		exports.fs.rmdirSync(fpath);
		
		// return
		return true;
	}catch(e){
		console.log(e);
		return false;
	}
};

// get folders and files
function getFoldersAndFiles(fpath, folders, files){
	exports.fs.readdirSync(fpath).forEach(function(name){
		var stat = exports.fs.statSync(fpath + name);
		if(stat.isDirectory()){
			folders.push({
				path : fpath,
				name : name
			});
			
			getFoldersAndFiles(fpath + name + '/', folders, files);
		}else{
			files.push({
				path : fpath,
				name : name
			});
		}
	});
}