const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database'); // Assuming your database configuration file

class JobDepartment extends Model {}

JobDepartment.init(
	{
		jobId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'id', // Assuming 'id' refers to the job (tipo_operador)
		},
		jobName: {
			type: DataTypes.STRING(50), // Assuming name comes from tipo_operador table
			allowNull: true,
			field: 'namecargo',
		},
		departmentId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'iddpto',
		},
		departmentName: {
			type: DataTypes.STRING(50), // Assuming name comes from departament table
			allowNull: true,
			field: 'dpto_name',
		},
	},
	{
		underscored: true, // Use underscores for column names (matches view schema)
		modelName: 'JobDepartment',
		tableName: 'tab_cargodpto', // Use view name for reference
		freezeTableName: true, // Prevent sequelize from pluralizing the table name
		timestamps: false, // Disable timestamps since the view doesn't have them
		sequelize,
	}
);

module.exports = JobDepartment;
