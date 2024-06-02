const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class DepartmentSubdepartment extends Model {}

DepartmentSubdepartment.init(
	{
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id', // Assuming 'id' refers to the department
		},
		departmentName: {
			type: DataTypes.STRING(50), // Assuming name comes from department table (dp2)
			allowNull: true,
			field: 'namedep',
		},
		subdepartmentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'idsub', // Assuming 'id' refers to the subdepartment
		},
		subdepartmentName: {
			type: DataTypes.STRING(50), // Assuming name comes from department table (dp1)
			allowNull: true,
			field: 'namesub',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches view schema)
		modelName: 'DepartmentSubdepartment',
		tableName: 'depart_subdepart', // Use view name for reference
		freezeTableName: true, // Prevent sequelize from pluralizing the table name
		timestamps: false, // Disable timestamps since the view doesn't have them
		sequelize,
	}
);

module.exports = DepartmentSubdepartment;
