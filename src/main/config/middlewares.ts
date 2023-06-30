import { bodyParser, cors, contentType } from '../middlewares'

export default (app): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
