import { Dig } from "@dig-it/models/lib/dig/Dig";
import { Field, ObjectType } from "type-graphql";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api resolve data
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphData0000 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => [Dig], { nullable: true })
  results?: Dig[] | null;
}
