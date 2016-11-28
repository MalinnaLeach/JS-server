var request = require('request');

describe('set route',function(){

  beforeEach(function(done) {
    request("http://localhost:4000/set?bestfun=coding", function(error, response, body){
      done();
    });
  });

  it("should display added test data", function(done) {
    request("http://localhost:4000/test", function(error, response, body){
      expect(body).toContain('{"bestfun":"coding"}');
      done();
    });
  });

});
