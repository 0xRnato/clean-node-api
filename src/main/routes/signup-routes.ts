import { makeSignUpController } from '../factories/signup'
import { adaptRouter } from '../adapters/express-route-adapter'

export default (router): void => {
  router.post('/signup', adaptRouter(makeSignUpController()))
}
