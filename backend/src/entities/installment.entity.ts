import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Installment {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column('decimal')
  forfeit: number;

  @Column('date')
  maturity_date: Date;

  @Column('decimal')
  interest: number;

  @Column('smallint')
  number: number;

  @Column('date', { default: null })
  payment_date: Date | null;

  @Column('decimal')
  principal: number;

  @Column('bigint')
  credit_id: bigint;
}
