import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { messageService } from "./message.service";

const createMessage=catchAsync(async(req,res)=>{
    const body= req.body
    const result = await messageService.createMessage(body)
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        message: 'Message created successfully',
        data: result,
      });
})

const getMessage=catchAsync(async(req,res)=>{
    const qureyData= req.query
    const result = await messageService.getMessage(qureyData)
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Message get successfully',
        data: result,
      });
})



export const messageController={
    createMessage,getMessage
}