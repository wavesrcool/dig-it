import { LibraryMessagesGraphDigsConfirmOpen } from "@dig-it/library/lib/messages/graph/digs/confirm-open";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { DigItGraphDataDigsConfirmOpen } from "./dig-it-graph-digs-confirm-open-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolveDigsConfirmOpen extends GraphObjectsResolve<LibraryMessagesGraphDigsConfirmOpen> {
  @Field(() => DigItGraphDataDigsConfirmOpen, { nullable: true })
  data?: DigItGraphDataDigsConfirmOpen | null;
}
