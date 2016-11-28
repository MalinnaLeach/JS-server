function DataSave() {
  this.dataStore = [];
}

DataSave.prototype.addData = function(key, value) {
  var jsonVariable = {};
  jsonVariable[key] = value;
  this.dataStore.push(jsonVariable);
}

exports.DataSave = DataSave;
