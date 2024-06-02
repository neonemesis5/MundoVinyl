const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class Product extends Model {}

Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			field: 'id',
			defaultValue: sequelize.literal("nextval('public.\"seqPro\"')"),
		},
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'category_id',
			// references: {
			// 	model: 'Category', // Assuming the model name for category table
			// 	key: 'id',
			// },
		},
		ancestorId: {
			// Corrected naming convention (singular for foreign key)
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'ancestor_id',
			// references: {
			// 	model: 'Product', // Assuming the model name for itself (hierarchical relationship)
			// 	key: 'id',
			// },
		},
		locationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'location_id',
			// references: {
			// 	model: 'Location', // Assuming the model name for location table
			// 	key: 'id',
			// },
		},
		typesUnitId: {
			// Corrected naming convention (singular for foreign key)
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'typesunits_id',
			// references: {
			// 	model: 'TypesUnit', // Assuming the model name for types_units table
			// 	key: 'id',
			// },
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'name',
		},
		description: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'description',
		},
		qty: {
			type: DataTypes.DECIMAL(12, 3), // Numeric with precision (12) and scale (3) for quantity
			allowNull: true,
			field: 'qty',
		},
		priceCost: {
			type: DataTypes.DECIMAL(14, 3), // Numeric with precision (14) and scale (3) for price cost
			allowNull: true,
			field: 'price_cost',
		},
		margin: {
			type: DataTypes.DECIMAL(3, 2), // Numeric with precision (3) and scale (2) for margin
			allowNull: true,
			field: 'margin',
		},
		status: {
			type: DataTypes.STRING(1),
			allowNull: true,
			field: 'status',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches table schema)
		modelName: 'Product',
		tableName: 'products',
		timestamps: false, // Disable timestamps since no 'created_at' or 'updated_at' columns
		sequelize,
	}
);

module.exports = Product;
