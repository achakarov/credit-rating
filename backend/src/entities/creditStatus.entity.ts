import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class CreditStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar', { default: null })
  reason: string | null;
}
