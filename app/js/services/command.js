app.service('command', function ($scope, $rootScope, filesystem) {

  var fs        = require('fs');
  var cmd       = require('node-cmd');
  var skip = false;
  

  this.command = function (info) {

    cmd.get(
      info,
      function (err, data, stderr) {
        console.log("command executed");

        return true;
      }
    );


  }


  this.project_init = function (path, save) {


    var payload = 'git clone' + path;

    var exec = command(payload);

    if (exec == true) {

      filesystem.file_crawl(path, function (dir) {


        if (dir == save) {

          filesystem.Delete_file(dir);

          return;

        }
        else {

          skip = true;

           return;

        }

      });


      if (skip == true) {
            
            return;

      }
      else {

        filesystem.Create_File(save);

 
      }

    }

  }

});