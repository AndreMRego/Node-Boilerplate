import { Router } from "express";
import { CreateGameController } from "../controllers/CreateGameController";
import { ListGamesController } from "../controllers/ListGamesController";

const router = Router();

router.post('/games', (request, response) => {
  const createGameController = new CreateGameController();

  return createGameController.handle(request,response);
});

router.get('/games', (request, response) => {
  const listGamesController = new ListGamesController();

  return listGamesController.handle(request,response);
});

export { router };
