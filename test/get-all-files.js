'use strict';

var qiaoUtilFile = require('../lib/qiao.util.file');

var test = function(){
	var folder 	= 'z:/workspaces/qiao.plugin.coder/';
	var files	= qiaoUtilFile.getAllFiles(folder);
	
	console.log(files);
};

test();