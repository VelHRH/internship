import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from 'user/entities/user.entity';

@Entity()
@ObjectType()
export class Location {
  @PrimaryColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ type: 'float' })
  @Field(type => Float)
  lat: number;

  @Column({ type: 'float' })
  @Field(type => Float)
  lon: number;

  @Column()
  @Field()
  country: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field(type => Int)
  stars: number;

  @ManyToMany(() => User, user => user.locations)
  users: User[];
}
