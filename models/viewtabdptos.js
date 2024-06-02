const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class DepartmentHierarchy extends Model {}

DepartmentHierarchy.init(
	{
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id',
		},
		departmentName: {
			type: DataTypes.STRING(50), // Assuming name comes from departament table
			allowNull: true,
			field: 'namedpto',
		},
		subDepartmentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'id2',
		},
		subDepartmentName: {
			type: DataTypes.STRING(50), // Assuming name comes from departament table
			allowNull: true,
			field: 'namesubdpto',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches view schema)
		modelName: 'DepartmentHierarchy',
		tableName: 'tabla_dptos', // Use view name for reference
		freezeTableName: true, // Prevent sequelize from pluralizing the table name
		timestamps: false, // Disable timestamps since the view doesn't have them
		sequelize,
	}
);

module.exports = DepartmentHierarchy;
