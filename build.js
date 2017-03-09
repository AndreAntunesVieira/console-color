(function(){
  'use strict';
  let exec = require('child_process').exec
    , fs = require('fs')
    , babylon = require("babylon")
    , babel = require("babel-core")
    , UglifyJS = require("uglify-js")
    , path = require("path")
    , promises = [];


  exec('mocha tests', function(error, stdout, stderr) {
    if (error !== null) {
      console.log('Fail on tests: ' + error);
    }
    else{
      console.log("Tests OK");
      rimraf('dist');
      fs.mkdirSync('dist');
      fs.readdir('src', function(err, srcFiles){
        promises = srcFiles.map(compileEachSourceFile);
        Promise.all(promises).then(function(){
          console.log('Done');
        })
      })
    }
  });

  function rimraf(dir_path) {
    if (fs.existsSync(dir_path)) {
      fs.readdirSync(dir_path).forEach(function(entry) {
        var entry_path = path.join(dir_path, entry);
        if (fs.lstatSync(entry_path).isDirectory()) {
          rimraf(entry_path);
        } else {
          fs.unlinkSync(entry_path);
        }
      });
      fs.rmdirSync(dir_path);
    }
  }

  function uglifyCode(code){
    console.log(code);
    const ast = babylon.parse(code, {allowReturnOutsideFunction: true});
    const babResponse = babel.transformFromAst(ast, code, {ast: false, comments: false, minified: true});
    return UglifyJS.minify(babResponse.code, {fromString: true}).code
  }

  function compileEachSourceFile(fileName){
    return new Promise(function(success, fail){
      fs.readFile('src/'+fileName, 'utf8', function(err, code) {
        console.log(code);
        console.log('uglifyCode(code)');
        console.log(uglifyCode(code));
        let fullFileName = fileName.split('.');
        let extension = fullFileName.pop();
        var minFileName = fullFileName.join('.') + '.min.' + extension;
        fs.writeFile('dist/'+minFileName, uglifyCode(code), function (err) {
          if(err !== null){
            fail(err)
          }
          else{
            console.log('Compilado e salvo: ' + fileName);
            success()
          }
        })
      })
    })
  }
})();