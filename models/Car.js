import Sequelize from 'sequelize';
import connection from '../config/db.js';
import bcrypt from 'bcrypt';
import User from './User.js';

const Car = connection.define(
    'car',
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
        CNH: {
            type: Sequelize.STRING,
            allowNull: false
        },
        vehicleType: {
            type: Sequelize.STRING,
            allowNull: false
        },
        model: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mark: {
            type: Sequelize.STRING,
            allowNull: false
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false
        },
        licensePlate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        yearOfManufacture: {
            type: Sequelize.DATE,
            allowNull: false
        },
        capacity: {
            type: Sequelize.STRING,
            allowNull: false
        },
        canopyCar: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }
);

Car.belongsTo(User, {
    foreignKey: 'idUser'
});

export default Car;