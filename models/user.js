'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},

			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			email: { type: DataTypes.STRING, unique: true },

			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
			freezeTableName: true,
		}
	)
	return User
}
