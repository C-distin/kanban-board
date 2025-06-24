"use server"

import { auth } from "@/auth"

export async function signIn(email: string, password: string) {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      }
    })

    return { success: true, message: "Sign-in successful" }
  } catch (error) {
    const err = error as Error
    return { success: false, message: err.message || "Sign-in failed. Please check your credentials." }
  }
}

export async function signUp(email: string, password: string, username: string) {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: username
      }
    })
    return { success: true, message: "Sign-up successful" }
  } catch (error) {
    const err = error as Error
    return { success: false, message: err.message || "Sign-up failed. Please try again." }
  }
}