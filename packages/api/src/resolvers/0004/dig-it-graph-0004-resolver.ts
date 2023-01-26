import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphEvaluate0004 } from "./dig-it-graph-0004-evaluate";
import { DigItGraphFigures0004 } from "./dig-it-graph-0004-figure";
import { DigItGraphResolve0004 } from "./dig-it-graph-0004-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraph0004 {
  @Mutation(() => DigItGraphResolve0004)
  async DigItGraph0004(
    @Arg(`figure`, () => DigItGraphFigures0004)
    figure: DigItGraphFigures0004,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolve0004> {
    try {
      const response = await DigItGraphEvaluate0004(ctx, figure);
      return response;
    } catch (DigItGraph0004Error) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
