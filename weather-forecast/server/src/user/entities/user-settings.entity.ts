import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_settings')
@ObjectType()
export class UserSettings {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field(type => Int)
  locationNumber: number;

  @Column()
  @Field()
  theme: string;

  @Column({ default: 'en' })
  @Field()
  language: string;
}
