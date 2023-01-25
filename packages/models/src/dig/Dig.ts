import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Email } from "../email/Email";
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
export class Dig extends BaseEntity {
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
  active!: boolean;

  @Field(() => String, { nullable: true })
  @Column({ type: "varchar", nullable: true })
  pictureDate!: string | null;

  @Field(() => String)
  @Column({ type: `varchar` })
  picture!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  description!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  neighborhood!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  value!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  money!: string;

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
  placeId!: number | null;

  @Field(() => Place)
  @OneToOne(() => Place, (place) => place.dig)
  @JoinColumn()
  place!: Place;

  @Field(() => Int, { nullable: true })
  @Column({ type: "int8", nullable: true })
  emailId!: number | null;

  @Field(() => Email)
  @OneToOne(() => Email, (email) => email.dig)
  @JoinColumn()
  email!: Email;
}
