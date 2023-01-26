import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphEvaluateLogInOpen } from "./dig-it-graph-log-in-open-evaluate";
import { DigItGraphFiguresLogInOpen } from "./dig-it-graph-log-in-open-figure";
import { DigItGraphResolveLogInOpen } from "./dig-it-graph-log-in-open-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraphLogInOpen {
  @Mutation(() => DigItGraphResolveLogInOpen)
  async DigItGraphLogInOpen(
    @Arg(`figure`, () => DigItGraphFiguresLogInOpen)
    figure: DigItGraphFiguresLogInOpen,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolveLogInOpen> {
    try {
      const response = await DigItGraphEvaluateLogInOpen(ctx, figure);
      return response;
    } catch (DigItGraphLogInOpenError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
