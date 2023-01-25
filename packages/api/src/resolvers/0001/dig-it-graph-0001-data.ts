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
export class DigItGraphData0001 {
  @Field(() => [String], { nullable: true })
  notes?: string[] | null;
}
