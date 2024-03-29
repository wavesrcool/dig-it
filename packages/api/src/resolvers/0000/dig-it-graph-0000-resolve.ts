import { LibraryMessagesGraph0000 } from "@dig-it/library/lib/messages/graph/0000";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { DigItGraphData0000 } from "./dig-it-graph-0000-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolve0000 extends GraphObjectsResolve<LibraryMessagesGraph0000> {
  @Field(() => DigItGraphData0000, { nullable: true })
  data?: DigItGraphData0000 | null;
}
