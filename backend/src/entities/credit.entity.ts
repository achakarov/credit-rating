import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Credit {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column('datetime', { default: null })
  contract_time: Date | null;

  @Column('datetime', { default: null })
  create_time: Date | null;

  @Column('varchar', { default: null })
  discount_code: string | null;

  @Column('date', { default: null })
  due_date: Date | null;

  @Column('bit')
  forfeit_accruals_enabled: number;

  @Column('decimal')
  installment_days: number;

  @Column('smallint')
  installments_number: number;

  @Column('decimal')
  principal: number;

  @Column('datetime', { default: null })
  utilization_time: Date | null;

  @Column('smallint')
  credit_status_id: number;

  @Column('bigint', { default: null })
  operator_id: number | null;

  @Column('bigint')
  product_id: number;

  @Column('bigint', { default: null })
  user_id: number | null;

  @Column('date')
  repayment_date: Date;
}
