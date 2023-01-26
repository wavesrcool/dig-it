import { LibraryMessagesGraph0003 } from "@dig-it/library/lib/messages/graph/0003";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { DigItGraphData0003 } from "./dig-it-graph-0003-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolve0003 extends GraphObjectsResolve<LibraryMessagesGraph0003> {
  @Field(() => DigItGraphData0003, { nullable: true })
  data?: DigItGraphData0003 | null;
}
