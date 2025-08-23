import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = process.env.NEXT_PUBLIC_MONGODB_URI

function dbConnect(collectionName) {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    // user: EasyPro
    // pass: gYYcRwyQxlaBHzYE
    // db name: Easy_Pro_DB
    // collection name: products
    return client.db(process.env.DB_NAME).collection(collectionName)
}

export default dbConnect;