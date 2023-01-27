import { LibraryMessagesGraphAccountsRead } from "@dig-it/library/lib/messages/graph/accounts/read";
import { Dig } from "@dig-it/models/lib/dig/Dig";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphDataAccountsRead } from "./dig-it-graph-accounts-read-data";
import { DigItGraphFiguresAccountsRead } from "./dig-it-graph-accounts-read-figure";
import { DigItGraphResolveAccountsRead } from "./dig-it-graph-accounts-read-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluateAccountsRead = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFiguresAccountsRead
): Promise<DigItGraphResolveAccountsRead> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraphAccountsRead = `error`;

  try {
    //
    //
    // evaluate AccountsRead
    //

    const SESSION_KEY = ctx.req.session.key;
    if (typeof SESSION_KEY !== "string") {
      message = `session-key`;
      return handler.error<LibraryMessagesGraphAccountsRead>(message);
    }

    const key = ctx.classes.encryption.decode(SESSION_KEY);

    const reademail = await ctx.connection
      .createQueryBuilder(Dig, "dig")
      .leftJoinAndSelect("dig.email", "email")
      .leftJoinAndSelect("dig.place", "place")
      .leftJoinAndSelect("place.geo", "geo")
      .where("email.key = :key", { key })
      .getOne();

    if (!reademail) {
      message = `read-key`;
      return handler.error<LibraryMessagesGraphAccountsRead>(message);
    }

    //
    //
    // data AccountsRead
    //
    const data: DigItGraphDataAccountsRead = {
      notes: [`AccountsRead`, figure.locale],
      email: reademail.email.address,
    };

    const timestamp = Date.now();
    message = `complete`;
    return {
      pass: true,
      message,
      timestamp,
      hash: ctx.classes.auth.hash(`${timestamp}#${message}`),
      data,
    };
  } catch (DigItGraphEvaluateAccountsReadError) {
    return handler.error<LibraryMessagesGraphAccountsRead>(message);
  }
};
