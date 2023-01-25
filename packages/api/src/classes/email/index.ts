import { LibraryRegExpEmail } from "@dig-it/library/lib/regexp/email/LibraryRegExpEmail";
import formData from "form-data";
import Mailgun from "mailgun.js";
import Client from "mailgun.js/client";
import { MailgunMessageData } from "mailgun.js/interfaces/Messages";
import { envapi } from "../../_env";
import { htmlconfirmemail } from "./_templates/confirm-email";

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
    passcode: string
  ): Promise<TypesClassesApiEmailSendMessage | undefined> {
    if (!LibraryRegExpEmail.test(to)) {
      return `email-re`;
    }

    const content1 = `Here's the code to confirm your email`;
    const content2 = `This email was sent by www.dig-it.earth to ${to}.`;
    const content3 = `If you have any questions respond to this email to let us know`;

    const message: MailgunMessageData = {
      to: `wavesrcool@icloud.com`, // @todo dev rm
      from: `Dig it! <no-reply@dig-it.earth>`,
      text: `Hello! ${content1}, ${passcode}. ${content2}. ${content3}.`,
      html: htmlconfirmemail(passcode, to),
      subject: `Dig it! | ${passcode} Email confirmation pass code`,
      "h:Reply-To": `Dig it! <hello@dig-it.earth>`,
    };

    const result = await this.mailc.messages.create(`dig-it.earth`, message);

    console.log(JSON.stringify(result, null, 4), `result`);

    return undefined;
  }
}
