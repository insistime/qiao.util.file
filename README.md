# urls
## homepage
[https://code.insistime.com/qiao.util.file](https://code.insistime.com/qiao.util.file)

## github
[https://github.com/insistime/qiao.util.file](https://github.com/insistime/qiao.util.file)

## npm
[https://www.npmjs.com/package/qiao.util.file](https://www.npmjs.com/package/qiao.util.file)

# started
## install
npm install qiao.util.file

## dependencies
1. fs
2. path

## documentation
1. fs, https://nodejs.org/dist/latest-v10.x/docs/api/fs.html
2. path, https://nodejs.org/dist/latest-v10.x/docs/api/path.html

# api
## extname
```javascript
'use strict';

var qiaoUtilFile = require('qiao.util.file');

var test = function(){
	var filePath 	= 'd:/test1/test2/test.js';
	var s 			= qiaoUtilFile.extname(filePath);
	
	console.log(s);
};

test();
```

## isExists
```javascript
'use strict';

var qiaoUtilFile = require('qiao.util.file');

var test = function(){
	var fpath 	= 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
	var s		= qiaoUtilFile.isExists(fpath);
	
	console.log(s);
};

test();
```

## lsdir
```javascript
'use strict';

var qiaoUtilFile = require('qiao.util.file');

var test = function(){
	var foldersAndFiles = qiaoUtilFile.lsdir('z:/workspaces/qiao.plugin.coder/');
	console.log(foldersAndFiles);
};

test();
```

## mkdir
```javascript
'use strict';

var qiaoUtilFile = require('qiao.util.file');

var test = function(){
	var folder = 'd:/test1/test2/test3/test.js';
	
	qiaoUtilFile.mkdir(folder);
};

test();
```

## rm
```javascript
'use strict';

var qiaoUtilFile = require('qiao.util.file');

var test = function(){
	var folderPath 	= 'd:/test1/';
	var filePath	= 'd:/test.png'

	// rm folder
	qiaoUtilFile.rm(folderPath);
		
	// rm file
	qiaoUtilFile.rm(filePath);
};

test();
```

# version
## 0.0.8.20191011
1. exports.fs
2. exports.path

## 0.0.7.20190122
1. modify md

## 0.0.6.20190117
1. extname to lower case
2. add lsdir
3. add rm

## 0.0.5.20190107
1. nodejs file tool

## 0.0.4.20181127
1. modify method name
2. add .js

## 0.0.3.20181122
1. npm audit

## 0.0.2.20181017
1. isExists
2. extname
3. mkdir
4. getAllFiles

## 0.0.1.20181016
1. init
