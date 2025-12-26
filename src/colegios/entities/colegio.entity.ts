import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Define esta clase como una entidad de base de datos
@Entity()
export class Colegio {
  // Columna que funciona como clave primaria (Primary Key).
  @PrimaryGeneratedColumn()
  id: number;

  // Columna para almacenar el nombre del colegio/institución
  @Column()
  nombre: string;

  // Columna para almacenar la dirección física
  @Column()
  direccion: string;

  // Columna para almacenar la capacidad máxima de estudiantes
  @Column()
  capacidad: number;
}
