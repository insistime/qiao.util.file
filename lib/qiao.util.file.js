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
		for(var i=0; i<dirs.length; i++) fs.mkdirSync(dirs[i]);
		
		return true;
	}catch(e){
		return false;
	}
};

// check dir
function checkDir(dir, list){
	var pdir = path.dirname(dir);
	
	if(!exports.isExists(pdir)){
		list.push(pdir);
		checkDir(pdir, list);
	}
}

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
 * rm
 * 	path, file or folder path, folder must end with /
 */
exports.rm = function(fpath){
	try{
		// rm file
		var pathStat = fs.statSync(fpath);
		if(!pathStat.isDirectory()){
			fs.unlinkSync(fpath);
			
			return true;
		}
		
		// ls dir
		var folders = [];
		var files 	= [];
		getFoldersAndFiles(fpath, folders, files);
		folders.reverse();
		
		// rm folder
		for(var i=0; i<files.length; i++) fs.unlinkSync(files[i].path + files[i].name);
		for(var i=0; i<folders.length; i++) fs.rmdirSync(folders[i].path + folders[i].name);
		fs.rmdirSync(fpath);
		
		// return
		return true;
	}catch(e){
		console.log(e);
		return false;
	}
};

// get folders and files
function getFoldersAndFiles(fpath, folders, files){
	fs.readdirSync(fpath).forEach(function(name){
		var stat = fs.statSync(fpath + name);
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