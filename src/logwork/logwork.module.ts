import { Module } from '@nestjs/common';
import { LogworkService } from './logwork.service';
import { LogworkController } from './logwork.controller';
import { LogworkEntity } from './entities/logwork.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LogworkEntity])],
  providers: [LogworkService],
  controllers: [LogworkController],
})
export class LogworkModule {}
