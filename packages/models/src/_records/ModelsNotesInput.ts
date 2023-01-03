import { Field, InputType } from "type-graphql";

/**
 * * Dig It Documentation
 *
 * @created 01 03 2023
 * @collection models ref
 * @notes [ ]
 *
 */
@InputType()
export class ModelsNotesInput {
  @Field(() => String)
  date!: string;

  @Field(() => String)
  key!: string;

  @Field(() => [String])
  list!: string[];
}
