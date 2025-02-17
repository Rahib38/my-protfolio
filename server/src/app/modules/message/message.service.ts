import { TMessage } from "./message.interface";
import { message } from "./message.model";

const createMessage=async(payload:TMessage)=>{
    const result = await message.create(payload)
    return result
}
const getMessage=async(query: Record<string, unknown>)=>{
    const result = await message.find(query)
    return result
}

export const messageService={
    createMessage,
    getMessage
}