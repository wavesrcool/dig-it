import { LibraryGeohashEncode } from "@dig-it/library/lib/geohash/LibraryGeohashEncode";
import { LibraryMessagesGraphDigsCreateOpen } from "@dig-it/library/lib/messages/graph/digs/create-open";
import { LibraryPictureCreate } from "@dig-it/library/lib/picture/LibraryPictureCreate";
import { Dig } from "@dig-it/models/lib/dig/Dig";
import { Email } from "@dig-it/models/lib/email/Email";
import { Geo } from "@dig-it/models/lib/geo/Geo";
import { Place } from "@dig-it/models/lib/place/Place";
import { TypesClassesEmailTemplatesSend } from "../../../classes/email/_templates/send/types";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphDataDigsCreateOpen } from "./dig-it-graph-digs-create-open-data";
import { DigItGraphFiguresDigsCreateOpen } from "./dig-it-graph-digs-create-open-figure";
import { DigItGraphResolveDigsCreateOpen } from "./dig-it-graph-digs-create-open-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluateDigsCreateOpen = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFiguresDigsCreateOpen
): Promise<DigItGraphResolveDigsCreateOpen> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraphDigsCreateOpen = `error`;

  let PK_DIG: number | undefined;
  let PK_EMAIL: number | undefined;
  let PK_GEO: number | undefined;
  let PK_PLACE: number | undefined;

  try {
    //
    //
    // evaluate DigsCreateOpen
    //

    const {
      dig: {
        email,
        description,
        value,
        money,
        neighborhood,
        line,
        city,
        region,
        country,
        lat,
        lng,
      },
    } = figure;

    if (!email) {
      message = "email";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!value) {
      message = "value";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!money) {
      message = "money";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!neighborhood) {
      message = "neighborhood";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!line) {
      message = "line";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!city) {
      message = "city";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!region) {
      message = "region";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!country) {
      message = "country";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!lat || Number.isNaN(lat)) {
      message = "lat";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }
    if (!lng || Number.isNaN(lng)) {
      message = "lng";
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    const datenow = new Date().toISOString();
    const picture = LibraryPictureCreate();
    const gh9 = LibraryGeohashEncode(Number(lat), Number(lng), 9);
    const PASS_CODE = ctx.classes.auth.passcode();

    const respdig = await ctx.connection
      .createQueryBuilder()
      .insert()
      .into(Dig)
      .values({
        picture,
        pictureDate: datenow,
        description,
        neighborhood,
        value,
        money,
      })
      .execute();

    const newdig = respdig.raw[0];
    if (newdig && !Number.isNaN(newdig.id)) {
      PK_DIG = Number(newdig.id);
    }

    const respemail = await ctx.connection
      .createQueryBuilder()
      .insert()
      .into(Email)
      .values({
        address: email,
        passcode: ctx.classes.auth.hash(PASS_CODE),
      })
      .execute();

    const newemail = respemail.raw[0];
    if (newemail && !Number.isNaN(newemail.id)) {
      PK_EMAIL = Number(newemail.id);
    }

    const respgeo = await ctx.connection
      .createQueryBuilder()
      .insert()
      .into(Geo)
      .values({
        gh2: gh9.slice(0, 2),
        gh9,
        lat: Number(lat).toFixed(4).toString(),
        lng: Number(lng).toFixed(4).toString(),
      })
      .execute();

    const newgeo = respgeo.raw[0];
    if (newgeo && !Number.isNaN(newgeo.id)) {
      PK_GEO = Number(newdig.id);
    }

    const respplace = await ctx.connection
      .createQueryBuilder()
      .insert()
      .into(Place)
      .values({
        line,
        city,
        region,
        country,
      })
      .execute();

    const newplace = respplace.raw[0];
    if (newplace && !Number.isNaN(newplace.id)) {
      PK_PLACE = Number(newdig.id);
    }

    if (!PK_DIG) {
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!PK_GEO) {
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!PK_PLACE) {
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    if (!PK_EMAIL) {
      return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
    }

    await ctx.connection
      .createQueryBuilder()
      .relation(Dig, "email")
      .of(PK_DIG)
      .set(PK_EMAIL);

    await ctx.connection
      .createQueryBuilder()
      .relation(Dig, "place")
      .of(PK_DIG)
      .set(PK_PLACE);

    await ctx.connection
      .createQueryBuilder()
      .relation(Place, "dig")
      .of(PK_PLACE)
      .set(PK_DIG);

    await ctx.connection
      .createQueryBuilder()
      .relation(Place, "geo")
      .of(PK_PLACE)
      .set(PK_GEO);

    const f: TypesClassesEmailTemplatesSend = {
      subject: `${PASS_CODE} Email confirmation pass code`,
      content: {
        heading: `Have fun gardening`,
        line: `Here's the code to confirm your email`,
      },
    };
    const sendemail = await ctx.classes.emails.send(email, PASS_CODE, f);

    if (typeof sendemail === "string") {
      throw new Error("send email!");
    }

    //
    //
    // data DigsCreateOpen
    //
    const data: DigItGraphDataDigsCreateOpen = {
      notes: [`DigsCreateOpen`],
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
  } catch (DigItGraphEvaluateDigsCreateOpenError) {
    const catcherr = handler.catch(DigItGraphEvaluateDigsCreateOpenError);

    if (catcherr === "23505") {
      message = `email-exists`;
    }

    if (PK_DIG) {
      await ctx.connection
        .createQueryBuilder(Dig, "dig")
        .delete()
        .from(Dig)
        .where("id = :id", { id: PK_DIG })
        .execute();
    }

    if (PK_EMAIL) {
      await ctx.connection
        .createQueryBuilder(Email, "email")
        .delete()
        .from(Email)
        .where("id = :id", { id: PK_EMAIL })
        .execute();
    }

    if (PK_GEO) {
      await ctx.connection
        .createQueryBuilder(Geo, "geo")
        .delete()
        .from(Geo)
        .where("id = :id", { id: PK_GEO })
        .execute();
    }

    if (PK_PLACE) {
      await ctx.connection
        .createQueryBuilder(Place, "place")
        .delete()
        .from(Place)
        .where("id = :id", { id: PK_PLACE })
        .execute();
    }

    return handler.error<LibraryMessagesGraphDigsCreateOpen>(message);
  }
};
