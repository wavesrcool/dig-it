import { LibraryMessagesGraph0002 } from "@dig-it/library/lib/messages/graph/0002";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { DigItGraphData0002 } from "./dig-it-graph-0002-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolve0002 extends GraphObjectsResolve<LibraryMessagesGraph0002> {
  @Field(() => DigItGraphData0002, { nullable: true })
  data?: DigItGraphData0002 | null;
}
