import { Router } from 'express';
import gameRouter from './game.controller';

const routes = Router();

routes.use('/games', gameRouter);

export default routes;
