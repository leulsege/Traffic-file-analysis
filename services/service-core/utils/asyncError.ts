import { Request, Response, NextFunction } from 'express'

const asyncError = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => {
      console.log(err)
      return next(err)
    })
  }
}

export default asyncError
