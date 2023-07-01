import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export const adaptRouter = (controller: Controller) => {
  return async (req, res) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse: HttpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
