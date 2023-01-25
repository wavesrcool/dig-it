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
export class DigItGraphFigures0002 {
  @Field(() => String)
  locale!: string;

  @Field(() => String)
  passcode!: string;

  @Field(() => String)
  email!: string;
}
