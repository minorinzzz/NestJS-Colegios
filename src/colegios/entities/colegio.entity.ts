import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Colegio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  capacidad: number;
}
