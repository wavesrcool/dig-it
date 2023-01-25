import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Dig } from "../dig/Dig";
import { Geo } from "../geo/Geo";
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

  @Field(() => String)
  @Column({ type: `varchar` })
  line!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  city!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  region!: string;

  @Field(() => String)
  @Column({ type: `varchar` })
  country!: string;

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

  @Field(() => Int, { nullable: true })
  @Column({ type: "int8", nullable: true })
  geoId!: number | null;

  @Field(() => Geo)
  @ManyToOne(() => Geo, (geo) => geo.places, {
    onDelete: "CASCADE",
  })
  geo!: Geo;
}
