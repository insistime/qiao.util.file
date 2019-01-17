'use strict';

var qiaoUtilFile = require('../lib/qiao.util.file.js');

var test = function(){
	var foldersAndFiles = qiaoUtilFile.lsdir('z:/workspaces/qiao.plugin.coder/');
	console.log(foldersAndFiles);
};

test();