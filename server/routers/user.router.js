import { Router } from "express";
import User from "../models/user.js";

const userRouter = new Router()

userRouter.post("/", async(req, res)=> {
    try {
        const {id, name, email} = req.body
        const user = await User.create(req.body)

        res.status(201).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
})

userRouter.get("/", async(req, res)=> {
    try {
        const users = User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
})

export default userRouter