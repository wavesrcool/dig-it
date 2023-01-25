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
export class Email extends BaseEntity {
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

  @Field(() => Boolean)
  @Column({ type: `boolean`, default: false })
  confirmed!: boolean;

  @Field(() => String)
  @Column({ type: `varchar`, unique: true })
  address!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  passcode!: string;

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
  @OneToOne(() => Dig, (dig) => dig.email)
  dig!: Dig;
}
