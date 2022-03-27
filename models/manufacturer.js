'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Manufacturer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Manufacturer.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: DataTypes.STRING,
			address: DataTypes.STRING,
			city: DataTypes.STRING,
			factory_id: DataTypes.INTEGER,
			stripeAccountId: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
			CNIC: DataTypes.STRING,
			ntn: DataTypes.STRING,
			isApproved: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Manufacturer',
			freezeTableName: 'Manufacturer',
		}
	)
	return Manufacturer
}
