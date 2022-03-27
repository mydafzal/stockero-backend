'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Product.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			Name: DataTypes.STRING,
			Category: DataTypes.STRING,
			Stock: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Product',
			freezeTableName: true,
		}
	)
	return Product
}
