import { Field, ObjectType } from "type-graphql";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve data
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphData0002 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;

  @Field(() => String, { nullable: true })
  token?: string | null;
}