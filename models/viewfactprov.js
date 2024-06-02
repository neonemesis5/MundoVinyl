const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class SupplierInvoice extends Model {}

SupplierInvoice.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id',
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'created_at',
		},
		amtTotal: {
			type: DataTypes.DECIMAL(12, 3), // Assuming total amount has precision (12) and scale (3)
			allowNull: true,
			field: 'amt_total',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
		supplierId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'supplier_id',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches view schema)
		modelName: 'SupplierInvoice',
		tableName: 'suppliers_invoices', // Use view name for reference
		freezeTableName: true, // Prevent sequelize from pluralizing the table name
		timestamps: false, // Disable timestamps since the view doesn't have them
		sequelize,
	}
);

module.exports = SupplierInvoice;
