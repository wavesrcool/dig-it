import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Place } from "../place/Place";
import { ModelsRecords } from "../_records/ModelsRecords";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
@ObjectType()
@Entity()
export class Geo extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @CreateDateColumn()
  created!: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updated!: Date;

  @Field(() => String)
  @Column()
  @Generated("uuid")
  key!: string;

  //
  //
  // model fields
  //

  @Field(() => String)
  @Column({ type: `char`, length: 2 })
  gh2!: string;

  @Field(() => String)
  @Column({ type: `char`, length: 9 })
  gh9!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  lat!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  lng!: string;

  //
  //
  // model records
  //

  @Field(() => ModelsRecords, { nullable: true })
  @Column({ type: "json", nullable: true, default: null })
  records!: ModelsRecords | null;

  //
  //
  // model relations
  //

  @Field(() => [Place])
  @OneToMany(() => Place, (place) => place.geo)
  places!: Place[];
}
