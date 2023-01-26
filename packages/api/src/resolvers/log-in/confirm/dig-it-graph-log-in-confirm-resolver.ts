import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphEvaluateLogInConfirm } from "./dig-it-graph-log-in-confirm-evaluate";
import { DigItGraphFiguresLogInConfirm } from "./dig-it-graph-log-in-confirm-figure";
import { DigItGraphResolveLogInConfirm } from "./dig-it-graph-log-in-confirm-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraphLogInConfirm {
  @Mutation(() => DigItGraphResolveLogInConfirm)
  async DigItGraphLogInConfirm(
    @Arg(`figure`, () => DigItGraphFiguresLogInConfirm)
    figure: DigItGraphFiguresLogInConfirm,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolveLogInConfirm> {
    try {
      const response = await DigItGraphEvaluateLogInConfirm(ctx, figure);
      return response;
    } catch (DigItGraphLogInConfirmError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
