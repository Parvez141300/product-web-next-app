import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {
    const { id } = params;

    console.log(id);

    const product = await dbConnect('products').findOne({ _id: new ObjectId(id) });
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    return Response.json(product)
}