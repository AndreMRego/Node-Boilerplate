import { Request, Response } from "express";
import { GamesRepository } from "../repositories/GamesRepository";


class FindAllGamesByCategoryController {
  private gamesRepository: GamesRepository;

  constructor(){
    this.gamesRepository = new GamesRepository();
  }

  async handle(request:Request, response: Response): Promise<Response> {
    const { category_id } = request.params;

    const games = await this.gamesRepository.findAllByCategory({ category_id  });

    return response.status(201).json(games);
  }
}

export { FindAllGamesByCategoryController }