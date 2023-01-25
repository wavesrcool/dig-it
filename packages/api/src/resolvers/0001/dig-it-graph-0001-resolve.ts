import { LibraryMessagesGraph0001 } from "@dig-it/library/lib/messages/graph/0001";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../objects/resolve/GraphObjectsResolve";
import { DigItGraphData0001 } from "./dig-it-graph-0001-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolve0001 extends GraphObjectsResolve<LibraryMessagesGraph0001> {
  @Field(() => DigItGraphData0001, { nullable: true })
  data?: DigItGraphData0001 | null;
}
