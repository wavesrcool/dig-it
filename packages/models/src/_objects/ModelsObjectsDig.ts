import { Field, InputType } from "type-graphql";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph object
 * @notes [ ]
 *
 */
@InputType()
export class ModelsObjectsDig {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  description!: string;

  @Field(() => String)
  value!: string;

  @Field(() => String)
  money!: string;

  @Field(() => String)
  neighborhood!: string;

  @Field(() => String)
  line!: string;

  @Field(() => String)
  city!: string;

  @Field(() => String)
  region!: string;

  @Field(() => String)
  country!: string;

  @Field(() => String)
  lat!: string;

  @Field(() => String)
  lng!: string;
}
