import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
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

  @Column({ nullable: true })
  last_name: string;

  @Column({
    nullable: false,
    unique: true,
  })
  nick_name: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: NINJA_LEVEL,
    default: NINJA_LEVEL.NOOBIE,
  })
  level: NINJA_LEVEL;

  @OneToMany(() => Weapon, (weapon) => weapon.user)
  weapons: Weapon[];

  @Column({ default: true })
  is_active: boolean;
}

@Entity()
export class Weapon {
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

  @ManyToOne(() => Ninja, (ninja) => ninja.weapons)
  user: Ninja;
}
