import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

/* const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
  APP_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid enviroment variables',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error('Invalid enviroment variables')
}
 */
// export const env = parsedEnv.data

export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.string().min(1),
  },

  runtimeEnv: {
    APP_URL: process.env.APP_URL,
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
})
