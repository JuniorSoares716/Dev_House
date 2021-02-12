import express, { json } from 'express';
import mongoose from 'mongoose';
import routes from './routes';
class App{
    constructor(){
        this.server = express();


        mongoose.connect('mongodb+srv://admin:junior123@devhouse.gssgo.mongodb.net/devhouse?retryWrites=true&w=majority',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(json());
    }

    routes(){
        this.server.use(routes);

    }
}


export default new App().server;