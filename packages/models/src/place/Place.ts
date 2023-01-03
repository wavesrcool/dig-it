import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Dig } from "../dig/Dig";
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
export class Place extends BaseEntity {
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

  @Field(() => String, { nullable: true })
  @Column({ type: `varchar`, nullable: true, default: null })
  title!: string | null;

  @Field(() => String)
  @Column({ type: `char`, length: 9 })
  geohash!: string;

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

  @Field(() => Int, { nullable: true })
  @Column({ type: "int8", nullable: true })
  digId!: number | null;

  @Field(() => Dig)
  @OneToOne(() => Dig, (dig) => dig.place)
  dig!: Dig;
}
