var http = require('http');
var exec = require('child_process').exec;
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/push', secret: 'abc' });

function run_cmd(cmd, callback) { exec(cmd, callback); };

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(4567);


handler.on('*', function (event) {
		exec("git pull");
		console.log("redeploy");
	}
);

