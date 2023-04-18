import Sequelize from 'sequelize';
import connection from '../config/db.js';

const Object = connection.define(
    'object',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        weight: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        size: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        numberOfObjects: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },

    }
);

Review.belongsTo(User, {
    foreignKey: 'idUser'
  });

export default Object;