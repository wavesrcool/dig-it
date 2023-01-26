import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { TypesApiHttpApollo } from "../../../http/apollo/types";
import { DigItGraphEvaluateSessionRead } from "./dig-it-graph-session-read-evaluate";
import { DigItGraphFiguresSessionRead } from "./dig-it-graph-session-read-figure";
import { DigItGraphResolveSessionRead } from "./dig-it-graph-session-read-resolve";

/**
 * * Dig It Documentation
 *
 * @created 01 02 2023
 * @collection graph resolver
 * @notes [ ]
 *
 */
@Resolver()
export class DigItGraphSessionRead {
  @Query(() => DigItGraphResolveSessionRead)
  async DigItGraphSessionRead(
    @Arg(`figure`, () => DigItGraphFiguresSessionRead)
    figure: DigItGraphFiguresSessionRead,
    @Ctx() ctx: TypesApiHttpApollo
  ): Promise<DigItGraphResolveSessionRead> {
    try {
      const response = await DigItGraphEvaluateSessionRead(ctx, figure);
      return response;
    } catch (DigItGraphSessionReadError) {
      return ctx.classes.handler.error(`error`);
    }
  }
}
