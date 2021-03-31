import { getRepository, Repository } from "typeorm"
import { Category } from "../entities/Category"

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category);
  }


  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category)
  }


  async list(): Promise<Category[]>{
    const categories = await this.repository.find();

    return categories;
  }
}

export { CategoriesRepository }