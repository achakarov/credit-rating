import { Controller, Get, Param } from '@nestjs/common';
import { CreditService } from 'src/credit/credit.service';
import { Credit } from 'src/entities';

@Controller('credits-new')
export class CreditsController {
  constructor(private creditService: CreditService) {}
  @Get(':id')
  read(@Param('id') id): Promise<Credit[]> {
    return this.creditService.readAllOfUser(id);
  }
}
