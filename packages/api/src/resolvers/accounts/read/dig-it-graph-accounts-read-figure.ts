import { Field, InputType } from "type-graphql";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph types
 * @notes [ ]
 *
 */
@InputType()
export class DigItGraphFiguresAccountsRead {
  @Field(() => String)
  locale!: string;
}
