var DataTypes = require("sequelize").DataTypes;
var _bbs = require("./bbs");

function initModels(sequelize) {
  var bbs = _bbs(sequelize, DataTypes);


  return {
    bbs,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
