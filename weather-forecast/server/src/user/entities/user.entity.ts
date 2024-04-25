import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';
import { Location } from 'location/entities/location.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserSettings } from './user-settings.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ select: false, nullable: true })
  @HideField()
  password: string;

  @Column({ select: false, nullable: true })
  @HideField()
  googleId: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  refreshtoken: string;

  @ManyToMany(() => Location, location => location.users, { cascade: true })
  @JoinTable()
  @Field(type => [Location])
  locations: Location[];

  @OneToOne(() => UserSettings, { nullable: false, cascade: true })
  @JoinColumn()
  @Field(type => UserSettings, { nullable: false })
  userSettings: UserSettings;
}
