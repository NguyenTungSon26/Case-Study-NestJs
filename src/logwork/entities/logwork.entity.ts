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

@Entity('logwork')
export class LogworkEntity {
  @PrimaryGeneratedColumn({ name: 'logwork_id' })
  id: number;

  @ManyToOne(() => TaskEntity, (task) => task.logWorks)
  @JoinColumn({ name: 'task_id' })
  task: TaskEntity;

  @ManyToOne(() => UserEntity, (user) => user.logworks)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({
    name: 'logwork_hours',
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: null, // bt để 0
  })
  logworkHours: number;

  @Column({ name: 'logwork_date', type: 'date' })
  logworkDate: string;
}

/**
 * CREATE TABLE `logwork` (
  `logwork_id` int NOT NULL,
  `task_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `logwork_hours` decimal(5,2) DEFAULT NULL,
  `logwork_date` date DEFAULT NULL,
  PRIMARY KEY (`logwork_id`),
  KEY `task_id` (`task_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `logwork_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `task` (`task_id`),
  CONSTRAINT `logwork_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
)
 */
