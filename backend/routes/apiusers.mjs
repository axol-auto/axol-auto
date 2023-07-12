import { Router } from 'express'
import userController from '../controllers/usersController.mjs';

const router = Router();

router.post('/create',  userController.createAccount, (req, res, next) => {
    res.send('user created')
})
router.post('/login',  userController.findUser, userController.createSession, (req, res, next) => {
    res.send('successful login and session created')
})

router.get('/orders', userController.checkSession, userController.createSession, (req, res, next) => {
    res.send('Token authenticated and refreshed')
})
export default router;