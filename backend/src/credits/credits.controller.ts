import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreditService } from 'src/credit/credit.service';
import { Credit } from 'src/entities';

@Controller('credits')
export class CreditsController {
  constructor(private creditService: CreditService) {}
  @Get('user/:id')
  read(@Param('id') id): Promise<Credit[]> {
    return this.creditService.readAllOfUser(id);
  }

  @Post('new/:id')
  create(@Param('id') id, @Body() credit) {
    function addDays(date, days) {
      let result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    const contract_time = null;
    const create_time = new Date();
    const discount_code = null;
    const installment_days = credit.type; // 15/30 credit.type
    const due_date = addDays(create_time, installment_days);
    const forfeit_accruals_enabled = 1;
    const installments_number = credit.period; //credit.period
    const principal = credit.amount; //credit.amount
    const utilization_time = null;
    const credit_status_id = 100; // credit evaluation
    const operator_id = 1;
    const product_id = 1;
    const user_id = id;
    const repayment_date = null;

    const newCredit = {
      contract_time,
      create_time,
      discount_code,
      due_date,
      forfeit_accruals_enabled,
      installment_days,
      installments_number,
      principal,
      utilization_time,
      credit_status_id,
      operator_id,
      product_id,
      user_id,
      repayment_date,
    };
    return this.creditService.create(newCredit);
  }
}
