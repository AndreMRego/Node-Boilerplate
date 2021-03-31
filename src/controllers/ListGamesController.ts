import { Request, Response } from "express";
import { GamesRepository } from "../repositories/GamesRepository";


class ListGamesController {
  private gamesRepository: GamesRepository;

  constructor(){
    this.gamesRepository = new GamesRepository();
  }

  async handle(request:Request, response: Response): Promise<Response> {

    const games = await this.gamesRepository.list();

    return response.status(201).json(games);
  }
}

export { ListGamesController }