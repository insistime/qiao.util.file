'use strict';

var fs		= require('fs');
var qiaoUtilFile = require('../lib/qiao.util.file.js');

var test = function(){
//	var folderPath 	= 'd:/test';
//	var filePath	= 'd:/test.png'
//
//	// rm folder
//		
//	// rm file
//	qiaoUtilFile.rm(filePath);

	var path 	= 'd:/test/';
	var folders = [];
	var files	= [];
	getFoldersAndFiles(path, folders, files);
	console.log(folders);
	console.log(files);
};

test();

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