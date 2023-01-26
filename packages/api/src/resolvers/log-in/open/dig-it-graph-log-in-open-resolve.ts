import { LibraryMessagesGraphLogInOpen } from "@dig-it/library/lib/messages/graph/log-in/open";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { DigItGraphDataLogInOpen } from "./dig-it-graph-log-in-open-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolveLogInOpen extends GraphObjectsResolve<LibraryMessagesGraphLogInOpen> {
  @Field(() => DigItGraphDataLogInOpen, { nullable: true })
  data?: DigItGraphDataLogInOpen | null;
}
