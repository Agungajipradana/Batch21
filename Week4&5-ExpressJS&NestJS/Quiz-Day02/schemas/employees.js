const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    employee_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "NULL"
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: "NULL"
    },
    email: {
      type: DataTypes.STRING(25),
      allowNull: true,
      defaultValue: "NULL"
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "NULL"
    },
    hire_date: {
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
    salary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    commision_pct: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departments',
        key: 'department_id'
      }
    }
  }, {
    sequelize,
    tableName: 'employees',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "employee_pk",
        unique: true,
        fields: [
          { name: "employee_id" },
        ]
      },
    ]
  });
};
