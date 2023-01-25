import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphEvaluate0002 } from "./dig-it-graph-0002-evaluate";
import { DigItGraphFigures0002 } from "./dig-it-graph-0002-figure";
import { DigItGraphResolve0002 } from "./dig-it-graph-0002-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraph0002 {
  @Mutation(() => DigItGraphResolve0002)
  async DigItGraph0002(
    @Arg(`figure`, () => DigItGraphFigures0002)
    figure: DigItGraphFigures0002,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolve0002> {
    try {
      const response = await DigItGraphEvaluate0002(ctx, figure);
      return response;
    } catch (DigItGraph0002Error) {
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
