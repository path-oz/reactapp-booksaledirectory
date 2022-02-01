
import { MongoClient } from 'mongodb'

const {MONGODB_CONNECTION_URL, MONGO_DB } = process.env

if (!MONGODB_CONNECTION_URL) {
    throw new Error(
        'PLease define the MONGODB_CONNECTION_URL environment variable inside .env'
    )
}

if (!MONGO_DB) {
    throw new Error(
        "Please define the MONGO_DB environment variable inside .env"
    )
    
}

let cached = global.mongo

if(!cached) {
    cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabse() {
    if (cached.conn) {
        return cached.conn
    }
    
    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }

        cached.promise = MongoClient.connect(MONGODB_CONNECTION_URL, opts).then((client) => {
            return {
                client,
                db: client.db(MONGO_DB),
            }
        }
        )
    }
    cached.conn = await cached.promise
    return cached.conn
}