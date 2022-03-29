'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Sales extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Sales.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			productID: DataTypes.INTEGER,
			sellerID: DataTypes.INTEGER,
			city: DataTypes.STRING,
			price: DataTypes.FLOAT,
			paymentStatus: DataTypes.STRING,
			deliveryStatus: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Sale',
			freezeTableName: true,
		}
	)
	return Sales
}
