import { LibraryMessagesGraphAccountsRead } from "@dig-it/library/lib/messages/graph/accounts/read";
import { Field, ObjectType } from "type-graphql";
import { GraphObjectsResolve } from "../../../objects/resolve/GraphObjectsResolve";
import { DigItGraphDataAccountsRead } from "./dig-it-graph-accounts-read-data";
/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolve type
 * @notes [ ]
 *
 */
@ObjectType()
export class DigItGraphResolveAccountsRead extends GraphObjectsResolve<LibraryMessagesGraphAccountsRead> {
  @Field(() => DigItGraphDataAccountsRead, { nullable: true })
  data?: DigItGraphDataAccountsRead | null;
}
