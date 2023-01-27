import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphEvaluateDigsConfirmOpen } from "./dig-it-graph-digs-confirm-open-evaluate";
import { DigItGraphFiguresDigsConfirmOpen } from "./dig-it-graph-digs-confirm-open-figure";
import { DigItGraphResolveDigsConfirmOpen } from "./dig-it-graph-digs-confirm-open-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraphDigsConfirmOpen {
  @Mutation(() => DigItGraphResolveDigsConfirmOpen)
  async DigItGraphDigsConfirmOpen(
    @Arg(`figure`, () => DigItGraphFiguresDigsConfirmOpen)
    figure: DigItGraphFiguresDigsConfirmOpen,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolveDigsConfirmOpen> {
    try {
      const response = await DigItGraphEvaluateDigsConfirmOpen(ctx, figure);
      return response;
    } catch (DigItGraphDigsConfirmOpenError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
