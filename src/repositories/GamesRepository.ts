import {  getRepository, Repository } from 'typeorm'

import { Game } from '../entities/Game';

interface ICreateGameDTO {
  name: string;
  description: string;
};

class GamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async create({ name, description }: ICreateGameDTO): Promise<void>{
    const game = this.repository.create({ name, description });

    await this.repository.save(game);
  }

  async list(): Promise<Game[]>{
    const games = await this.repository.find();

    return games;
  }
}

export { GamesRepository }