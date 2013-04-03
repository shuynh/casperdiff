casper.test.comment('screenshots the first deal on both prod and staging');

casper.start('http://nwadealpiggy.com');

casper.then(function() {
    // Click on 1st offer link
    this.click('h3.offer-title a');
});

casper.then(function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
});

casper.then(function() {
    this.capture('screenshots/deal-prod.png', { top: 0, left:0, width:1000, height:  1000}); });

casper.thenOpen('http://nwa.staging.groupcommerce.com/', function()  {
   
    // Click on 1st offer link
    this.click('h3.offer-title a');
});

casper.then(function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
});

casper.then(function() {
    this.capture('screenshots/deal-staging.png', { top: 0, left:0, width:1000, height:  1000}); });

casper.run(function() {
   this.test.done();
})
