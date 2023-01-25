import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { LibraryMessagesGraph0002 } from "@dig-it/library/lib/messages/graph/0002";
import { Dig } from "@dig-it/models/lib/dig/Dig";
import { Email } from "@dig-it/models/lib/email/Email";
import { classesapi } from "../../classes";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphData0002 } from "./dig-it-graph-0002-data";
import { DigItGraphFigures0002 } from "./dig-it-graph-0002-figure";
import { DigItGraphResolve0002 } from "./dig-it-graph-0002-resolve";

const { handler } = classesapi;

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
  let message: LibraryMessagesGraph0002 = `error`;

  try {
    //
    //
    // evaluate 0002
    //

    const { email, passcode: passcode0 } = figure;

    const PASSCODE_1 = LibraryHashStrings(passcode0);

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

    const { dig } = reademail;

    const { passcode: PASSCODE_0 } = reademail;

    if (!(PASSCODE_1 === PASSCODE_0)) {
      message = "passcode";
      return handler.error<LibraryMessagesGraph0002>(message);
    }

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
