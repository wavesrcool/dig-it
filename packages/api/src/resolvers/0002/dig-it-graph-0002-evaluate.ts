import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { LibraryMessagesGraph0002 } from "@dig-it/library/lib/messages/graph/0002";
import { Dig } from "@dig-it/models/lib/dig/Dig";
import { Email } from "@dig-it/models/lib/email/Email";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphData0002 } from "./dig-it-graph-0002-data";
import { DigItGraphFigures0002 } from "./dig-it-graph-0002-figure";
import { DigItGraphResolve0002 } from "./dig-it-graph-0002-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluate0002 = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFigures0002
): Promise<DigItGraphResolve0002> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraph0002 = `error`;

  try {
    //
    //
    // evaluate 0002
    //

    const { email, passcode: passcode0 } = figure;

    const PASS_CODE_1 = ctx.classes.auth.hash(passcode0);

    const reademail = await ctx.connection
      .createQueryBuilder(Email, "email")
      .leftJoinAndSelect("email.dig", "dig")
      .where("email.address = :email", { email })
      .getOne();

    console.log(JSON.stringify(reademail, null, 4), `reademail`);

    if (!reademail || !reademail.dig) {
      message = "email";
      return handler.error<LibraryMessagesGraph0002>(message);
    }

    if (!(PASS_CODE_1 === reademail.passcode)) {
      message = "passcode";
      return handler.error<LibraryMessagesGraph0002>(message);
    }

    const { dig } = reademail;

    await ctx.connection
      .createQueryBuilder()
      .update(Email)
      .set({ passcode: "#" })
      .where("email.address = :email", { email })
      .execute();

    await ctx.connection
      .createQueryBuilder()
      .update(Dig)
      .set({ active: true })
      .where("dig.key = :key", { key: dig.key })
      .execute();

    const encryptedkey = ctx.classes.encryption.encode(reademail.key);

    // eslint-disable-next-line no-param-reassign
    ctx.req.session.key = encryptedkey;

    //
    //
    // data 0002
    //
    const data: DigItGraphData0002 = {
      notes: [`0002`],
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
  } catch (DigItGraphEvaluate0002Error) {
    return handler.error<LibraryMessagesGraph0002>(message);
  }
};
