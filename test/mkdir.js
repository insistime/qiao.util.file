'use strict';

var qiaoUtilFile = require('../lib/qiao.util.file.js');

var test = function(){
	var folder = 'd:/test1/test2/test3/test.js';
	
	qiaoUtilFile.mkdir(folder);
};

test();