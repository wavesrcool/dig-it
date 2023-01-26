import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { LibraryMessagesGraph0003 } from "@dig-it/library/lib/messages/graph/0003";
import { Email } from "@dig-it/models/lib/email/Email";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphData0003 } from "./dig-it-graph-0003-data";
import { DigItGraphFigures0003 } from "./dig-it-graph-0003-figure";
import { DigItGraphResolve0003 } from "./dig-it-graph-0003-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluate0003 = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFigures0003
): Promise<DigItGraphResolve0003> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraph0003 = `error`;

  try {
    //
    //
    // evaluate 0003
    //

    const SESSION_KEY = ctx.req.session.key;
    console.log(SESSION_KEY, `token`);
    if (typeof SESSION_KEY !== "string") {
      message = "session-key";
      return handler.error<LibraryMessagesGraph0003>(message);
    }

    const key = ctx.classes.encryption.decode(SESSION_KEY);

    const reademail = await ctx.connection
      .createQueryBuilder(Email, "email")
      .leftJoinAndSelect("email.dig", "dig")
      .leftJoinAndSelect("dig.place", "place")
      .leftJoinAndSelect("place.geo", "geo")
      .where("email.key = :key", { key })
      .getOne();

    console.log(JSON.stringify(reademail, null, 4), `reademail`);

    if (!reademail || !reademail.dig) {
      message = "read-key";
      return handler.error<LibraryMessagesGraph0003>(message);
    }

    //
    //
    // data 0003
    //
    const data: DigItGraphData0003 = {
      notes: [`0003`, figure.locale],
      email: reademail.address,
    };

    const timestamp = Date.now();
    message = `complete`;
    return {
      pass: true,
      message,
      timestamp,
      hash: LibraryHashStrings(`${timestamp}#${message}`),
      data,
    };
  } catch (DigItGraphEvaluate0003Error) {
    return handler.error<LibraryMessagesGraph0003>(message);
  }
};
