const fs = require('fs');
const download = require('download');
const unzip = require('unzip');


download('http://mta.qq.com/mta/resource/download/mta_wechat_sdk.zip')
    .pipe(unzip.Parse())
    .on('entry', function (entry) {
        let fileName = entry.path;
        let type = entry.type; // 'Directory' or 'File'
        let size = entry.size;
        if (fileName === 'mta_analysis.js') {
            entry.pipe(fs.createWriteStream('./index.js'));
            console.log('更新文件成功');
        } else {
            entry.autodrain();
        }
  });
