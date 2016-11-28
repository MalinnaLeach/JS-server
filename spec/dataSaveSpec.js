var DataSave = require('../models/dataSave.js').DataSave;

describe ('DataSave', function() {

  it ('should save the current key and data info', function() {
      var dataManager = new DataSave();
      dataManager.addData("test", "does this pass?");
      expect(dataManager.dataStore[0]).toEqual({"test" : "does this pass?"});
  });

});
