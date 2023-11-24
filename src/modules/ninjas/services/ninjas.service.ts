import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ninja } from '../entities/ninja.entity';

@Injectable()
export class NinjasService {
  constructor(
    @InjectRepository(Ninja)
    private ninjaRepository: Repository<Ninja>,
  ) {}

  homePage() {
    return 'Welcome to the fotress of Ozark';
  }

  greetNinja(name: string, father: string) {
    return `Welcome home ${name} child of ${father}`;
  }

  async findAll(): Promise<Ninja[]> {
    return await this.ninjaRepository.find();
  }

  async create(payload: Ninja): Promise<Ninja> {
    const ninjaObj = await this.ninjaRepository.create(payload);
    const result = await this.ninjaRepository.save(ninjaObj);
    return result;
  }

  async delete(ninjaId: string) {
    await this.ninjaRepository.delete(ninjaId);
  }
}
