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

## documentation

# api
## is exists
```javascript
'use strict';

var qiaoUtilFile = require('qiao.util.file');

var test = function(){
	var path = 'z:/workspaces/qiao.plugin.coder/lib/qiao.plugin.coder.js';
	var s = qiaoUtilFile.isExists(path);
	console.log(s);
};

test();
```

# version
## 0.0.2.20181017
1. isExists
2. extname

## 0.0.1.20181016
1. init