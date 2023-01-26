import { LibraryMessagesGraphLogInConfirm } from "@dig-it/library/lib/messages/graph/log-in/confirm";
import { LibraryRegExpEmail } from "@dig-it/library/lib/regexp/email/LibraryRegExpEmail";
import { LibraryRegExpPassCode6 } from "@dig-it/library/lib/regexp/passcode-six/LibraryRegExpPassCode6";
import { Email } from "@dig-it/models/lib/email/Email";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphDataLogInConfirm } from "./dig-it-graph-log-in-confirm-data";
import { DigItGraphFiguresLogInConfirm } from "./dig-it-graph-log-in-confirm-figure";
import { DigItGraphResolveLogInConfirm } from "./dig-it-graph-log-in-confirm-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluateLogInConfirm = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFiguresLogInConfirm
): Promise<DigItGraphResolveLogInConfirm> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraphLogInConfirm = `error`;

  try {
    //
    //
    // evaluate LogInConfirm
    //

    const { email, passcode: PASS_CODE_1 } = figure;

    if (!LibraryRegExpEmail.test(email)) {
      message = "email-re";
      return handler.error<LibraryMessagesGraphLogInConfirm>(message);
    }

    if (!LibraryRegExpPassCode6.test(PASS_CODE_1)) {
      message = "passcode-re";
      return handler.error<LibraryMessagesGraphLogInConfirm>(message);
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
      return handler.error<LibraryMessagesGraphLogInConfirm>(message);
    }

    if (!(reademail.passcode === PASS_CODE_1)) {
      message = "passcode";
      return handler.error<LibraryMessagesGraphLogInConfirm>(message);
    }

    const encryptedkey = ctx.classes.encryption.encode(reademail.key);
    const tokensign = await ctx.classes.jwt.sign(encryptedkey);

    if (typeof tokensign === "string") {
      throw new Error("token");
    }

    const { jwt } = tokensign;

    //
    //
    // data LogInConfirm
    //
    const data: DigItGraphDataLogInConfirm = {
      notes: [`LogInConfirm`],
      token: jwt,
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
  } catch (DigItGraphEvaluateLogInConfirmError) {
    return handler.error<LibraryMessagesGraphLogInConfirm>(message);
  }
};
