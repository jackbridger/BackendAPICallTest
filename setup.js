// Useless at the moment but was thinking of ways to automate the building.
var exec = require('child_process').exec, child;

child = exec('npm test',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });