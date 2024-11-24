import api from '@/server'
// import api from '@/server/openapi'
import { handle } from 'hono/vercel'

const handler = handle(api)

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler as PATCH,
}