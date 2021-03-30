import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('games')
class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name:string;

  @Column()
  description: string


  @CreateDateColumn()
  created_at: Date;
}

export { Game }; 