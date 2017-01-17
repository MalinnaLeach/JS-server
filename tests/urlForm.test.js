
it('will make a request to /data', () => {
  request("http://localhost:3000", function(error, response, body){
      expect(body).toContain('Input a URL to find social profiles');
    });
});
