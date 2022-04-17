import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CreditService {
  constructor(
    @InjectRepository(Credit)
    private creditRepository,
  ) {}

  async readAllOfUser(id: string): Promise<Credit[]> {
    return await this.creditRepository.findBy({
      user_id: Number(id),
    });
  }

  async create(credit) {
    return await this.creditRepository.save(credit);
  }

  async readAllOfUserByStatus(id: string, status: number) {
    return await this.creditRepository.find({
      where: {
        user_id: Number(id),
        credit_status_id: status,
      },
    });
  }

  addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
