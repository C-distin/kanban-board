import { loadEnvConfig } from "@next/env"
import { defineConfig } from "drizzle-kit"

loadEnvConfig(process.cwd())

const connectionString = process.env.DATABASE_URL || ""

export default defineConfig({
  out: "./db/drizzle",
  schema: "./lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: connectionString,
  },
})
