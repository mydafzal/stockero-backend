'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class Buyer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Buyer.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			Email: DataTypes.STRING,
			Password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Buyer',
			freezeTableName: true,
		}
	)
	return Buyer
}
