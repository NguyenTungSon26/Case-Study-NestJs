import { CommentEntity } from 'src/comment/entities/comment.entity';
import { LogworkEntity } from 'src/logwork/entities/logwork.entity';
import { RoadmapUserEntity } from 'src/roadmap-user/entities/roadmap-user.entity';
import { RoadmapEntity } from 'src/roadmap/entities/roadmap.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @Column({ name: 'usename', length: 40 })
  name: string;

  @Column({ name: 'password', length: 20 })
  pass: string;

  @Column({ name: 'role', length: 5 })
  role: string;

  @Column({ name: 'email', length: 40 })
  email: string;

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];

  @OneToMany(() => LogworkEntity, (logwork) => logwork.user)
  logworks: LogworkEntity[];

  @OneToMany(() => RoadmapEntity, (roadmap) => roadmap.user)
  roadmaps: RoadmapEntity[];

  @OneToMany(() => RoadmapUserEntity, (roadmapuser) => roadmapuser.user)
  RoadmapUserService: RoadmapUserEntity[];
}

/**
  CREATE TABLE `user` (
  `user_id` int NOT NULL,
  `usename` varchar(40) NOT NULL,
  `password` varchar(20) NOT NULL,
  `role` varchar(5) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) 
 */
