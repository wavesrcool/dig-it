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
export class DigItGraphData0003 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
