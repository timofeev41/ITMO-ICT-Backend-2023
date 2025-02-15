import express from "express"
import { UserController } from "../../controllers/auth"
import passport from "../../middlewares/passport"

const userRoutes: express.Router = express.Router()

const controller: UserController = new UserController()

userRoutes.route('/')
    .post(controller.post)

userRoutes.route('/profile')
    .get(passport.authenticate('jwt', { session: false }), controller.me)

userRoutes.route('/profile/:id')
    .get(controller.get)

userRoutes.route('/login')
    .post(controller.auth)

userRoutes.route('/delete/:id')
    .delete(controller.delete)

userRoutes.route('/accessToken')
    .post(controller.accessToken)

export default userRoutes