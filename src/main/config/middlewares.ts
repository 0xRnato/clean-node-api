import { bodyParser } from '../middlewares/body-parser'
import { cors } from '../middlewares/cors'
import { contentType } from '../middlewares/content-type'

export default (app): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}