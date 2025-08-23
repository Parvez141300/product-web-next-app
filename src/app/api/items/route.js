import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {

    const data = await dbConnect('products').find({}).toArray();

    console.log(data);
    return NextResponse.json(data)
}

export async function POST(req) {

    const postedData = await req.json();
    const result = await dbConnect('products').insertOne(postedData);

    return Response.json(result)
}