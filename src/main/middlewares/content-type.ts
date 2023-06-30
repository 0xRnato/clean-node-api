export const contentType = (req, res, next): void => {
  res.type('json')
  next()
}
