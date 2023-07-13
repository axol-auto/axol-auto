import { Router } from 'express'
import userController from '../controllers/usersController.mjs';

const router = Router();

router.post('/create',  userController.createAccount, (req, res, next) => {
    res.json('user created')
})
router.post('/login',  userController.findUser, userController.createSession, (req, res, next) => {
    res.json('successful login and session created')
})

router.get('/checkSession', userController.checkSession, userController.createSession, (req, res, next) => {
    res.json('Token authenticated and refreshed')
})
export default router;