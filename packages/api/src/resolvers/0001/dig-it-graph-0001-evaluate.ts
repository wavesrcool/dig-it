import { LibraryGeohashEncode } from "@dig-it/library/lib/geohash/LibraryGeohashEncode";
import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { LibraryMessagesGraph0001 } from "@dig-it/library/lib/messages/graph/0001";
import { LibraryPictureCreate } from "@dig-it/library/lib/picture/LibraryPictureCreate";
import { Dig } from "@dig-it/models/lib/dig/Dig";
import { Email } from "@dig-it/models/lib/email/Email";
import { Geo } from "@dig-it/models/lib/geo/Geo";
import { Place } from "@dig-it/models/lib/place/Place";
import { gen } from "n-digit-token";
import { classesapi } from "../../classes";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphData0001 } from "./dig-it-graph-0001-data";
import { DigItGraphFigures0001 } from "./dig-it-graph-0001-figure";
import { DigItGraphResolve0001 } from "./dig-it-graph-0001-resolve";

const { handler, emails } = classesapi;

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluate0001 = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFigures0001
): Promise<DigItGraphResolve0001> => {
  let message: LibraryMessagesGraph0001 = `error`;

  let PK_DIG: number | undefined;
  let PK_EMAIL: number | undefined;
  let PK_GEO: number | undefined;
  let PK_PLACE: number | undefined;

  try {
    //
    //
    // evaluate 0001
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
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!value) {
      message = "value";
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!money) {
      message = "money";
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!neighborhood) {
      message = "neighborhood";
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!line) {
      message = "line";
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!city) {
      message = "city";
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!region) {
      message = "region";
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!country) {
      message = "country";
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!lat || Number.isNaN(lat)) {
      message = "lat";
      return handler.error<LibraryMessagesGraph0001>(message);
    }
    if (!lng || Number.isNaN(lng)) {
      message = "lng";
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    const datenow = new Date().toISOString();
    const picture = LibraryPictureCreate();
    const gh9 = LibraryGeohashEncode(Number(lat), Number(lng), 9);
    const PASSCODE = gen(6);

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
        passcode: LibraryHashStrings(PASSCODE),
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
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!PK_GEO) {
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!PK_PLACE) {
      return handler.error<LibraryMessagesGraph0001>(message);
    }

    if (!PK_EMAIL) {
      return handler.error<LibraryMessagesGraph0001>(message);
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

    const sendemail = await emails.send(email, PASSCODE);

    if (typeof sendemail === "string") {
      throw new Error("send email!");
    }

    //
    //
    // data 0001
    //
    const data: DigItGraphData0001 = {
      notes: [`0001`],
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
  } catch (DigItGraphEvaluate0001Error) {
    const catcherr = handler.catch(DigItGraphEvaluate0001Error);

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

    return handler.error<LibraryMessagesGraph0001>(message);
  }
};
