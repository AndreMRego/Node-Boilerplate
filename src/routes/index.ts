import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { CreateGameController } from "../controllers/CreateGameController";
import { FindAllGamesByCategoryController } from "../controllers/FindAllGamesByCategoryController";
import { ListCategoryController } from "../controllers/ListCategoryController";
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

router.post('/categories', (request, response) => {
  const createCategoryController = new CreateCategoryController();

  return createCategoryController.handle(request,response);
});

router.get('/categories/:category_id/games', (request, response) => {
  const findAllGamesByCategoryController = new FindAllGamesByCategoryController();

  return findAllGamesByCategoryController.handle(request,response);
});

export { router };
