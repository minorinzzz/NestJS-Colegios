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

  update(id: number, updateColegioDto: UpdateColegioDto) {
    return this.colegioRepository.update(id, updateColegioDto);
  }

  remove(id: number) {
    return this.colegioRepository.delete(id);
  }
}
