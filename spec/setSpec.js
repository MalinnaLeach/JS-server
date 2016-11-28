var request = require('request');

describe('set route',function(){

  it("should add to the variable", function(done) {
    request("http://localhost:4000/get", function(error, response, body){
      expect(body).toContain("hello world");
      done();
    });
  });

});
