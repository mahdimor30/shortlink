/* eslint-disable @typescript-eslint/no-unused-vars */
import { handleError } from './error'
import { Hono } from 'hono'
import helloRoute from './routes/hello'
import linksRoute from './routes/links'


const app = new Hono().basePath('/api')

app.onError(handleError)

const routes = app
  .route('/hello', helloRoute)
  .route('/links', linksRoute)

export default app

export type AppType = typeof routes