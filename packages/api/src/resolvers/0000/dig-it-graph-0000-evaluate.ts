import { LibraryHashStrings } from "@dig-it/library/lib/hash/strings/LibraryHashStrings";
import { LibraryMessagesGraph0000 } from "@dig-it/library/lib/messages/graph/0000";
import { Dig } from "@dig-it/models/lib/dig/Dig";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphData0000 } from "./dig-it-graph-0000-data";
import { DigItGraphFigures0000 } from "./dig-it-graph-0000-figure";
import { DigItGraphResolve0000 } from "./dig-it-graph-0000-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluate0000 = async (
  ctx: TypesApiHttpApollo,
  figure: DigItGraphFigures0000
): Promise<DigItGraphResolve0000> => {
  const {
    classes: { handler },
  } = ctx;
  let message: LibraryMessagesGraph0000 = `error`;
  let list: Dig[] = [];
  try {
    //
    //
    // evaluate 0000
    //

    const { locale } = figure;

    const result = await ctx.connection
      .createQueryBuilder(Dig, "dig")
      .leftJoinAndSelect("dig.email", "email")
      .leftJoinAndSelect("dig.place", "place")
      .leftJoinAndSelect("place.geo", "geo")
      .where(`dig.active = :active`, { active: true })
      // .where(`geo.gh2 = :gh2`, { gh2 })
      .getMany();

    console.log(JSON.stringify(result, null, 4), `result`);

    if (result && result.length) {
      list = result;
    }

    //
    //
    // data 0000
    //
    const data: DigItGraphData0000 = {
      notes: [`0000`, locale],
      results: list.length ? list : null,
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
  } catch (DigItGraphEvaluate0000Error) {
    return handler.error<LibraryMessagesGraph0000>(message);
  }
};
