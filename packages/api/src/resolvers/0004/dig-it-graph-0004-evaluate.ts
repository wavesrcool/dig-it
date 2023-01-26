import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { LibraryMessagesGraph0004 } from "@dig-it/library/lib/messages/graph/0004";
import { LibraryRegExpEmail } from "@dig-it/library/lib/regexp/email/LibraryRegExpEmail";
import { Email } from "@dig-it/models/lib/email/Email";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphData0004 } from "./dig-it-graph-0004-data";
import { DigItGraphFigures0004 } from "./dig-it-graph-0004-figure";
import { DigItGraphResolve0004 } from "./dig-it-graph-0004-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluate0004 = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFigures0004
): Promise<DigItGraphResolve0004> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraph0004 = `error`;

  try {
    //
    //
    // evaluate 0004
    //

    const { email } = figure;

    if (!LibraryRegExpEmail.test(email)) {
      message = "email-re";
      return handler.error<LibraryMessagesGraph0004>(message);
    }

    const reademail = await ctx.connection
      .createQueryBuilder(Email, "email")
      .leftJoinAndSelect("email.dig", "dig")
      .leftJoinAndSelect("dig.place", "place")
      .leftJoinAndSelect("place.geo", "geo")
      .where("email.address = :address", { address: email })
      .getOne();

    console.log(JSON.stringify(reademail, null, 4), `reademail`);

    if (!reademail || !reademail.key) {
      message = "email-key";
      return handler.error<LibraryMessagesGraph0004>(message);
    }

    const encryptedkey = ctx.classes.encryption.encode(reademail.key);
    const tokensign = await ctx.classes.jwt.sign(encryptedkey);

    if (typeof tokensign === "string") {
      throw new Error("token");
    }

    const { jwt } = tokensign;

    //
    //
    // data 0004
    //
    const data: DigItGraphData0004 = {
      notes: [`0004`],
      token: jwt,
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
  } catch (DigItGraphEvaluate0004Error) {
    return handler.error<LibraryMessagesGraph0004>(message);
  }
};
