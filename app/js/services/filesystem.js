app.service('filesystem', function ($scope, $rootScope, command) {

	var fs = require('fs');
	var chokidar = require('chokidar');

	this.Create_File = function (data) {


		fs.writeFile(data.path, data.boiler, (err) => {
			if (err) throw err;

			console.log("The file was succesfully saved!");

			return true;
		});

	}


	this.Delete_File = function (data) {

		fs.unlink(data.path, (err) => {
			if (err) throw err;
			console.log('successfully deleted /tmp/hello');

			return true;
		});

	}


	this.file_crawl = function (path) {


		watcher = chokidar.watch(path, {
			ignored: /[\/\\]\./,
			persistent: true
		});

		watcher
			.on('add', function (path) {

				return path;

			})
			.on('addDir', function (path) {

				return path;
			})
			.on('error', function (error) {

				return path;
			})
			.on('ready', onWatcherReady)
			.on('raw', function (event, path, details) {

				// timer.reset_timer();
				console.log('Raw event info:', event, path, details);
			});

	}


	this.git_actions = function (path) {

		var payload = 'git add' + ' ' + path + '/n' + 'git commit' + '/n' + 'git push';

		command.command(payload);


	}


	this.stream = function (path) {


		watcher = chokidar.watch(path, {
			ignored: /[\/\\]\./,
			persistent: true
		});

		function onWatcherReady() {

			console.log('Initialization completed');
		}

		watcher
			.on('add', function (path) {

				git_actions(path);

			})
			.on('addDir', function (path) {

				git_actions(path);
			})
			.on('change', function (path) {

				git_actions(path);
			})
			.on('unlink', function (path) {

				git_actions(path);
			})
			.on('unlinkDir', function (path) {

				git_actions(path);

			})
			.on('error', function (error) {

				git_actions(path);
			})
			.on('ready', onWatcherReady)
			.on('raw', function (event, path, details) {

				// timer.reset_timer();

				console.log('Raw event info:', event, path, details);
			});
	}


}

});