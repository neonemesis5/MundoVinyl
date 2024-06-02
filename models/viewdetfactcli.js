const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class InvoiceClientDetail extends Model {}

InvoiceClientDetail.init(
	{
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id', // Assuming 'id' refers to the product
		},
		productName: {
			type: DataTypes.STRING(50), // Assuming name comes from products table
			allowNull: true,
			field: 'name',
		},
		detailId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'det_id',
		},
		qty: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3) for quantity
			allowNull: true,
			field: 'qty',
		},
		amtPriceSale: {
			// Corrected naming convention (singular for price)
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3) for price
			allowNull: true,
			field: 'amt_pricesale',
		},
		amtCost: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3) for cost
			allowNull: true,
			field: 'amt_cost',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
		invoiceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'invoice_id',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches view schema)
		modelName: 'InvoiceClientDetail',
		tableName: 'det_factclient', // Use view name for reference
		freezeTableName: true, // Prevent sequelize from pluralizing the table name
		timestamps: false, // Disable timestamps since the view doesn't have them
		sequelize,
	}
);

module.exports = InvoiceClientDetail;
