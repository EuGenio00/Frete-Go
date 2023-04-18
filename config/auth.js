import Jwt from "jsonwebtoken";

const verifyToken = (token, res) => {
    Jwt.verify(
        token,
        process.env.JWT_SECRET,
        (err, authData) => {
            if (err) {
                res.sendStatus(403)
            } else {
                res.json({authData})
            }
        }
    )
};

export default verifyToken;