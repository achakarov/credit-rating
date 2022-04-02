import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Credit, CreditStatus, Installment } from './entities/index';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'credits_db',
      username: 'root',
      password: 'starbot',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Credit, CreditStatus, Installment]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
