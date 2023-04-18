import express from 'express';
import user from './user.routes.js';
import car from './car.routes.js';
import login from './login.routes.js';

const router = express.Router();

router.use('/user', user);
router.use('/car', car);
// router.use('/object', object);
router.use('/login', login);

export default router;