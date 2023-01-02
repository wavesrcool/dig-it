import { TypesGraphHttpApollo } from "../../http/apollo/TypesGraphHttpApollo";
import { DigItGraphData0000 } from "./dig-it-graph-0000-data";
import { DigItGraphFigures0000 } from "./dig-it-graph-0000-figure";
import { DigItGraphResolve0000 } from "./dig-it-graph-0000-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph evaluate
 * @notes [ ]
 *
 */
export const DigItGraphEvaluate0000 = async (
  ctx: TypesGraphHttpApollo,
  figure: DigItGraphFigures0000
): Promise<DigItGraphResolve0000> => {
  let message: "complete" | "error" = `complete`; // @ todo message type in library

  try {
    //
    //
    // evaluate 0000
    //

    console.log(!!ctx, figure);

    //
    //
    // data 0000
    //
    const data: DigItGraphData0000 = {
      notes: [`0000`],
    };

    const timestamp = Date.now();

    return {
      pass: true,
      message,
      timestamp,
      hash: `${message}`, // @todo add hash
      data,
    };
  } catch (DigItGraphEvaluate0000Error) {
    message = "error";

    const timestamp = Date.now();

    return {
      pass: false,
      message,
      timestamp,
      hash: `${message}`, // @todo hash
    };
  }
};
