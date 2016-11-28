var DataSave = require('../models/dataSave.js').DataSave;

describe ('DataSave', function() {

  it ('should save the current key and data info', function() {
      var latestData = new DataSave();
      latestData.addData("test", "does this pass?");
      expect(latestData.dataStore[0]).toEqual({"test" : "does this pass?"});
  });

});
