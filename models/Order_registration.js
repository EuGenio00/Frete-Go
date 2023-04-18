import Sequelize from 'sequelize';
import connection from '../config/db.js';
import User from './User';
import Object from './Object';
import Car from './Car';


const OrderRegistration = connection.define(
    'Order-Registration',
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
        idObject: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'objtects',
                key: 'id'
            }
        },
        idCar: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'cars',
                key: 'id'
            }
        },
        starting_point: {
            type: Sequelize.STRING,
            allowNull: false
        },
        arrival_point: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);
OrderRegistration.belongsTo(User, {
    foreignKey: 'idUser'
  });
OrderRegistration.belongsTo(Object, {
    foreignKey: 'idObject'
  });
OrderRegistration.belongsTo(Car, {
    foreignKey: 'idCar'
  });

export default OrderRegistration;