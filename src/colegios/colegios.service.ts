import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateColegioDto } from './dto/create-colegio.dto';
import { UpdateColegioDto } from './dto/update-colegio.dto';
import { Colegio } from './entities/colegio.entity';

@Injectable()
export class ColegiosService {
  constructor(
    @InjectRepository(Colegio)
    private colegioRepository: Repository<Colegio>,
  ) {}

  create(createColegioDto: CreateColegioDto) {
    const colegio = this.colegioRepository.create(createColegioDto);
    return this.colegioRepository.save(colegio);
  }

  findAll() {
    return this.colegioRepository.find();
  }

  findOne(id: number) {
    return this.colegioRepository.findOne({ where: { id } });
  }

  async update(id: number, updateColegioDto: UpdateColegioDto) {
    await this.colegioRepository.update(id, updateColegioDto);
    return this.colegioRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const colegio = await this.colegioRepository.findOne({ where: { id } });
    await this.colegioRepository.delete(id);
    return { message: 'Colegio eliminado exitosamente', colegio };
  }
}
