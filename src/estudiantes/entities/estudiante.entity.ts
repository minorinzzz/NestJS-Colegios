import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Define esta clase como una entidad de base de datos
@Entity()
export class Estudiante {
  // Columna que funciona como clave primaria (Primary Key) y se autogenera
  @PrimaryGeneratedColumn()
  id: number;

  // Columna para almacenar el nombre
  @Column()
  nombre: string;

  // Columna para almacenar el apellido
  @Column()
  apellido: string;

  // Columna para almacenar la fecha de nacimiento
  @Column()
  fechaNacimiento: Date;
}
