// import { ApiProperty } from '@nestjs/swagger';
import { RoadmapUserEntity } from 'src/roadmap-user/entities/roadmap-user.entity';
import { TaskEntity } from 'src/task/entities/task.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('roadmap')
export class RoadmapEntity {
  @PrimaryGeneratedColumn({ name: 'roadmap_id' })
  id: number;

  @Column({ name: 'roadmap_name', length: 40 })
  roadmapName: string;

  @Column({ name: 'roadmap_description', type: 'text' })
  roadmapDescription: string;

  @Column({ name: 'roadmap_instructions', type: 'text' })
  roadmapInstructions: string;

  //error
  @Column({ name: 'mentor_status', type: 'text' })
  mentorStatus: string;

  @ManyToOne(() => UserEntity, (user) => user.roadmaps)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @OneToMany(() => TaskEntity, (task) => task.roadmaps)
  tasks: TaskEntity[];

  @OneToMany(() => RoadmapUserEntity, (roadmapuser) => roadmapuser.roadmapUsers)
  roadmapusers: RoadmapUserEntity[];
}

/**
 * CREATE TABLE `roadmap` (
  `roadmap_id` int NOT NULL,
  `roadmap_name` varchar(255) DEFAULT NULL,
  `roadmap_description` text,
  `roadmap_instructions` text,
  `user_id` int DEFAULT NULL,
  `mentor_status` enum('approved','reject') DEFAULT NULL,
  PRIMARY KEY (`roadmap_id`),
  KEY `roadmap_ibfk_1` (`user_id`),
  CONSTRAINT `roadmap_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) 
 */
