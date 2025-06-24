import { neon, neonConfig } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"
import ws from "ws"

const connectionString = process.env.DATABASE_URL || ""

neonConfig.webSocketConstructor = ws

// enable edge function
neonConfig.poolQueryViaFetch = true

const sql = neon(connectionString)

export const db = drizzle({ client: sql })
