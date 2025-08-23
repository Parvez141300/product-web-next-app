"use server"

import dbConnect from "@/lib/dbConnect"

export const registerUser = async (payload) => {
    // need to check if unique user name is given
    const isExistEmail = await dbConnect('users').findOne({email: payload.email})

    if(isExistEmail){
        return null
    }

    try {
        const result = await dbConnect('users').insertOne(payload)
        return result
    }
    catch(err){
        return null
    }
}