import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class manutencao_project {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public Nome: string;

  @Column()
  public c: string;

  @Column()
  public f_done: boolean;
}

export default manutencao_project;