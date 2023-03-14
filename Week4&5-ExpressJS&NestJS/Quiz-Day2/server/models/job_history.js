const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_history', {
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "NULL",
      references: {
        model: 'jobs',
        key: 'job_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'department_id'
      }
    }
  }, {
    sequelize,
    tableName: 'job_history',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "employee_start_pk",
        unique: true,
        fields: [
          { name: "employee_id" },
          { name: "start_date" },
        ]
      },
    ]
  });
};
