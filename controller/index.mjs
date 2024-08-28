import express from 'express'
import userController from './userController.mjs'

const controller = express.Router()

controller.use('/user', userController)


export default controller