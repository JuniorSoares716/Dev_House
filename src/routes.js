import {Router} from 'express';
import SessionCntroller from './controllers/SessionController';
var app = Router();

app.post('/sessions', SessionCntroller.store);

export default app;
