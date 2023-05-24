// import { ApiProperty } from '@nestjs/swagger';
import { TaskEntity } from 'src/task/entities/task.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { RoadmapEntity } from 'src/roadmap/entities/roadmap.entity';

@Entity('roadmap_user')
export class RoadmapUserEntity {
  @PrimaryGeneratedColumn({ name: 'roadmap_user_id' })
  userId: number;

  @Column({ name: 'progress_percentage' })
  progressPercentage: number;

  @ManyToOne(() => RoadmapEntity, (roadmapUsers) => roadmapUsers.roadmapusers)
  @JoinColumn({ name: 'roadmap_id' })
  roadmapUsers: RoadmapEntity;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}

/**
 * CREATE TABLE `roadmap_user` (
  `roadmap_user_id` int NOT NULL,
  `roadmap_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `progress_percentage` int DEFAULT NULL,
  PRIMARY KEY (`roadmap_user_id`),
  KEY `roadmap_id` (`roadmap_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `roadmap_user_ibfk_1` FOREIGN KEY (`roadmap_id`) REFERENCES `roadmap` (`roadmap_id`),
  CONSTRAINT `roadmap_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) 
 */
