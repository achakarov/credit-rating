import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Credit, CreditStatus, Installment } from './entities/index';
import { CreditService } from './credit/credit.service';
import { CreditsController } from './credits/credits.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'credits_db',
      username: 'root',
      password: 'starbot',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Credit, CreditStatus, Installment]),
  ],
  controllers: [AppController, CreditsController],
  providers: [AppService, CreditService],
})
export class AppModule {}
