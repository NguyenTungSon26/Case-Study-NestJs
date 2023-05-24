import { Module } from '@nestjs/common';
import { RoadmapController } from './roadmap.controller';
import { RoadmapService } from './roadmap.service';
import { RoadmapEntity } from './entities/roadmap.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoadmapEntity])],
  controllers: [RoadmapController],
  providers: [RoadmapService],
})
export class RoadmapModule {}
