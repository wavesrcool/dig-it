import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { LibraryMessagesGraphDigsConfirmOpen } from "@dig-it/library/lib/messages/graph/digs/confirm-open";
import { Dig } from "@dig-it/models/lib/dig/Dig";
import { Email } from "@dig-it/models/lib/email/Email";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphDataDigsConfirmOpen } from "./dig-it-graph-digs-confirm-open-data";
import { DigItGraphFiguresDigsConfirmOpen } from "./dig-it-graph-digs-confirm-open-figure";
import { DigItGraphResolveDigsConfirmOpen } from "./dig-it-graph-digs-confirm-open-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluateDigsConfirmOpen = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFiguresDigsConfirmOpen
): Promise<DigItGraphResolveDigsConfirmOpen> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraphDigsConfirmOpen = `error`;

  try {
    //
    //
    // evaluate DigsConfirmOpen
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
      return handler.error<LibraryMessagesGraphDigsConfirmOpen>(message);
    }

    if (!(PASS_CODE_1 === reademail.passcode)) {
      message = "passcode";
      return handler.error<LibraryMessagesGraphDigsConfirmOpen>(message);
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
    // data DigsConfirmOpen
    //
    const data: DigItGraphDataDigsConfirmOpen = {
      notes: [`DigsConfirmOpen`],
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
  } catch (DigItGraphEvaluateDigsConfirmOpenError) {
    return handler.error<LibraryMessagesGraphDigsConfirmOpen>(message);
  }
};
