'use strict';

var qiaoUtilFile = require('../lib/qiao.util.file.js');

var test = function(){
	var folderPath 	= 'd:/test1/';
	var filePath	= 'd:/test.png'

	// rm folder
	qiaoUtilFile.rm(folderPath);
		
	// rm file
	qiaoUtilFile.rm(filePath);
};

test();