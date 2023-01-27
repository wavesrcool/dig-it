import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphEvaluateDigsCreateOpen } from "./dig-it-graph-digs-create-open-evaluate";
import { DigItGraphFiguresDigsCreateOpen } from "./dig-it-graph-digs-create-open-figure";
import { DigItGraphResolveDigsCreateOpen } from "./dig-it-graph-digs-create-open-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection api resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraphDigsCreateOpen {
  @Mutation(() => DigItGraphResolveDigsCreateOpen)
  async DigItGraphDigsCreateOpen(
    @Arg(`figure`, () => DigItGraphFiguresDigsCreateOpen)
    figure: DigItGraphFiguresDigsCreateOpen,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolveDigsCreateOpen> {
    try {
      const response = await DigItGraphEvaluateDigsCreateOpen(ctx, figure);
      return response;
    } catch (DigItGraphDigsCreateOpenError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
