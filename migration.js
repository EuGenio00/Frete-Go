import connection from "./config/db.js";
import User from "./models/User.js";
import Car from "./models/Car.js";
import Object from "./models/Object.js";



const migrate = async () => {
    try {

        const result = await connection.sync();
        console.log(result);

    } catch (error) {
        console.log(error);
    }

};

migrate();