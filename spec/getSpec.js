var request = require('request');

it("should respond with hello world", function(done) {
  request("http://localhost:4000/get", function(error, response, body){
    expect(body).toEqual("hello world");
    done();
  });
});
