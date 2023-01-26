import { LibraryMessagesGraphSessionRead } from "@dig-it/library/lib/messages/graph/session/read";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { DigItGraphDataSessionRead } from "./dig-it-graph-session-read-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolveSessionRead extends GraphObjectsResolve<LibraryMessagesGraphSessionRead> {
  @Field(() => DigItGraphDataSessionRead, { nullable: true })
  data?: DigItGraphDataSessionRead | null;
}
