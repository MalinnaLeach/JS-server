var request = require('request');

describe('test route',function(){

  it("should display current datastore", function(done) {
    request("http://localhost:4000/test", function(error, response, body){
      expect(body).toContain([]);
      done();
    });
  });

});