import { Request, Response } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

class CreateCategoryController {
  private categoriesRepository: CategoriesRepository;

  constructor(){
    this.categoriesRepository = new CategoriesRepository();
  }

  async handle(request:Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    await this.categoriesRepository.create({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController }