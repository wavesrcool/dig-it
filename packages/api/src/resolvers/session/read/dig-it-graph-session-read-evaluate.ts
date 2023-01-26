import { LibraryMessagesGraphSessionRead } from "@dig-it/library/lib/messages/graph/session/read";
import { Dig } from "@dig-it/models/lib/dig/Dig";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphDataSessionRead } from "./dig-it-graph-session-read-data";
import { DigItGraphFiguresSessionRead } from "./dig-it-graph-session-read-figure";
import { DigItGraphResolveSessionRead } from "./dig-it-graph-session-read-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluateSessionRead = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFiguresSessionRead
): Promise<DigItGraphResolveSessionRead> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraphSessionRead = `error`;

  try {
    //
    //
    // evaluate SessionRead
    //

    const SESSION_KEY = ctx.req.session.key;
    if (typeof SESSION_KEY !== "string") {
      message = `session-key`;
      return handler.error<LibraryMessagesGraphSessionRead>(message);
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
      return handler.error<LibraryMessagesGraphSessionRead>(message);
    }

    //
    //
    // data SessionRead
    //
    const data: DigItGraphDataSessionRead = {
      notes: [`SessionRead`, figure.locale],
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
  } catch (DigItGraphEvaluateSessionReadError) {
    return handler.error<LibraryMessagesGraphSessionRead>(message);
  }
};
