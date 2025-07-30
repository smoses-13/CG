import { z } from 'zod'

const envSchema = z.object({
  STRIPE_SECRET_KEY: z.string(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),
  RESEND_API_KEY: z.string()
})

export const env = envSchema.parse(process.env)