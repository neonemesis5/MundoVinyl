const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class UnitConversion extends Model {}

UnitConversion.init(
	{
		conversionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id',
		},
		quantity1: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision for quantity
			allowNull: true,
			field: 'qty1',
		},
		unitDescription1: {
			type: DataTypes.STRING(50), // Assuming description comes from types_units table
			allowNull: true,
			field: 'desc1',
		},
		quantity2: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision for quantity
			allowNull: true,
			field: 'qty2',
		},
		unitDescription2: {
			type: DataTypes.STRING(50), // Assuming description comes from types_units table
			allowNull: true,
			field: 'desc2',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches view schema)
		modelName: 'UnitConversion',
		tableName: 'tabla_conversion', // Use view name for reference
		freezeTableName: true, // Prevent sequelize from pluralizing the table name
		timestamps: false, // Disable timestamps since the view doesn't have them
		sequelize,
	}
);

module.exports = UnitConversion;
