import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreditService } from 'src/credit/credit.service';
import { Credit } from 'src/entities';

@Controller('credits')
export class CreditsController {
  public approvedCredits: any;
  public rejectedCredits: any;
  public status: string | number = 0;

  constructor(private creditService: CreditService) {}

  @Get('user/:id')
  read(@Param('id') id): Promise<Credit[]> {
    return this.creditService.readAllOfUser(id);
  }

  @Post('new/:id')
  create(@Param('id') id, @Body() credit) {
    const promise1 = this.creditService
      .readAllOfUserByStatus(id, 40)
      .then((res) => {
        console.log(res.length);
        return res.length;
      })
      .then();

    const promise2 = this.creditService
      .readAllOfUserByStatus(id, 12)
      .then((res) => {
        console.log(res.length);
        return res.length;
      });

    Promise.all([promise1, promise2]).then((values) => {
      const [approved, rejected] = values;

      this.approvedCredits = approved;
      this.rejectedCredits = rejected;

      if (
        this.approvedCredits / (this.approvedCredits + this.rejectedCredits) >=
        0.9
      ) {
        this.status = 40;
      } else if (
        this.approvedCredits / (this.approvedCredits + this.rejectedCredits) >=
        0.1
      ) {
        this.status = 1;
      } else {
        this.status = 12;
      }
      console.log(this.approvedCredits, this.rejectedCredits, this.status);

      const contract_time = null;
      const create_time = new Date();
      const discount_code = null;
      const installment_days = credit.type; // 15/30 credit.type
      const due_date = this.creditService.addDays(
        create_time,
        installment_days,
      );
      const forfeit_accruals_enabled = 1;
      const installments_number = credit.period; //credit.period
      const principal = credit.amount; //credit.amount
      const utilization_time = null;
      const credit_status_id = this.status; // credit evaluation
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
    });
  }
}
