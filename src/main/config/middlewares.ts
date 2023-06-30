import { bodyParser } from '../middlewares/body-parser'
import { cors } from '../middlewares/cors'

export default (app): void => {
  app.use(bodyParser)
  app.use(cors)
}
