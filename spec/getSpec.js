var request = require('request');

describe('get route',function(){

  it("should respond with hello world", function(done) {
    request("http://localhost:4000/get", function(error, response, body){
      expect(body).toContain("hello world");
      done();
    });
  });

});
