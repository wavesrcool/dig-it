import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphEvaluate0001 } from "./dig-it-graph-0001-evaluate";
import { DigItGraphFigures0001 } from "./dig-it-graph-0001-figure";
import { DigItGraphResolve0001 } from "./dig-it-graph-0001-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraph0001 {
  @Mutation(() => DigItGraphResolve0001)
  async DigItGraph0001(
    @Arg(`figure`, () => DigItGraphFigures0001)
    figure: DigItGraphFigures0001,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolve0001> {
    try {
      const response = await DigItGraphEvaluate0001(ctx, figure);
      return response;
    } catch (DigItGraph0001Error) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
