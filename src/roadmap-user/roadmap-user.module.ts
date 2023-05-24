import { Module } from '@nestjs/common';
import { RoadmapUserService } from './roadmap-user.service';
import { RoadmapUserController } from './roadmap-user.controller';
import { RoadmapUserEntity } from './entities/roadmap-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoadmapUserEntity])],
  providers: [RoadmapUserService],
  controllers: [RoadmapUserController],
})
export class RoadmapUserModule {}
