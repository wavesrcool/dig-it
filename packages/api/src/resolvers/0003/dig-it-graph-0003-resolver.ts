import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../http/apollo/types";
import { DigItGraphEvaluate0003 } from "./dig-it-graph-0003-evaluate";
import { DigItGraphFigures0003 } from "./dig-it-graph-0003-figure";
import { DigItGraphResolve0003 } from "./dig-it-graph-0003-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraph0003 {
  @Mutation(() => DigItGraphResolve0003)
  async DigItGraph0003(
    @Arg(`figure`, () => DigItGraphFigures0003)
    figure: DigItGraphFigures0003,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolve0003> {
    try {
      const response = await DigItGraphEvaluate0003(ctx, figure);
      return response;
    } catch (DigItGraph0003Error) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
