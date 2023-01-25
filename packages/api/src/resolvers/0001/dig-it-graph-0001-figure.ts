import { ModelsObjectsDig } from "@dig-it/models/lib/_objects/ModelsObjectsDig";
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
export class DigItGraphFigures0001 {
  @Field(() => String)
  locale!: string;

  @Field(() => ModelsObjectsDig)
  dig!: ModelsObjectsDig;
}
