import { LibraryMessagesGraph0004 } from "@dig-it/library/lib/messages/graph/0004";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { DigItGraphData0004 } from "./dig-it-graph-0004-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolve0004 extends GraphObjectsResolve<LibraryMessagesGraph0004> {
  @Field(() => DigItGraphData0004, { nullable: true })
  data?: DigItGraphData0004 | null;
}
