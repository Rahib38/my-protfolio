import { Router } from "express";
import { messageController } from "./message.controller";

const messageRouter = Router()

messageRouter.post('/', messageController.createMessage)
messageRouter.get('/',  messageController.getMessage)


export default messageRouter