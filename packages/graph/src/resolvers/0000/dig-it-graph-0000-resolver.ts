import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesGraphHttpApollo } from "../../http/apollo/TypesGraphHttpApollo";
import { DigItGraphEvaluate0000 } from "./dig-it-graph-0000-evaluate";
import { DigItGraphFigures0000 } from "./dig-it-graph-0000-figure";
import { DigItGraphResolve0000 } from "./dig-it-graph-0000-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraph0000 {
  @Query(() => DigItGraphResolve0000)
  async DigItGraph0000(
    @Arg(`figure`, () => DigItGraphFigures0000)
    figure: DigItGraphFigures0000,
    @Ctx() ctx: TypesGraphHttpApollo
  ): Promise<DigItGraphResolve0000> {
    try {
      const response = await DigItGraphEvaluate0000(ctx, figure);
      return response;
    } catch (DigItGraph0000Error) {
      const message = "error";
      const timestamp = Date.now();
      return {
        pass: false,
        message,
        timestamp,
        hash: `${message}`, // @todo hash
      };
    }
  }
}
