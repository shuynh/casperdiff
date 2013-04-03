var casper = require('casper').create();

casper.start('http://www.nwadealpiggy.com/', function() { this.capture('test-prod.png', { top: 0, left:0, width:1000, height:  1000}); });
casper.thenOpen('http://nwa.staging.groupcommerce.com/', function() { this.capture('test-staging.png', { top: 0, left:0, width:1000, height:  1000}); });

casper.run();
