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

## is exists
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

## get all files
```javascript
'use strict';

var qiaoUtilFile = require('qiao.util.file');

var test = function(){
	var folder 	= 'z:/workspaces/qiao.plugin.coder/';
	var files	= qiaoUtilFile.getAllFiles(folder);
	
	console.log(files);
};

test();
```

# version
## 0.0.3.20181122
1. npm audit

## 0.0.2.20181017
1. isExists
2. extname
3. mkdir
4. getAllFiles

## 0.0.1.20181016
1. init