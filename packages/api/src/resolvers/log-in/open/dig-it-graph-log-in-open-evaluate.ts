import { LibraryMessagesGraphLogInOpen } from "@dig-it/library/lib/messages/graph/log-in/open";
import { LibraryRegExpEmail } from "@dig-it/library/lib/regexp/email/LibraryRegExpEmail";
import { Email } from "@dig-it/models/lib/email/Email";
import { TypesClassesEmailTemplatesSend } from "../../../classes/email/_templates/send/types";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphDataLogInOpen } from "./dig-it-graph-log-in-open-data";
import { DigItGraphFiguresLogInOpen } from "./dig-it-graph-log-in-open-figure";
import { DigItGraphResolveLogInOpen } from "./dig-it-graph-log-in-open-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluateLogInOpen = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFiguresLogInOpen
): Promise<DigItGraphResolveLogInOpen> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraphLogInOpen = `error`;

  try {
    //
    //
    // evaluate LogInOpen
    //

    const { email } = figure;

    if (!LibraryRegExpEmail.test(email)) {
      message = "email-re";
      return handler.error<LibraryMessagesGraphLogInOpen>(message);
    }

    const PASS_CODE = ctx.classes.auth.passcode();

    const reademail = await ctx.connection
      .createQueryBuilder()
      .update(Email)
      .set({ passcode: ctx.classes.auth.hash(PASS_CODE) })
      .where("email.address = :address", { address: email })
      .execute();

    console.log(JSON.stringify(reademail, null, 4), `reademail`);

    if (reademail.affected === 0) {
      message = `email-key`;
      return handler.error<LibraryMessagesGraphLogInOpen>(message);
    }

    const f: TypesClassesEmailTemplatesSend = {
      subject: `${PASS_CODE} Log In Pass Code`,
      content: {
        heading: `Have fun gardening`,
        line: `Here's the code to log in.`,
      },
    };
    const sendemail = await ctx.classes.emails.send(email, PASS_CODE, f);

    if (typeof sendemail === "string") {
      throw new Error("send email!");
    }

    //
    //
    // data LogInOpen
    //
    const data: DigItGraphDataLogInOpen = {
      notes: [`LogInOpen`],
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
  } catch (DigItGraphEvaluateLogInOpenError) {
    return handler.error<LibraryMessagesGraphLogInOpen>(message);
  }
};
