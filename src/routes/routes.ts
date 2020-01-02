import { Router } from 'express'

const Routes = Router()

Routes.get('/', (_, res) => {
  res.send('Hello World')
})

export default Routes
