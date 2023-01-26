import { LibraryRegExpEmail } from "@dig-it/library/lib/regexp/email/LibraryRegExpEmail";
import formData from "form-data";
import Mailgun from "mailgun.js";
import Client from "mailgun.js/client";
import { MailgunMessageData } from "mailgun.js/interfaces/Messages";
import { envapi } from "../../_env";
import { ClassesEmailTemplatesSend } from "./_templates/send";
import { TypesClassesEmailTemplatesSend } from "./_templates/send/types";

const { GRAPH_MAIL_KEY } = envapi;

export type TypesClassesApiEmailSendMessage = "email-re";

export class ClassesApiEmail {
  private mailc: Client;

  constructor(eu?: boolean) {
    const mg = new Mailgun(formData);
    const client = mg.client({
      username: "api",
      key: GRAPH_MAIL_KEY,
      url: `https://api${eu ? `.eu` : ``}.mailgun.net`,
    });

    this.mailc = client;
  }

  public async send(
    to: string,
    passcode: string,
    figure: TypesClassesEmailTemplatesSend
  ): Promise<TypesClassesApiEmailSendMessage | undefined> {
    if (!LibraryRegExpEmail.test(to)) {
      return `email-re`;
    }

    const greeting = `Hello!`;
    const footer1 = `This email was sent by www.dig-it.earth to ${to}.`;
    const footer2 = `If you have any questions respond to this email to let us know`;

    const message: MailgunMessageData = {
      to: `tyson@lupul.dev`, // @todo dev rm
      from: `Dig it! <no-reply@dig-it.earth>`,
      text: `${greeting} ${figure.content.line}. ${footer1}. ${footer2}.`,
      html: ClassesEmailTemplatesSend(to, passcode, figure),
      subject: `Dig it! | ${figure.subject}`,
      "h:Reply-To": `Dig it! <hello@dig-it.earth>`,
    };

    const sendmail = await this.mailc.messages.create(`dig-it.earth`, message);
    console.log(JSON.stringify(sendmail, null, 4), `sendmail`);

    return undefined;
  }
}
