"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema, type signUpData } from "./schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormLabel, FormField, FormItem, FormDescription, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { signUp } from "@/server/user"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { authClient } from "@/lib/auth-client"

export function SignUpForm() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<signUpData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  })

  const onSubmit = async (data: signUpData) => {
    setIsLoading(true)

    const { success, message } = await signUp(data.email, data.password, data.username)

    if (success) {
      toast.success(message)
      form.reset()
      router.push("/")
    } else {
      toast.error(message)
    }

    setIsLoading(false)
  }

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/kanban",
    })
  }
}
