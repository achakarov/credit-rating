import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CreditService {
  constructor(
    @InjectRepository(Credit)
    private creditRepository: Repository<Credit>,
  ) {}

  async readAllOfUser(id: string): Promise<Credit[]> {
    return await this.creditRepository.findBy({
      user_id: Number(id),
    });
  }
}
