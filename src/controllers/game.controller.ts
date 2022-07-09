import { Router } from 'express'

const gameRouter = Router();

/**
 * @openapi
 * /games:
 *  get:
 *     tags:
 *     - Games
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
gameRouter.get('/', async (request, response) => {
    response.send('Hello world')
})

export default gameRouter
