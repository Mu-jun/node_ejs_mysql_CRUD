const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bbs', {
    bbs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    c_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    u_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bbs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bbs_id" },
        ]
      },
    ]
  });
};
