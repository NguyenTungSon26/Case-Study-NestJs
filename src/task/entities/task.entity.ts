// import { ApiProperty } from '@nestjs/swagger';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { LogworkEntity } from 'src/logwork/entities/logwork.entity';
import { RoadmapEntity } from 'src/roadmap/entities/roadmap.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn({ name: 'task_id' })
  id: number;

  @Column({ name: 'task_name', length: 255 })
  taskName: string;

  @Column({ name: 'task_description', type: 'text' })
  taskDescription: string;

  @Column({ name: 'task_status' })
  taskStatus: string;

  @Column({ name: 'task_comment', type: 'text' })
  taskComment: string;

  @Column({ name: 'task_logwork', type: 'text' })
  taskLogWork: string;

  @Column({
    name: 'estimated_hours',
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: null, // bt để 0
  })
  estimatedHours: number;

  @OneToMany(() => LogworkEntity, (task) => task.task)
  logWorks: LogworkEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.task)
  comments: CommentEntity[];

  @ManyToOne(() => RoadmapEntity, (task) => task.tasks)
  @JoinColumn({ name: 'roadmap_id ' })
  roadmaps: RoadmapEntity;
}

/**
 * CREATE TABLE `task` (
  `task_id` int NOT NULL,
  `task_name` varchar(255) DEFAULT NULL,
  `task_description` text,
  `task_status` varchar(255) DEFAULT NULL,
  `task_comment` text,
  `task_logwork` text,
  `roadmap_id` int DEFAULT NULL,
  PRIMARY KEY (`task_id`),
  KEY `roadmap_id` (`roadmap_id`),
  CONSTRAINT `task_ibfk_1` FOREIGN KEY (`roadmap_id`) REFERENCES `roadmap` (`roadmap_id`)
)
 */
