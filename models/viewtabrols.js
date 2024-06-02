const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class RoleHierarchy extends Model {}

RoleHierarchy.init(
	{
		roleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id',
		},
		roleName: {
			type: DataTypes.STRING(50), // Assuming name comes from tipo_operador table
			allowNull: true,
			field: 'name1',
		},
		parentRoleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'id2',
		},
		parentRoleName: {
			type: DataTypes.STRING(50), // Assuming name comes from tipo_operador table
			allowNull: true,
			field: 'name2',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches view schema)
		modelName: 'RoleHierarchy',
		tableName: 'tabla_rols', // Use view name for reference
		freezeTableName: true, // Prevent sequelize from pluralizing the table name
		timestamps: false, // Disable timestamps since the view doesn't have them
		sequelize,
	}
);

module.exports = RoleHierarchy;
