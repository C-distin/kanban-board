import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import { db } from "@/lib/db"
import * as schema from "@/lib/db/schema"

const googleClientId = process.env.GOOGLE_CLIENT_ID || ""
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || ""

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  socialProviders: {
    google: {
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  user: {
    deleteUser: {
      enabled: true,
    },
  },
  plugins: [nextCookies()],
})

// export type User = typeof auth.$Infer.User
// export type Session = typeof auth.$Infer.Session
