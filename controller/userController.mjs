import express from 'express'
import userService from '../service/userService.mjs'

const userController = express.Router()

userController.get('/', userService.getAllUsers)
userController.get('/:id', userService.getUserById)
userController.post('/',userService.createUser)
userController.put('/:id', userService.editUserById)
userController.delete('/:id', userService.deleteUserById)

export default userController