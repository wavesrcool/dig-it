import { Field, InputType } from "type-graphql";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api types
 * @notes [ ]
 *
 */
@InputType()
export class DigItGraphFigures0000 {
  @Field(() => String)
  locale!: string;

  // @Field(() => String)
  // gh2!: string;
}
