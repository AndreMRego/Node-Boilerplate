import { Request, Response } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

class ListCategoryController {
  private categoriesRepository: CategoriesRepository;

  constructor(){
    this.categoriesRepository = new CategoriesRepository();
  }

  async handle(request:Request, response: Response): Promise<Response> {
    const categories = await this.categoriesRepository.list();

    return response.status(201).json(categories);
  }
}

export { ListCategoryController }