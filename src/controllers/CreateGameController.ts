import { Request, Response } from "express";
import { GamesRepository } from "../repositories/GamesRepository";


class CreateGameController {
  private gamesRepository: GamesRepository;

  constructor(){
    this.gamesRepository = new GamesRepository();
  }

  async handle(request:Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.gamesRepository.create({ name, description });

    return response.status(201).send();
  }
}

export { CreateGameController }