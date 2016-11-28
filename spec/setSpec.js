var request = require('request');

describe('set route',function(){

  beforeEach(function(done) {
    request("http://localhost:4000/set?bestfun=coding", function(error, response, body){
      done();
    });
  });

  it("should add the specified data", function(done) {
    request("http://localhost:4000/data", function(error, response, body){
      expect(body).toContain('{"bestfun":"coding"}');
      done();
    });
  });

});
