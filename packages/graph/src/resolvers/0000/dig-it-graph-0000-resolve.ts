import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { DigItGraphData0000 } from "./dig-it-graph-0000-data";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolve0000 extends GraphObjectsResolve<
  "complete" | "error" // @ todo library type
> {
  @Field(() => DigItGraphData0000, { nullable: true })
  data?: DigItGraphData0000 | null;
}
