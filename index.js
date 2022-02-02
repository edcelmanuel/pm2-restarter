
   var pm2 = require('pm2');

  pm2.connect(function(err) {
    if (err) throw err;

  setTimeout(function worker() {
    console.log("Restarting app...");
    pm2.restart(5, function() {});
    pm2.restart(2, function() {});
    pm2.restart(4, function() {});
    pm2.restart(8, function() {});
    pm2.restart(7, function() {});
    pm2.restart(6, function() {});
    pm2.restart(9, function() {});
    pm2.restart(10, function() {});
    pm2.restart(11, function() {});
    pm2.restart(12, function() {});
    pm2.restart(13, function() {});
    pm2.restart(14, function() {});
    pm2.restart(15, function() {});
    setTimeout(worker, 60 * 5000);
    }, 60 * 5000);
  });


