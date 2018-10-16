'use strict';

var qiaoUtilFile = require('../lib/qiao.util.file');

var test = function(){
	var path = 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
	var s = qiaoUtilFile.isExists(path);
	console.log(s);
};

test();