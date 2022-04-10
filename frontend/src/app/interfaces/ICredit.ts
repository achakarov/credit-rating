export class Credit {
  id: number | undefined;
  contract_time: Date | undefined;
  create_time: Date | null | undefined;
  discount_code: string | null | undefined;
  due_date: Date | null | undefined;
  forfeit_accruals_enabled: number | undefined;
  installment_days: number | undefined;
  installments_number: number | undefined;
  principal: number | undefined;
  utilization_time: Date | null | undefined;
  credit_status_id: number | undefined;
  operator_id: number | null | undefined;
  product_id: number | undefined;
  user_id: number | null | undefined;
  repayment_date: Date | null | undefined;
}
