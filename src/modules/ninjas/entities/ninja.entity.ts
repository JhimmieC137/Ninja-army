// import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { NINJA_LEVEL } from '../dtos/enums';

@Entity()
export class Ninja {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    nullable: true,
  })
  nick_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  level: NINJA_LEVEL;

  @Column({ default: true })
  is_active: boolean;
}

@Entity()
export class Weapons {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({ default: true })
  isAvalilable: boolean;

  @Column({ default: 50 })
  quantity: number;

  @Column({ default: 50 })
  users: number;
}
