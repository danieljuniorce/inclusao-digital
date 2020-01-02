import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import Routes from './routes/routes'

class Core {
    public express: express.Application
    // private mongoose: mongoose.connect

    constructor () {
      dotenv.config()
      this.express = express()
      this.serverConfigurate()
      this.databaseConnect()
      this.routesApplication()
    }

    private serverConfigurate (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private databaseConnect () : void {
      mongoose.connect(String(process.env.MONGO_CONNECT), {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
    }

    private routesApplication () : void {
      this.express.use(Routes)
    }
}

export default new Core().express
