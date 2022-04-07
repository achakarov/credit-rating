import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Credit } from 'src/entities';
import { FindOperator, Repository } from 'typeorm';

@Injectable()
export class CreditService {
  get isLogged(): string | null {
    return localStorage.getItem('user');
  }
  constructor(
    @InjectRepository(Credit)
    private creditRepository: Repository<Credit>,
  ) {}

  async readAllOfUser(): Promise<Credit[]> {
    const id = this.getId();
    if (id) {
      return await this.creditRepository.findBy({
        user_id: Number(id),
      });
    }
  }

  getId(): string | number | FindOperator<number> {
    if (localStorage.getItem('user')) {
      const { uid } = JSON.parse(localStorage.getItem('user')!);
      return Number(uid);
    } else {
      return '';
    }
  }
}
