import { LibraryMessagesGraphDigsCreateOpen } from "@dig-it/library/lib/messages/graph/digs/create-open";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { DigItGraphDataDigsCreateOpen } from "./dig-it-graph-digs-create-open-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolveDigsCreateOpen extends GraphObjectsResolve<LibraryMessagesGraphDigsCreateOpen> {
  @Field(() => DigItGraphDataDigsCreateOpen, { nullable: true })
  data?: DigItGraphDataDigsCreateOpen | null;
}
