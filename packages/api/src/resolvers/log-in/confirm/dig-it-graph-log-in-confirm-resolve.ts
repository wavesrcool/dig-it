import { LibraryMessagesGraphLogInConfirm } from "@dig-it/library/lib/messages/graph/log-in/confirm";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { DigItGraphDataLogInConfirm } from "./dig-it-graph-log-in-confirm-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolveLogInConfirm extends GraphObjectsResolve<LibraryMessagesGraphLogInConfirm> {
  @Field(() => DigItGraphDataLogInConfirm, { nullable: true })
  data?: DigItGraphDataLogInConfirm | null;
}
