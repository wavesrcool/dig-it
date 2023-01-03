import { Field, ObjectType } from "type-graphql";
import { ModelsNotes } from "./ModelsNotes";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
@ObjectType()
export class ModelsRecords {
  @Field(() => [ModelsNotes], { nullable: true })
  notes?: ModelsNotes[] | null;
}
