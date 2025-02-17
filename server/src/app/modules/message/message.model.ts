import { model, Schema } from "mongoose";
import { TMessage } from "./message.interface";

const messageSchema= new Schema <TMessage>({
    fullName:{
        type:String,

    },
    email:{
        type:String,

    },
    message:{
        type:String,

    },
})

export const message=model<TMessage>("message",messageSchema)